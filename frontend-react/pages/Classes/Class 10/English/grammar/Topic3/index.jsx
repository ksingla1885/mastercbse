import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 3: Active and Passive Voice</h1>
                    <p>Learn how to change the focus of your sentences.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>What is Voice?</h2>
                        <p>Voice tells us if the subject is performing the action (Active) or receiving the action (Passive). Changing the voice allows you to emphasize different parts of the sentence.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>1. Active Voice</h3>
                        <p>In active voice, the subject performs the action. It is direct and clear.</p>
                        <div className={styles.ruleBox}>
                            <strong>Structure:</strong> Subject + Verb + Object<br />
                            <em>Example:</em> Ravi (Subject) eats (Verb) an apple (Object).
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>2. Passive Voice</h3>
                        <p>In passive voice, the focus is on the person or thing that receives the action. The doer is often mentioned at the end or omitted entirely.</p>
                        <div className={styles.ruleBox}>
                            <strong>Structure:</strong> Object + Be (am/is/are/was/were) + Past Participle + by + Subject<br />
                            <em>Example:</em> An apple (Object) is eaten (Verb) by Ravi (Subject).
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Voice Conversion Chart</h3>
                        <div className={styles.tableContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tense</th>
                                        <th>Active Voice</th>
                                        <th>Passive Voice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Simple Present</td>
                                        <td>He writes a letter.</td>
                                        <td>A letter is written by him.</td>
                                    </tr>
                                    <tr>
                                        <td>Present Continuous</td>
                                        <td>He is writing a letter.</td>
                                        <td>A letter is being written by him.</td>
                                    </tr>
                                    <tr>
                                        <td>Simple Past</td>
                                        <td>He wrote a letter.</td>
                                        <td>A letter was written by him.</td>
                                    </tr>
                                    <tr>
                                        <td>Past Continuous</td>
                                        <td>He was writing a letter.</td>
                                        <td>A letter was being written by him.</td>
                                    </tr>
                                    <tr>
                                        <td>Future Simple</td>
                                        <td>He will write a letter.</td>
                                        <td>A letter will be written by him.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Why Use Passive Voice?</h3>
                        <ul>
                            <li><strong>When the doer is unknown:</strong> The window was broken (we don't know by whom).</li>
                            <li><strong>When the action is more important:</strong> The project was completed on time.</li>
                            <li><strong>In formal writing:</strong> Scientific reports often use passive voice.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Voice Practice</h3>
                        <div className={styles.practiceQuestion}>Active to Passive: "The teacher helps the students." (A: The students are helped by the teacher.)</div>
                        <div className={styles.practiceQuestion}>Passive to Active: "The song was sung by her." (A: She sang the song.)</div>
                        <div className={styles.practiceQuestion}>Identify: "A mystery was solved." (A: Passive)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic3;
