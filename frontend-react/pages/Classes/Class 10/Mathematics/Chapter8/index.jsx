import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter8 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 8: Introduction to Trigonometry</h1>
                    <p>Unlocking the Relationships between Angles and Ratios in Triangles.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>Trigonometry is the branch of mathematics that deals with the relationship between the sides and angles of triangles. In this chapter, we define trigonometric ratios for acute angles, learn their values for standard angles, and delve into fundamental trigonometric identities.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Trigonometric Ratios</h3>
                        <div className={styles.solutionBox}>
                            <p>For a right triangle with acute angle θ:</p>
                            <ul>
                                <li><strong>sin θ:</strong> Opposite / Hypotenuse</li>
                                <li><strong>cos θ:</strong> Adjacent / Hypotenuse</li>
                                <li><strong>tan θ:</strong> Opposite / Adjacent (sin θ / cos θ)</li>
                                <li><strong>cosec θ:</strong> 1 / sin θ</li>
                                <li><strong>sec θ:</strong> 1 / cos θ</li>
                                <li><strong>cot θ:</strong> 1 / tan θ</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Trigonometric Tables (Standard Angles)</h3>
                        <div className={styles.solutionBox}>
                            <p>Key Values to Memorize:</p>
                            <ul>
                                <li><strong>sin 30° = 1/2</strong> | <strong>sin 45° = 1/√2</strong> | <strong>sin 60° = √3/2</strong></li>
                                <li><strong>cos 30° = √3/2</strong> | <strong>cos 45° = 1/√2</strong> | <strong>cos 60° = 1/2</strong></li>
                                <li><strong>tan 30° = 1/√3</strong> | <strong>tan 45° = 1</strong> | <strong>tan 60° = √3</strong></li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Fundamental Identities</h3>
                        <div className={styles.solutionBox}>
                            <ul>
                                <li><strong>sin² θ + cos² θ = 1</strong></li>
                                <li><strong>1 + tan² θ = sec² θ</strong></li>
                                <li><strong>1 + cot² θ = cosec² θ</strong></li>
                            </ul>
                        </div>

                        <h4>Practical Question</h4>
                        <div className={styles.practiceQuestion}>
                            If sin A = 3/4, calculate cos A and tan A.
                        </div>
                        <div className={styles.solutionBox}>
                            Let Opp = 3k, Hyp = 4k.<br />
                            By Pythagoras: Adj = √(Hyp² - Opp²) = √(16k² - 9k²) = √7k.<br />
                            <strong>cos A</strong> = Adj/Hyp = <strong>√7/4</strong>.<br />
                            <strong>tan A</strong> = Opp/Adj = <strong>3/√7</strong>.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Memorize the "SOH CAH TOA" mnemonic if helpful. The value of sin and cos can never exceed 1. Trigonometric identities are the most powerful tool for simplifying complex mathematical expressions.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter8;
