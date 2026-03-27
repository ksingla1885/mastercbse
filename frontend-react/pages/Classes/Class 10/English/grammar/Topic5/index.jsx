import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic5 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 5: Clauses</h1>
                    <p>Understanding the building blocks of complex sentences.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>What is a Clause?</h2>
                        <p>A clause is a group of words that contains a <strong>Subject</strong> and a <strong>Verb</strong>. It is larger than a phrase but can be smaller than a full sentence.</p>
                        <div className={styles.ruleBox}>
                            <strong>Essential Rule:</strong> Every clause must have a subject and a verb.
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>1. Independent Clauses (Main Clauses)</h3>
                        <p>Independent clauses can stand alone as a complete sentence because they express a full thought.</p>
                        <div className={styles.exampleGrid}>
                            <div className={styles.exampleCard}>
                                <strong>Example:</strong> "She runs." (Subject: She | Verb: runs)
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Example:</strong> "The sun rose." (Subject: The sun | Verb: rose)
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>2. Dependent Clauses (Subordinate Clauses)</h3>
                        <p>Dependent clauses cannot stand alone. They need an independent clause to make sense. They usually start with words like <em>if, because, who, although,</em> etc.</p>

                        <div className={styles.ruleBox}>
                            <strong>Example:</strong> "...because I am hungry." (This needs a main clause like "I am eating" to be complete.)
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Types of Dependent Clauses</h3>
                        <div className={styles.tableContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Function</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Noun Clause</td>
                                        <td>Acts as a noun</td>
                                        <td>I know <em>what happened</em>.</td>
                                    </tr>
                                    <tr>
                                        <td>Adjective Clause</td>
                                        <td>Describes a noun</td>
                                        <td>The boy <em>who won</em> is my friend.</td>
                                    </tr>
                                    <tr>
                                        <td>Adverb Clause</td>
                                        <td>Acts as an adverb</td>
                                        <td>She runs <em>because she is happy</em>.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Combining Clauses</h3>
                        <ul>
                            <li><strong>Simple Sentence:</strong> One independent clause. (<em>I like tea.</em>)</li>
                            <li><strong>Compound Sentence:</strong> Two independent clauses joined by 'and', 'but', etc. (<em>I like tea and she likes coffee.</em>)</li>
                            <li><strong>Complex Sentence:</strong> One independent and at least one dependent clause. (<em>I like tea because it's warm.</em>)</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Clause Practice</h3>
                        <div className={styles.practiceQuestion}>Identify the clause: "She is happy because she won." (A: Independent: She is happy | Dependent: because she won)</div>
                        <div className={styles.practiceQuestion}>Type of clause: "The book <em>that I read</em>." (A: Adjective Clause)</div>
                        <div className={styles.practiceQuestion}>Combine: "It started raining. We went home." (A: We went home because it started raining.)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic5;
