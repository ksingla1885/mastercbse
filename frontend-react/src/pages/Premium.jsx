import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Premium.css';

const Premium = () => {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState(false);
    const [activeSection, setActiveSection] = useState('pricing');

    useEffect(() => {
        // Check URL for plan parameter and pre-select it
        const urlParams = new URLSearchParams(window.location.search);
        const plan = urlParams.get('plan');

        if (plan) {
            sessionStorage.setItem('selectedPlan', plan);
        }
    }, []);

    const toggleMobileMenu = () => {
        setActiveNav(!activeNav);
    };

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        setActiveSection(targetId.replace('#', ''));
        setActiveNav(false);
    };

    const toggleFAQ = (e) => {
        const faqItem = e.currentTarget.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it was closed
        if (!isActive) {
            faqItem.classList.add('active');
        }
    };

    return (
        <div className="premium-page">
            {/* Navigation */}
            <nav className="navbar">
                <div className="container">
                    <a href="/" className="logo">
                        <i className="fas fa-graduation-cap"></i>
                        <span>mastercbse</span>
                    </a>
                    <div className="nav-links">
                        <a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')} className={activeSection === 'features' ? 'active' : ''}>Features</a>
                        <a href="#pricing" onClick={(e) => handleSmoothScroll(e, '#pricing')} className={activeSection === 'pricing' ? 'active' : ''}>Pricing</a>
                        <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')} className={activeSection === 'testimonials' ? 'active' : ''}>Testimonials</a>
                        <a href="#faq" onClick={(e) => handleSmoothScroll(e, '#faq')} className={activeSection === 'faq' ? 'active' : ''}>FAQ</a>
                        <div className="nav-buttons">
                            <a href="/premium/login" className="btn btn-login">Login</a>
                            <a href="/premium/register" className="btn btn-get-started">Get Started</a>
                        </div>
                    </div>
                    <button className="menu-toggle" onClick={toggleMobileMenu}>
                        <i className={`fas ${activeNav ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="hero-background">
                    <div className="hero-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <i className="fas fa-star"></i>
                            <span>Trusted by 50,000+ CBSE Students</span>
                        </div>
                        <h1 className="hero-title">
                            <span className="title-highlight">Excel in CBSE</span> with Premium Learning
                        </h1>
                        <p className="hero-description">
                            Unlock personalized learning paths, expert guidance, and comprehensive study materials designed to help you score 90+ in your CBSE exams.
                        </p>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">95%</div>
                                <div className="stat-label">Success Rate</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">Study Materials</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Expert Support</div>
                            </div>
                        </div>
                        <div className="cta-buttons">
                            <a href="#pricing" onClick={(e) => handleSmoothScroll(e, '#pricing')} className="btn btn-primary btn-large">
                                <i className="fas fa-rocket"></i> Start Free Trial
                            </a>
                            <a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')} className="btn btn-secondary btn-large">
                                <i className="fas fa-play-circle"></i> Watch Demo
                            </a>
                        </div>
                        <div className="trust-indicators">
                            <div className="trust-text">
                                <i className="fas fa-shield-alt"></i>
                                14-day money-back guarantee
                            </div>
                            <div className="trust-text">
                                <i className="fas fa-lock"></i>
                                Secure payment
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-card">
                            <div className="card-header">
                                <div className="student-avatar">
                                    <i className="fas fa-user-graduate"></i>
                                </div>
                                <div className="student-info">
                                    <div className="student-name">Priya Sharma</div>
                                    <div className="student-grade">Class 10 • 95% Score</div>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="progress-item">
                                    <span>Mathematics</span>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{width: '95%'}}></div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <span>Science</span>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{width: '92%'}}></div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <span>English</span>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{width: '88%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Benefits Section */}
            <section id="features" className="features">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Premium Membership Benefits</h2>
                        <p className="section-subtitle">
                            Unlock exclusive features designed to maximize your learning potential
                        </p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card premium-feature">
                            <div className="feature-icon-wrapper">
                                <div className="feature-icon">
                                    <i className="fas fa-trophy"></i>
                                </div>
                                <div className="feature-badge">Guaranteed</div>
                            </div>
                            <h3>Exam Success Guarantee</h3>
                            <p>Boost your scores with our proven study strategies, previous year papers, and model test papers with detailed solutions.</p>
                            <ul className="feature-list">
                                <li><i className="fas fa-check"></i> Previous 10 years solved papers</li>
                                <li><i className="fas fa-check"></i> Chapter-wise test series</li>
                                <li><i className="fas fa-check"></i> Performance analytics</li>
                            </ul>
                            <div className="feature-cta">
                                <span className="feature-highlight">95% students improve scores</span>
                            </div>
                        </div>
                        <div className="feature-card premium-feature">
                            <div className="feature-icon-wrapper">
                                <div className="feature-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="feature-badge">New</div>
                            </div>
                            <h3>Learn On-The-Go</h3>
                            <p>Access all premium content across multiple devices, with offline mode for uninterrupted learning anytime, anywhere.</p>
                            <ul className="feature-list">
                                <li><i className="fas fa-check"></i> Mobile app with offline mode</li>
                                <li><i className="fas fa-check"></i> Sync progress across devices</li>
                                <li><i className="fas fa-check"></i> Downloadable study materials</li>
                            </ul>
                            <div className="feature-cta">
                                <span className="feature-highlight">Available on iOS & Android</span>
                            </div>
                        </div>
                        <div className="feature-card premium-feature">
                            <div className="feature-icon-wrapper">
                                <div className="feature-icon">
                                    <i className="fas fa-award"></i>
                                </div>
                                <div className="feature-badge">Exclusive</div>
                            </div>
                            <h3>Exclusive Resources</h3>
                            <p>Get access to premium-only content including mind maps, formula sheets, and quick revision notes for last-minute preparation.</p>
                            <ul className="feature-list">
                                <li><i className="fas fa-check"></i> Interactive mind maps</li>
                                <li><i className="fas fa-check"></i> Formula cheat sheets</li>
                                <li><i className="fas fa-check"></i> Quick revision notes</li>
                            </ul>
                            <div className="feature-cta">
                                <span className="feature-highlight">500+ exclusive resources</span>
                            </div>
                        </div>
                        <div className="feature-card premium-feature">
                            <div className="feature-icon-wrapper">
                                <div className="feature-icon">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="feature-badge">Safe</div>
                            </div>
                            <h3>Money-Back Guarantee</h3>
                            <p>14-day money-back guarantee. Get a full refund if you're not satisfied (conditions apply). Limited to 15% content access. ₹199 processing fee.</p>
                            <ul className="feature-list">
                                <li><i className="fas fa-check"></i> 14-day risk-free trial</li>
                                <li><i className="fas fa-check"></i> Easy cancellation</li>
                                <li><i className="fas fa-check"></i> No questions asked</li>
                            </ul>
                            <div className="feature-cta">
                                <span className="feature-highlight">100% satisfaction guaranteed</span>
                            </div>
                        </div>
                    </div>
                    <div className="cta-container">
                        <a href="#pricing" onClick={(e) => handleSmoothScroll(e, '#pricing')} className="btn btn-primary btn-large">
                            <i className="fas fa-crown"></i> Unlock Premium Benefits
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="testimonials">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What Our Students Say</h2>
                        <p className="section-subtitle">
                            Real stories from students who transformed their CBSE journey
                        </p>
                    </div>
                    <div className="testimonial-grid">
                        <div className="testimonial-card featured">
                            <div className="testimonial-header">
                                <div className="student-avatar">
                                    <img src="https://picsum.photos/seed/priya/60/60.jpg" alt="Priya Sharma" />
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-author">Priya Sharma</div>
                                    <div className="testimonial-role">Class 10 Student, Delhi</div>
                                    <div className="achievement-badge">
                                        <i className="fas fa-trophy"></i>
                                        95% in Boards
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-text">
                                    "mastercbse has been a game-changer for my board exam preparation. The video lectures and practice tests helped me score 95% in my 10th boards!"
                                </p>
                            </div>
                            <div className="testimonial-metrics">
                                <div className="metric">
                                    <span className="metric-value">+25%</span>
                                    <span className="metric-label">Score Improvement</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-value">6 months</span>
                                    <span className="metric-label">Time Spent</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="student-avatar">
                                    <img src="https://picsum.photos/seed/rahul/60/60.jpg" alt="Rahul Verma" />
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-author">Rahul Verma</div>
                                    <div className="testimonial-role">Class 12 Science Student, Mumbai</div>
                                    <div className="achievement-badge">
                                        <i className="fas fa-chart-line"></i>
                                        92% Score
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-text">
                                    "The interactive quizzes and detailed explanations helped me understand complex concepts easily. My grades improved from 70% to 92% in just 3 months!"
                                </p>
                            </div>
                            <div className="testimonial-metrics">
                                <div className="metric">
                                    <span className="metric-value">+22%</span>
                                    <span className="metric-label">Grade Jump</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-value">3 months</span>
                                    <span className="metric-label">Duration</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="student-avatar">
                                    <img src="https://picsum.photos/seed/ananya/60/60.jpg" alt="Ananya Patel" />
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-author">Ananya Patel</div>
                                    <div className="testimonial-role">Class 9 Student, Ahmedabad</div>
                                    <div className="achievement-badge">
                                        <i className="fas fa-medal"></i>
                                        Top Performer
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-text">
                                    "The live doubt-solving sessions are amazing! The teachers are patient and explain everything in a way that's easy to understand. I finally enjoy studying Science now!"
                                </p>
                            </div>
                            <div className="testimonial-metrics">
                                <div className="metric">
                                    <span className="metric-value">100+</span>
                                    <span className="metric-label">Doubts Solved</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-value">4.9/5</span>
                                    <span className="metric-label">Satisfaction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-stats">
                        <div className="stat">
                            <div className="stat-number">50,000+</div>
                            <div className="stat-label">Happy Students</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">4.8/5</div>
                            <div className="stat-label">Average Rating</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">95%</div>
                            <div className="stat-label">Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership Plans Section */}
            <section id="pricing" className="pricing">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Choose Your Learning Path</h2>
                        <p className="section-subtitle">
                            Tailored Plans for Every Student's Success Journey
                        </p>
                    </div>
                    <div className="pricing-toggle">
                        <span>Monthly</span>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <span>Yearly <span className="discount-badge">Save 30%</span></span>
                    </div>
                    <div className="pricing-grid">
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Basic Access</h3>
                                <div className="plan-icon"><i className="fas fa-book-reader"></i></div>
                                <div className="price">
                                    <span className="currency">₹</span>
                                    <span className="amount">299</span>
                                    <span className="period">/month</span>
                                </div>
                                <p className="plan-description">Ideal for self-paced learners who want quality study materials</p>
                            </div>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check"></i> Complete access to all subjects</li>
                                <li><i className="fas fa-check"></i> Chapter-wise practice tests</li>
                                <li><i className="fas fa-check"></i> 24/7 access to study materials</li>
                                <li><i className="fas fa-check"></i> Mobile app availability</li>
                                <li><i className="fas fa-check"></i> Email support</li>
                            </ul>
                            <div className="pricing-cta">
                                <a href="/premium/register?plan=basic" className="btn btn-outline">Start Learning</a>
                                <p className="guarantee">14-day money back</p>
                            </div>
                        </div>
                        <div className="pricing-card popular">
                            <div className="popular-tag">Most Popular</div>
                            <div className="pricing-header">
                                <h3>Premium Plus</h3>
                                <div className="plan-icon"><i className="fas fa-star"></i></div>
                                <div className="price">
                                    <span className="currency">₹</span>
                                    <span className="amount">599</span>
                                    <span className="period">/month</span>
                                </div>
                                <p className="plan-description">Comprehensive learning with additional support features</p>
                            </div>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check"></i> All Basic Access features</li>
                                <li><i className="fas fa-check"></i> Priority email & chat support</li>
                                <li><i className="fas fa-check"></i> Weekly progress reports</li>
                                <li><i className="fas fa-check"></i> Offline content access</li>
                                <li><i className="fas fa-check"></i> Custom study planner</li>
                                <li><i className="fas fa-check"></i> Bonus revision materials</li>
                            </ul>
                            <div className="pricing-cta">
                                <a href="/premium/register?plan=premium" className="btn btn-primary">Get Premium</a>
                                <p className="guarantee">14-day money back</p>
                            </div>
                        </div>
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Elite Program</h3>
                                <div className="plan-icon"><i className="fas fa-trophy"></i></div>
                                <div className="price">
                                    <span className="currency">₹</span>
                                    <span className="amount">999</span>
                                    <span className="period">/month</span>
                                </div>
                                <p className="plan-description">For students aiming for academic excellence</p>
                            </div>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check"></i> All Premium Plus features</li>
                                <li><i className="fas fa-check"></i> Monthly 1-on-1 mentor sessions</li>
                                <li><i className="fas fa-check"></i> Career guidance sessions</li>
                                <li><i className="fas fa-check"></i> Certificate of achievement</li>
                                <li><i className="fas fa-check"></i> Exclusive masterclasses</li>
                                <li><i className="fas fa-check"></i> Early access to new content</li>
                            </ul>
                            <div className="pricing-cta">
                                <a href="/premium/register?plan=elite" className="btn btn-outline">Join Elite</a>
                                <p className="guarantee">14-day money back</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-benefits">
                        <div className="benefit-item">
                            <i className="fas fa-shield-alt"></i>
                            <span>14-day money-back guarantee</span>
                        </div>
                        <div className="benefit-item">
                            <i className="fas fa-lock"></i>
                            <span>Secure payment processing</span>
                        </div>
                        <div className="benefit-item">
                            <i className="fas fa-sync-alt"></i>
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="faq">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="faq-item">
                    <div className="faq-question" onClick={toggleFAQ}>
                        <span>What payment methods do you accept?</span>
                        <i className="fas fa-chevron-down faq-toggle"></i>
                    </div>
                    <div className="faq-answer">
                        <p>We accept all major credit and debit cards, net banking, UPI, and popular digital wallets like Paytm, Google Pay, and PhonePe.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={toggleFAQ}>
                        <span>Can I cancel my subscription anytime?</span>
                        <i className="fas fa-chevron-down faq-toggle"></i>
                    </div>
                    <div className="faq-answer">
                        <p>Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={toggleFAQ}>
                        <span>Do you offer refunds?</span>
                        <i className="fas fa-chevron-down faq-toggle"></i>
                    </div>
                    <div className="faq-answer">
                        <p>We offer a 7-day money-back guarantee. If you're not satisfied with our service, you can request a full refund within 7 days of your purchase.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={toggleFAQ}>
                        <span>Can I change my plan later?</span>
                        <i className="fas fa-chevron-down faq-toggle"></i>
                    </div>
                    <div className="faq-answer">
                        <p>Yes, you can upgrade or downgrade your plan at any time. The changes will take effect at the start of your next billing cycle.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-about">
                        <a href="/" className="footer-logo">
                            <i className="fas fa-graduation-cap"></i>
                            <span>mastercbse</span>
                        </a>
                        <p>Empowering students with premium educational resources and personalized learning experiences to excel in their CBSE exams through mastercbse.</p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Study Materials</a></li>
                            <li><a href="#">Practice Tests</a></li>
                            <li><a href="#">Video Lessons</a></li>
                            <li><a href="#">NCERT Solutions</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p>&copy; 2025 mastercbse. All rights reserved.
                            <a href="#">Privacy Policy</a> |
                            <a href="#">Terms of Service</a> |
                            <a href="#">Refund Policy</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Premium;
