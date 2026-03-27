import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter5 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 5: Life Processes</h1>
                    <p>The Physiological Mechanisms of Survival</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter describes the basic functions performed by living organisms to maintain life on earth. It covers vital processes such as nutrition, respiration, transportation, and excretion in plants and animals (especially humans).</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Nutrition</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Autotrophic:</strong> Synthesis of food from CO₂ & H₂O using light (Green plants, Photosynthesis).</p>
                            <p><strong>Heterotrophic:</strong> Obtaining food from other organisms (Holozoic, Saprophytic, Parasitic).</p>
                            <p><strong>Human Digestion:</strong> Ingestion → Digestion (Enzymes like Pepsin, Trypsin, Amylase) → Absorption (Villi) → Assimilation → Egestion.</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Respiration</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Aerobic:</strong> Uses Oxygen, produces CO₂ + H₂O + 38 ATP. Occurs in Mitochondria.</p>
                            <p><strong>Anaerobic:</strong> Absence of Oxygen. Produces Ethanol + CO₂ (Yeast) or Lactic Acid (Muscles).</p>
                            <p><strong>Mechanism:</strong> Inspiration (Diaphragm contracts) ↔ Expiration.</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Transportation</h3>
                        <ul>
                            <li><strong>Humans:</strong> Heart (Double Circulation), Arteries (Oxygenated), Veins (Deoxygenated), Blood (plasma, RBC, WBC, platelets), Lymph.</li>
                            <li><strong>Plants:</strong> Xylem (Water/Minerals upwards), Phloem (Food bidirectional - Translocation).</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Excretion</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Humans:</strong> Kidneys filter blood (Nephrons), produce Urine (Urea, Uric Acid, Water), Ureter, Bladder, Urethra.</p>
                            <p><strong>Plants:</strong> Transpiration, falling leaves, shedding bark, gum/resin.</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What is the role of saliva in digestion?
                        </div>
                        <div className={styles.solutionBox}>
                            Saliva contains the enzyme Salivary Amylase, which breaks down starch (complex sugar) into maltose (simple sugar). It also moistens food for easy swallowing.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Why is the heart separated into left and right sides?
                        </div>
                        <div className={styles.solutionBox}>
                            To prevent the mixing of oxygenated and deoxygenated blood. This ensures efficient oxygen supply to the body, crucial for high energy needs in mammals and birds (warm-blooded).
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Memorize the events of Photosynthesis (Light Reaction & Dark Reaction). Understand the flow of blood through the heart. The opening and closing of stomata is regulated by guard cells. Dialysis is an artificial kidney for patients with kidney failure.</p>
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
