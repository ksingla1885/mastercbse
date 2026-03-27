import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Humanities.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class11Humanities = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subjects = [
        {
            name: 'History',
            icon: 'fa-landmark',
            description: 'Explore the rich tapestry of human civilization and historical events.',
            topics: ['From the Beginning of Time', 'Writing and City Life', 'An Empire Across Three Continents', 'The Central Islamic Lands', 'Nomadic Empires']
        },
        {
            name: 'Political Science',
            icon: 'fa-balance-scale',
            description: 'Understand political theories, institutions, and governance.',
            topics: ['Political Theory', 'Freedom and Equality', 'Social Justice and Rights', 'Constitution at Work']
        },
        {
            name: 'Geography',
            icon: 'fa-globe-asia',
            description: 'Study the Earth\'s physical features and human-environment interactions.',
            topics: ['Geography as a Discipline', 'Evolution of the Earth', 'Interior of the Earth', 'Geomorphic Processes', 'Climate']
        },
        {
            name: 'Economics',
            icon: 'fa-chart-pie',
            description: 'Understand economic theories and their real-world applications.',
            topics: ['Indian Economy (1950-1990)', 'Liberalisation', 'Poverty', 'Human Capital Formation']
        },
        {
            name: 'Sociology',
            icon: 'fa-users',
            description: 'Study of society, social institutions, and social relationships.',
            topics: ['Sociology and Society', 'Social Institutions', 'Culture and Socialization', 'Social Change']
        },
        {
            name: 'Psychology',
            icon: 'fa-brain',
            description: 'Explore the human mind and behavior.',
            topics: ['Methods of Enquiry', 'Human Behavior', 'Human Development', 'Sensory Processes']
        },
        {
            name: 'English Core',
            icon: 'fa-book',
            description: 'Enhance language skills and literary appreciation.',
            topics: ['Reading Comprehension', 'Writing Skills', 'Literature: Prose & Poetry', 'Fiction and Drama']
        }
    ];

    return (
        <div className={styles.humanitiesPage}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Humanities Stream</h1>
                    <p>Explore the diverse world of social sciences, arts, and languages. Develop critical thinking and a deep understanding of human society.</p>
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
                                onClick={() => navigate(`/class/Class 11/Humanities/${subject.name}`)}
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
                        <p>Chapter-wise solutions for all humanities subjects with detailed explanations.</p>
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
                        <p>Engaging video lessons for History, Pol Science, and Geography.</p>
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

export default Class11Humanities;
