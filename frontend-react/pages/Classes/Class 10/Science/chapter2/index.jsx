import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter2 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 2: Acids, Bases and Salts</h1>
                    <p>Understanding the Chemistry of Everyday Substances</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explores the chemical properties of acids and bases, how they react with metals and carbonates, and the importance of pH in daily life. We also learn about the preparation and uses of important salts.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Differences</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Acids:</strong> Sour taste, turn blue litmus red, release H⁺ ions in water.</p>
                            <p><strong>Bases:</strong> Bitter taste, soapy feel, turn red litmus blue, release OH⁻ ions in water.</p>
                            <p><strong>Indicators:</strong> Substances that change colour to indicate acidic or basic nature (e.g., Litmus, Phenolphthalein).</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Chemical Properties</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Acid + Metal:</strong> Salt + Hydrogen Gas (e.g., Zn + H₂SO₄ → ZnSO₄ + H₂)</p>
                            <p><strong>Acid + Metal Carbonate:</strong> Salt + CO₂ + Water (e.g., Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂)</p>
                            <p><strong>Neutralization:</strong> Acid + Base → Salt + Water (e.g., NaOH + HCl → NaCl + H₂O)</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Important Salts</h3>
                        <ul>
                            <li><strong>Common Salt (NaCl):</strong> Used in cooking and as a raw material for chemicals.</li>
                            <li><strong>Bleaching Powder (CaOCl₂):</strong> For bleaching cotton and linen.</li>
                            <li><strong>Baking Soda (NaHCO₃):</strong> For faster cooking, antacid.</li>
                            <li><strong>Washing Soda (Na₂CO₃·10H₂O):</strong> Cleaning agent, removing hardness of water.</li>
                            <li><strong>Plaster of Paris (CaSO₄·½H₂O):</strong> Supporting fractured bones, decoration.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Why should curd and sour substances not be kept in brass and copper vessels?
                        </div>
                        <div className={styles.solutionBox}>
                            Curd and sour substances contain acids, which react with metals like copper and brass to form toxic compounds that can be harmful to health.
                        </div>

                        <div className={styles.practiceQuestion}>
                            What is the pH scale?
                        </div>
                        <div className={styles.solutionBox}>
                            A scale for measuring hydrogen ion concentration in a solution. Values less than 7 represent acidic solutions, 7 is neutral, and values greater than 7 represent clear basic solutions.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Remember that mixing an acid or base with water is a highly exothermic process. Always add acid to water slowly, not water to acid. Learn the chemical formulas and uses of all the salts Mentioned.</p>
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
