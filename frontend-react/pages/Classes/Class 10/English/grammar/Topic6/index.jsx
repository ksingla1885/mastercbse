import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic6 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 6: Sentence Structure</h1>
                    <p>Master the different ways to build clear and effective sentences.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Sentence Classification</h2>
                        <p>Sentences are classified based on the number and type of clauses they contain. Good writing uses a mix of these structures.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>1. Simple Sentences</h3>
                        <p>A simple sentence consists of one independent clause.</p>
                        <div className={styles.ruleBox}>
                            <strong>Rule:</strong> 1 Independent Clause.<br />
                            <em>Example:</em> "The dog barks."
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>2. Compound Sentences</h3>
                        <p>A compound sentence joins two or more independent clauses using a coordinating conjunction (FANBOYS: For, And, Nor, But, Or, Yet, So).</p>
                        <div className={styles.ruleBox}>
                            <strong>Rule:</strong> 2+ Independent Clauses + Conjunction.<br />
                            <em>Example:</em> "The dog barks, <strong>and</strong> the cat runs."
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>3. Complex Sentences</h3>
                        <p>A complex sentence contains one independent clause and at least one dependent clause.</p>
                        <div className={styles.ruleBox}>
                            <strong>Rule:</strong> 1 Independent Clause + 1+ Dependent Clause.<br />
                            <em>Example:</em> "The cat runs <strong>because</strong> the dog barks."
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>4. Compound-Complex Sentences</h3>
                        <p>This structure combines both compound and complex features. It has at least two independent clauses and at least one dependent clause.</p>
                        <div className={styles.ruleBox}>
                            <strong>Example:</strong> "The cat runs because the dog barks, <strong>but</strong> the bird stays."
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Summary Table</h3>
                        <div className={styles.tableContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sentence Type</th>
                                        <th>Independent Clauses</th>
                                        <th>Dependent Clauses</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Simple</td>
                                        <td>1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Compound</td>
                                        <td>2 or more</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Complex</td>
                                        <td>1</td>
                                        <td>1 or more</td>
                                    </tr>
                                    <tr>
                                        <td>Compound-Complex</td>
                                        <td>2 or more</td>
                                        <td>1 or more</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Structure Practice</h3>
                        <div className={styles.practiceQuestion}>Identify: "I like tea, but she likes coffee." (A: Compound)</div>
                        <div className={styles.practiceQuestion}>Identify: "Although he was tired, he finished his work." (A: Complex)</div>
                        <div className={styles.practiceQuestion}>Make Complex: "Rain started. I took my umbrella." (A: I took my umbrella because it started raining.)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic6;
