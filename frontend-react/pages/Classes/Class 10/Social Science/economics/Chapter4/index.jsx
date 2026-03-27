import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter4 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 4: Globalisation and the Indian Economy</h1>
                    <p>Examining globalization and its impact on India.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter examines globalization, its key drivers, and its multifaceted impact on the Indian economy, including trade, investment, and cultural exchanges.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Globalization refers to the integration of economies through increased trade, investment, and cultural exchange. In India, it accelerated after the 1991 economic reforms, involving liberalization, privatization, and globalization (LPG). This led to increased foreign investment, export growth, and competition, boosting sectors like IT and textiles.</p>
                        <p>However, globalization has widened inequalities, with benefits unevenly distributed. Small producers face competition from multinational corporations (MNCs), while consumers enjoy cheaper imports. Organizations like WTO promote fair trade, but India advocates for developing countries' interests. The chapter also discusses cultural globalization and the need for balanced policies.</p>
                        <p><strong>Additional Insights:</strong> Globalization offers opportunities for growth but requires protective measures for vulnerable sectors, ensuring that economic integration benefits all citizens.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Globalization:</strong> Process of integrating world economies through trade, technology, and investment flows.</li>
                                <li><strong>World Trade Organization (WTO):</strong> International body regulating global trade rules and resolving disputes.</li>
                                <li><strong>Foreign Investment:</strong> Capital from abroad, including FDI and portfolio investment, boosting economic growth.</li>
                                <li><strong>Liberalization:</strong> Reduction of government controls on trade and investment to promote competition.</li>
                                <li><strong>Privatization:</strong> Transfer of public sector enterprises to private ownership for efficiency.</li>
                                <li><strong>Multinational Corporations (MNCs):</strong> Companies operating in multiple countries, influencing local economies.</li>
                                <li><strong>Cultural Globalization:</strong> Spread of ideas, values, and lifestyles across borders via media and migration.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Define globalization and its main features.
                        </div>
                        <div className={styles.solutionBox}>
                            Globalization is the integration of economies worldwide through trade, investment, and technology; features include free movement of goods, capital, and ideas.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the role of the World Trade Organization in global trade.
                        </div>
                        <div className={styles.solutionBox}>
                            WTO sets rules for international trade, reduces barriers, and resolves disputes to promote fair and open trade.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Discuss the positive and negative impacts of globalization on India.
                        </div>
                        <div className={styles.solutionBox}>
                            Positives: Economic growth, job creation in IT; Negatives: Increased inequality, pressure on small industries.
                        </div>

                        <div className={styles.practiceQuestion}>
                            What are multinational corporations? Give examples from India.
                        </div>
                        <div className={styles.solutionBox}>
                            MNCs operate in multiple countries; examples include Unilever and Ford in India.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Globalization: Economic integration. WTO: Trade regulator. Reforms: 1991 liberalization. Impacts: Growth and inequality. <strong>Additional Notes:</strong> India must harness globalization for inclusive development while protecting local interests.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter4;
