import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter7 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 7: Lifelines of National Economy</h1>
                    <p>Transport, communication, and trade in India.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter discusses the role of transport, communication, and trade as lifelines of India's economy. It explores how these systems connect regions, facilitate economic activities, and support national integration.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Transport systems include roadways (most used for short distances), railways (backbone for goods and passengers), waterways (inland and coastal), airways (fastest for long distances), and pipelines (for oil and gas). Communication networks like postal services, telecom, and mass media connect people and businesses, enabling information flow.</p>
                        <p>International trade involves exports (e.g., textiles, gems) and imports (e.g., machinery, oil), contributing to GDP. Major ports like Mumbai and Chennai handle trade. The chapter emphasizes the need for integrated infrastructure for balanced development and economic growth.</p>
                        <p><strong>Additional Insights:</strong> Efficient transport and communication reduce regional disparities, promote tourism, and enhance global competitiveness, forming the backbone of a modern economy.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Roadways:</strong> Extensive network connecting rural and urban areas, including national and state highways.</li>
                                <li><strong>Railways:</strong> Largest public sector enterprise, efficient for bulk transport and passenger movement.</li>
                                <li><strong>Communication:</strong> Systems like telecom, internet, and media for information exchange.</li>
                                <li><strong>International Trade:</strong> Exchange of goods and services across borders, regulated by WTO.</li>
                                <li><strong>Ports and Harbors:</strong> Gateways for international trade, handling cargo and passengers.</li>
                                <li><strong>Pipelines:</strong> Specialized transport for liquids and gases, ensuring safe and efficient delivery.</li>
                                <li><strong>Tourism as Trade:</strong> Foreign exchange earner through cultural and natural attractions.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Describe the importance of roadways in India.
                        </div>
                        <div className={styles.solutionBox}>
                            Roadways provide door-to-door connectivity, support rural economy, and are vital for perishable goods transport.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the role of railways in the national economy.
                        </div>
                        <div className={styles.solutionBox}>
                            Railways carry bulk goods, passengers, and promote national integration with affordable fares.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Discuss the significance of communication in modern society.
                        </div>
                        <div className={styles.solutionBox}>
                            Communication enables information flow, e-governance, and business efficiency in a globalized world.
                        </div>

                        <div className={styles.practiceQuestion}>
                            How does international trade contribute to India's economy?
                        </div>
                        <div className={styles.solutionBox}>
                            Trade provides foreign exchange, technology, and markets, enhancing GDP and employment.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Transport: Road, rail, air. Communication: Telecom, media. Trade: International benefits. Infrastructure: Essential. <strong>Additional Notes:</strong> Integrated transport and communication systems are vital for economic integration and development.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter7;
