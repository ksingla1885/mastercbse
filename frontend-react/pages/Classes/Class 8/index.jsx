import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Class8.module.css';
import Navbar from '../../../src/components/Navbar';

const Class8Page = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigateToSubject = (subject) => {
        navigate(`/class/Class 8/${subject}`);
    };

    const toggleModal = () => setShowModal(!showModal);

    const subjects = [
        {
            name: 'English',
            topics: ['Literature Study', 'Advanced Grammar', 'Essay and Report Writing', 'Critical Analysis'],
            highlight: 'Literary & Rhetoric'
        },
        {
            name: 'Hindi',
            topics: ['Hindi Literature', 'Creative Writing', 'Poetry and Prose', 'Language Mastery'],
            highlight: 'Rachanatmak Lekhan'
        },
        {
            name: 'Mathematics',
            topics: ['Rational Numbers', 'Linear Equations', 'Geometry', 'Data Handling'],
            highlight: 'Logical Reasoning'
        },
        {
            name: 'Science',
            topics: ['Physics', 'Chemistry', 'Biology', 'Environmental Science'],
            highlight: 'Practical Science'
        },
        {
            name: 'Social Science',
            topics: ['History', 'Geography', 'Civics', 'Social and Political Life'],
            highlight: 'Society & State'
        },
        {
            name: 'Computer',
            topics: ['Computer Hardware', 'Software Applications', 'Programming', 'Web Technologies'],
            highlight: 'Digital Innovation'
        },
        {
            name: 'Sanskrit',
            topics: ['Sanskrit Grammar', 'Literature', 'Translation', 'Cultural Studies'],
            highlight: 'Classical Heritage'
        }
    ];

    return (
        <div className={styles.class8Page}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 8:<br />Pre-High School</h1>
                    <p>
                        Prepare for high school with Class 8. Master essential concepts in English, Hindi, Mathematics, Science, Social Science, Computer, and Sanskrit.
                    </p>
                    <button className={styles.ctaButton} onClick={() => navigate('/login')}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className={styles.classesOverview} id="subjects">
                <div className={styles.sectionTitle}>
                    <h2>Class 8 Subjects</h2>
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
                    <h2>About Class 8 Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.infoCard}>
                        <h3>Learning Objectives</h3>
                        <p>Class 8 prepares students for high school by consolidating knowledge and introducing more complex concepts across all subjects.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Study Tips</h3>
                        <p>Write essays and reports for practice, solve challenging math problems, and engage in debates for social science.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Resources</h3>
                        <p>Access comprehensive revision notes, practice tests, and interactive simulations tailored for Class 8 students.</p>
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

export default Class8Page;
