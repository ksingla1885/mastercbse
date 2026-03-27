import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter14 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 14: Statistics</h1>
                    <p>Collecting, Analyzing, Interpreting, Presenting, and Organizing Data.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter moves from ungrouped data to grouped data analysis. We learn to calculate the three measures of central tendency: Mean (Average), Median (Middle Value), and Mode (Most Frequent Value) using various methods, including the step-deviation method.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Measures of Central Tendency</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Mean (x̄):</strong></p>
                            <ul>
                                <li>Direct Method: <strong>∑fixi / ∑fi</strong></li>
                                <li>Assumed Mean Method: <strong>a + (∑fidi / ∑fi)</strong></li>
                                <li>Step-Deviation Method: <strong>a + (∑fiui / ∑fi) × h</strong></li>
                            </ul>
                        </div>
                        <div className={styles.solutionBox}>
                            <p><strong>Mode (Mo):</strong></p>
                            <p><strong>L + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h</strong></p>
                            <p>L = lower limit of modal class, h = class size</p>
                        </div>
                        <div className={styles.solutionBox}>
                            <p><strong>Median (Me):</strong></p>
                            <p><strong>L + [(N/2 - cf) / f] × h</strong></p>
                            <p>N = total frequency, cf = cumulative frequency before median class</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Empirical Relationship</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>3 Median = Mode + 2 Mean</strong></p>
                            <p>(Approximate relation between Mean, Median, and Mode)</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>NCERT Exercise Solutions</h3>

                        <div className={styles.practiceQuestion}>
                            Find the mean of the following distribution: Class 0-10 (f=7), 10-20 (f=10), 20-30 (f=15), 30-40 (f=8), 40-50 (f=10).
                        </div>
                        <div className={styles.solutionBox}>
                            Classes: 0-10, 10-20, 20-30, 30-40, 40-50.<br />
                            Mid-points (x): 5, 15, 25, 35, 45.<br />
                            f: 7, 10, 15, 8, 10. ∑f = 50.<br />
                            fx: 35, 150, 375, 280, 450. ∑fx = 1290.<br />
                            Mean = 1290 / 50 = <strong>25.8</strong>.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Determine the median class for the following frequency distribution: Marks 0-10 (5), 10-20 (8), 20-30 (12), 30-40 (15), 40-50 (10).
                        </div>
                        <div className={styles.solutionBox}>
                            Cumulative Frequencies: 5, 13, 25, 40, 50.<br />
                            N = 50, N/2 = 25.<br />
                            The class interval just greater than or equal to cf 25 is 20-30. So, <strong>Median Class is 20-30</strong>.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Graphical Representation: Less than type and More than type Ogives. The intersection point of both ogives gives the median. Always double-check your calculations, especially with the step-deviation method.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter14;
