import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter6 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 6: Manufacturing Industries</h1>
                    <p>Industrial development and its impact on the economy.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explores the types of manufacturing industries in India, their location factors, and contributions to economic development. It discusses industrial growth, challenges like pollution, and the need for sustainable practices.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Manufacturing industries transform raw materials into finished goods, classified as agro-based (e.g., cotton textiles), mineral-based (e.g., iron and steel), and others (e.g., chemical industries). India has a diverse industrial base, with public sector (e.g., BHEL) and private sector (e.g., Tata Steel) contributing to GDP and employment.</p>
                        <p>Location factors include proximity to raw materials, markets, labor, and infrastructure. Industrial regions like Mumbai-Pune and Kolkata-Hooghly have developed due to historical and geographical advantages. The 1991 liberalization boosted foreign investment and competition. Challenges include pollution, unequal regional development, and the need for eco-friendly technologies.</p>
                        <p><strong>Additional Insights:</strong> Industrialization promotes economic diversification, reduces unemployment, and enhances global competitiveness, but requires balanced growth to minimize environmental impact.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Agro-Based Industries:</strong> Industries using agricultural products, e.g., cotton textiles and sugar mills.</li>
                                <li><strong>Mineral-Based Industries:</strong> Industries using minerals, e.g., iron and steel, cement.</li>
                                <li><strong>Public Sector Industries:</strong> Government-owned for strategic importance, like defense and power.</li>
                                <li><strong>Private Sector Industries:</strong> Privately owned, driven by profit, e.g., automobiles and FMCG.</li>
                                <li><strong>Joint Sector Industries:</strong> Collaboration between public and private sectors for large projects.</li>
                                <li><strong>Industrial Location Factors:</strong> Raw materials, power, labor, transport, and market access.</li>
                                <li><strong>Sustainable Industrialization:</strong> Eco-friendly practices to reduce pollution and resource use.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Classify industries based on raw materials and give examples.
                        </div>
                        <div className={styles.solutionBox}>
                            Agro-based (cotton textiles), Mineral-based (iron and steel), Forest-based (paper).
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the factors influencing industrial location in India.
                        </div>
                        <div className={styles.solutionBox}>
                            Proximity to raw materials, power sources, labor, transport, and markets for cost efficiency.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Discuss the contribution of manufacturing industries to the economy.
                        </div>
                        <div className={styles.solutionBox}>
                            They provide employment, add value to resources, and contribute to GDP and exports.
                        </div>

                        <div className={styles.practiceQuestion}>
                            What are the challenges faced by Indian industries?
                        </div>
                        <div className={styles.solutionBox}>
                            Challenges include pollution, outdated technology, competition, and regional imbalances.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Industries: Agro, mineral-based. Location: Factors like raw materials. Contribution: Employment, GDP. Challenges: Pollution. <strong>Additional Notes:</strong> Sustainable and inclusive industrialization is essential for balanced economic growth.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter6;
