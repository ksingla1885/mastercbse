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
                    <h1>Chapter 4: Agriculture</h1>
                    <p>Types of farming and agricultural development in India.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter covers the types of farming, cropping patterns, technological advancements, and challenges in Indian agriculture. It explores how agriculture forms the backbone of India's economy and the need for sustainable practices.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Agriculture is the primary sector of India's economy, employing about 50% of the workforce. Types include subsistence farming (for self-consumption) and commercial farming (for market). Major crops are rice (kharif), wheat (rabi), and pulses, with regional variations due to climate and soil.</p>
                        <p>The Green Revolution in the 1960s increased food production through high-yielding varieties, irrigation, and fertilizers, but led to regional disparities and environmental issues. Challenges include dependence on monsoon, small landholdings, soil degradation, and market fluctuations. Modernization efforts include organic farming, biotechnology, and government schemes like PM-KISAN.</p>
                        <p><strong>Additional Insights:</strong> Sustainable agriculture integrates traditional knowledge with modern technology to ensure food security, reduce poverty, and protect the environment for future generations.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Subsistence Farming:</strong> Small-scale farming for family consumption, common in rainfed areas.</li>
                                <li><strong>Commercial Farming:</strong> Large-scale production for sale, using modern inputs for profit.</li>
                                <li><strong>Green Revolution:</strong> Technological package including HYV seeds, irrigation, and fertilizers to boost yields.</li>
                                <li><strong>Cropping Patterns:</strong> Seasonal cultivation of crops like kharif (monsoon) and rabi (winter).</li>
                                <li><strong>Intensive Farming:</strong> High input, high output farming on small plots for maximum productivity.</li>
                                <li><strong>Extensive Farming:</strong> Low input farming on large areas, common in arid regions.</li>
                                <li><strong>Sustainable Agriculture:</strong> Practices that maintain soil health, conserve water, and reduce chemical use.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Differentiate between subsistence and commercial farming with examples.
                        </div>
                        <div className={styles.solutionBox}>
                            Subsistence farming (e.g., small plots for family food in Bihar) focuses on self-sufficiency; commercial (e.g., sugarcane in Maharashtra) aims at market profit.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the impact of the Green Revolution on Indian agriculture.
                        </div>
                        <div className={styles.solutionBox}>
                            Increased food production, reduced imports, but caused regional imbalances, soil degradation, and water overuse.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Discuss the major cropping seasons and crops in India.
                        </div>
                        <div className={styles.solutionBox}>
                            Kharif (rice, maize in monsoon), Rabi (wheat, barley in winter), Zaid (fruits in summer).
                        </div>

                        <div className={styles.practiceQuestion}>
                            What are the main challenges faced by Indian farmers?
                        </div>
                        <div className={styles.solutionBox}>
                            Challenges include erratic monsoon, small holdings, high input costs, and lack of market access.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Agriculture: Backbone of economy. Types: Subsistence, commercial. Revolution: Green impact. Seasons: Kharif, Rabi. <strong>Additional Notes:</strong> Sustainable and technological advancements are key to addressing challenges and ensuring food security.</p>
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
