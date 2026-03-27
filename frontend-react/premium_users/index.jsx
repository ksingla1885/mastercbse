import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../src/styles/PremiumLanding.css';

const PremiumLanding = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="premium-landing-page">
            {/* Navigation */}
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo">
                        <i className="fas fa-graduation-cap"></i>
                        <span>mastercbse</span>
                    </Link>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                    <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                        <a href="#features">Features</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#faq">FAQ</a>
                        <Link to="/premium/login" className="btn btn-outline">Login</Link>
                        <Link to="/premium/register" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1>Unlock Your Full Learning Potential</h1>
                    <p>Access premium educational resources, expert guidance, and personalized learning experiences designed to help you excel in your CBSE exams.</p>
                    <div className="cta-buttons">
                        <a href="#pricing" className="btn btn-primary">
                            <i className="fas fa-tag"></i> View Plans
                        </a>
                    </div>
                </div>
            </section>

            {/* Premium Benefits Section */}
            <section id="features" className="features">
                <div className="container">
                    <div className="section-title">
                        <h2>Premium Membership Benefits</h2>
                        <p>Unlock exclusive features designed to maximize your learning potential</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card premium-feature">
                            <div className="feature-icon">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <h3>Exam Success Guarantee</h3>
                            <p>Boost your scores with our proven study strategies, previous year papers, and model test papers with detailed solutions.</p>
                        </div>
                        <div className="feature-card premium-feature">
                            <div className="feature-icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h3>Learn On-The-Go</h3>
                            <p>Access all premium content across multiple devices, with offline mode for uninterrupted learning anytime, anywhere.</p>
                        </div>
                        <div className="feature-card premium-feature">
                            <div className="feature-icon">
                                <i className="fas fa-award"></i>
                            </div>
                            <h3>Exclusive Resources</h3>
                            <p>Get access to premium-only content including mind maps, formula sheets, and quick revision notes for last-minute preparation.</p>
                        </div>
                        <div className="feature-card premium-feature">
                            <div className="feature-icon">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <h3>Money-Back Guarantee</h3>
                            <p>14-day money-back guarantee. Get a full refund if you're not satisfied (conditions apply).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="testimonials">
                <div className="container">
                    <div className="section-title">
                        <h2>What Our Students Say</h2>
                    </div>
                    <div className="testimonial-slider">
                        <div className="testimonial">
                            <div className="testimonial-text">
                                "mastercbse has been a game-changer for my board exam preparation. The video lectures and practice tests helped me score 95% in my 10th boards!"
                            </div>
                            <div className="testimonial-author">Priya Sharma</div>
                            <div className="testimonial-role">Class 10 Student, Delhi</div>
                        </div>
                        <div className="testimonial">
                            <div className="testimonial-text">
                                "The interactive quizzes and detailed explanations helped me understand complex concepts easily. My grades improved from 70% to 92% in just 3 months!"
                            </div>
                            <div className="testimonial-author">Rahul Verma</div>
                            <div className="testimonial-role">Class 12 Science Student, Mumbai</div>
                        </div>
                        <div className="testimonial">
                            <div className="testimonial-text">
                                "The live doubt-solving sessions are amazing! The teachers are patient and explain everything in a way that's easy to understand. I finally enjoy studying Science now!"
                            </div>
                            <div className="testimonial-author">Ananya Patel</div>
                            <div className="testimonial-role">Class 9 Student, Ahmedabad</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership Plans Section */}
            <section id="pricing" className="pricing">
                <div className="container">
                    <div className="section-title">
                        <h2>Choose Your Learning Path</h2>
                        <p>Tailored Plans for Every Student's Success</p>
                    </div>
                    <div className="pricing-grid">
                        <div className="pricing-card">
                            <h3>Basic Access</h3>
                            <div className="plan-icon"><i className="fas fa-book-reader"></i></div>
                            <p>Ideal for self-paced learners who want quality study materials</p>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check"></i> Complete access to all subjects</li>
                                <li><i className="fas fa-check"></i> Chapter-wise practice tests</li>
                                <li><i className="fas fa-check"></i> 24/7 access to study materials</li>
                                <li><i className="fas fa-check"></i> Mobile app availability</li>
                                <li><i className="fas fa-check"></i> Email support</li>
                            </ul>
                            <Link to="/premium/register?plan=basic" className="btn btn-outline" style={{ marginTop: 'auto', borderColor: '#4a6cf7', color: '#4a6cf7' }}>Start Learning</Link>
                        </div>
                        <div className="pricing-card popular">
                            <div className="popular-tag">Most Popular</div>
                            <h3>Premium Plus</h3>
                            <div className="plan-icon"><i className="fas fa-star"></i></div>
                            <p>Comprehensive learning with additional support features</p>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check"></i> All Basic Access features</li>
                                <li><i className="fas fa-check"></i> Priority email & chat support</li>
                                <li><i className="fas fa-check"></i> Weekly progress reports</li>
                                <li><i className="fas fa-check"></i> Offline content access</li>
                                <li><i className="fas fa-check"></i> Custom study planner</li>
                                <li><i className="fas fa-check"></i> Bonus revision materials</li>
                            </ul>
                            <Link to="/premium/register?plan=premium" className="btn btn-primary" style={{ marginTop: 'auto' }}>Get Premium</Link>
                        </div>
                        <div className="pricing-card">
                            <h3>Elite Program</h3>
                            <div className="plan-icon"><i className="fas fa-trophy"></i></div>
                            <p>For students aiming for academic excellence</p>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check"></i> All Premium Plus features</li>
                                <li><i className="fas fa-check"></i> Monthly 1-on-1 mentor sessions</li>
                                <li><i className="fas fa-check"></i> Career guidance sessions</li>
                                <li><i className="fas fa-check"></i> Certificate of achievement</li>
                                <li><i className="fas fa-check"></i> Exclusive masterclasses</li>
                                <li><i className="fas fa-check"></i> Early access to new content</li>
                            </ul>
                            <Link to="/premium/register?plan=elite" className="btn btn-outline" style={{ marginTop: 'auto', borderColor: '#4a6cf7', color: '#4a6cf7' }}>Join Elite</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="faq">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-container">
                        {[
                            { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, net banking, UPI, and popular digital wallets like Paytm, Google Pay, and PhonePe." },
                            { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period." },
                            { q: "Do you offer refunds?", a: "We offer a 7-day money-back guarantee. If you're not satisfied with our service, you can request a full refund within 7 days of your purchase." },
                            { q: "Can I change my plan later?", a: "Yes, you can upgrade or downgrade your plan at any time. The changes will take effect at the start of your next billing cycle." }
                        ].map((item, index) => (
                            <div key={index} className={`faq-item ${expandedFaq === index ? 'active' : ''}`}>
                                <div className="faq-question" onClick={() => toggleFaq(index)}>
                                    <span>{item.q}</span>
                                    <i className="fas fa-chevron-down faq-toggle"></i>
                                </div>
                                {expandedFaq === index && (
                                    <div className="faq-answer">
                                        <p>{item.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-about">
                            <Link to="/" className="footer-logo">
                                <i className="fas fa-graduation-cap"></i>
                                <span>mastercbse</span>
                            </Link>
                            <p>Empowering students with premium educational resources and personalized learning experiences to excel in their CBSE exams through mastercbse.</p>
                            <div className="social-links">
                                <Link to="#" className="social-link"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#" className="social-link"><i className="fab fa-twitter"></i></Link>
                                <Link to="#" className="social-link"><i className="fab fa-instagram"></i></Link>
                                <Link to="#" className="social-link"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>

                        <div className="footer-links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Our Team</Link></li>
                                <li><Link to="#">Careers</Link></li>
                                <li><Link to="#">Blog</Link></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h3>Resources</h3>
                            <ul>
                                <li><Link to="#">Study Materials</Link></li>
                                <li><Link to="#">Practice Tests</Link></li>
                                <li><Link to="#">Video Lessons</Link></li>
                                <li><Link to="#">NCERT Solutions</Link></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h3>Support</h3>
                            <ul>
                                <li><Link to="#">Contact Us</Link></li>
                                <li><Link to="#">Help Center</Link></li>
                                <li><Link to="#">FAQs</Link></li>
                                <li><Link to="#">Terms of Service</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2025 mastercbse. All rights reserved.
                            <Link to="#">Privacy Policy</Link> |
                            <Link to="#">Terms of Service</Link> |
                            <Link to="#">Refund Policy</Link>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PremiumLanding;
