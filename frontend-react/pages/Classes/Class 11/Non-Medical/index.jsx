import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NonMedical.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class11NonMedical = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subjects = [
        {
            name: 'Physics',
            icon: 'fa-atom',
            description: 'Understand the fundamental laws of nature, motion, energy, and matter.',
            topics: ['Kinematics', 'Laws of Motion', 'Work, Energy & Power', 'Thermodynamics', 'Oscillations & Waves']
        },
        {
            name: 'Chemistry',
            icon: 'fa-flask',
            description: 'Explore the composition, structure, and properties of matter.',
            topics: ['Basic Concepts', 'Structure of Atom', 'Chemical Bonding', 'States of Matter', 'Equilibrium']
        },
        {
            name: 'Mathematics',
            icon: 'fa-square-root-alt',
            description: 'Master algebra, calculus, and geometry concepts.',
            topics: ['Sets & Functions', 'Trigonometry', 'Permutations & Combinations', 'Conic Sections', 'Limits & Derivatives']
        },
        {
            name: 'Computer Science',
            icon: 'fa-laptop-code',
            description: 'Learn programming, data structures, and computational thinking.',
            topics: ['Computer Organization', 'Python Programming', 'Data Handling', 'Society, Law & Ethics']
        },
        {
            name: 'English Core',
            icon: 'fa-book',
            description: 'Enhance language skills and literary appreciation.',
            topics: ['Reading Comprehension', 'Writing Skills', 'Literature', 'Grammar']
        },
        {
            name: 'Physical Education',
            icon: 'fa-dumbbell',
            description: 'Understand health, fitness, and sports science.',
            topics: ['Olympic Movement', 'Yoga & Lifestyle', 'Physical Fitness', 'Training in Sports']
        }
    ];

    return (
        <div className={styles.nonMedicalPage}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Non-Medical Stream</h1>
                    <p>Master Physics, Chemistry, and Mathematics. Build the future with careers in Engineering, Technology, and Architecture.</p>
                    <a href="#subjects" className={styles.ctaButton}>Explore Subjects</a>
                </div>
            </section>

            <section id="subjects" className={styles.subjectsSection}>
                <div className={styles.sectionTitle}>
                    <h2>Core & Elective Subjects</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.subjectsGrid}>
                    {subjects.map((subject, index) => (
                        <div key={index} className={styles.subjectCard}>
                            <div className={styles.iconWrapper}>
                                <i className={`fas ${subject.icon}`}></i>
                            </div>
                            <h3>{subject.name}</h3>
                            <p>{subject.description}</p>
                            <ul className={styles.topicList}>
                                {subject.topics.map((topic, i) => (
                                    <li key={i}>{topic}</li>
                                ))}
                            </ul>
                            <button
                                className={styles.cardButton}
                                onClick={() => navigate(`/class/Class 11/Non-Medical/${subject.name}`)}
                            >
                                Start Learning <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.resourcesSection}>
                <div className={styles.sectionTitle}>
                    <h2>Student Resources</h2>
                    <div className={styles.underLine}></div>
                </div>

                <div className={styles.resourcesGrid}>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-book-open"></i>
                        <h3>NCERT Solutions</h3>
                        <p>Detailed step-by-step solutions for JEE Mains & Advanced preparation.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/ncert')}>Access Now</button>
                    </div>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-file-alt"></i>
                        <h3>Sample Papers</h3>
                        <p>Practice with previous years' question papers and mock tests.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/papers')}>Practice</button>
                    </div>
                    <div className={styles.resourceCard}>
                        <i className="fas fa-video"></i>
                        <h3>Video Lectures</h3>
                        <p>Concept-based video tutorials for Physics and Maths.</p>
                        <button className={styles.ctaButton} onClick={() => navigate('/resources/videos')}>Watch Now</button>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Resources. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class11NonMedical;
