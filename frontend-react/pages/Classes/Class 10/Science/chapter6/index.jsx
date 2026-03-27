import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter6 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 6: Control and Coordination</h1>
                    <p>The Complex Communication Network of Life</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explains how organisms respond to stimuli in their environment. It covers the nervous system (neurons, reflex arcs, brain) and the endocrine system (hormones) in animals, as well as plant movements and hormones.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Nervous System (Animals)</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Neuron:</strong> Structural and functional unit. Dendrite (receives) → Cyton → Axon (conducts) → Nerve Ending (Synapse).</p>
                            <p><strong>Reflex Action:</strong> Sudden, involuntary response to stimulus (e.g., pulling hand from hot object). Path: Receptor → Sensory Neuron → Spinal Cord (Connector) → Motor Neuron → Effector (Muscle).</p>
                            <p><strong>Brain:</strong> Main coordinating center. Forebrain (Cerebrum - thinking), Midbrain, Hindbrain (Cerebellum - balance, Medulla - involuntary actions).</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Plant Coordination</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Tropic Movements:</strong> Directional growth. Phototropism (Light), Geotropism (Gravity), Hydrotropism (Water), Chemotropism (Chemicals like Pollen Tube).</p>
                            <p><strong>Nastic Movements:</strong> Non-directional. Thigmonasty (Touch-me-not plant drooping immediately).</p>
                            <p><strong>Plant Hormones:</strong> Auxin (Growth), Gibberellin (Stem elongation), Cytokinin (Cell division), Abscisic Acid (Inhibits growth, wilting).</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Endocrine System (Chemical Coordination)</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Hormones:</strong> Chemical messengers secreted directly into blood by ductless glands.</p>
                            <ul>
                                <li><strong>Pituitary:</strong> Growth Hormone (GH).</li>
                                <li><strong>Thyroid:</strong> Thyroxin (Metabolism). Requires Iodine.</li>
                                <li><strong>Pancreas:</strong> Insulin (Controls blood sugar). Diabetes caused by deficiency.</li>
                                <li><strong>Adrenal:</strong> Adrenaline (Emergency hormone - fight/flight).</li>
                                <li><strong>Gonads:</strong> Testes (Testosterone), Ovaries (Estrogen/Progesterone).</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What is the function of receptors in our body?
                        </div>
                        <div className={styles.solutionBox}>
                            Receptors detect information from the environment (e.g., heat, light, sound) and convert it into electrical impulses for the nervous system to process.
                        </div>

                        <div className={styles.practiceQuestion}>
                            How does chemical coordination occur in plants?
                        </div>
                        <div className={styles.solutionBox}>
                            It occurs through Phytohormones. They are synthesized at places away from where they act and simply diffuse to the area of action (e.g., auxin moves to the shady side for bending towards light).
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Reflex arcs are formed in the spinal cord for speed, although the information also reaches the brain. Feedback mechanisms regulate the timing and amount of hormone released (e.g., high sugar triggers more insulin).</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter6;
