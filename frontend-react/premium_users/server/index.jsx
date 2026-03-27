require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Stripe
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Initialize Supabase
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Create Payment Intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'inr', metadata = {} } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to smallest currency unit (paise for INR)
      currency,
      metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // Send publishable key and PaymentIntent details to client
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
  }
});

// Create Subscription
app.post('/api/create-subscription', async (req, res) => {
  try {
    const { userId, planId, paymentMethodId, metadata = {} } = req.body;

    // Get user email from Supabase
    const { data: user, error: userError } = await supabase
      .from('profiles')
      .select('email')
      .eq('id', userId)
      .single();

    if (userError) throw userError;
    if (!user) throw new Error('User not found');

    // Create customer in Stripe if not exists
    let customer;
    const existingCustomers = await stripe.customers.list({
      email: user.email,
      limit: 1
    });

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: user.email,
        payment_method: paymentMethodId,
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
        metadata: {
          userId,
          ...metadata
        }
      });
    }

    // Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: planId }],
      expand: ['latest_invoice.payment_intent'],
      metadata: {
        userId,
        ...metadata
      }
    });

    // Save subscription to database
    const { data: subscriptionData, error: subscriptionError } = await supabase
      .from('subscriptions')
      .insert([
        {
          user_id: userId,
          stripe_subscription_id: subscription.id,
          stripe_customer_id: customer.id,
          status: subscription.status,
          start_date: new Date(subscription.current_period_start * 1000).toISOString(),
          expiry_date: new Date(subscription.current_period_end * 1000).toISOString(),
          plan_id: planId,
          metadata: subscription.metadata
        }
      ])
      .select();

    if (subscriptionError) throw subscriptionError;

    res.status(200).json({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
      status: subscription.status,
      subscription: subscriptionData[0]
    });
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook handler for Stripe events
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  const paymentIntent = event.data.object;

  switch (event.type) {
    case 'payment_intent.succeeded':
      // Handle successful payment
      await handlePaymentSucceeded(paymentIntent);
      break;
    case 'payment_intent.payment_failed':
      // Handle failed payment
      await handlePaymentFailed(paymentIntent);
      break;
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      // Handle subscription updates
      await handleSubscriptionUpdate(event.data.object);
      break;
    // Add more event handlers as needed
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send();
});

// Helper function to handle successful payments
async function handlePaymentSucceeded(paymentIntent) {
  try {
    // Update payment status in database
    const { error } = await supabase
      .from('payments')
      .update({ status: 'completed' })
      .eq('payment_intent_id', paymentIntent.id);

    if (error) throw error;

    // Send confirmation email
    await sendConfirmationEmail(paymentIntent);
  } catch (error) {
    console.error('Error handling successful payment:', error);
  }
}

// Helper function to handle failed payments
async function handlePaymentFailed(paymentIntent) {
  try {
    // Update payment status in database
    const { error } = await supabase
      .from('payments')
      .update({ status: 'failed' })
      .eq('payment_intent_id', paymentIntent.id);

    if (error) throw error;

    // Send failure notification
    await sendPaymentFailedEmail(paymentIntent);
  } catch (error) {
    console.error('Error handling failed payment:', error);
  }
}

// Helper function to handle subscription updates
async function handleSubscriptionUpdate(subscription) {
  try {
    const { error } = await supabase
      .from('subscriptions')
      .update({
        status: subscription.status,
        cancel_at_period_end: subscription.cancel_at_period_end,
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        updated_at: new Date().toISOString()
      })
      .eq('stripe_subscription_id', subscription.id);

    if (error) throw error;
  } catch (error) {
    console.error('Error updating subscription:', error);
  }
}

// Helper function to send confirmation email
async function sendConfirmationEmail(paymentIntent) {
  // Implement email sending logic here
  // You can use Nodemailer, SendGrid, or any other email service
  console.log('Sending confirmation email for payment:', paymentIntent.id);
}

// Helper function to send payment failed email
async function sendPaymentFailedEmail(paymentIntent) {
  // Implement email sending logic here
  console.log('Sending payment failed email for payment:', paymentIntent.id);
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = app;
