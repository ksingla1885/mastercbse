import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Class4.module.css';
import Navbar from '../../../src/components/Navbar';

const Class4Page = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigateToSubject = (subject) => {
        navigate(`/class/Class 4/${subject}`);
    };

    const toggleModal = () => setShowModal(!showModal);

    const subjects = [
        {
            name: 'English',
            topics: ['Reading Comprehension', 'Creative Writing', 'Grammar and Punctuation', 'Literature Analysis'],
            highlight: 'Language Arts'
        },
        {
            name: 'Hindi',
            topics: ['Hindi Literature', 'Essay Writing', 'Poetry Appreciation', 'Language Skills'],
            highlight: 'Bhasha Gyan'
        },
        {
            name: 'Mathematics',
            topics: ['Large Numbers', 'Fractions and Decimals', 'Geometry', 'Data Interpretation'],
            highlight: 'Advanced Math'
        },
        {
            name: 'Science',
            topics: ['Plant and Animal Life', 'Matter and Materials', 'Earth and Environment', 'Health and Nutrition'],
            highlight: 'Scientific Inquiry'
        },
        {
            name: 'Social Studies',
            topics: ['Our Country India', 'History and Civics', 'Geography Basics', 'Cultural Heritage'],
            highlight: 'Social Awareness'
        },
        {
            name: 'Computer',
            topics: ['Computer Hardware', 'Software Basics', 'Internet Safety', 'Basic Programming'],
            highlight: 'Tech Skills'
        }
    ];

    return (
        <div className={styles.class4Page}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Class 4:<br />Discovery & Growth</h1>
                    <p>
                        Discover new horizons in Class 4 with English, Hindi, Mathematics, Science, Social Studies, and Computer Science. Build analytical skills and expand your knowledge.
                    </p>
                    <button className={styles.ctaButton} onClick={() => navigate('/login')}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className={styles.classesOverview} id="subjects">
                <div className={styles.sectionTitle}>
                    <h2>Class 4 Subjects</h2>
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
                    <h2>About Class 4 Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.infoCard}>
                        <h3>Learning Objectives</h3>
                        <p>Class 4 introduces new subjects like Science and Social Studies, building analytical skills and expanding knowledge beyond basic concepts.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Study Tips</h3>
                        <p>Conduct simple science experiments at home, read maps, and discuss current events to broaden understanding.</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Resources</h3>
                        <p>Access experiment guides, historical timelines, and interactive maps specifically tailored for Class 4 students.</p>
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

export default Class4Page;
