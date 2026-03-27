import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic13 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 13: Notice Writing</h1>
                    <p>Learn to write concise and effective formal announcements.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>What is a Notice?</h2>
                        <p>A notice is a formal means of communication. The purpose of a notice is to announce or display information to a specific group of people. It is usually pinned up on a notice board.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Essential Components</h3>
                        <div className={styles.ruleBox}>
                            <ul>
                                <li><strong>Organization Name:</strong> At the top (centralized).</li>
                                <li><strong>The word 'NOTICE':</strong> In bold capital letters.</li>
                                <li><strong>Heading:</strong> A descriptive title for the event/information.</li>
                                <li><strong>Date:</strong> On the left side.</li>
                                <li><strong>Body:</strong> Details like <em>What, When, Where, Why,</em> and <em>Who to contact</em>.</li>
                                <li><strong>Name & Designation:</strong> At the bottom left.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Important Guidelines</h3>
                        <ul>
                            <li><strong>Word Limit:</strong> Usually restricted to 50 words.</li>
                            <li><strong>Style:</strong> Formal and direct language. No personal pronouns (I, Me).</li>
                            <li><strong>Box:</strong> Always draft a notice inside a rectangular box.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Sample Notice</h3>
                        <div className={styles.sampleBox}>
                            <h4 style={{ textAlign: 'center' }}>ABC SCHOOL, NEW DELHI</h4>
                            <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>NOTICE</h4>
                            <p>15th Oct 2023</p>
                            <h4 style={{ textAlign: 'center', textDecoration: 'underline' }}>Annual Sports Day</h4>
                            <p>All students are informed that the Annual Sports Day is scheduled for 25th Oct 2023. Events include relay races and long jump. Interested students should register with their captains by 20th Oct.</p>
                            <p>Principal<br />ABC School</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Notice Practice</h3>
                        <div className={styles.practiceQuestion}>Draft a notice for a 'Lost & Found' item (e.g., a wrist watch).</div>
                        <div className={styles.practiceQuestion}>Write a notice informing students about a change in school timings.</div>
                        <div className={styles.practiceQuestion}>True/False: You should use "I" or "Me" in a notice. (A: False)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic13;
