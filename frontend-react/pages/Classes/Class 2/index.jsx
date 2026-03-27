import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Class2.module.css';
import Navbar from '../../../src/components/Navbar';

const Class2Page = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigateToSubject = (subject) => {
        navigate(`/class/Class 2/${subject}`);
    };

    const toggleModal = () => setShowModal(!showModal);

    const subjects = [
        {
            name: 'English',
            topics: ['Reading Comprehension', 'Creative Writing', 'Grammar and Sentences', 'Story Building'],
            highlight: 'Literacy & Creativity'
        },
        {
            name: 'Hindi',
            topics: ['Advanced Hindi Reading', 'Story Comprehension', 'Basic Poetry', 'Language Games'],
            highlight: 'Language & Expression'
        },
        {
            name: 'Mathematics',
            topics: ['Addition and Subtraction', 'Multiplication Basics', 'Money and Time', 'Geometry Introduction'],
            highlight: 'Logic & Numbers'
        },
        {
            name: 'EVS',
            topics: ['Our Environment', 'Animals and Plants', 'Weather and Seasons', 'Community Helpers'],
            highlight: 'World Awareness'
        },
        {
            name: 'Computer',
            topics: ['Computer Operations', 'Keyboard Skills', 'Educational Games', 'Digital Citizenship'],
            highlight: 'Digital Skills'
        }
    ];

    return (
        <div className={styles.class2Page}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 2:<br />Expanding Horizons</h1>
                    <p>
                        Continue building your knowledge in Class 2. strengthening foundations in English, Hindi, Mathematics, EVS, and Computer Science through interactive learning.
                    </p>
                    <button className={styles.ctaButton} onClick={() => navigate('/login')}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className={styles.classesOverview} id="subjects">
                <div className={styles.sectionTitle}>
                    <h2>Class 2 Subjects</h2>
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
                    <h2>About Class 2 Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.infoCard}>
                        <h3>Learning Objectives</h3>
                        <p>Class 2 builds on foundational skills, focusing on advanced literacy, numeracy, and introducing more complex concepts in environmental studies and computer science.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Study Tips</h3>
                        <p>Encourage storytelling and reading aloud. Use real-life examples for math concepts like money and time.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Resources</h3>
                        <p>Access interactive worksheets, storybooks, and activity-based materials tailored for Class 2 learners.</p>
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

export default Class2Page;
