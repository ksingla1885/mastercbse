import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter4 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 4: Carbon and its Compounds</h1>
                    <p>The Backbone of Organic Chemistry</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>Carbon forms millions of compounds due to its unique properties (catenation and tetravalency). This chapter explores covalent bonding, hydrocarbons, functional groups, and important chemical reactions of carbon compounds.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Bonding in Carbon</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Covalent Bond:</strong> Formed by sharing electron pairs. Carbon has 4 valence electrons, so it shares to attain stability (octet/duplet).</p>
                            <p><strong>Allotropes:</strong> Diamond (hardest, bad conductor), Graphite (soft, good conductor), Fullerene (cage-like).</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Hydrocarbons</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Saturated (Alkanes):</strong> Single bond (C-C). General formula: CₙH₂ₙ₊₂ (e.g., Methane CH₄).</p>
                            <p><strong>Unsaturated (Alkenes/Alkynes):</strong> Double (C=C, CₙH₂ₙ) or Triple (C≡C, CₙH₂ₙ₋₂) bonds.</p>
                            <p><strong>Functional Groups:</strong> Heteroatoms that decide properties (e.g., -OH Alcohol, -COOH Carboxylic Acid, -CHO Aldehyde, &gt;C=O Ketone).</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Important Reactions</h3>
                        <ul>
                            <li><strong>Combustion:</strong> Burning in oxygen produces CO₂ + H₂O + Heat + Light.</li>
                            <li><strong>Oxidation:</strong> Alcohol → Carboxylic Acid (using KMnO₄).</li>
                            <li><strong>Addition:</strong> Hydrogenation of vegetable oils (Unsaturated → Saturated).</li>
                            <li><strong>Substitution:</strong> Chlorination of methane in sunlight.</li>
                            <li><strong>Esterification:</strong> Acid + Alcohol → Ester (sweet smell) + Water.</li>
                            <li><strong>Saponification:</strong> Ester + Base → Soap + Alcohol.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Why does carbon form a large number of compounds?
                        </div>
                        <div className={styles.solutionBox}>
                            Due to <strong>Catenation</strong> (self-linking property to form long chains/rings) and <strong>Tetravalency</strong> (valency of 4 allowing bonding with many elements).
                        </div>

                        <div className={styles.practiceQuestion}>
                            What is a homologous series?
                        </div>
                        <div className={styles.solutionBox}>
                            A series of compounds with the same functional group where successive members differ by a -CH₂- unit and 14u mass. They have similar chemical properties but gradual change in physical properties.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Soaps clean by forming micelles (hydrophobic tail traps dirt, hydrophilic head interacts with water). Detergents work even in hard water, unlike soaps which form scum.</p>
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
