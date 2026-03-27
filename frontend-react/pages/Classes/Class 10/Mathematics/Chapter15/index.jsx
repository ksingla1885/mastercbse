import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter15 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 15: Probability</h1>
                    <p>Quantifying Uncertainty and Predicting Outcomes.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter introduces the theoretical approach to probability. We learn to measure the chance of an event's occurrence numerically. From tossing coins to rolling dice and picking cards, we explore various random experiments.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Basic Concepts</h3>
                        <ul>
                            <li><strong>Experiment:</strong> An operation which can produce some well-defined outcomes.</li>
                            <li><strong>Random Experiment:</strong> An experiment in which all possible outcomes are known, but the exact outcome cannot be predicted.</li>
                            <li><strong>Event (E):</strong> A collection of some outcomes of the experiment.</li>
                            <li><strong>Sample Space (S):</strong> The set of all possible outcomes.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Probability Formula</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>P(E) = Number of Favorable Outcomes / Total Number of Possible Outcomes</strong></p>
                            <p>0 ≤ P(E) ≤ 1</p>
                            <p>P(Sure Event) = 1 | P(Impossible Event) = 0</p>
                            <p><strong>P(E) + P(not E) = 1</strong></p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>NCERT Exercise Solutions</h3>

                        <div className={styles.practiceQuestion}>
                            A die is thrown once. Find the probability of getting a prime number.
                        </div>
                        <div className={styles.solutionBox}>
                            Total outcomes (S) = {'{1, 2, 3, 4, 5, 6}'} ⇒ n(S) = 6.<br />
                            Prime numbers (E) = {'{2, 3, 5}'} ⇒ n(E) = 3.<br />
                            P(Prime) = 3/6 = <strong>1/2</strong>.
                        </div>

                        <div className={styles.practiceQuestion}>
                            One card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting a King of red color.
                        </div>
                        <div className={styles.solutionBox}>
                            Total cards n(S) = 52.<br />
                            Red Kings (Hearts + Diamonds) n(E) = 2.<br />
                            P(Red King) = 2/52 = <strong>1/26</strong>.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Understand the structure of a standard deck of cards (52 cards, 4 suits, 13 ranks). Remember that 'and' usually means intersection (multiplication in independent events), and 'or' means union (addition). Probability can never be negative or greater than 1.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter15;
