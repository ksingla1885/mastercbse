import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter10 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 10: The Human Eye and the Colourful World</h1>
                    <p>Exploring Optical Phenomena</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter discusses the structure of the human eye, its power of accommodation, and common defects of vision. It also explains natural phenomena like rainbows, twinkling of stars, and the blue color of the sky.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>The Human Eye</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Cornea:</strong> Transparent outer layer for refraction.</p>
                            <p><strong>Iris/Pupil:</strong> Regulates light entry.</p>
                            <p><strong>Lens:</strong> Crystalline lens focuses image on retina.</p>
                            <p><strong>Retina:</strong> Light-sensitive screen (Rods/Cones).</p>
                            <p><strong>Power of Accommodation:</strong> Ability of the eye lens to adjust its focal length to see near and far objects clearly.</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Defects of Vision</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Myopia (Near-sightedness):</strong> Can see near objects clearly but not far objects. Corrected by Concave Lens.</p>
                            <p><strong>Hypermetropia (Far-sightedness):</strong> Can see far objects clearly but not near objects. Corrected by Convex Lens.</p>
                            <p><strong>Presbyopia:</strong> Age-related loss of accommodation (weak ciliary muscles). Corrected by Bifocal Lens.</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Natural Phenomena</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Dispersion:</strong> Splitting of white light into its component colors (Spectrum) by a prism.</p>
                            <p><strong>Atmospheric Refraction:</strong> Twinkling of stars (due to changing refractive index of air layers).</p>
                            <p><strong>Scattering of Light:</strong> Blue colour of sky (fine particles scatter shorter blue wavelengths more), Red colour of sun at sunrise/sunset.</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Why do stars twinkle but planets do not?
                        </div>
                        <div className={styles.solutionBox}>
                            Stars are point sources of light, so atmospheric refraction makes their apparent position fluctuate. Planets are extended sources (collection of points), so the total variation in light averages out to zero.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Why does the sky appear dark to an astronaut?
                        </div>
                        <div className={styles.solutionBox}>
                            In space, there is no atmosphere to scatter sunlight. Without scattering, no light reaches the eye from the sky except from the sun itself, making the sky look black.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>The near point of a normal eye is 25 cm. The far point is infinity. A rainbow is formed by dispersion, refraction, and internal reflection of sunlight by water droplets.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter10;
