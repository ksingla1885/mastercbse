import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter13 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 13: Our Environment</h1>
                    <p>Understanding Our Ecological Footprint</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter discusses the ecosystem, food chains, energy flow, and environmental issues caused by human activities like pollution and waste accumulation.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Ecosystem</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Components:</strong> Biotic (living organisms - producers, consumers, decomposers) and Abiotic (non-living - soil, water, air, light).</p>
                            <p><strong>Types:</strong> Natural (Forest, Pond) and Artificial (Garden, Aquarium).</p>
                            <p><strong>Food Chain:</strong> Linear sequence of organisms where one eats another. (Producer → Herbivore → Carnivore).</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Energy Flow</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Unidirectional:</strong> Energy flows from Sun → Producers → Consumers. It never reverts back.</p>
                            <p><strong>10% Law:</strong> Only 10% of energy is transferred to the next trophic level. 90% is lost as heat/metabolism.</p>
                            <p><strong>Biomagnification:</strong> Accumulation of harmful chemicals (like pesticides/DDT) in increasing concentration at each trophic level.</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Environmental Issues</h3>
                        <ul>
                            <li><strong>Ozone Layer Depletion:</strong> Ozone (O₃) shields Earth from UV radiation. Depleted by CFCs (Chlorofluorocarbons) from ACs/Refrigerators.</li>
                            <li><strong>Waste Management:</strong> Separation of Biodegradable (can be decomposed by microbes) and Non-biodegradable (cannot be decomposed, e.g., plastic).</li>
                            <li><strong>Problem of Plastic:</strong> Persists in environment for a long time, clogs drains, harms animals if eaten.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What will happen if we kill all the organisms in one trophic level?
                        </div>
                        <div className={styles.solutionBox}>
                            It will disrupt the food chain, leading to overpopulation of the lower level (due to no predators) and starvation of the higher level (due to no food), causing ecosystem imbalance.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Why is damage to the ozone layer a cause for concern?
                        </div>
                        <div className={styles.solutionBox}>
                            The ozone layer protects us from harmful UV radiation from the sun, which can cause skin cancer, cataracts, and damage to crops.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Decomposers are crucial for recycling nutrients back into the soil. The flow of energy in a food chain is unidirectional. Human activities are the main cause of environmental degradation.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter13;
