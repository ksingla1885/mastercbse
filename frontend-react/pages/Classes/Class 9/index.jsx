import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Class9.module.css';
import Navbar from '../../../src/components/Navbar';

const Class9 = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigateToSubject = (subject) => {
        const subjectPaths = {
            'English': 'English',
            'Hindi': 'Hindi',
            'Mathematics': 'Mathematics',
            'Science': 'Science',
            'Social Science': 'Social Science',
            'Computer Applications': 'Computer Applications'
        };

        const path = subjectPaths[subject];
        if (path) {
            navigate(`/class/Class 9/${path}`);
        } else {
            alert('Navigation path not found for ' + subject);
        }
    };

    const toggleModal = () => setShowModal(!showModal);

    const subjects = [
        {
            name: 'Mathematics',
            topics: ['Number Systems', 'Algebra', 'Coordinate Geometry', 'Statistics'],
            highlight: 'Logic & Patterns'
        },
        {
            name: 'Science',
            topics: ['Physics', 'Chemistry', 'Biology', 'Environmental Science'],
            highlight: 'Explore the Universe'
        },
        {
            name: 'English',
            topics: ['Literature', 'Grammar and Composition', 'Creative Writing', 'Oral Communication'],
            highlight: 'Master Language'
        },
        {
            name: 'Social Science',
            topics: ['History', 'Geography', 'Civics', 'Economics'],
            highlight: 'Understand Society'
        },
        {
            name: 'Computer Applications',
            topics: ['Fundamentals', 'Programming', 'Database Management', 'Web Development'],
            highlight: 'Build the Future'
        },
        {
            name: 'Hindi',
            topics: ['Literature', 'Creative Writing', 'Poetry and Prose', 'Language Skills'],
            highlight: 'Cultural Roots'
        }
    ];

    return (
        <div className={styles.class9Page}>
            <Navbar />

            <section className={styles.hero}>
                <div className={styles.blob + ' ' + styles.blob1}></div>
                <div className={styles.blob + ' ' + styles.blob2}></div>

                <div className={styles.heroContent}>
                    <h1>Class 9:<br />The Foundation Year</h1>
                    <p>
                        Elevate your academic journey with our comprehensive resources.
                        Tailored for excellence, designed for success.
                    </p>
                    <button className={styles.ctaButton} onClick={() => navigate('/premium')}>
                        Access Premium Resources
                    </button>
                </div>
            </section>

            <section className={styles.classesOverview} id="subjects">
                <div className={styles.sectionTitle}>
                    <h2>Key Subjects</h2>
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
                                    Explore More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.about} id="about">
                <div className={styles.sectionTitle}>
                    <h2>Academic Excellence</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.infoCard}>
                        <h3>Learning Objectives</h3>
                        <p>Our curriculum is designed to bridge the gap between middle school and secondary education, focusing on critical thinking and deep conceptual understanding.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Study Strategies</h3>
                        <p>We provide curated study plans and practice materials that help students master complex subjects like Mathematics and Science with ease.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Premium Support</h3>
                        <p>Unlock detailed notes, previous year questions, and interactive 3D models to make your learning more visual and permanent.</p>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <button className={styles.backBtn} onClick={() => navigate(-1)}>
                    ← Go Back
                </button>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>

            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={toggleModal}>&times;</span>
                        <h2>Unlock Your Potential</h2>
                        <p>Join thousands of students who are already using our premium tools to excel in their Class 9 journey.</p>
                        <div className={styles.modalButtons}>
                            <button className={styles.modalButton + ' ' + styles.primaryBtn} onClick={() => navigate('/premium/register')}>
                                Create Account
                            </button>
                            <button className={styles.modalButton + ' ' + styles.secondaryBtn} onClick={toggleModal}>
                                Maybe Later
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Class9;
