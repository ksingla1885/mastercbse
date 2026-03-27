import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Class10.module.css';
import Navbar from '../../../src/components/Navbar';

const Class10 = () => {
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
            navigate(`/class/Class 10/${path}`);
        } else {
            alert('Navigation path not found for ' + subject);
        }
    };

    const toggleModal = () => setShowModal(!showModal);

    const subjects = [
        {
            name: 'Mathematics',
            topics: ['Real Numbers', 'Polynomials', 'Coordinate Geometry', 'Trigonometry'],
            highlight: 'Logic & Precision'
        },
        {
            name: 'Science',
            topics: ['Chemical Substances', 'World of Living', 'Natural Phenomena', 'Effects of Current'],
            highlight: 'Scientific Discovery'
        },
        {
            name: 'English',
            topics: ['First Flight', 'Footprints without Feet', 'Grammar', 'Creative Writing'],
            highlight: 'Master Language'
        },
        {
            name: 'Social Science',
            topics: ['India & Contemporary World II', 'Contemporary India II', 'Democratic Politics II', 'Understanding Economic Development'],
            highlight: 'Global Awareness'
        },
        {
            name: 'Computer Applications',
            topics: ['Networking', 'HTML/CSS', 'Cyber Ethics', 'Python Programming'],
            highlight: 'Tech Innovation'
        },
        {
            name: 'Hindi',
            topics: ['Kshitij II', 'Kritika II', 'Sanchayan II', 'Vyakaran'],
            highlight: 'Cultural Roots'
        }
    ];

    return (
        <div className={styles.class10Page}>
            <Navbar />

            <section className={styles.hero}>
                <div className={styles.blob + ' ' + styles.blob1}></div>
                <div className={styles.blob + ' ' + styles.blob2}></div>

                <div className={styles.heroContent}>
                    <h1>Class 10:<br />The Pinnacle Year</h1>
                    <p>
                        Scale the heights of academic success with our premium board exam resources.
                        Expertly crafted for your final step in secondary education.
                    </p>
                    <button className={styles.ctaButton} onClick={() => navigate('/premium')}>
                        Prepare for Boards
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
                    <h2>Board Exam Mastery</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.infoCard}>
                        <h3>Success Strategies</h3>
                        <p>Detailed chapter-wise analysis and high-yield topics to ensure you're fully prepared for the CBSE board examinations.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Practice Makes Perfect</h3>
                        <p>Access our vast repository of previous years' question papers and mock tests designed to simulate the real exam environment.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Premium Insights</h3>
                        <p>Unlock exclusive video tutorials and quick-revision mind maps that simplify complex concepts for faster learning.</p>
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
                        <h2>Ready to Ace your Boards?</h2>
                        <p>Join thousands of students who are already using our premium tools to excel in their Class 10 board exams.</p>
                        <div className={styles.modalButtons}>
                            <button className={styles.modalButton + ' ' + styles.primaryBtn} onClick={() => navigate('/premium')}>
                                Go Premium
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

export default Class10;
