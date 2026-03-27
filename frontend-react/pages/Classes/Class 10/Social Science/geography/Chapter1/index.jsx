import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter1 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 1: Resources and Development</h1>
                    <p>Understanding types of resources and sustainable development.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter discusses the classification of resources and the need for sustainable development in India. It explores how resources are utilized, the challenges of resource planning, and strategies for sustainable management to ensure long-term availability and equity.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Resources are classified based on origin (biotic and abiotic), exhaustibility (renewable and non-renewable), ownership (individual, community, national, international), and potential (developed stock and reserves). Renewable resources like solar energy and forests can be replenished, while non-renewable resources like minerals and fossil fuels are finite and depleting rapidly due to overuse.</p>
                        <p>In India, resource development faces challenges such as uneven distribution, overexploitation, and environmental degradation. Sustainable development, as defined by the Brundtland Commission, aims to meet present needs without compromising future generations. Resource planning in India involves surveying resources, identifying patterns, and implementing policies for balanced development across regions.</p>
                        <p>The chapter emphasizes conservation, recycling, and equitable distribution to address issues like soil erosion, deforestation, and water scarcity. International efforts like the Rio de Janeiro Earth Summit (1992) highlight global cooperation for sustainable practices. <strong>Additional Insights:</strong> Sustainable development requires integrating economic growth with environmental protection, promoting technologies like rainwater harvesting and afforestation for long-term resource security.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Renewable Resources:</strong> Resources that can be regenerated naturally, such as solar energy, wind, and forests, provided they are used sustainably.</li>
                                <li><strong>Non-Renewable Resources:</strong> Finite resources like coal, petroleum, and minerals that cannot be replenished once depleted.</li>
                                <li><strong>Sustainable Development:</strong> Development that balances economic growth, social equity, and environmental protection for present and future generations.</li>
                                <li><strong>Resource Planning:</strong> Systematic identification, inventory, and utilization of resources to avoid wastage and ensure equitable distribution.</li>
                                <li><strong>Biotic and Abiotic Resources:</strong> Biotic resources are derived from living organisms (e.g., forests), while abiotic are non-living (e.g., minerals).</li>
                                <li><strong>Stock and Reserves:</strong> Stock refers to total available resources, while reserves are the portion that can be economically extracted.</li>
                                <li><strong>Land Use Planning:</strong> Classification and management of land for agriculture, forestry, urban, and other uses to prevent degradation.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Classify resources on the basis of origin and give examples.
                        </div>
                        <div className={styles.solutionBox}>
                            Biotic resources (e.g., forests, animals), Abiotic resources (e.g., minerals, water).
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the concept of sustainable development with reference to the Brundtland Report.
                        </div>
                        <div className={styles.solutionBox}>
                            Sustainable development meets present needs without compromising future generations' ability to meet theirs, as defined by the 1987 Brundtland Commission.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Discuss the importance of resource planning in India.
                        </div>
                        <div className={styles.solutionBox}>
                            Resource planning ensures systematic use, reduces regional imbalances, and promotes sustainable development through surveys and policies.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Differentiate between stock and reserves of resources.
                        </div>
                        <div className={styles.solutionBox}>
                            Stock is the total quantity available, while reserves are the economically exploitable portion at current prices and technology.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Resources: Renewable, non-renewable. Development: Sustainable, planning. Challenges: Depletion, inequality. International: Rio Summit. <strong>Additional Notes:</strong> Sustainable development integrates economy, society, and environment for long-term prosperity.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter1;
