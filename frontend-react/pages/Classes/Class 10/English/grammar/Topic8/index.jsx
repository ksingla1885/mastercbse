import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic8 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 8: Prepositions</h1>
                    <p>Learn how to use prepositions to show relationships of time, place, and direction.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>What are Prepositions?</h2>
                        <p>Prepositions are words placed before a noun or pronoun to show its relationship with another word in the sentence. They are the "glue" that holds the location, timing, and direction of actions together.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Types of Prepositions</h3>
                        <div className={styles.exampleGrid}>
                            <div className={styles.exampleCard}>
                                <strong>Prepositions of Time</strong>
                                At (time), On (days/dates), In (months/years).<br />
                                <em>Ex:</em> See you <strong>at</strong> 5 PM.
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Prepositions of Place</strong>
                                In (inside), On (surface), At (point).<br />
                                <em>Ex:</em> The keys are <strong>on</strong> the table.
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Prepositions of Direction</strong>
                                To, towards, into, through.<br />
                                <em>Ex:</em> She went <strong>to</strong> school.
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Common Prepositions & Their Usage</h3>
                        <div className={styles.tableContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Preposition</th>
                                        <th>Usage</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Between</td>
                                        <td>For two people/things</td>
                                        <td>Divide the cake <em>between</em> Ravi and Sam.</td>
                                    </tr>
                                    <tr>
                                        <td>Among</td>
                                        <td>For more than two</td>
                                        <td>She was hidden <em>among</em> the crowd.</td>
                                    </tr>
                                    <tr>
                                        <td>In</td>
                                        <td>Inside a space</td>
                                        <td>The cat is <em>in</em> the box.</td>
                                    </tr>
                                    <tr>
                                        <td>Into</td>
                                        <td>Showing movement inside</td>
                                        <td>The boy jumped <em>into</em> the pool.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Prepositional Phrases</h3>
                        <p>Some words always go with specific prepositions. These are called fixed prepositions or phrase-based prepositions.</p>
                        <ul>
                            <li><strong>Good at</strong> math</li>
                            <li><strong>Afraid of</strong> spiders</li>
                            <li><strong>Interested in</strong> learning</li>
                            <li><strong>Consist of</strong> many parts</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Preposition Practice</h3>
                        <div className={styles.practiceQuestion}>"He arrived _____ 9 o'clock." (A: at)</div>
                        <div className={styles.practiceQuestion}>"She is sitting _____ her two brothers." (A: between)</div>
                        <div className={styles.practiceQuestion}>"We swam _____ the river." (A: in / across)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic8;
