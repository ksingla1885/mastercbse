import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Class3.module.css';
import Navbar from '../../../src/components/Navbar';

const Class3Page = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigateToSubject = (subject) => {
        navigate(`/class/Class 3/${subject}`);
    };

    const toggleModal = () => setShowModal(!showModal);

    const subjects = [
        {
            name: 'English',
            topics: ['Advanced Reading', 'Creative Writing', 'Grammar Rules', 'Literature Appreciation'],
            highlight: 'Literacy & Expression'
        },
        {
            name: 'Hindi',
            topics: ['Hindi Literature', 'Composition Writing', 'Poetry and Stories', 'Language Structure'],
            highlight: 'Bhasha aur Sahitya'
        },
        {
            name: 'Mathematics',
            topics: ['Multiplication & Division', 'Fractions Basics', 'Data Handling', 'Geometry Concepts'],
            highlight: 'Advanced Numeracy'
        },
        {
            name: 'EVS',
            topics: ['Environmental Science', 'Living & Non-living', 'Earth and Universe', 'Sustainable Living'],
            highlight: 'Eco Awareness'
        },
        {
            name: 'Computer',
            topics: ['Computer Applications', 'Internet Basics', 'Word Processing', 'Digital Safety'],
            highlight: 'Digital Literacy'
        }
    ];

    return (
        <div className={styles.class3Page}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 3:<br />Building Confidence</h1>
                    <p>
                        Strengthen your skills in Class 3 with English, Hindi, Mathematics, EVS, and Computer Science. Dive deeper into concepts and build learning confidence.
                    </p>
                    <button className={styles.ctaButton} onClick={() => navigate('/login')}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className={styles.classesOverview} id="subjects">
                <div className={styles.sectionTitle}>
                    <h2>Class 3 Subjects</h2>
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
                    <h2>About Class 3 Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.infoCard}>
                        <h3>Learning Objectives</h3>
                        <p>Class 3 emphasizes strengthening core skills in language, mathematics, and environmental awareness while introducing more advanced concepts in computer applications.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Study Tips</h3>
                        <p>Read age-appropriate books daily, practice math problems with real-world examples, and discuss environmental issues with family.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Resources</h3>
                        <p>Access comprehensive worksheets, project ideas, and interactive tools designed for Class 3 students to enhance learning.</p>
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

export default Class3Page;
