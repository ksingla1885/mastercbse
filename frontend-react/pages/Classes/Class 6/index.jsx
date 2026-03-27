import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Class6.module.css';
import Navbar from '../../../src/components/Navbar';

const Class6Page = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigateToSubject = (subject) => {
        navigate(`/class/Class 6/${subject}`);
    };

    const toggleModal = () => setShowModal(!showModal);

    const subjects = [
        {
            name: 'English',
            topics: ['Literature Study', 'Grammar and Composition', 'Reading Comprehension', 'Creative Writing'],
            highlight: 'Literary Arts'
        },
        {
            name: 'Hindi',
            topics: ['Hindi Literature', 'Essay and Letter Writing', 'Poetry Analysis', 'Language Skills'],
            highlight: 'Bhasha Kaushal'
        },
        {
            name: 'Mathematics',
            topics: ['Integers and Fractions', 'Algebra Basics', 'Geometry', 'Data Handling'],
            highlight: 'Conceptual Math'
        },
        {
            name: 'Science',
            topics: ['Physics Fundamentals', 'Chemistry Basics', 'Biology Introduction', 'Environmental Science'],
            highlight: 'Core Sciences'
        },
        {
            name: 'Social Science',
            topics: ['History of India', 'Geography', 'Civics', 'Social and Political Life'],
            highlight: 'Social Studies'
        },
        {
            name: 'Computer',
            topics: ['Computer Hardware', 'Software Applications', 'Programming Basics', 'Internet and Web'],
            highlight: 'Tech Foundation'
        },
        {
            name: 'Sanskrit',
            topics: ['Sanskrit Grammar', 'Basic Texts', 'Translation', 'Cultural Significance'],
            highlight: 'Classical Language'
        }
    ];

    return (
        <div className={styles.class6Page}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 6:<br />Middle School Entry</h1>
                    <p>
                        Welcome to middle school! Class 6 introduces structured learning across English, Hindi, Mathematics, Science, Social Science, Computer, and Sanskrit.
                    </p>
                    <button className={styles.ctaButton} onClick={() => navigate('/login')}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className={styles.classesOverview} id="subjects">
                <div className={styles.sectionTitle}>
                    <h2>Class 6 Subjects</h2>
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
                    <h2>About Class 6 Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.infoCard}>
                        <h3>Learning Objectives</h3>
                        <p>Class 6 marks a pivotal transition to middle school, with a broader curriculum that fosters critical thinking and introduces classical languages.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Study Tips</h3>
                        <p>Create mind maps for science and social studies, practice Sanskrit daily, and focus on understanding core mathematical concepts.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Resources</h3>
                        <p>Explore interactive diagrams, language learning tools for Sanskrit, and comprehensive practice materials for all subjects.</p>
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

export default Class6Page;
