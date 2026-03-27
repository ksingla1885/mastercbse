import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Class1.module.css';
import Navbar from '../../../src/components/Navbar';

const Class1Page = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigateToSubject = (subject) => {
        // Map subject names to their respective routes if needed, or use direct naming convention
        navigate(`/class/Class 1/${subject}`);
    };

    const toggleModal = () => setShowModal(!showModal);

    const subjects = [
        {
            name: 'English',
            topics: ['Basic Reading and Writing', 'Vocabulary Building', 'Grammar Basics', 'Story Comprehension'],
            highlight: 'Literacy & Grammar'
        },
        {
            name: 'Hindi',
            topics: ['Basic Hindi Reading', 'Letter Recognition', 'Simple Sentences', 'Story Telling'],
            highlight: 'Language & Culture'
        },
        {
            name: 'Mathematics',
            topics: ['Numbers 1-100', 'Basic Addition & Subtraction', 'Shapes and Patterns', 'Measurement'],
            highlight: 'Numbers & Logic'
        },
        {
            name: 'EVS',
            topics: ['Environmental Awareness', 'Plants and Animals', 'Our Surroundings', 'Health and Hygiene'],
            highlight: 'Nature & Awareness'
        },
        {
            name: 'Computer',
            topics: ['Computer Basics', 'Parts of a Computer', 'Simple Drawing Tools', 'Digital Safety'],
            highlight: 'Digital Basics'
        }
    ];

    return (
        <div className={styles.class1Page}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 1:<br />The First Step</h1>
                    <p>
                        Explore the foundational subjects for Class 1. Build a strong base in English, Hindi, Mathematics, EVS, and Computer Science with our engaging resources.
                    </p>
                    <button className={styles.ctaButton} onClick={() => navigate('/login')}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className={styles.classesOverview} id="subjects">
                <div className={styles.sectionTitle}>
                    <h2>Class 1 Subjects</h2>
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
                    <h2>About Class 1 Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.infoCard}>
                        <h3>Learning Objectives</h3>
                        <p>Class 1 focuses on building foundational skills in literacy, numeracy, and basic computer knowledge through engaging and age-appropriate content.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Study Tips</h3>
                        <p>Make learning fun with games and activities. Practice daily reading and writing, and use visual aids for mathematics.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Resources</h3>
                        <p>Access worksheets, interactive activities, and supplementary materials designed specifically for Class 1 students.</p>
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

export default Class1Page;
