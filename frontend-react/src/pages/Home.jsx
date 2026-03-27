import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const ClassCard = ({ className, subjects, onNavigate }) => {
    return (
        <div className={styles.classCard}>
            <h3>{className}</h3>
            <ul>
                {subjects.slice(0, 4).map((subject, index) => (
                    <li key={index}>{subject}</li>
                ))}
                {subjects.length > 4 && <li>...and {subjects.length - 4} more</li>}
            </ul>
            <button className={styles.cardButton} onClick={onNavigate}>
                View Class <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    );
};

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const classesData = [
        { name: 'Class 1', subjects: ['English', 'Hindi', 'Mathematics', 'EVS'] },
        { name: 'Class 2', subjects: ['English', 'Hindi', 'Mathematics', 'EVS'] },
        { name: 'Class 3', subjects: ['English', 'Hindi', 'Mathematics', 'EVS'] },
        { name: 'Class 4', subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies'] },
        { name: 'Class 5', subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies'] },
        { name: 'Class 6', subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science'] },
        { name: 'Class 7', subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science'] },
        { name: 'Class 8', subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science'] },
        { name: 'Class 9', subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Applications'] },
        { name: 'Class 10', subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Applications'] },
        { name: 'Class 11', subjects: ['Medical', 'Non-Medical', 'Commerce', 'Humanities'] },
        { name: 'Class 12', subjects: ['Medical', 'Non-Medical', 'Commerce', 'Humanities'] },
    ];

    return (
        <div className={styles.homePage}>
            <Navbar />

            <section className={styles.hero} id="home">
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>

                <div className={styles.heroContent}>
                    <h1>Your Personal<br />Learning Dashboard</h1>
                    <p>Select your class below to access curated study materials, interactive chapters, and exam preparation resources tailored just for you.</p>
                    <button className={styles.ctaButton} onClick={() => scrollToSection('classes')}>
                        Start Studying <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </section>

            <section className={styles.classesOverview} id="classes">
                <div className={styles.sectionTitle}>
                    <h2>Choose Your Class</h2>
                    <p style={{ color: '#64748b', marginTop: '1rem' }}>Select a class to access tailored study materials and resources.</p>
                </div>

                <div className={styles.classesGrid}>
                    {classesData.map((cls, index) => (
                        <ClassCard
                            key={index}
                            className={cls.name}
                            subjects={cls.subjects}
                            onNavigate={() => navigate(`/class/${cls.name}`)}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.about} id="about">
                <div className={styles.sectionTitle}>
                    <h2>Why mastercbse?</h2>
                </div>

                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <i className="fas fa-book-reader" style={{ fontSize: '3rem', color: '#4f46e5', marginBottom: '1.5rem' }}></i>
                        <h3>Comprehensive Resources</h3>
                        <p>Access notes, sample papers, and video lectures for all subjects from Class 1 to 12.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <i className="fas fa-chalkboard-teacher" style={{ fontSize: '3rem', color: '#ec4899', marginBottom: '1.5rem' }}></i>
                        <h3>Expert Guidance</h3>
                        <p>Curated content by experienced educators to help you ace your exams with confidence.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <i className="fas fa-crown" style={{ fontSize: '3rem', color: '#f59e0b', marginBottom: '1.5rem' }}></i>
                        <h3>Premium Features</h3>
                        <p>Unlock advanced analytics, mock tests, and personalized learning paths with Premium.</p>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', textAlign: 'left' }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>mastercbse</h3>
                        <p>Empowering students with quality education resources.</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#home" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#classes" style={{ color: '#94a3b8', textDecoration: 'none' }}>Classes</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/signup" style={{ color: '#94a3b8', textDecoration: 'none' }}>Join Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact</h4>
                        <p>support@mastercbse.com</p>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #1e293b', marginTop: '3rem', paddingTop: '1.5rem' }}>
                    <p>&copy; 2024 mastercbse. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
