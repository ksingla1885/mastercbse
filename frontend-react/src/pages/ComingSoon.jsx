import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ComingSoon.module.css';
import Navbar from '../components/Navbar';

const ComingSoon = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.comingSoonContainer}>
            <Navbar />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>Premium Experience</h1>
                <h2 className={styles.subtitle}>Coming Soon</h2>
                <p className={styles.description}>
                    We're building something extraordinary for our premium members.
                    Get ready for exclusive study materials, mock tests, and personalized learning paths.
                </p>
                <div className={styles.timerContainer}>
                    <div className={styles.timerItem}>
                        <span className={styles.number}>??</span>
                        <span className={styles.label}>Days</span>
                    </div>
                    <div className={styles.timerItem}>
                        <span className={styles.number}>??</span>
                        <span className={styles.label}>Hours</span>
                    </div>
                    <div className={styles.timerItem}>
                        <span className={styles.number}>??</span>
                        <span className={styles.label}>Mins</span>
                    </div>
                </div>
                <div className={styles.buttonGroup}>
                    <button className={styles.backButton} onClick={() => navigate('/')}>
                        Back to Home
                    </button>
                    <button className={styles.notifyButton} onClick={() => alert('We will notify you!')}>
                        Notify Me
                    </button>
                </div>
            </div>
            <div className={styles.backgroundShapes}>
                <div className={styles.shape1}></div>
                <div className={styles.shape2}></div>
                <div className={styles.shape3}></div>
            </div>
        </div>
    );
};

export default ComingSoon;
