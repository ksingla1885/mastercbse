import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic9 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 9: Conjunctions</h1>
                    <p>The words that connect your thoughts and sentences.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>What are Conjunctions?</h2>
                        <p>Conjunctions are words used to connect words, phrases, or clauses. They act as "linkers" that help in making longer and more complex sentences.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>1. Coordinating Conjunctions</h3>
                        <p>These join words or groups of words of equal importance. Remember the acronym <strong>FANBOYS</strong>.</p>
                        <div className={styles.ruleBox}>
                            <strong>F</strong>or, <strong>A</strong>nd, <strong>N</strong>or, <strong>B</strong>ut, <strong>O</strong>r, <strong>Y</strong>et, <strong>S</strong>o.
                        </div>
                        <p><em>Example:</em> I like tea <strong>and</strong> coffee. He was tired <strong>but</strong> he kept working.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>2. Subordinating Conjunctions</h3>
                        <p>These join a dependent clause to an independent clause. They often show a relationship of time, reason, or condition.</p>
                        <div className={styles.exampleGrid}>
                            <div className={styles.exampleCard}>
                                <strong>Reason</strong>
                                Because, since, as.<br />
                                <em>Ex:</em> I stayed home <strong>because</strong> it was raining.
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Contrast</strong>
                                Although, though, whereas.<br />
                                <em>Ex:</em> <strong>Although</strong> it was late, he stayed.
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Condition</strong>
                                If, unless, provided that.<br />
                                <em>Ex:</em> <strong>If</strong> you study, you will pass.
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>3. Correlative Conjunctions</h3>
                        <p>These are pairs of conjunctions that work together to join elements.</p>
                        <ul>
                            <li><strong>Either ... or:</strong> Either you come in or go out.</li>
                            <li><strong>Neither ... nor:</strong> Neither the cat nor the dog is here.</li>
                            <li><strong>Not only ... but also:</strong> He is not only smart but also kind.</li>
                            <li><strong>Both ... and:</strong> Both Ravi and Sam are invited.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Conjunction Practice</h3>
                        <div className={styles.practiceQuestion}>"I wanted to go, _____ I was too tired." (A: but)</div>
                        <div className={styles.practiceQuestion}>"_____ it was raining, we went for a walk." (A: Although)</div>
                        <div className={styles.practiceQuestion}>"Neither the teacher _____ the principal was present." (A: nor)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic9;
