import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Class7.module.css';
import Navbar from '../../../src/components/Navbar';

const Class7Page = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigateToSubject = (subject) => {
        navigate(`/class/Class 7/${subject}`);
    };

    const toggleModal = () => setShowModal(!showModal);

    const subjects = [
        {
            name: 'English',
            topics: ['Literature Analysis', 'Advanced Grammar', 'Essay Writing', 'Reading Comprehension'],
            highlight: 'Language Mastery'
        },
        {
            name: 'Hindi',
            topics: ['Hindi Literature', 'Creative Writing', 'Poetry and Prose', 'Language Proficiency'],
            highlight: 'Sahitya Bodh'
        },
        {
            name: 'Mathematics',
            topics: ['Integers & Rationals', 'Algebra', 'Geometry', 'Data Handling'],
            highlight: 'Abstract Math'
        },
        {
            name: 'Science',
            topics: ['Physics', 'Chemistry', 'Biology', 'Environmental Science'],
            highlight: 'Scientific Concepts'
        },
        {
            name: 'Social Science',
            topics: ['History', 'Geography', 'Civics', 'Social and Political Life'],
            highlight: 'World Perspectives'
        },
        {
            name: 'Computer',
            topics: ['Computer Networks', 'Programming', 'Digital Tools', 'Web Development Basics'],
            highlight: 'Tech Innovation'
        },
        {
            name: 'Sanskrit',
            topics: ['Sanskrit Grammar', 'Literature', 'Translation', 'Cultural Studies'],
            highlight: 'Ancient Wisdom'
        }
    ];

    return (
        <div className={styles.class7Page}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 7:<br />Advancing Knowledge</h1>
                    <p>
                        Build on your knowledge in Class 7. Deepen your understanding of English, Hindi, Mathematics, Science, Social Science, Computer, and Sanskrit.
                    </p>
                    <button className={styles.ctaButton} onClick={() => navigate('/login')}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className={styles.classesOverview} id="subjects">
                <div className={styles.sectionTitle}>
                    <h2>Class 7 Subjects</h2>
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
                    <h2>About Class 7 Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.infoCard}>
                        <h3>Learning Objectives</h3>
                        <p>Class 7 focuses on deepening understanding of core subjects while preparing students for more advanced topics in higher classes.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Study Tips</h3>
                        <p>Analyze literature for deeper insights, solve math problems with multiple methods, and conduct simple science experiments.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Resources</h3>
                        <p>Access analytical tools, practice problems, and multimedia content designed specifically for Class 7 students.</p>
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

export default Class7Page;
