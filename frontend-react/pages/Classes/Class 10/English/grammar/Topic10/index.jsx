import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic10 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 10: Articles</h1>
                    <p>Master the use of a, an, and the in English sentences.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>What are Articles?</h2>
                        <p>Articles are words that define a noun as specific or unspecific. They are divided into two categories: <strong>Indefinite</strong> and <strong>Definite</strong>.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>1. Indefinite Articles (A, An)</h3>
                        <p>We use 'a' or 'an' when we are talking about something in general or for the first time.</p>
                        <div className={styles.exampleGrid}>
                            <div className={styles.exampleCard}>
                                <strong>Use 'A'</strong>
                                Before words starting with a consonant <em>sound</em>.<br />
                                <em>Ex:</em> A book, A university (sounds like 'y').
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Use 'An'</strong>
                                Before words starting with a vowel <em>sound</em>.<br />
                                <em>Ex:</em> An apple, An hour (h is silent).
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>2. The Definite Article (The)</h3>
                        <p>We use 'the' when we refer to a specific person or thing, or something previously mentioned.</p>
                        <div className={styles.ruleBox}>
                            <strong>Key Uses of 'The':</strong>
                            <ul>
                                <li>Before unique things: <em>The sun, the sky.</em></li>
                                <li>Before superlative degrees: <em>The tallest boy.</em></li>
                                <li>Before names of rivers/oceans: <em>The Ganges, the Pacific.</em></li>
                                <li>Before musical instruments: <em>He plays the guitar.</em></li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>3. Omission of Articles (Zero Article)</h3>
                        <p>In some cases, we do not use any article.</p>
                        <ul>
                            <li>Before proper nouns: <em>Delhi, Ravi.</em></li>
                            <li>Before abstract nouns in general: <em>Honesty is the best policy.</em></li>
                            <li>Before names of languages/sports: <em>I speak Hindi. He plays football.</em></li>
                            <li>Before names of meals: <em>Let's have dinner.</em></li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Articles Practice</h3>
                        <div className={styles.practiceQuestion}>"I saw _____ elephant at the zoo." (A: an)</div>
                        <div className={styles.practiceQuestion}>"He is _____ best player in the team." (A: the)</div>
                        <div className={styles.practiceQuestion}>"_____ honesty is a great virtue." (A: No article)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic10;
