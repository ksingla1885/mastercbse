import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Class11.module.css';
import Navbar from '../../../src/components/Navbar';

const Class11Page = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigateToStream = (stream) => {
        navigate(`/class/Class 11/${stream}`);
    };

    const toggleModal = () => setShowModal(!showModal);

    const streams = [
        {
            name: 'Medical',
            topics: ['Physics', 'Chemistry', 'Biology', 'English', 'Physical Education'],
            highlight: 'Life Sciences'
        },
        {
            name: 'Non-Medical',
            topics: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Computer Science'],
            highlight: 'Engineering & Tech'
        },
        {
            name: 'Commerce',
            topics: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English'],
            highlight: 'Business & Finance'
        },
        {
            name: 'Humanities',
            topics: ['History', 'Political Science', 'Geography', 'Psychology', 'English'],
            highlight: 'Social Sciences'
        }
    ];

    return (
        <div className={styles.class11Page}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 11:<br />Your Path Begins</h1>
                    <p>
                        Welcome to Senior Secondary. Choose your specialized stream—Medical, Non-Medical, Commerce, or Humanities—and start your journey toward your career goals.
                    </p>
                    <button className={styles.ctaButton} onClick={() => navigate('/login')}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className={styles.classesOverview} id="streams">
                <div className={styles.sectionTitle}>
                    <h2>Class 11 Streams</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.classesGrid}>
                    {streams.map((stream, index) => (
                        <div key={index} className={styles.classCard}>
                            <span className={styles.subjectHighlight}>{stream.highlight}</span>
                            <h3>{stream.name}</h3>
                            <ul>
                                {stream.topics.map((topic, idx) => (
                                    <li key={idx}>{topic}</li>
                                ))}
                            </ul>
                            <div className={styles.cardFooter}>
                                <button className={styles.ctaButton} onClick={() => navigateToStream(stream.name)}>
                                    Explore Stream
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.about} id="about">
                <div className={styles.sectionTitle}>
                    <h2>About Class 11 Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.infoCard}>
                        <h3>Learning Objectives</h3>
                        <p>Class 11 is the foundation for specialized higher education. It introduces in-depth concepts that are crucial for board exams and competitive entrance tests.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Study Tips</h3>
                        <p>Focus on conceptual clarity over rote learning. Practice numericals daily for Science/Commerce streams and develop critical analysis for Humanities.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Resources</h3>
                        <p>Access stream-specific study notes, previous year questions, and competitive exam preparation guides tailored for Class 11.</p>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <button className={styles.backBtn} onClick={() => navigate(-1)}>
                    ← Go Back
                </button>
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

export default Class11Page;
