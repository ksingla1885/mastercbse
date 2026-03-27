import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';
import './history.css'

const History = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigateToChapter = (chapterName) => {
        navigate(chapterName);
    };

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Class 10 History</h1>
                    <p>Explore the rise of nationalism and key historical events.</p>
                    <button className={styles.ctaButton} onClick={() => navigate('/login')}>Get Started</button>
                </div>
            </header>

            <section className={styles.chaptersOverview} id="chapters">
                <h2>Class 10 History Chapters</h2>
                <div className={styles.chaptersGrid}>
                    <div className={styles.chapterCard}>
                        <h3>Chapter 1: The Rise of Nationalism in Europe</h3>
                        <p>French Revolution, Napoleon, and unifications.</p>
                        <button className={styles.ctaButton} onClick={() => navigateToChapter('Chapter1')}>Read Chapter</button>
                    </div>

                    <div className={styles.chapterCard}>
                        <h3>Chapter 2: Nationalism in India</h3>
                        <p>Indian freedom struggle and key figures.</p>
                        <button className={styles.ctaButton} onClick={() => navigateToChapter('Chapter2')}>Read Chapter</button>
                    </div>

                    <div className={styles.chapterCard}>
                        <h3>Chapter 3: The Making of a Global World</h3>
                        <p>Globalization and economic changes.</p>
                        <button className={styles.ctaButton} onClick={() => navigateToChapter('Chapter3')}>Read Chapter</button>
                    </div>

                    <div className={styles.chapterCard}>
                        <h3>Chapter 4: The Age of Industrialisation</h3>
                        <p>Industrial Revolution and its impacts.</p>
                        <button className={styles.ctaButton} onClick={() => navigateToChapter('Chapter4')}>Read Chapter</button>
                    </div>

                    <div className={styles.chapterCard}>
                        <h3>Chapter 5: Print Culture and the Modern World</h3>
                        <p>Print technology and its impact on society.</p>
                        <button className={styles.ctaButton} onClick={() => navigateToChapter('Chapter5')}>Read Chapter</button>
                    </div>
                </div>
            </section>

            <section className={styles.about} id="about">
                <div className={styles.chaptersOverview}>
                    <h2>About Class 10 History Resources</h2>
                    <div className={styles.chaptersGrid}>
                        <div className={styles.chapterCard}>
                            <h3>Learning Objectives</h3>
                            <p>Class 10 History focuses on nationalism, industrialization, and global interactions to understand modern world formation.</p>
                        </div>

                        <div className={styles.chapterCard}>
                            <h3>Key Topics</h3>
                            <ul>
                                <li>French Revolution and Napoleon</li>
                                <li>Indian Nationalism</li>
                                <li>Global Economy</li>
                                <li>Industrial Revolution</li>
                            </ul>
                        </div>

                        <div className={styles.chapterCard}>
                            <h3>Study Tips</h3>
                            <ul>
                                <li>Use timelines for events</li>
                                <li>Analyze causes and effects</li>
                                <li>Connect to current events</li>
                                <li>Practice map-based questions</li>
                            </ul>
                        </div>

                        <div className={styles.chapterCard}>
                            <h3>Resources</h3>
                            <p>Access summaries, questions, and activities for Class 10 History.</p>
                            <button className={styles.ctaButton} onClick={() => navigate('/premium')}>Access Resources</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default History;
