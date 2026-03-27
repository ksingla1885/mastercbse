import React, { useEffect } from 'react';
import styles from '../styles/Landing.module.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import developerImage from '../assets/developer.jpg';

const Landing = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.landingPage}>
            <Navbar />

            <section className={styles.hero} id="home">
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Master Your<br />Academic Potential</h1>
                    <p className={styles.tagline}>The ultimate learning platform for CBSE students covering Class 1 to 12. Expert-curated resources, premium notes, and interactive tests.</p>
                    <div className={styles.ctaButtons}>
                        <button className={`${styles.ctaButton} ${styles.studentBtn}`} onClick={() => navigate('/home')}>Start Learning</button>
                        <button className={`${styles.ctaButton} ${styles.premiumBtn}`} onClick={() => navigate('/premium')}>Go Premium</button>
                        <button className={`${styles.ctaButton} ${styles.adminBtn}`} onClick={() => navigate('/admin/login')}>Teacher / Admin</button>
                    </div>
                </div>
            </section>

            <section className={styles.features}>
                <h2>Why Choose mastercbse?</h2>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>📚</div>
                        <h3>Comprehensive Curriculum</h3>
                        <p>Structured learning materials strictly following the latest CBSE syllabus and guidelines.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🎯</div>
                        <h3>Exam Preparation</h3>
                        <p>Access previous years' papers, sample papers, and mock tests to excel in exams.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🎓</div>
                        <h3>Expert Mentorship</h3>
                        <p>Get guidance from top educators and subject matter experts every step of the way.</p>
                    </div>
                </div>
            </section>

            <section className={styles.about} id="about">
                <h2>Empowering Education</h2>
                <div className={styles.aboutContent}>
                    <p>mastercbse is dedicated to providing high-quality educational resources. Our mission is to make premium education accessible to every student, regardless of their location.</p>
                    <div className={styles.statsContainer}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>12+</span>
                            <span className={styles.statLabel}>Classes</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Subjects</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10k+</span>
                            <span className={styles.statLabel}>Resources</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.testimonials}>
                <h2>Student Success Stories</h2>
                <div className={styles.testimonialSlider}>
                    <div className={styles.testimonial}>
                        <p>"The study materials and notes helped me score 95% in my 10th boards. Truly a game-changer!"</p>
                        <span className={styles.studentName}>Priya Sharma</span>
                        <span className={styles.studentClass}>Class 10 (95%)</span>
                    </div>
                    <div className={styles.testimonial}>
                        <p>"Video explanations made Physics so easy to understand. My concepts are crystal clear now."</p>
                        <span className={styles.studentName}>Rahul Verma</span>
                        <span className={styles.studentClass}>Class 12 Science</span>
                    </div>
                    <div className={styles.testimonial}>
                        <p>"Premium content was worth every penny. The mock tests were very similar to actual exams."</p>
                        <span className={styles.studentName}>Ananya Patel</span>
                        <span className={styles.studentClass}>Class 12 Commerce</span>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2>Ready to Excel?</h2>
                <p>Join thousands of students achieving their academic goals with mastercbse.</p>
                <div className={styles.ctaButtons}>
                    <button style={{ background: 'white', color: '#4f46e5' }} className={styles.ctaButton} onClick={() => navigate('/home')}>Get Started Free</button>
                    <button style={{ background: 'white', color: '#f59e0b' }} className={styles.ctaButton} onClick={() => navigate('/premium')}>Upgrade Now</button>
                </div>
            </section>

            {/* <section className={styles.developerSection}>
                <div className={styles.developerContainer}>
                    <div className={styles.developerImageWrapper}>
                        <img
                            src={developerImage}
                            alt="Developer"
                            className={styles.developerImage}
                        />
                    </div>
                    <div className={styles.developerContent}>
                        <h4>Meet the Developer</h4>
                        <h2>Building the Future of Education</h2>
                        <p>
                            Hi, I'm the lead developer behind mastercbse. My passion lies in creating accessible, high-quality educational tools that empower students across the country. With a background in Full Stack Development and a deep understanding of the CBSE curriculum, I've crafted this platform to be your ultimate study companion.
                        </p>
                        <div className={styles.socialIcons}>
                            <a href="https://www.github.com/ksingla1885" className={styles.socialIcon}><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/ketan-kumar1885/" className={styles.socialIcon}><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://x.com/heyketankumar" className={styles.socialIcon}><i className="fab fa-twitter"></i></a>
                            <a href="ketansingla7988@gmail.com" className={styles.socialIcon}><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </section> */}

            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerSection}>
                        <h3>Contact Us</h3>
                        <p>support@mastercbse.com</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="/signup">Student Portal</a></li>
                            <li><a href="/admin/login">Admin Login</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>Newsletter</h3>
                        <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Email Address" required />
                            <button type="submit">Join</button>
                        </form>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2024 mastercbse. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
