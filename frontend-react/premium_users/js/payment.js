// Initialize Stripe
const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');
let elements;

// DOM Elements
const paymentForm = document.getElementById('payment-form');
const paymentElement = document.getElementById('payment-element');
const submitButton = document.getElementById('submit-button');
const errorElement = document.getElementById('payment-errors');

// Initialize payment form
async function initializePayment() {
    const clientSecret = await createPaymentIntent();
    
    const appearance = {
        theme: 'stripe',
        variables: {
            colorPrimary: '#4a6cf7',
            colorBackground: '#ffffff',
            colorText: '#30313d',
            colorDanger: '#df1b41',
            fontFamily: 'Inter, system-ui, sans-serif',
        }
    };

    elements = stripe.elements({ 
        clientSecret,
        appearance 
    });

    const paymentElementOptions = {
        layout: 'tabs',
        fields: {
            billingDetails: {
                name: 'auto',
                email: 'auto',
            }
        }
    };

    const paymentElement = elements.create('payment', paymentElementOptions);
    paymentElement.mount('#payment-element');
}

// Create payment intent
async function createPaymentIntent() {
    const userId = sessionStorage.getItem('premiumUserId');
    const subjectId = sessionStorage.getItem('selectedSubjectId');
    const period = document.getElementById('period').value;

    try {
        const response = await fetch('/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId,
                subjectId,
                period
            }),
        });

        const { clientSecret } = await response.json();
        return clientSecret;
    } catch (error) {
        console.error('Error creating payment intent:', error);
        showError('Failed to initialize payment. Please try again.');
    }
}

// Handle form submission
if (paymentForm) {
    paymentForm.addEventListener('submit', handleSubmit);
}

async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
            return_url: `${window.location.origin}/premium_users/dashboard.html`,
            receipt_email: sessionStorage.getItem('userEmail'),
        },
    });

    if (error) {
        showError(error.message);
        setLoading(false);
    } else {
        // Handle successful payment
        await recordPayment();
    }
}

// Record payment in database
async function recordPayment() {
    const userId = sessionStorage.getItem('premiumUserId');
    const subjectId = sessionStorage.getItem('selectedSubjectId');
    const period = document.getElementById('period').value;

    try {
        // Calculate expiry date based on selected period
        const expiryDate = new Date();
        const months = {
            'monthly': 1,
            '3months': 3,
            '6months': 6,
            'yearly': 12
        };
        
        expiryDate.setMonth(expiryDate.getMonth() + months[period]);

        // Save subscription to database
        const { data, error } = await supabase
            .from('subscriptions')
            .upsert([
                {
                    user_id: userId,
                    subject_id: subjectId,
                    start_date: new Date().toISOString(),
                    expiry_date: expiryDate.toISOString(),
                    status: 'active',
                    payment_status: 'completed'
                }
            ], { onConflict: 'user_id,subject_id' });

        if (error) throw error;

        // Redirect to dashboard on success
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error('Error recording payment:', error);
        showError('Failed to record payment. Please contact support.');
        setLoading(false);
    }
}

// Helper functions
function showError(message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 5000);
}

function setLoading(isLoading) {
    if (isLoading) {
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner">Processing...</span>';
    } else {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Pay Now';
    }
}

// Initialize payment form when page loads
if (paymentForm) {
    initializePayment();
}
