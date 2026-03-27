import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter9 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 9: Light - Reflection and Refraction</h1>
                    <p>The Physics of Vision and Optics</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explores the behavior of light when it strikes a mirror or passes through a lens. It covers the laws of reflection and refraction, image formation by spherical mirrors and lenses, and their applications.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Reflection of Light</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Laws:</strong> 1. Angle of Incidence (i) = Angle of Reflection (r). 2. Incident ray, reflected ray, and normal lie on the same plane.</p>
                            <p><strong>Spherical Mirrors:</strong> Concave (Converging, forms real/virtual image), Convex (Diverging, always virtual).</p>
                            <p><strong>Mirror Formula:</strong> 1/v + 1/u = 1/f</p>
                            <p><strong>Magnification:</strong> m = -v/u (Real images are inverted/negative).</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Refraction of Light</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Phenomenon:</strong> Bending of light when passing from one medium to another (e.g., Air to Glass).</p>
                            <p><strong>Refractive Index (n):</strong> Measure of optical density. n = c/v.</p>
                            <p><strong>Lenses:</strong> Convex (Converging, mostly real images), Concave (Diverging, always virtual/diminished).</p>
                            <p><strong>Lens Formula:</strong> 1/v - 1/u = 1/f</p>
                            <p><strong>Power of Lens:</strong> P = 1/f (in meters). Unit: Diopter (D).</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Why do we prefer a convex mirror as a rear-view mirror in vehicles?
                        </div>
                        <div className={styles.solutionBox}>
                            It gives a wider field of view (curved outwards) and always forms an erect (though diminished) image, helping the driver see traffic behind clearly.
                        </div>

                        <div className={styles.practiceQuestion}>
                            A concave mirror produces three times magnified real image of an object placed at 10 cm. Where is the image located?
                        </div>
                        <div className={styles.solutionBox}>
                            Given m = -3 (real), u = -10 cm.<br />
                            m = -v/u ⇒ -3 = -v/(-10) ⇒ v = -30 cm.<br />
                            Image is formed 30 cm in front of the mirror.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Real images are always inverted and can be obtained on a screen. Virtual images are always erect and cannot be obtained on a screen. Snells Law states that the ratio of sine of angle of incidence to sine of angle of refraction is constant.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter9;
