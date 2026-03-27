import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter5 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 5: Arithmetic Progressions</h1>
                    <p>Exploring sequences where patterns emerge through constant differences.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>An Arithmetic Progression (AP) is a list of numbers in which each term is obtained by adding a fixed number to the preceding term. This chapter teaches us how to find any term in an AP and how to find the sum of any number of terms.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Definitions</h3>
                        <ul>
                            <li><strong>Common Difference (d):</strong> The fixed number added to each term. It can be positive, negative, or zero.</li>
                            <li><strong>General Form:</strong> a, a+d, a+2d, a+3d, ...</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Important Formulas</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>nth Term (aₙ):</strong></p>
                            <p>aₙ = a + (n - 1)d</p>
                        </div>
                        <div className={styles.solutionBox}>
                            <p><strong>Sum of First n Terms (Sₙ):</strong></p>
                            <p>Sₙ = (n/2) [2a + (n - 1)d]</p>
                            <p>OR Sₙ = (n/2) [a + l] (where l is the last term)</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>NCERT Exercise Solutions</h3>

                        <h4>Exercise 5.2 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Find the 10th term of the AP: 2, 7, 12, ...
                        </div>
                        <div className={styles.solutionBox}>
                            a = 2, d = 7 - 2 = 5, n = 10.<br />
                            a₁₀ = a + (10 - 1)d = 2 + 9(5) = 2 + 45 = <strong>47</strong>.
                        </div>

                        <h4>Exercise 5.3 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Find the sum of the first 22 terms of the AP: 8, 3, -2, ...
                        </div>
                        <div className={styles.solutionBox}>
                            a = 8, d = 3 - 8 = -5, n = 22.<br />
                            S₂₂ = (22/2) [2(8) + (22 - 1)(-5)]<br />
                            = 11 [16 + 21(-5)] = 11 [16 - 105] = 11 [-89] = <strong>-979</strong>.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Always verify the first few terms to ensure the sequence is an AP. Remember that <strong>n</strong> must always be a positive integer. APs are widely used in calculating installments, growth rates, and patterns in nature.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter5;
