import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter3 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 3: Metals and Non-Metals</h1>
                    <p>Exploring the Elements that Build Our World</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter differentiates metals and non-metals based on their physical and chemical properties. We study how metals react, the reactivity series, how ionic bonds are formed, and the metallurgical processes to extract metals from ores.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Physical Properties</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Metals:</strong> Lustrous, hard, malleable, ductile, good conductors of heat/electricity, sonorous.</p>
                            <p><strong>Non-Metals:</strong> Dull, brittle, poor conductors (except Graphite), non-sonorous.</p>
                            <p><strong>Exceptions:</strong> Mercury (liquid metal), Iodine (lustrous non-metal), Diamond (hardest non-metal).</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Chemical Properties of Metals</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>With Oxygen:</strong> Metal + Oxygen → Metal Oxide (Basic/Amphoteric)</p>
                            <p><strong>With Water:</strong> Metal + Water → Metal Oxide/Hydroxide + Hydrogen</p>
                            <p><strong>With Acid:</strong> Metal + Dilute Acid → Salt + Hydrogen</p>
                            <p><strong>Reactivity Series:</strong> K &gt; Na &gt; Ca &gt; Mg &gt; Al &gt; Zn &gt; Fe &gt; Pb &gt; H &gt; Cu &gt; Hg &gt; Ag &gt; Au</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Ionic Compounds</h3>
                        <div className={styles.conceptBox}>
                            <p>Formed by the transfer of electrons from a metal (forming cation) to a non-metal (forming anion). They are solids, have high melting points, and conduct electricity in molten/aqueous state.</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Why is sodium kept immersed in kerosene oil?
                        </div>
                        <div className={styles.solutionBox}>
                            Sodium is highly reactive. It reacts vigorously with oxygen and moisture in air, causing fire. Kerosene cuts off contact with air.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Differentiate between roasting and calcination.
                        </div>
                        <div className={styles.solutionBox}>
                            <strong>Roasting:</strong> Heating sulphide ores in excess air (2ZnS + 3O₂ → 2ZnO + 2SO₂).<br />
                            <strong>Calcination:</strong> Heating carbonate ores in limited air (ZnCO₃ → ZnO + CO₂).
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Metals like Potassium and Sodium are most reactive. Gold and Silver are least reactive. Amphoteric oxides (Al₂O₃, ZnO) show both acidic and basic behavior. Alloys (Bronze, Brass, Amalgam) have improved properties over pure metals.</p>
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
