import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Commerce.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class11Commerce = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subjects = [
        {
            name: 'Accountancy',
            icon: 'fa-calculator',
            description: 'Learn the fundamentals of financial accounting and bookkeeping.',
            topics: ['Introduction to Accounting', 'Recording of Transactions', 'Bank Reconciliation Statement', 'Depreciation, Provisions and Reserves', 'Financial Statements']
        },
        {
            name: 'Business Studies',
            icon: 'fa-chart-line',
            description: 'Understand business organizations, trade, and commerce.',
            topics: ['Nature and Purpose of Business', 'Forms of Business Organizations', 'Private, Public and Global Enterprises', 'Business Services', 'Emerging Modes of Business']
        },
        {
            name: 'Economics',
            icon: 'fa-money-bill-wave',
            description: 'Explore economic theories, policies, and applications.',
            topics: ['Introduction to Microeconomics', 'Consumer Equilibrium and Demand', 'Producer Behavior and Supply', 'Forms of Market and Price Determination', 'Introduction to Macroeconomics']
        },
        {
            name: 'Mathematics',
            icon: 'fa-square-root-alt',
            description: 'Master mathematical concepts for business and economics.',
            topics: ['Sets and Functions', 'Algebra', 'Coordinate Geometry', 'Calculus', 'Statistics and Probability']
        },
        {
            name: 'Entrepreneurship',
            icon: 'fa-lightbulb',
            description: 'Develop business acumen and entrepreneurial skills.',
            topics: ['Entrepreneurship Concepts', 'An Entrepreneur', 'Enterprise Planning', 'Enterprise Growth Strategies', 'Business Finance']
        },
        {
            name: 'English Core',
            icon: 'fa-book',
            description: 'Enhance language skills and business communication.',
            topics: ['Reading Comprehension', 'Writing Skills', 'Literature: Prose & Poetry', 'Business Communication']
        }
    ];

    return (
        <div className={styles.commercePage}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Commerce Stream</h1>
                    <p>Master the world of business, finance, and economics. Build a strong foundation for CA, CS, MBA, and other professional careers.</p>
                    <a href="#subjects" className={styles.ctaButton}>Explore Subjects</a>
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
                                onClick={() => navigate(`/class/Class 11/Commerce/${subject.name}`)}
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
                        <p>Comprehensive step-by-step solutions for all commerce subjects.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/ncert')}>Access Now</button>
                    </div>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-file-alt"></i>
                        <h3>Sample Papers</h3>
                        <p>Practice with previous years' question papers and mock tests.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/papers')}>Practice</button>
                    </div>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-video"></i>
                        <h3>Video Lectures</h3>
                        <p>Expert-led video explanations for complex financial concepts.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/videos')}>Watch Now</button>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Resources. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class11Commerce;
