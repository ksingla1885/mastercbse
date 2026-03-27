import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter12 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 12: Magnetic Effects of Electric Current</h1>
                    <p>The Link Between Electricity and Magnetism</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explores the relationship between electricity and magnetism. It covers Oersted's discovery, magnetic field lines, electromagnets, electric motors, generators, and household circuits.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Magnetic Field</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Definition:</strong> Region around a magnet where its force is detected. Represented by field lines (North to South outside, South to North inside).</p>
                            <p><strong>Right-Hand Thumb Rule:</strong> Thumb points to Current direction, curled fingers show Magnetic Field direction.</p>
                            <p><strong>Solenoid:</strong> Coil of many circular turns of insulated wire. Behaves like a bar magnet.</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Force on Current-Carrying Conductor</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Fleming's Left-Hand Rule:</strong> Used to find direction of Force (Motion). Thumb (Force), Forefinger (Field), Middle Finger (Current). Important for Electric Motor.</p>
                            <p><strong>Electric Motor:</strong> Device that converts electrical energy into mechanical energy. Uses Commutator (Split Rings) to reverse current direction.</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Electromagnetic Induction</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Definition:</strong> Production of induced current in a coil due to changing magnetic field.</p>
                            <p><strong>Fleming's Right-Hand Rule:</strong> Used to find direction of Induced Current. Thumb (Motion), Forefinger (Field), Middle Finger (Induced Current). Important for Electric Generator.</p>
                            <p><strong>AC vs DC:</strong> Alternating Current changes direction periodically; Direct Current flows in one direction.</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What is the function of an earth wire?
                        </div>
                        <div className={styles.solutionBox}>
                            The earth wire (green insulation) provides a low-resistance path for leakage current to flow into the ground, protecting the user from severe electric shock if the live wire touches the metal body of an appliance.
                        </div>

                        <div className={styles.practiceQuestion}>
                            State the principle of an electric motor.
                        </div>
                        <div className={styles.solutionBox}>
                            It works on the principle that when a current-carrying coil is placed in a magnetic field, it experiences a force (torque) that causes it to rotate continuously.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>A fuse is always connected to the live wire. Overloading occurs when too many appliances are connected to a single socket. Short-circuit occurs when live and neutral wires touch directly.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter12;
