import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Commerce.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class12Commerce = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subjects = [
        {
            name: 'Accountancy',
            icon: 'fa-calculator',
            description: 'Advanced financial accounting and analysis.',
            topics: ['Accounting for Partnership Firms', 'Accounting for Companies', 'Analysis of Financial Statements', 'Cash Flow Statement', 'Computerised Accounting']
        },
        {
            name: 'Business Studies',
            icon: 'fa-briefcase',
            description: 'Principles of management and business finance.',
            topics: ['Principles of Management', 'Business Environment', 'Financial Management', 'Marketing Management', 'Consumer Protection']
        },
        {
            name: 'Economics',
            icon: 'fa-chart-line',
            description: 'Macroeconomics and Indian Economic Development.',
            topics: ['National Income & Related Aggregates', 'Money and Banking', 'Government Budget', 'Balance of Payments', 'Indian Economy 1950-1990']
        },
        {
            name: 'Mathematics',
            icon: 'fa-square-root-alt',
            description: 'Applied mathematics for business applications.',
            topics: ['Relations and Functions', 'Calculus', 'Linear Programming', 'Probability', 'Matrices and Determinants']
        },
        {
            name: 'Entrepreneurship',
            icon: 'fa-lightbulb',
            description: 'Enterprise planning and resource mobilization.',
            topics: ['Entrepreneurial Opportunity', 'Enterprise Planning', 'Enterprise Marketing', 'Enterprise Growth Strategies', 'Business Arithmetic']
        },
        {
            name: 'English Core',
            icon: 'fa-book',
            description: 'Advanced reading, writing and literary analysis.',
            topics: ['Reading Comprehension', 'Advanced Writing Skills', 'Flamingo (Prose/Poetry)', 'Vistas (Supplementary)']
        }
    ];

    return (
        <div className={styles.commercePage}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 12 Commerce</h1>
                    <p>Master the principles of finance, management, and economics. Prepare for professional careers like CA, CS, and MBA.</p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                        <a href="#subjects" className={styles.ctaButton}>Explore Subjects</a>
                        <button className={styles.samplePaperBtn} onClick={() => navigate('/sample-papers?class=12&subject=Commerce')}>
                            📄 Sample Papers
                        </button>
                    </div>
                </div>
            </section>

            <section id="subjects" className={styles.subjectsSection}>
                <div className={styles.sectionTitle}>
                    <h2>Core & Elective Subjects</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.subjectsGrid}>
                    {subjects.map((subject, index) => (
                        <div key={index} className={styles.subjectCard}>
                            <div className={styles.iconWrapper}>
                                <i className={`fas ${subject.icon}`}></i>
                            </div>
                            <h3>{subject.name}</h3>
                            <p>{subject.description}</p>
                            <ul className={styles.topicList}>
                                {subject.topics.map((topic, i) => (
                                    <li key={i}>{topic}</li>
                                ))}
                            </ul>
                            <button
                                className={styles.cardButton}
                                onClick={() => navigate(`/class/Class 12/Commerce/${subject.name}`)}
                            >
                                Start Learning <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.resourcesSection}>
                <div className={styles.sectionTitle}>
                    <h2>Student Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.resourcesGrid}>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-book-open"></i>
                        <h3>NCERT Solutions</h3>
                        <p>Comprehensive solutions for Accountancy and Business Studies.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/ncert')}>Access Now</button>
                    </div>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-file-invoice-dollar"></i>
                        <h3>Sample Papers</h3>
                        <p>Solve previous years' papers to ace your Board Exams.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/papers')}>Practice</button>
                    </div>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-video"></i>
                        <h3>Case Studies</h3>
                        <p>Real-world business case studies and video explanations.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/case-studies')}>Watch Now</button>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Resources. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class12Commerce;
