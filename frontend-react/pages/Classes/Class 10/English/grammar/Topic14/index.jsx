import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic14 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 14: Report Writing</h1>
                    <p>Learn to document events and findings with factual precision.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>What is a Report?</h2>
                        <p>A report is a factual description of an event or an investigation. It is written in a formal style and provides information in a clear, organized manner. Reports are usually written in the <strong>past tense</strong> and <strong>third person</strong>.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Types of Reports</h3>
                        <div className={styles.exampleGrid}>
                            <div className={styles.exampleCard}>
                                <strong>School Magazine Report</strong>
                                Reports on events like sports day, cultural fest, or exhibitions within the school.
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Newspaper Report</strong>
                                Reports on accidents, social issues, or national events for the general public.
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Formal Structure</h3>
                        <div className={styles.ruleBox}>
                            <ol>
                                <li><strong>Headline / Title:</strong> Catchy and relevant.</li>
                                <li><strong>Byline:</strong> Name of the reporter (e.g., "By: Anjali, Class 10").</li>
                                <li><strong>Place and Date:</strong> (For newspaper reports).</li>
                                <li><strong>Opening Paragraph:</strong> The "What, Where, When, Who, and Why."</li>
                                <li><strong>Body Paragraphs:</strong> Sequence of events, details, and witness accounts.</li>
                                <li><strong>Conclusion:</strong> Final outcome or message.</li>
                            </ol>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Tips</h3>
                        <ul>
                            <li>Use <strong>Past Tense</strong> (e.g., "The event was organized," not "is organized").</li>
                            <li>Be <strong>Objective</strong>: Do not include personal feelings or biases.</li>
                            <li>Include <strong>Quotes</strong>: Mention what important people (Principal, Chief Guest) said.</li>
                            <li><strong>Passive Voice</strong> is common in report writing.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Report Practice</h3>
                        <div className={styles.practiceQuestion}>Write a report on the 'Annual Science Exhibition' held in your school.</div>
                        <div className={styles.practiceQuestion}>Draft a report for a newspaper about a major traffic jam in your city.</div>
                        <div className={styles.practiceQuestion}>Identify the error: "I think the Sports Day was very boring." (A: Reports should be objective; remove personal opinion.)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic14;
