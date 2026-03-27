import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic12 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 12: Essay Writing</h1>
                    <p>Learn to express complex ideas through well-structured essays.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>The Art of Essay Writing</h2>
                        <p>An essay is a focused piece of writing that explores a specific topic, argument, or idea. It requires clear thinking, logical organization, and precise language.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Standard Essay Structure</h3>
                        <div className={styles.ruleBox}>
                            <ol>
                                <li><strong>Introduction:</strong>
                                    <ul>
                                        <li>Hook: An interesting opening statement.</li>
                                        <li>Background: Brief context of the topic.</li>
                                        <li>Thesis Statement: Your main argument or idea.</li>
                                    </ul>
                                </li>
                                <li><strong>Body Paragraphs:</strong>
                                    <ul>
                                        <li>Paragraph 1: First main point with evidence.</li>
                                        <li>Paragraph 2: Second main point with evidence.</li>
                                        <li>Paragraph 3: Counter-arguments (if applicable).</li>
                                    </ul>
                                </li>
                                <li><strong>Conclusion:</strong>
                                    <ul>
                                        <li>Summary of main points.</li>
                                        <li>Final thought or a call to action.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Types of Essays</h3>
                        <div className={styles.exampleGrid}>
                            <div className={styles.exampleCard}>
                                <strong>Narrative Essay</strong>
                                Tells a story or relates a personal experience.<br />
                                <em>Ex:</em> A Memorable Journey.
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Descriptive Essay</strong>
                                Describes a person, place, or thing in detail.<br />
                                <em>Ex:</em> My Dream House.
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Argumentative Essay</strong>
                                Persuades the reader to agree with a viewpoint.<br />
                                <em>Ex:</em> Should Exams be Abolished?
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Tips for Success</h3>
                        <ul>
                            <li><strong>Brainstorm:</strong> Spend 5 minutes gathering ideas before writing.</li>
                            <li><strong>Paragraphing:</strong> Each paragraph should focus on <em>one</em> main idea.</li>
                            <li><strong>Transitions:</strong> Use words like <em>Furthermore, However, Consequently</em> to link ideas.</li>
                            <li><strong>Review:</strong> Always check for grammar and spelling errors at the end.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Essay Practice</h3>
                        <div className={styles.practiceQuestion}>Outline an essay on "Technology and its Impact on Youth."</div>
                        <div className={styles.practiceQuestion}>What is the purpose of a 'Thesis Statement'?</div>
                        <div className={styles.practiceQuestion}>Write a 100-word descriptive paragraph on "A Rainy Day."</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic12;
// Note: I missed a 'styles' prefix in one section. Fixing it in the final write.
