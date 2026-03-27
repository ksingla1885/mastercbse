import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic15 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 15: Message Writing</h1>
                    <p>Learn to capture and convey essential information in a brief format.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>What is Message Writing?</h2>
                        <p>Message writing is an informal way of communicating information when you cannot speak to a person directly. It involves taking down notes from a telephone conversation or leaving a quick written note for someone.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Standard Format</h3>
                        <div className={styles.ruleBox}>
                            <ul>
                                <li><strong>DATE:</strong> (e.g., 15th October 2023)</li>
                                <li><strong>TIME:</strong> (e.g., 10:30 AM)</li>
                                <li><strong>Salutation:</strong> (e.g., Dear Mother / Ravi)</li>
                                <li><strong>Body:</strong> The main information (brief and clear).</li>
                                <li><strong>Sender's Name:</strong> At the end.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Guidelines</h3>
                        <ul>
                            <li><strong>Brevity:</strong> Keep it under 50 words. Only the most important points should be included.</li>
                            <li><strong>Tone:</strong> Usually informal but clear.</li>
                            <li><strong>Box:</strong> Like a notice, a message should also be enclosed in a box.</li>
                            <li><strong>Accuracy:</strong> Ensure phone numbers or names mentioned are copied correctly.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Sample Message</h3>
                        <div className={styles.sampleBox}>
                            <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>MESSAGE</h4>
                            <p>15th Oct 2023 &nbsp;&nbsp;&nbsp;&nbsp; 4:00 PM</p>
                            <p>Dear Amit,</p>
                            <p>Your friend Rohan called. He wanted to inform you that the cricket match tomorrow is cancelled due to rain. He will call you later tonight for further plans.</p>
                            <p>Suresh</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Message Practice</h3>
                        <div className={styles.practiceQuestion}>Write a message for your sister informing her that her drawing class is postponed.</div>
                        <div className={styles.practiceQuestion}>A telephone caller wants to speak to your father. Draft a message for him.</div>
                        <div className={styles.practiceQuestion}>True/False: A message should include a subject line. (A: False - it is much shorter than a letter.)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic15;
