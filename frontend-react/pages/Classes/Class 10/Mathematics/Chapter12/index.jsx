import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter12 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 12: Areas Related to Circles</h1>
                    <p>Calculating the Area of Combination of Plane Figures.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter extends the concept of circle area to more complex shapes. We learn to calculate the area of sectors and segments of a circle, which are parts of the circle bounded by radii and arcs.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Important Formulas</h3>
                        <ul>
                            <li><strong>Circumference of a Circle:</strong> 2πr</li>
                            <li><strong>Area of a Circle:</strong> πr²</li>
                            <li><strong>Length of an Arc of a Sector of Angle θ:</strong> (θ/360) × 2πr</li>
                            <li><strong>Area of a Sector of Angle θ:</strong> (θ/360) × πr²</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Segments and Combinations</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Area of Segment:</strong></p>
                            <p>Area of Corresponding Sector - Area of Corresponding Triangle</p>
                        </div>
                        <div className={styles.solutionBox}>
                            <p><strong>Area of Combination of Plane Figures:</strong> needed to find the area of shaded regions in complex figures involving circles, triangles, and quadrilaterals.</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>NCERT Exercise Solutions</h3>

                        <div className={styles.practiceQuestion}>
                            Find the area of a sector of a circle with radius 6cm if angle of the sector is 60°.
                        </div>
                        <div className={styles.solutionBox}>
                            Using Area = (θ/360) × πr²:<br />
                            Area = (60/360) × (22/7) × 6 × 6<br />
                            = (1/6) × (22/7) × 36<br />
                            = (22/7) × 6 = <strong>132/7 cm²</strong>.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Find the area of a quadrant of a circle whose circumference is 22cm.
                        </div>
                        <div className={styles.solutionBox}>
                            Circumference = 2πr = 22<br />
                            2 × (22/7) × r = 22 ⇒ r = 7/2 = 3.5cm.<br />
                            Quadrant is 1/4th of a circle (θ=90°).<br />
                            Area = (1/4)πr² = (1/4)(22/7)(7/2)(7/2) = <strong>77/8 cm²</strong>.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Remember that area is always in square units (cm², m²). Be careful to use the correct value of π (22/7 or 3.14) as specified in the question. For segment area, you often need trigonometry to find the height of the triangle.</p>
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
