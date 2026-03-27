import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';

const Landing = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            <header className="header">
                <div className="nav-container">
                    <div className="logo">mastercbse</div>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#" onClick={() => handleNavigation('/premium')} className="premium-nav-btn">Go Premium</a></li>
                            {/* <li><a href="#" onClick={() => handleNavigation('/admin')}>Admin</a></li> */}
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="hero" id="home">
                <div className="hero-content">
                    <h1>Welcome to mastercbse</h1>
                    <p className="tagline">Empowering Students with Comprehensive CBSE Learning Resources for Classes 1-12</p>
                    <div className="cta-buttons">
                        <button className="cta-button admin-btn" onClick={() => handleNavigation('/admin/login')}>Admin Login</button>
                        <button className="cta-button student-btn" onClick={() => handleNavigation('/home')}>Explore Learning Resources</button>
                        <button className="cta-button premium-btn" onClick={() => handleNavigation('/premium')}>Go Premium</button>
                    </div>
                </div>
            </section>

            <section className="features">
                <h2>Why Choose mastercbse?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📚</div>
                        <h3>Comprehensive Curriculum</h3>
                        <p>Structured learning materials covering all subjects from Class 1 to 12, strictly following the latest CBSE syllabus and guidelines.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎯</div>
                        <h3>Exam Preparation</h3>
                        <p>Access to previous years' question papers, sample papers, and mock tests to help you excel in your board examinations.</p>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="about-content">
                    <h2>About mastercbse</h2>
                    <p>mastercbse is a comprehensive educational platform dedicated to providing high-quality learning resources for CBSE students. Our mission is to make quality education accessible to every student, regardless of their location or background.</p>

                    <div className="stats-container">
                        <div className="stat-item">
                            <span className="stat-number">12+</span>
                            <span className="stat-label">Classes</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Subjects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">1000+</span>
                            <span className="stat-label">Resources</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <h2>What Our Students Say</h2>
                <div className="testimonial-slider">
                    <div className="testimonial">
                        <p>"The study materials and practice tests helped me score 95% in my 10th board exams. The chapter-wise notes were a game-changer!"</p>
                        <div className="student-info">
                            <span className="student-name">Priya Sharma</span>
                            <span className="student-class">Class 10 Student (95% in 10th Board)</span>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>"The video explanations made complex topics so much easier to understand. I improved my Physics score from 65% to 89% in just 3 months!"</p>
                        <div className="student-info">
                            <span className="student-name">Rahul Verma</span>
                            <span className="student-class">Class 12 Science Student</span>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>"The premium content is worth every penny! The sample papers and previous year questions were exactly what I needed to ace my exams."</p>
                        <div className="student-info">
                            <span className="student-name">Ananya Patel</span>
                            <span className="student-class">Class 12 Commerce Student</span>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>"As a parent, I've seen a significant improvement in my child's understanding of Mathematics. The interactive quizzes are fantastic!"</p>
                        <div className="student-info">
                            <span className="student-name">Mrs. Mehta</span>
                            <span className="student-class">Parent of Class 8 Student</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to Start Learning?</h2>
                <p>Join thousands of students who are already achieving academic success with mastercbse.</p>
                <div className="cta-buttons">
                    <button className="cta-button" onClick={() => handleNavigation('/home')}>Get Started for Free</button>
                    <button className="cta-button premium-btn" onClick={() => handleNavigation('/premium')}>Go Premium</button>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: support@mastercbse.com</p>
                        <p>Phone: +1-234-567-890</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#" onClick={() => handleNavigation('/admin')}>Admin</a></li>
                            <li><a href="#" onClick={() => handleNavigation('/home')}>Student Portal</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <div className="newsletter">
                            <h4>Subscribe to our newsletter</h4>
                            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" placeholder="Enter your email" required />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 mastercbse. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
                </div>
            </footer>
        </>
    );
};

export default Landing;
