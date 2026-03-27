import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Humanities.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class12Humanities = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subjects = [
        {
            name: 'History',
            icon: 'fa-landmark',
            description: 'Ancient, Medieval and Modern Indian history.',
            topics: ['Bricks, Beads and Bones', 'Kings, Farmers and Towns', 'Through the Eyes of Travellers', 'Rebels and the Raj']
        },
        {
            name: 'Political Science',
            icon: 'fa-balance-scale',
            description: 'Contemporary World Politics and Politics in India.',
            topics: ['Cold War Era', 'End of Bipolarity', 'US Hegemony', 'Challenges of Nation Building', 'Democratic Resurgence']
        },
        {
            name: 'Geography',
            icon: 'fa-globe-asia',
            description: 'Human Geography and People & Economy of India.',
            topics: ['Human Geography: Nature & Scope', 'Population & Composition', 'Primary Activities', 'Transport & Communication']
        },
        {
            name: 'Economics',
            icon: 'fa-chart-pie',
            description: 'Macroeconomics and Indian Economic Development.',
            topics: ['National Income', 'Money & Banking', 'Government Budget', 'Balance of Payments', 'Indian Economy 1950-1990']
        },
        {
            name: 'Sociology',
            icon: 'fa-users',
            description: 'Indian Society and Social Change & Development.',
            topics: ['Demographic Structure', 'Social Institutions', 'Patterns of Social Inequality', 'Cultural Change']
        },
        {
            name: 'Psychology',
            icon: 'fa-brain',
            description: 'Self and Personality, Psychological Disorders, and Therapies.',
            topics: ['Variations in Psychological Attributes', 'Self and Personality', 'Meeting Life Challenges', 'Psychological Disorders']
        },
        {
            name: 'English Core',
            icon: 'fa-book',
            description: 'Enhance language skills and literary appreciation.',
            topics: ['Reading Comprehension', 'Writing Skills', 'Literature: Prose & Poetry', 'Fiction']
        }
    ];

    return (
        <div className={styles.humanitiesPage}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 12 Humanities</h1>
                    <p>Explore society, culture, and politics. Deepen your understanding of the human experience and prepare for specialized careers.</p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                        <a href="#subjects" className={styles.ctaButton}>Explore Subjects</a>
                        <button className={styles.samplePaperBtn} onClick={() => navigate('/sample-papers?class=12&subject=Humanities')}>
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
                                onClick={() => navigate(`/class/Class 12/Humanities/${subject.name}`)}
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
                        <p>Detailed answers and explanations for all humanities subjects.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/ncert')}>Access Now</button>
                    </div>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-file-alt"></i>
                        <h3>Sample Papers</h3>
                        <p>Practice with previous years' Board Exam papers.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/papers')}>Practice</button>
                    </div>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-video"></i>
                        <h3>Video Lectures</h3>
                        <p>Engaging lessons on complex historical and political topics.</p>
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

export default Class12Humanities;
