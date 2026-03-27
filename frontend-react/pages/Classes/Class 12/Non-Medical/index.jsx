import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NonMedical.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class12NonMedical = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subjects = [
        {
            name: 'Physics',
            icon: 'fa-atom',
            description: 'Advanced concepts in electricity, magnetism, optics, and modern physics.',
            topics: ['Electrostatics & Magnetism', 'Current Electricity', 'Optics & Wave Optics', 'Dual Nature of Matter', 'Atoms & Nuclei']
        },
        {
            name: 'Chemistry',
            icon: 'fa-flask',
            description: 'In-depth study of Physical, Organic, and Inorganic chemistry for boards & JEE.',
            topics: ['Solid State & Solutions', 'Electrochemistry', 'Chemical Kinetics', 'Coordination Compounds', 'Organic Chemistry']
        },
        {
            name: 'Mathematics',
            icon: 'fa-square-root-alt',
            description: 'Advanced calculus, vectors, and 3D geometry for engineering entrance.',
            topics: ['Relations & Functions', 'Calculus (Differentiation & Integration)', 'Vectors & 3D Geometry', 'Probability', 'Matrices & Determinants']
        },
        {
            name: 'Computer Science',
            icon: 'fa-laptop-code',
            description: 'Advanced programming with Python, SQL, and networking concepts.',
            topics: ['Python (Functions, File Handling)', 'Networking Concepts', 'Database Management', 'SQL Queries', 'Stack & Queue']
        },
        {
            name: 'English Core',
            icon: 'fa-book',
            description: 'Refine reading, writing, and analytical skills for board exams.',
            topics: ['Reading Comprehension', 'Advanced Writing Skills', 'Flamingo (Prose & Poetry)', 'Vistas (Supplementary)']
        },
        {
            name: 'Physical Education',
            icon: 'fa-dumbbell',
            description: 'Sports planning, biomechanics, and psychology in sports.',
            topics: ['Planning in Sports', 'Sports & Nutrition', 'Yoga & Lifestyle', 'Biomechanics', 'Physiology & Injuries']
        }
    ];

    return (
        <div className={styles.nonMedicalPage}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 12 Non-Medical</h1>
                    <p>The final lap. Master Physics, Chemistry, and Maths to ace your Board Exams and crack JEE Mains &amp; Advanced.</p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                        <a href="#subjects" className={styles.ctaButton}>Explore Subjects</a>
                        <button className={styles.samplePaperBtn} onClick={() => navigate('/sample-papers?class=12&subject=Non-Medical')}>
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
                                onClick={() => navigate(`/class/Class 12/Non-Medical/${subject.name}`)}
                            >
                                Start Learning <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.resourcesSection}>
                <div className={styles.sectionTitle}>
                    <h2>Exam Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.resourcesGrid}>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-book-open"></i>
                        <h3>JEE Prep Material</h3>
                        <p>Specialized study notes and problem sets for JEE Mains & Advanced.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/jee')}>Access Now</button>
                    </div>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-file-alt"></i>
                        <h3>Mock Tests</h3>
                        <p>Full-length mock tests for Board Exams and JEE.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/mock-tests')}>Start Test</button>
                    </div>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-video"></i>
                        <h3>One-Shot Revisions</h3>
                        <p>Quick revision videos for last-minute exam preparation.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/revision')}>Watch Now</button>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Resources. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class12NonMedical;
