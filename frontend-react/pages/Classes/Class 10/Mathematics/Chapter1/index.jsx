import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter1 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 1: Real Numbers</h1>
                    <p>Mastering Euclid's Lemma, Fundamental Theorem of Arithmetic, and Irrationality Proofs.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter introduces real numbers, Euclid's division algorithm, the fundamental theorem of arithmetic, and the concept of irrational numbers. These concepts form the bedrock of number theory and algebraic manipulations in mathematics.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Core Concepts</h3>
                        <ul>
                            <li><strong>Euclid's Division Lemma:</strong> For any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r &lt; b.</li>
                            <li><strong>Fundamental Theorem of Arithmetic:</strong> Every composite number can be expressed as a product of primes, and this factorization is unique apart from the order in which the prime factors occur.</li>
                            <li><strong>Irrational Numbers:</strong> Numbers that cannot be expressed in the form p/q. Examples include √2, √3, √5, etc.</li>
                            <li><strong>Rational Numbers & Decimal Expansions:</strong> Terminating vs. non-terminating repeating decimals based on the prime factorization of the denominator.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Important Formulas & Relations</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>HCF and LCM Relation:</strong> For any two positive integers a and b:</p>
                            <p><strong>HCF(a, b) × LCM(a, b) = a × b</strong></p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>NCERT Exercise Solutions</h3>

                        <h4>Exercise 1.1 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Use Euclid’s division algorithm to find the HCF of 135 and 225.
                        </div>
                        <div className={styles.solutionBox}>
                            <strong>Step 1:</strong> 225 = 135 × 1 + 90<br />
                            <strong>Step 2:</strong> 135 = 90 × 1 + 45<br />
                            <strong>Step 3:</strong> 90 = 45 × 2 + 0<br />
                            Since the remainder is 0, the HCF is <strong>45</strong>.
                        </div>

                        <h4>Exercise 1.2 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Find the LCM and HCF of 26 and 91 and verify that LCM × HCF = product of the numbers.
                        </div>
                        <div className={styles.solutionBox}>
                            Prime Factors of 26 = 2 × 13<br />
                            Prime Factors of 91 = 7 × 13<br />
                            <strong>HCF</strong> = 13<br />
                            <strong>LCM</strong> = 2 × 7 × 13 = 182<br />
                            <strong>Verification:</strong> 182 × 13 = 2366; 26 × 91 = 2366. (Verified)
                        </div>

                        <h4>Exercise 1.3 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Prove that √5 is irrational.
                        </div>
                        <div className={styles.solutionBox}>
                            Assume √5 is rational, √5 = a/b where a, b are coprimes.<br />
                            Squaring: 5 = a²/b² ⇒ 5b² = a². So 5 divides a.<br />
                            Let a = 5c, then 5b² = 25c² ⇒ b² = 5c². So 5 divides b.<br />
                            Since both a and b have 5 as a common factor, they are not coprime. Contradiction! Hence √5 is irrational.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Focus on applying Euclid's algorithm correctly. Remember that for decimal expansions, the denominator must be of the form 2ⁿ5ᵐ for it to be terminating. Practice the contradiction method for irrationality proofs as they are frequently asked in board exams.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter1;
