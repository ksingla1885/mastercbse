import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 2: Tenses</h1>
                    <p>Master the time-frame of actions in English.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Understanding Tenses</h2>
                        <p>Tenses show when an action happens – in the past, present, or future. Think of them like a clock for verbs! There are three main tenses, each with four aspects.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>1. Present Tense</h3>
                        <p>Used for actions happening now, habits, or general truths.</p>
                        <div className={styles.tableContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Aspect</th>
                                        <th>Form</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Simple</td>
                                        <td>Verb / Verb + s</td>
                                        <td>I eat an apple. / He eats an apple.</td>
                                    </tr>
                                    <tr>
                                        <td>Continuous</td>
                                        <td>am/is/are + verb-ing</td>
                                        <td>I am eating an apple.</td>
                                    </tr>
                                    <tr>
                                        <td>Perfect</td>
                                        <td>have/has + past participle</td>
                                        <td>I have eaten an apple.</td>
                                    </tr>
                                    <tr>
                                        <td>Perfect Continuous</td>
                                        <td>have/has been + verb-ing</td>
                                        <td>I have been eating for 10 minutes.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>2. Past Tense</h3>
                        <p>Used for actions that have already happened.</p>
                        <div className={styles.tableContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Aspect</th>
                                        <th>Form</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Simple</td>
                                        <td>Past form of verb (ed/irregular)</td>
                                        <td>I ate an apple yesterday.</td>
                                    </tr>
                                    <tr>
                                        <td>Continuous</td>
                                        <td>was/were + verb-ing</td>
                                        <td>I was eating when the bell rang.</td>
                                    </tr>
                                    <tr>
                                        <td>Perfect</td>
                                        <td>had + past participle</td>
                                        <td>I had eaten before you arrived.</td>
                                    </tr>
                                    <tr>
                                        <td>Perfect Continuous</td>
                                        <td>had been + verb-ing</td>
                                        <td>I had been eating before he came.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>3. Future Tense</h3>
                        <p>Used for actions that will happen later.</p>
                        <div className={styles.tableContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Aspect</th>
                                        <th>Form</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Simple</td>
                                        <td>will + base verb</td>
                                        <td>I will eat an apple later.</td>
                                    </tr>
                                    <tr>
                                        <td>Continuous</td>
                                        <td>will be + verb-ing</td>
                                        <td>I will be eating at 2 PM.</td>
                                    </tr>
                                    <tr>
                                        <td>Perfect</td>
                                        <td>will have + past participle</td>
                                        <td>I will have eaten by dinner time.</td>
                                    </tr>
                                    <tr>
                                        <td>Perfect Continuous</td>
                                        <td>will have been + verb-ing</td>
                                        <td>I will have been eating for half an hour.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Clues and Time Expressions</h3>
                        <div className={styles.exampleGrid}>
                            <div className={styles.exampleCard}>
                                <strong>Present</strong>
                                Always, every day, now, nowadays, usually.
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Past</strong>
                                Yesterday, last week, ago, in 2023, then.
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Future</strong>
                                Tomorrow, next year, soon, in a few days.
                            </div>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Tense Practice</h3>
                        <div className={styles.practiceQuestion}>Fill in: I _____ (visit) London last summer. (A: visited)</div>
                        <div className={styles.practiceQuestion}>Change to future: "I am playing." (A: I will be playing.)</div>
                        <div className={styles.practiceQuestion}>Identify aspect: "He has finished work." (A: Present Perfect)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic2;
