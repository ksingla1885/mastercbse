import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter11 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 11: Electricity</h1>
                    <p>Understanding the Flow of Charge</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter deals with the concept of electric current, potential difference, Ohm's law, resistance, and the heating effect of electric current. It explains how circuits work and the factors affecting resistance.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Important Concepts</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Electric Current (I):</strong> Rate of flow of electric charges. Unit: Ampere (A). I = Q/t.</p>
                            <p><strong>Potential Difference (V):</strong> Work done to move a unit charge across two points. Unit: Volt (V). V = W/Q.</p>
                            <p><strong>Ohm's Law:</strong> V = IR (Voltage is directly proportional to Current at constant temperature).</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Resistance</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Resistance (R):</strong> Property to oppose current flow. Unit: Ohm (Ω). R = ρL/A (Length L, Area A, Resistivity ρ).</p>
                            <p><strong>Series Combination:</strong> R = R₁ + R₂ + ... (Current same, Voltage divides).</p>
                            <p><strong>Parallel Combination:</strong> 1/R = 1/R₁ + 1/R₂ + ... (Voltage same, Current divides).</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Heating Effect</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Joule's Law:</strong> H = I²Rt (Heat produced depends on square of current, resistance, and time).</p>
                            <p><strong>Power (P):</strong> Rate of energy consumption. P = VI = I²R = V²/R. Unit: Watt (W).</p>
                            <p><strong>Commercial Unit of Energy:</strong> 1 kWh = 3.6 × 10⁶ Joules.</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Why is the tungsten used almost exclusively for filament of electric lamps?
                        </div>
                        <div className={styles.solutionBox}>
                            Tungsten has a very high melting point (~3380°C) and does not oxidize (burn) easily at high temperatures. It retains heat to glow white-hot and emit light.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Calculate the equivalent resistance when 3Ω and 6Ω are connected in parallel.
                        </div>
                        <div className={styles.solutionBox}>
                            1/R = 1/3 + 1/6 = (2+1)/6 = 3/6 = 1/2.<br />
                            So, R = 2Ω.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>A voltmeter is always connected in parallel, and an ammeter in series. Fuses are safety devices based on the heating effect of current. Alloys like Nichrome are used in heating elements because of high resistivity.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter11;
