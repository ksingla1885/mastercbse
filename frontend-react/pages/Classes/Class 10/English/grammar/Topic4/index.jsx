import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic4 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 4: Direct and Indirect Speech</h1>
                    <p>Learn to report what others have said correctly.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Direct vs. Indirect Speech</h2>
                        <p>There are two ways to relate what someone has said: <strong>Direct Speech</strong> and <strong>Indirect (Reported) Speech</strong>.</p>
                        <div className={styles.exampleGrid}>
                            <div className={styles.exampleCard}>
                                <strong>Direct Speech</strong>
                                Quoting exact words: <em>"I am busy," she said.</em>
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Indirect Speech</strong>
                                Reporting the meaning: <em>She said that she was busy.</em>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Rules for Conversion</h3>
                        <p>When changing from Direct to Indirect speech, we usually change the tense, pronouns, and time/place markers.</p>

                        <div className={styles.tableContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Direct Speech</th>
                                        <th>Indirect Speech</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Present Simple (write)</td>
                                        <td>Past Simple (wrote)</td>
                                    </tr>
                                    <tr>
                                        <td>Present Continuous (is writing)</td>
                                        <td>Past Continuous (was writing)</td>
                                    </tr>
                                    <tr>
                                        <td>Present Perfect (have written)</td>
                                        <td>Past Perfect (had written)</td>
                                    </tr>
                                    <tr>
                                        <td>Direct Quote "I" / "My"</td>
                                        <td>Reported "He/She" / "His/Her"</td>
                                    </tr>
                                    <tr>
                                        <td>"Here" / "Now"</td>
                                        <td>"There" / "Then"</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Reporting Questions and Commands</h3>
                        <div className={styles.ruleBox}>
                            <strong>Questions:</strong> Use <em>if</em> or <em>whether</em> for Yes/No questions. Use <em>asked</em> as the reporting verb.<br />
                            <em>Example:</em> "Do you like tea?" &#8594; He asked if I liked tea.
                        </div>
                        <div className={styles.ruleBox}>
                            <strong>Commands:</strong> Use <em>to + verb</em>.<br />
                            <em>Example:</em> "Sit down," said the teacher. &#8594; The teacher told me to sit down.
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Common Time Token Changes</h3>
                        <ul>
                            <li><strong>Today</strong> &#8594; That day</li>
                            <li><strong>Tomorrow</strong> &#8594; The next day / The following day</li>
                            <li><strong>Yesterday</strong> &#8594; The previous day</li>
                            <li><strong>Next week</strong> &#8594; The following week</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Narration Practice</h3>
                        <div className={styles.practiceQuestion}>Change to Indirect: "I will call you," said John. (A: John said that he would call me.)</div>
                        <div className={styles.practiceQuestion}>Change to Direct: She asked if I was hungry. (A: She said, "Are you hungry?")</div>
                        <div className={styles.practiceQuestion}>Change to Indirect: "Don't shout!" the man said. (A: The man told us not to shout.)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic4;
