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
                    <h1>Chapter 2: Forest and Wildlife Resources</h1>
                    <p>Conservation and management of forests and wildlife.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter covers the importance of forests and wildlife, their classification, distribution, and the need for conservation. It discusses threats to biodiversity and strategies for sustainable management in India and globally.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Forests in India are classified as reserved, protected, and unclassed, covering about 24% of the land area. They provide timber, fuel, fodder, and medicinal plants while maintaining ecological balance by preventing soil erosion, regulating climate, and supporting biodiversity. Wildlife includes flora (plants) and fauna (animals), with India being a biodiversity hotspot due to its varied ecosystems.</p>
                        <p>Threats include deforestation, habitat loss, poaching, and human encroachment, leading to species extinction. Conservation strategies involve protected areas like national parks, wildlife sanctuaries, and biosphere reserves. Community participation, as in the Chipko Movement, and government initiatives like Project Tiger emphasize sustainable use. The chapter also covers international efforts for biodiversity conservation.</p>
                        <p><strong>Additional Insights:</strong> Biodiversity is crucial for ecosystem stability, providing resources for medicine, agriculture, and tourism. Loss of biodiversity affects food chains, water cycles, and climate regulation, necessitating integrated conservation approaches.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Flora and Fauna:</strong> Plant and animal life in a region, essential for ecological balance.</li>
                                <li><strong>Biodiversity:</strong> Variety of plant and animal species, measured by richness, evenness, and endemism.</li>
                                <li><strong>Conservation:</strong> Protection and sustainable use of natural resources to prevent depletion.</li>
                                <li><strong>National Parks:</strong> Protected areas where human activity is restricted to preserve wildlife.</li>
                                <li><strong>Wildlife Sanctuaries:</strong> Areas for the protection of specific species, allowing some human use.</li>
                                <li><strong>Biosphere Reserves:</strong> Large areas combining conservation with sustainable development.</li>
                                <li><strong>Endangered Species:</strong> Species at risk of extinction due to habitat loss or overhunting.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Classify the types of forests found in India and their distribution.
                        </div>
                        <div className={styles.solutionBox}>
                            Tropical rainforests (Western Ghats), deciduous forests (Central India), coniferous forests (Himalayas), mangroves (coastal areas).
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the importance of biodiversity in maintaining ecological balance.
                        </div>
                        <div className={styles.solutionBox}>
                            Biodiversity ensures nutrient cycling, pollination, and resilience against diseases, supporting life systems.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Discuss the major threats to forest and wildlife resources in India.
                        </div>
                        <div className={styles.solutionBox}>
                            Threats include deforestation for agriculture, mining, poaching, and climate change, leading to habitat fragmentation.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Describe the role of national parks and wildlife sanctuaries in conservation.
                        </div>
                        <div className={styles.solutionBox}>
                            They provide protected habitats, restrict human interference, and allow species recovery and scientific research.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Forests: Types and distribution. Biodiversity: Hotspots and importance. Conservation: Protected areas, movements. Threats: Deforestation, poaching. <strong>Additional Notes:</strong> Community participation and legal frameworks are essential for effective conservation of forests and wildlife.</p>
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
