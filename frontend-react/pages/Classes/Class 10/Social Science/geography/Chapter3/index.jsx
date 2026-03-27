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
                    <h1>Chapter 3: Water Resources</h1>
                    <p>Importance of water and conservation strategies.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explores water as a vital resource for life, agriculture, and industry in India. It discusses sources of water, distribution, scarcity issues, and strategies for conservation and sustainable management.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Water is a renewable but finite resource, covering 71% of Earth's surface, with only 3% being freshwater. In India, water sources include rivers, lakes, groundwater, and rainwater. The country has abundant water but faces uneven distribution, overexploitation, and pollution, leading to scarcity in regions like Rajasthan and urban areas.</p>
                        <p>Multi-purpose projects like dams and reservoirs (e.g., Bhakra Nangal, Hirakud) provide irrigation, hydroelectricity, and flood control but have caused displacement and environmental issues. Conservation strategies include rainwater harvesting, watershed management, and recycling. The chapter also covers international water disputes and the need for integrated water resource management.</p>
                        <p><strong>Additional Insights:</strong> Climate change exacerbates water scarcity, necessitating global cooperation and technologies like drip irrigation for efficient use. Sustainable management ensures water security for future generations.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Freshwater:</strong> Renewable resource from rivers, lakes, and groundwater, essential for human use.</li>
                                <li><strong>Groundwater:</strong> Underground water stored in aquifers, overexploited leading to depletion.</li>
                                <li><strong>Rainwater Harvesting:</strong> Techniques to collect and store rainwater for domestic and agricultural use.</li>
                                <li><strong>Water Pollution:</strong> Contamination from industrial waste, sewage, and agricultural runoff.</li>
                                <li><strong>Watershed Management:</strong> Holistic approach to managing river basins for conservation and development.</li>
                                <li><strong>Multi-Purpose Projects:</strong> Dams for irrigation, power, and flood control, with social and environmental impacts.</li>
                                <li><strong>Integrated Water Resource Management:</strong> Coordinated approach involving all stakeholders for sustainable use.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Classify the sources of freshwater in India.
                        </div>
                        <div className={styles.solutionBox}>
                            Surface water (rivers, lakes), groundwater (aquifers), and rainwater.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the importance of rainwater harvesting in water conservation.
                        </div>
                        <div className={styles.solutionBox}>
                            It reduces dependency on groundwater, recharges aquifers, and provides water during shortages in urban and rural areas.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Discuss the causes of water scarcity in India.
                        </div>
                        <div className={styles.solutionBox}>
                            Causes include overexploitation, pollution, uneven distribution, and climate change-induced droughts.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Describe the role of multi-purpose projects in water resource development.
                        </div>
                        <div className={styles.solutionBox}>
                            They integrate irrigation, power generation, and flood control, boosting agriculture and economy but requiring careful planning.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Water: Sources and scarcity. Conservation: Harvesting, management. Projects: Multi-purpose benefits. Policy: National guidelines. <strong>Additional Notes:</strong> Sustainable water management is essential for India's development and environmental health.</p>
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
