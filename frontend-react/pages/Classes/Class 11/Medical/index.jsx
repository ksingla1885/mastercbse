import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Medical.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class11Medical = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subjects = [
        {
            name: 'Biology',
            icon: 'fa-dna',
            description: 'Explore the diversity of life, from cellular structures to complex organisms.',
            topics: ['Diversity in Living World', 'Structural Organization', 'Cell: Structure & Function', 'Plant Physiology', 'Human Physiology']
        },
        {
            name: 'Chemistry',
            icon: 'fa-flask',
            description: 'Understand the composition, structure, and properties of matter.',
            topics: ['Basic Concepts', 'Structure of Atom', 'Chemical Bonding', 'Thermodynamics', 'Redox Reactions']
        },
        {
            name: 'Physics',
            icon: 'fa-atom',
            description: 'Discover the fundamental laws governing the physical world.',
            topics: ['Kinematics', 'Laws of Motion', 'Work, Energy & Power', 'Gravitation', 'Thermodynamics']
        },
        {
            name: 'English Core',
            icon: 'fa-book',
            description: 'Enhance language skills and literary appreciation.',
            topics: ['Reading Comprehension', 'Writing Skills', 'Literature: Prose & Poetry', 'Grammar']
        },
        {
            name: 'Physical Education',
            icon: 'fa-dumbbell',
            description: 'Understand health, fitness, and sports science.',
            topics: ['Trends in PE', 'Olympic Movement', 'Yoga & Lifestyle', 'Physical Fitness', 'Training in Sports']
        }
    ];

    return (
        <div className={styles.medicalPage}>
            <Navbar />

            <section className={styles.hero}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Medical Stream</h1>
                    <p>Dive into the fascinating world of life sciences. Build a robust foundation for NEET, MBBS, and research careers.</p>
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
                                onClick={() => navigate(`/class/Class 11/Medical/${subject.name}`)}
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
                        <p>Comprehensive step-by-step solutions for NEET preparation.</p>
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
                        <p>Visual explanations for complex biological and chemical processes.</p>
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

export default Class11Medical;
