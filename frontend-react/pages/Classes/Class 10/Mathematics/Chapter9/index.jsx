import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter9 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 9: Some Applications of Trigonometry</h1>
                    <p>Using Heights and Distances to Solve Real-World Engineering and Scientific Problems.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter is all about the practical application of the trigonometric ratios learned in the previous chapter. We learn how to calculate the heights of tall towers, buildings, and bridges, as well as the distances between objects, without actual physical measurement.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Terminology</h3>
                        <ul>
                            <li><strong>Line of Sight:</strong> The line drawn from the eye of an observer to the point in the object viewed.</li>
                            <li><strong>Angle of Elevation:</strong> The angle formed by the line of sight with the horizontal when the object is above the horizontal level.</li>
                            <li><strong>Angle of Depression:</strong> The angle formed by the line of sight with the horizontal when the object is below the horizontal level.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Sample Application Problems</h3>

                        <div className={styles.practiceQuestion}>
                            The angle of elevation of the top of a tower from a point 100m away from its base is 30°. Find the height of the tower.
                        </div>
                        <div className={styles.solutionBox}>
                            Let 'h' be the height. Distance from base = 100m. Angle = 30°.<br />
                            Using <strong>tan 30° = h / 100</strong>.<br />
                            1/√3 = h / 100 ⇒ h = 100 / √3.<br />
                            <strong>h ≈ 57.74 meters.</strong>
                        </div>

                        <div className={styles.practiceQuestion}>
                            A kite is flying at a height of 60m. The string attached is tied to a point on the ground with an angle of 60°. Find the length of the string.
                        </div>
                        <div className={styles.solutionBox}>
                            Opposite (Height) = 60m. Hypotenuse (String length) = 'L'. Angle = 60°.<br />
                            Using <strong>sin 60° = 60 / L</strong>.<br />
                            √3 / 2 = 60 / L ⇒ L = 120 / √3 = 40√3.<br />
                            <strong>L ≈ 69.28 meters.</strong>
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Always start by drawing a correct right-angled triangle diagram. Label the angles of elevation/depression and the known sides. Tangent (tan) is the most frequently used ratio in this chapter. Remember that the angle of depression is equal to the angle of elevation for an observer at the object looking back at you (alternate interior angles).</p>
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
