import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter5 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 5: Minerals and Energy Resources</h1>
                    <p>Mineral distribution and energy sources in India.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter discusses the classification, distribution, and importance of minerals and energy resources in India. It explores conventional and non-conventional energy sources and the need for sustainable mining and energy management.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Minerals are natural substances with economic value, classified as metallic (e.g., iron, copper) and non-metallic (e.g., limestone, gypsum). India has abundant reserves of iron ore, bauxite, and coal, but faces uneven distribution and depletion. Energy resources include conventional (coal, petroleum) and non-conventional (solar, wind, nuclear) sources.</p>
                        <p>Coal is the primary energy source, followed by petroleum, but India imports much of its oil. Non-conventional sources like solar and wind are gaining importance for sustainability. The chapter emphasizes conservation, recycling, and the National Mineral Policy for responsible exploitation. Challenges include environmental degradation and energy security.</p>
                        <p><strong>Additional Insights:</strong> Transition to renewable energy is crucial for reducing dependence on fossils and mitigating climate change, promoting energy independence and environmental protection.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Metallic Minerals:</strong> Minerals containing metals, e.g., iron ore, bauxite, used in industries.</li>
                                <li><strong>Non-Metallic Minerals:</strong> Minerals without metals, e.g., limestone, gypsum, for construction and fertilizers.</li>
                                <li><strong>Conventional Energy:</strong> Non-renewable sources like coal, petroleum, and natural gas.</li>
                                <li><strong>Non-Conventional Energy:</strong> Renewable sources like solar, wind, tidal, and nuclear energy.</li>
                                <li><strong>Energy Security:</strong> Ensuring reliable and affordable energy supply for national development.</li>
                                <li><strong>Sustainable Mining:</strong> Extracting minerals with minimal environmental impact and resource conservation.</li>
                                <li><strong>Renewable Energy Potential:</strong> India's capacity for solar, wind, and hydropower due to diverse geography.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Classify minerals and give examples from India.
                        </div>
                        <div className={styles.solutionBox}>
                            Metallic (iron ore in Odisha), Non-metallic (limestone in Rajasthan).
                        </div>

                        <div className={styles.practiceQuestion}>
                            Discuss the distribution of iron ore in India.
                        </div>
                        <div className={styles.solutionBox}>
                            Major reserves in Odisha, Jharkhand, and Karnataka, used in steel production.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the importance of non-conventional energy sources.
                        </div>
                        <div className={styles.solutionBox}>
                            They are renewable, reduce pollution, and decrease dependence on imports for long-term sustainability.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Describe the role of coal in India's energy sector.
                        </div>
                        <div className={styles.solutionBox}>
                            Coal provides over 50% of India's energy, fueling thermal power plants but causing pollution.
                        </div>
                    </section>


                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Minerals: Metallic, non-metallic. Energy: Conventional, non-conventional. Distribution: Regional variations. <strong>Additional Notes:</strong> Sustainable practices and renewables are vital for India's energy future and environmental health.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter5;
