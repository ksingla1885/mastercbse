import React, { useState } from 'react';
import '../src/styles/PremiumSubscription.css';
import { useNavigate } from 'react-router-dom';

const PremiumSubscription = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('student');
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [loading, setLoading] = useState(false);

    const plans = {
        monthly: {
            name: 'Monthly',
            price: '₹1,000',
            duration: '/month',
            description: 'Perfect for short-term preparation',
            features: [
                'Access to all subjects',
                'Practice tests & quizzes',
                '24/7 doubt support',
                'Progress tracking',
                'Mobile app access'
            ]
        },
        quarterly: {
            name: 'Quarterly',
            price: '₹2,700',
            duration: '/3 months',
            description: 'Save 10% with quarterly billing',
            features: [
                'Everything in Monthly',
                'Priority support',
                'Monthly parent reports',
                'Offline content access',
                'Study planner'
            ],
            popular: true
        },
        annual: {
            name: 'Annual',
            price: '₹8,000',
            duration: '/year',
            description: 'Save 33% with annual billing',
            features: [
                'Everything in Quarterly',
                '1-on-1 mentoring',
                'Career counseling',
                'Certificate of completion',
                'Exclusive webinars'
            ],
            bestValue: true
        }
    };

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const handleSelectPlan = (planKey) => {
        setSelectedPlan(plans[planKey]);
        setShowPaymentModal(true);
    };

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulating Payment API Call
        setTimeout(() => {
            setLoading(false);
            setShowPaymentModal(false);
            alert('Payment successful! Welcome to Premium.');
            navigate('/premium/dashboard');
        }, 2000);
    };

    return (
        <div className="premium-subscription">
            <div className="container">
                {/* Hero Section */}
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

                {/* Plans */}
                <section className="plans-container">
                    {/* Monthly */}
                    <div className="plan-card">
                        <div className="plan-header">
                            <h3 className="plan-name">{plans.monthly.name}</h3>
                            <div className="plan-price">{plans.monthly.price}<span>{plans.monthly.duration}</span></div>
                            <p className="plan-duration">{plans.monthly.description}</p>
                        </div>
                        <div className="plan-features">
                            <ul>
                                {plans.monthly.features.map((feature, idx) => (
                                    <li key={idx}><i className="fas fa-check"></i> {feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="plan-cta">
                            <button className="btn-subscribe" onClick={() => handleSelectPlan('monthly')}>Choose Plan</button>
                        </div>
                    </div>

                    {/* Quarterly */}
                    <div className="plan-card popular">
                        <div className="popular-tag">Most Popular</div>
                        <div className="plan-header">
                            <h3 className="plan-name">{plans.quarterly.name}</h3>
                            <div className="plan-price">{plans.quarterly.price}<span>{plans.quarterly.duration}</span></div>
                            <p className="plan-duration">{plans.quarterly.description}</p>
                        </div>
                        <div className="plan-features">
                            <ul>
                                {plans.quarterly.features.map((feature, idx) => (
                                    <li key={idx}><i className="fas fa-check"></i> {feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="plan-cta">
                            <button className="btn-subscribe" onClick={() => handleSelectPlan('quarterly')}>Choose Plan</button>
                        </div>
                    </div>

                    {/* Annual */}
                    <div className="plan-card">
                        <div className="best-value-tag">Best Value</div>
                        <div className="plan-header">
                            <h3 className="plan-name">{plans.annual.name}</h3>
                            <div className="plan-price">{plans.annual.price}<span>{plans.annual.duration}</span></div>
                            <p className="plan-duration">{plans.annual.description}</p>
                        </div>
                        <div className="plan-features">
                            <ul>
                                {plans.annual.features.map((feature, idx) => (
                                    <li key={idx}><i className="fas fa-check"></i> {feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="plan-cta">
                            <button className="btn-subscribe" onClick={() => handleSelectPlan('annual')}>Choose Plan</button>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="plan-comparison">
                    <h2 className="section-title">Plan Comparison</h2>
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
                            {['Access to all subjects', 'Practice tests & quizzes', '24/7 doubt support', 'Mobile app access'].map(feature => (
                                <tr key={feature}>
                                    <td>{feature}</td>
                                    <td><i className="fas fa-check feature-check"></i></td>
                                    <td><i className="fas fa-check feature-check"></i></td>
                                    <td><i className="fas fa-check feature-check"></i></td>
                                </tr>
                            ))}
                            {['Priority support', 'Monthly parent reports'].map(feature => (
                                <tr key={feature}>
                                    <td>{feature}</td>
                                    <td><i className="fas fa-times feature-unavailable"></i></td>
                                    <td><i className="fas fa-check feature-check"></i></td>
                                    <td><i className="fas fa-check feature-check"></i></td>
                                </tr>
                            ))}
                            {['1-on-1 mentoring', 'Career counseling'].map(feature => (
                                <tr key={feature}>
                                    <td>{feature}</td>
                                    <td><i className="fas fa-times feature-unavailable"></i></td>
                                    <td><i className="fas fa-times feature-unavailable"></i></td>
                                    <td><i className="fas fa-check feature-check"></i></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                {/* FAQ */}
                <section className="faq-section">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    {[
                        { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards including Visa, MasterCard, American Express, and RuPay. We also support net banking, UPI, and popular digital wallets." },
                        { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won't be charged again." },
                        { q: "Is there a free trial available?", a: "We currently don't offer a free trial, but we have a 7-day money-back guarantee if you're not satisfied with our service." },
                        { q: "How can I access the content after subscribing?", a: "Once your payment is confirmed, you'll get immediate access to all premium content through our website and mobile app." }
                    ].map((item, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-question" onClick={() => toggleFaq(index)}>
                                <span>{item.q}</span>
                                <i className={`fas fa-chevron-down faq-toggle ${expandedFaq === index ? 'active' : ''}`}></i>
                            </div>
                            {expandedFaq === index && <div className="faq-answer">{item.a}</div>}
                        </div>
                    ))}
                </section>
            </div>

            {/* Payment Modal */}
            <div className={`modal-overlay ${showPaymentModal ? 'open' : ''}`}>
                <div className="payment-modal">
                    <button className="close-modal" onClick={() => setShowPaymentModal(false)}>&times;</button>
                    <div className="payment-header" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                        <h2>Complete Purchase</h2>
                        {selectedPlan && (
                            <>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a6cf7', margin: '0.5rem 0' }}>
                                    {selectedPlan.price} <span style={{ fontSize: '0.9rem', color: '#666' }}>{selectedPlan.duration}</span>
                                </div>
                                <p>You are selecting the <strong>{selectedPlan.name}</strong> plan.</p>
                            </>
                        )}
                    </div>

                    <form onSubmit={handlePaymentSubmit}>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Cardholder Name</label>
                            <input type="text" className="form-control" style={{ width: '93%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd' }} placeholder="John Doe" required />
                        </div>

                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Card Number</label>
                            <input type="text" className="form-control" style={{ width: '93%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd' }} placeholder="**** **** **** ****" required />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                            <div>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Expiry</label>
                                <input type="text" className="form-control" style={{ width: '85%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd' }} placeholder="MM/YY" required />
                            </div>
                            <div>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>CVV</label>
                                <input type="text" className="form-control" style={{ width: '85%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd' }} placeholder="123" required />
                            </div>
                        </div>

                        <button type="submit" className="btn-subscribe" disabled={loading}>
                            {loading ? 'Processing...' : 'Pay Now'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PremiumSubscription;
