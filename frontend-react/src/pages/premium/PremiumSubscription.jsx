import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../../styles/PremiumSubscription.css';

const PremiumSubscription = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState('student');
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [paymentForm, setPaymentForm] = useState({
        cardholderName: '',
        expiryDate: '',
        cvv: '',
        terms: false
    });

    const plans = [
        {
            id: 'monthly',
            name: 'Monthly',
            price: '₹1,000',
            period: '/month',
            description: 'Perfect for short-term preparation',
            features: [
                'Access to all subjects',
                'Practice tests & quizzes',
                '24/7 doubt support',
                'Progress tracking',
                'Mobile app access'
            ]
        },
        {
            id: 'quarterly',
            name: 'Quarterly',
            price: '₹2,700',
            period: '/3 months',
            description: 'Save 10% with quarterly billing',
            popular: true,
            features: [
                'Everything in Monthly',
                'Priority support',
                'Monthly parent reports',
                'Offline access',
                'Study planner'
            ]
        },
        {
            id: 'annual',
            name: 'Annual',
            price: '₹8,000',
            period: '/year',
            description: 'Save 33% with annual billing',
            bestValue: true,
            features: [
                'Everything in Quarterly',
                '1-on-1 mentoring',
                'Career counseling',
                'Certificate of completion',
                'Exclusive webinars'
            ]
        }
    ];

    const comparisonFeatures = [
        { name: 'Access to all subjects', monthly: true, quarterly: true, annual: true },
        { name: 'Practice tests & quizzes', monthly: true, quarterly: true, annual: true },
        { name: '24/7 doubt support', monthly: true, quarterly: true, annual: true },
        { name: 'Mobile app access', monthly: true, quarterly: true, annual: true },
        { name: 'Priority support', monthly: false, quarterly: true, annual: true },
        { name: 'Monthly parent reports', monthly: false, quarterly: true, annual: true },
        { name: '1-on-1 mentoring', monthly: false, quarterly: false, annual: true },
        { name: 'Career counseling', monthly: false, quarterly: false, annual: true }
    ];

    const faqs = [
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit and debit cards including Visa, MasterCard, American Express, and RuPay. We also support net banking, UPI, and popular digital wallets.'
        },
        {
            question: 'Can I cancel my subscription anytime?',
            answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won't be charged again."
        },
        {
            question: 'Is there a free trial available?',
            answer: "We currently don't offer a free trial, but we have a 7-day money-back guarantee if you're not satisfied with our service."
        },
        {
            question: 'How can I access the content after subscribing?',
            answer: "Once your payment is confirmed, you'll get immediate access to all premium content through our website and mobile app. You can log in with your credentials to start learning."
        },
        {
            question: 'Do you offer discounts for schools or institutions?',
            answer: 'Yes, we offer special pricing for schools and educational institutions. Please contact our sales team at schools@cbsematerials.com for more information.'
        }
    ];

    const [activeFaq, setActiveFaq] = useState(null);

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
        setShowPaymentModal(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setShowPaymentModal(false);
        setSelectedPlan(null);
        document.body.style.overflow = 'auto';
    };

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Redirect to dashboard or success page
        navigate('/premium/dashboard?subscription=success');
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="premium-container">
            {/* Subscription Hero Section */}
            <section className="subscription-hero">
                <h1>{activeTab === 'parent' ? 'Plans for Parents' : 'Choose Your Perfect Plan'}</h1>
                <p>Get access to premium educational resources, expert guidance, and interactive learning experiences tailored to your needs.</p>

                <div className="tabs">
                    <button
                        className={`tab ${activeTab === 'student' ? 'active' : ''}`}
                        onClick={() => setActiveTab('student')}
                    >
                        For Students
                    </button>
                    <button
                        className={`tab ${activeTab === 'parent' ? 'active' : ''}`}
                        onClick={() => setActiveTab('parent')}
                    >
                        For Parents
                    </button>
                </div>
            </section>

            {/* Subscription Plans */}
            <section className="subscription-plans">
                {plans.map(plan => (
                    <div key={plan.id} className={`plan-card ${plan.popular ? 'popular' : ''} ${plan.bestValue ? 'best-value' : ''}`}>
                        {plan.popular && <div className="popular-tag">Most Popular</div>}
                        {plan.bestValue && <div className="best-value-tag">Best Value</div>}

                        <div className="plan-header">
                            <h3>{plan.name}</h3>
                            <div className="plan-price">{plan.price}<span>{plan.period}</span></div>
                            <p>{plan.description}</p>
                        </div>

                        <ul className="plan-features">
                            {plan.features.map((feature, index) => (
                                <li key={index}>
                                    <i className="fas fa-check"></i> {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="btn-premium" onClick={() => handleSelectPlan(plan)}>
                            Choose Plan
                        </button>
                    </div>
                ))}
            </section>

            {/* Plan Comparison */}
            <section className="plan-comparison">
                <h2 className="section-title">Plan Comparison</h2>
                <div className="comparison-table-container">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Monthly</th>
                                <th>Quarterly</th>
                                <th>Annual</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonFeatures.map((feature, index) => (
                                <tr key={index}>
                                    <td>{feature.name}</td>
                                    <td>
                                        <i className={`fas ${feature.monthly ? 'fa-check feature-check' : 'fa-times feature-unavailable'}`}></i>
                                    </td>
                                    <td>
                                        <i className={`fas ${feature.quarterly ? 'fa-check feature-check' : 'fa-times feature-unavailable'}`}></i>
                                    </td>
                                    <td>
                                        <i className={`fas ${feature.annual ? 'fa-check feature-check' : 'fa-times feature-unavailable'}`}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Payment Modal */}
            {showPaymentModal && (
                <div className="modal" onClick={(e) => e.target.className === 'modal' && closeModal()}>
                    <div className="payment-container">
                        <div className="payment-header">
                            <h2>Complete Your Purchase</h2>
                            <div className="payment-amount">{selectedPlan?.price}{selectedPlan?.period}</div>
                            <p>Enter your payment details to get started</p>
                        </div>

                        <form id="payment-form" onSubmit={handlePaymentSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="cardholder-name">Cardholder Name</label>
                                <input
                                    type="text"
                                    id="cardholder-name"
                                    className="form-control"
                                    placeholder="John Doe"
                                    value={paymentForm.cardholderName}
                                    onChange={(e) => setPaymentForm({ ...paymentForm, cardholderName: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="expiry-date">Expiry Date</label>
                                    <input
                                        type="text"
                                        id="expiry-date"
                                        className="form-control"
                                        placeholder="MM/YY"
                                        value={paymentForm.expiryDate}
                                        onChange={(e) => setPaymentForm({ ...paymentForm, expiryDate: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="cvv">CVV</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        className="form-control"
                                        placeholder="123"
                                        maxLength="3"
                                        value={paymentForm.cvv}
                                        onChange={(e) => setPaymentForm({ ...paymentForm, cvv: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        className="form-check-input"
                                        checked={paymentForm.terms}
                                        onChange={(e) => setPaymentForm({ ...paymentForm, terms: e.target.checked })}
                                        required
                                    />
                                    <label htmlFor="terms" className="form-check-label">
                                        I agree to the <a href="#" className="text-primary">Terms of Service</a> and{' '}
                                        <a href="#" className="text-primary">Privacy Policy</a>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="btn-premium">
                                <span className="button-text">Pay Now</span>
                            </button>

                            <div className="secure-payment">
                                <i className="fas fa-lock"></i>
                                <span>Secure payment powered by Stripe</span>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* FAQ Section */}
            <section className="faq-section">
                <h2 className="section-title">Frequently Asked Questions</h2>

                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFaq(index)}>
                            <span>{faq.question}</span>
                            <i className="fas fa-chevron-down faq-toggle"></i>
                        </div>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default PremiumSubscription;
