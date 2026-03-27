import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic7 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 7: Subject-Verb Agreement</h1>
                    <p>Learn the fundamental rules for matching subjects with their verbs.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>The Golden Rule</h2>
                        <p>The basic rule of subject-verb agreement is that a <strong>singular subject</strong> takes a <strong>singular verb</strong>, and a <strong>plural subject</strong> takes a <strong>plural verb</strong>.</p>
                        <div className={styles.exampleGrid}>
                            <div className={styles.exampleCard}>
                                <strong>Singular</strong>
                                The dog <em>barks</em>. (One dog)
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Plural</strong>
                                The dogs <em>bark</em>. (Many dogs)
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Important Rules to Remember</h3>
                        <div className={styles.ruleBox}>
                            <strong>Rule 1:</strong> Use a plural verb for subjects joined by <em>and</em>.<br />
                            <em>Example:</em> Ravi <strong>and</strong> Priya <strong>are</strong> friends.
                        </div>
                        <div className={styles.ruleBox}>
                            <strong>Rule 2:</strong> When subjects are joined by <em>or / nor</em>, the verb agrees with the <strong>closest</strong> subject.<br />
                            <em>Example:</em> Neither the teacher nor the <strong>students are</strong> here.
                        </div>
                        <div className={styles.ruleBox}>
                            <strong>Rule 3:</strong> Words like <em>everyone, each, neither, someone</em> are always <strong>singular</strong>.<br />
                            <em>Example:</em> Each student <strong>has</strong> a pen.
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Common Tricky Cases</h3>
                        <div className={styles.tableContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Case</th>
                                        <th>Rule</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Collective Nouns</td>
                                        <td>Singular if one group</td>
                                        <td>The team <em>is</em> winning.</td>
                                    </tr>
                                    <tr>
                                        <td>Amounts/Money</td>
                                        <td>Usually singular</td>
                                        <td>Ten dollars <em>is</em> a lot.</td>
                                    </tr>
                                    <tr>
                                        <td>Titles of Books</td>
                                        <td>Always singular</td>
                                        <td>"Gulliver's Travels" <em>is</em> famous.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Agreement Practice</h3>
                        <div className={styles.practiceQuestion}>"The group of girls _____ (is/are) going." (A: is - group is one unit)</div>
                        <div className={styles.practiceQuestion}>"Neither you nor I _____ (am/are) responsible." (A: am - agrees with 'I')</div>
                        <div className={styles.practiceQuestion}>"Each of the participants _____ (receives/receive) a gift." (A: receives - 'each' is singular)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic7;
