import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter2 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 2: Sectors of the Indian Economy</h1>
                    <p>Exploring the primary, secondary, and tertiary sectors in India.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter discusses the classification of economic activities into primary, secondary, and tertiary sectors, their contributions to GDP and employment in India, and the evolving role of the service sector.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Economic activities are classified into three sectors: primary (agriculture, forestry, fishing, mining), secondary (manufacturing, construction), and tertiary (services like transport, banking, education). In India, the tertiary sector has grown significantly, contributing over 50% to GDP due to urbanization, IT, and globalization.</p>
                        <p>Employment patterns show a decline in primary sector jobs and a rise in tertiary, reflecting economic development. The organized sector provides formal employment with benefits, while the unorganized sector lacks job security. Public sector enterprises drive infrastructure, while private sectors enhance efficiency through competition.</p>
                        <p><strong>Additional Insights:</strong> Sectoral shifts indicate progress from agriculture-based to service-oriented economies, but require policies to ensure inclusive growth and reduce disguised unemployment in rural areas.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Primary Sector:</strong> Activities extracting or producing natural resources, e.g., farming and mining.</li>
                                <li><strong>Secondary Sector:</strong> Industries transforming raw materials into goods, e.g., manufacturing and construction.</li>
                                <li><strong>Tertiary Sector:</strong> Service-based activities like banking, transport, and IT, growing rapidly in modern economies.</li>
                                <li><strong>Organized Sector:</strong> Formal sector with registered businesses, job security, and benefits like PF and insurance.</li>
                                <li><strong>Unorganized Sector:</strong> Informal sector with small-scale operations, lacking formal protections and high vulnerability.</li>
                                <li><strong>Gross Domestic Product (GDP):</strong> Total value of goods and services produced in a country, indicating economic health.</li>
                                <li><strong>Disguised Unemployment:</strong> Situation where more people are employed than needed, common in agriculture.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Classify the economic sectors and give examples from India.
                        </div>
                        <div className={styles.solutionBox}>
                            Primary (agriculture in Punjab), Secondary (steel in Jharkhand), Tertiary (IT in Bangalore).
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the growth of the tertiary sector in India.
                        </div>
                        <div className={styles.solutionBox}>
                            Due to urbanization, IT boom, and increased demand for services like healthcare and education.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Differentiate between organized and unorganized sectors.
                        </div>
                        <div className={styles.solutionBox}>
                            Organized sectors have formal jobs with security; unorganized lack regulations and benefits.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Discuss the contribution of sectors to GDP and employment.
                        </div>
                        <div className={styles.solutionBox}>
                            Tertiary leads in GDP; primary in employment, highlighting a shift in economic structure.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Sectors: Primary, secondary, tertiary. Employment: Shifting to services. Organized vs. Unorganized: Formal vs. informal. <strong>Additional Notes:</strong> Balanced sectoral development ensures sustainable economic growth and employment opportunities.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter2;
