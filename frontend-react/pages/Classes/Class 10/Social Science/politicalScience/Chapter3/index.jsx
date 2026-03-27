import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter3 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 3: Democracy and Diversity</h1>
                    <p>How democracy accommodates social diversity.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter examines how democracy accommodates social diversity, exploring the origins of social differences and their impact on democratic politics. It discusses how democracies handle divisions based on race, religion, caste, and other factors.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Social diversity refers to differences among people based on factors like race, religion, language, caste, and gender. Democracies are better equipped to handle diversity because they provide equal rights, representation, and opportunities for all groups. Unlike authoritarian regimes, democracies allow for peaceful resolution of conflicts through dialogue and institutions.</p>
                        <p>The chapter discusses overlapping and cross-cutting differences: overlapping differences occur when social divisions align (e.g., class and race), potentially leading to conflict, while cross-cutting differences (e.g., class cutting across religions) promote unity. Case studies from Mexico and Northern Ireland illustrate how democracies manage diversity. In Mexico, the Institutional Revolutionary Party (PRI) accommodated diversity through inclusive policies, while in Northern Ireland, power-sharing arrangements between Catholics and Protestants resolved long-standing conflicts.</p>
                        <p>In India, democracy addresses diversity through constitutional provisions like equality before law and affirmative action for marginalized groups. <strong>Additional Insights:</strong> Inclusive policies in democracies foster social cohesion, reduce inequalities, and strengthen national unity by ensuring that diverse voices are heard and represented.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Social Diversity:</strong> Differences in society based on race, religion, caste, gender, etc., requiring inclusive policies in democracies.</li>
                                <li><strong>Overlapping Differences:</strong> Social divisions that coincide, such as class and religion aligning, which can intensify conflicts.</li>
                                <li><strong>Cross-Cutting Differences:</strong> Divisions that cut across groups, like economic class crossing religious lines, promoting unity.</li>
                                <li><strong>Representation:</strong> Ensuring all social groups have a voice in government through elections and quotas.</li>
                                <li><strong>Equal Treatment:</strong> Democracies provide equal rights and opportunities, reducing discrimination.</li>
                                <li><strong>Affirmative Action:</strong> Policies like reservations to uplift marginalized groups in India.</li>
                                <li><strong>Migration and Diversity:</strong> How global migration increases diversity and challenges democratic integration.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            How does democracy accommodate social diversity?
                        </div>
                        <div className={styles.solutionBox}>
                            Democracies provide equal rights, representation, and mechanisms for conflict resolution, allowing diverse groups to coexist peacefully.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the difference between overlapping and cross-cutting social differences.
                        </div>
                        <div className={styles.solutionBox}>
                            Overlapping differences align multiple divisions, intensifying conflicts; cross-cutting differences cross group lines, promoting interaction and unity.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Discuss the case study of Mexico in handling diversity.
                        </div>
                        <div className={styles.solutionBox}>
                            Mexico's PRI accommodated diversity through inclusive policies, preventing regional and ethnic conflicts despite authoritarian tendencies.
                        </div>

                        <div className={styles.practiceQuestion}>
                            How does India address social diversity through its Constitution?
                        </div>
                        <div className={styles.solutionBox}>
                            Through equality provisions, reservations for SC/ST, and protection of minorities, promoting social justice.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Democracy: Best for diversity. Differences: Overlapping vs. cross-cutting. Examples: Mexico, Northern Ireland. India: Inclusive policies. <strong>Additional Notes:</strong> Social diversity strengthens democracies when managed inclusively, promoting equality and unity.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter3;
