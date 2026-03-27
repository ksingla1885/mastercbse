import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Class12.module.css';
import Navbar from '../../../src/components/Navbar';

const Class12Page = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigateToStream = (stream) => {
        navigate(`/class/Class 12/${stream}`);
    };

    const toggleModal = () => setShowModal(!showModal);

    const streams = [
        {
            name: 'Medical',
            topics: ['Physics', 'Chemistry', 'Biology', 'English', 'Physical Education'],
            highlight: 'Medicine & Research'
        },
        {
            name: 'Non-Medical',
            topics: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Computer Science'],
            highlight: 'Engineering & Innovation'
        },
        {
            name: 'Commerce',
            topics: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English'],
            highlight: 'Corp & Finance'
        },
        {
            name: 'Humanities',
            topics: ['History', 'Political Science', 'Geography', 'Psychology', 'English'],
            highlight: 'Arts & Social Sciences'
        }
    ];

    return (
        <div className={styles.class12Page}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 12:<br />The Final Step</h1>
                    <p>
                        Master your board exams and prepare for university entrance with specialized resources for Medical, Non-Medical, Commerce, and Humanities streams.
                    </p>
                    <button className={styles.ctaButton} onClick={() => navigate('/login')}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className={styles.classesOverview} id="streams">
                <div className={styles.sectionTitle}>
                    <h2>Class 12 Streams</h2>
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
                    <h2>About Class 12 Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.infoCard}>
                        <h3>Learning Objectives</h3>
                        <p>Class 12 is the culmination of school education. Our resources focus on board exam excellence and competitive exam readiness.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Study Tips</h3>
                        <p>Create a balanced study schedule, practice previous year papers extensively, and take mock tests for time management.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Resources</h3>
                        <p>Comprehensive board preparation kits, entrance exam mock tests (JEE/NEET/CUET), and career guidance materials.</p>
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

export default Class12Page;
