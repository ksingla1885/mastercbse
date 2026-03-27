import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Class5.module.css';
import Navbar from '../../../src/components/Navbar';

const Class5Page = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigateToSubject = (subject) => {
        navigate(`/class/Class 5/${subject}`);
    };

    const toggleModal = () => setShowModal(!showModal);

    const subjects = [
        {
            name: 'English',
            topics: ['Advanced Reading', 'Essay Writing', 'Grammar Mastery', 'Literary Appreciation'],
            highlight: 'Advanced Literacy'
        },
        {
            name: 'Hindi',
            topics: ['Hindi Literature', 'Creative Writing', 'Poetry and Prose', 'Language Proficiency'],
            highlight: 'Sahitya & Rachna'
        },
        {
            name: 'Mathematics',
            topics: ['Fractions and Decimals', 'Percentages', 'Geometry', 'Problem Solving'],
            highlight: 'Complex Logic'
        },
        {
            name: 'Science',
            topics: ['Biology Basics', 'Chemistry Introduction', 'Physics Concepts', 'Environmental Science'],
            highlight: 'Scientific Foundations'
        },
        {
            name: 'Social Studies',
            topics: ['Indian History', 'Geography of India', 'Civics and Government', 'World Cultures'],
            highlight: 'Civic Awareness'
        },
        {
            name: 'Computer',
            topics: ['Computer Networks', 'Programming Basics', 'Digital Tools', 'Cyber Security'],
            highlight: 'IT Skills'
        }
    ];

    return (
        <div className={styles.class5Page}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 5:<br />Middle School Prep</h1>
                    <p>
                        Prepare for middle school in Class 5. Master subjects like English, Hindi, Mathematics, Science, Social Studies, and Computer with our focused resources.
                    </p>
                    <button className={styles.ctaButton} onClick={() => navigate('/login')}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className={styles.classesOverview} id="subjects">
                <div className={styles.sectionTitle}>
                    <h2>Class 5 Subjects</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.classesGrid}>
                    {subjects.map((subject, index) => (
                        <div key={index} className={styles.classCard}>
                            <span className={styles.subjectHighlight}>{subject.highlight}</span>
                            <h3>{subject.name}</h3>
                            <ul>
                                {subject.topics.map((topic, idx) => (
                                    <li key={idx}>{topic}</li>
                                ))}
                            </ul>
                            <div className={styles.cardFooter}>
                                <button className={styles.ctaButton} onClick={() => navigateToSubject(subject.name)}>
                                    Explore Subject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.about} id="about">
                <div className={styles.sectionTitle}>
                    <h2>About Class 5 Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.infoCard}>
                        <h3>Learning Objectives</h3>
                        <p>Class 5 prepares students for middle school by deepening subject knowledge and introducing more complex scientific and social concepts.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Study Tips</h3>
                        <p>Maintain a reading journal, practice math problems regularly, and discuss historical events to build a strong foundation.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Resources</h3>
                        <p>Access practice tests, project templates, and multimedia content designed to support the transition to middle school.</p>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Resources. All rights reserved.</p>
            </footer>

            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={toggleModal}>&times;</span>
                        <h2>Join Our Learning Community</h2>
                        <p>Sign up or log in to access personalized features, track your progress, and get the most out of our educational resources!</p>
                        <div className={styles.modalButtons}>
                            <button className={`${styles.modalButton} ${styles.primaryBtn}`} onClick={() => alert('Login functionality would be implemented here')}>
                                Sign Up
                            </button>
                            <button className={`${styles.modalButton} ${styles.secondaryBtn}`} onClick={toggleModal}>
                                Maybe Later
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Class5Page;
