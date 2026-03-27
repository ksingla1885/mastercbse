import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Medical.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class12Medical = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subjects = [
        {
            name: 'Biology',
            icon: 'fa-dna',
            description: 'Genetics, Evolution, Ecology, and Human Physiology.',
            topics: ['Reproduction', 'Genetics & Evolution', 'Biology & Human Welfare', 'Biotechnology', 'Ecology']
        },
        {
            name: 'Physics',
            icon: 'fa-atom',
            description: 'Electromagnetism, Optics, and Modern Physics concepts.',
            topics: ['Electrostatics', 'Current Electricity', 'Magnetic Effects', 'Optics', 'Semiconductors']
        },
        {
            name: 'Chemistry',
            icon: 'fa-flask',
            description: 'Advanced Organic, Inorganic, and Physical Chemistry.',
            topics: ['Solutions & Kinetics', 'Electrochemistry', 'd & f block Elements', 'Organic Compounds', 'Biomolecules']
        },
        {
            name: 'English Core',
            icon: 'fa-book',
            description: 'Literature, Reading Comprehension, and Advanced Writing.',
            topics: ['Reading Skills', 'Writing Skills & Grammar', 'Flamingo (Prose/Poetry)', 'Vistas (Supplementary)']
        },
        {
            name: 'Physical Education',
            icon: 'fa-dumbbell',
            description: 'Sports Scinece, Yoga, and Lifestyle management.',
            topics: ['Planning in Sports', 'Yoga & Nutrition', 'Biomechanics', 'Physiology & Injuries', 'Training']
        },
        {
            name: 'Computer Science',
            icon: 'fa-laptop-code',
            description: '(Optional) Python programming and database concepts.',
            topics: ['Python Functions', 'File Handling', 'Data Structures', 'SQL & Networks']
        }
    ];

    return (
        <div className={styles.medicalPage}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 12 Medical</h1>
                    <p>Excel in NEET and Board Exams. Master Biology, Chemistry, and Physics with our specialized curriculum.</p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                        <a href="#subjects" className={styles.ctaButton}>Explore Subjects</a>
                        <button className={styles.samplePaperBtn} onClick={() => navigate('/sample-papers?class=12&subject=Medical')}>
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
                                onClick={() => navigate(`/class/Class 12/Medical/${subject.name}`)}
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
                        <i className="fas fa-microscope"></i>
                        <h3>NEET Prep Material</h3>
                        <p>High-yield notes and question banks tailored for NEET UG.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/neet')}>Access Now</button>
                    </div>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-file-medical-alt"></i>
                        <h3>Mock Tests</h3>
                        <p>Full-syllabus mock tests for Boards and Medical Entrance.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/mock-tests')}>Start Test</button>
                    </div>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-video"></i>
                        <h3>Biology Visuals</h3>
                        <p>3D animations and diagrams for complex biological processes.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/visuals')}>Watch Now</button>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Resources. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class12Medical;
