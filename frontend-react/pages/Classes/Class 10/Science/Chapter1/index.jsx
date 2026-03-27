import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter1 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 1: Chemical Reactions and Equations</h1>
                    <p>Understanding the Language of Chemistry</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>Chemical reactions are processes where new substances with new properties are formed. This chapter teaches us how to write and balance chemical equations and classify different types of reactions.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Indicators of Chemical Change</h3>
                        <div className={styles.conceptBox}>
                            <ul>
                                <li><strong>Change in State:</strong> E.g., burning of wax.</li>
                                <li><strong>Change in Colour:</strong> E.g., rusting of iron.</li>
                                <li><strong>Evolution of Gas:</strong> E.g., reaction of zinc with acid.</li>
                                <li><strong>Change in Temperature:</strong> E.g., reaction of quicklime with water.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Types of Chemical Reactions</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Combination:</strong> A + B → AB (e.g., Burning of coal: C + O₂ → CO₂)</p>
                            <p><strong>Decomposition:</strong> AB → A + B (e.g., Heating limestone: CaCO₃ → CaO + CO₂)</p>
                            <p><strong>Displacement:</strong> A + BC → AC + B (e.g., Fe + CuSO₄ → FeSO₄ + Cu)</p>
                            <p><strong>Double Displacement:</strong> AB + CD → AD + CB (e.g., Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl)</p>
                            <p><strong>Redox:</strong> Simultaneous oxidation (gain of O₂/loss of H₂) and reduction (loss of O₂/gain of H₂).</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Why is magnesium ribbon cleaned before burning in air?
                        </div>
                        <div className={styles.solutionBox}>
                            Magnesium ribbon is cleaned to remove the protective layer of magnesium oxide (formed due to reaction with oxygen) so that it can burn readily.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Balance the equation: Fe + H₂O → Fe₃O₄ + H₂
                        </div>
                        <div className={styles.solutionBox}>
                            <strong>3Fe + 4H₂O → Fe₃O₄ + 4H₂</strong>
                        </div>

                        <div className={styles.practiceQuestion}>
                            What is the difference between exothermic and endothermic reactions?
                        </div>
                        <div className={styles.solutionBox}>
                            <strong>Exothermic:</strong> Heat is released (e.g., Respiration).<br />
                            <strong>Endothermic:</strong> Heat is absorbed (e.g., Photosynthesis).
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Remember clearly the definitions of Oxidation and Reduction. Practice balancing equations as much as possible. Corrosion (rusting) and Rancidity are everyday examples of oxidation.</p>
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
