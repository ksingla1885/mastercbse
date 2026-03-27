import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter6 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 6: Triangles</h1>
                    <p>Understanding Similarity, Proportionality, and the Power of Geometry.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter moves beyond congruence to the concept of similarity. Two figures are similar if they have the same shape but not necessarily the same size. We study criteria for triangle similarity and the famous Basic Proportionality Theorem (Thales' Theorem).</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Basic Proportionality Theorem (BPT)</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Theorem:</strong> If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.</p>
                            <p>If DE || BC in △ABC, then <strong>AD/DB = AE/EC</strong>.</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Criteria for Similarity</h3>
                        <ul>
                            <li><strong>AAA (Angle-Angle-Angle):</strong> If corresponding angles are equal, the triangles are similar. (AA is sufficient).</li>
                            <li><strong>SSS (Side-Side-Side):</strong> If corresponding sides are in the same ratio.</li>
                            <li><strong>SAS (Side-Angle-Side):</strong> If one angle is equal and the sides including these angles are proportional.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Theorems</h3>

                        <h4>Pythagoras Theorem</h4>
                        <div className={styles.solutionBox}>
                            <p>In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.</p>
                            <p><strong>AC² = AB² + BC²</strong> (where ∠B = 90°)</p>
                        </div>

                        <h4>Area of Similar Triangles</h4>
                        <div className={styles.solutionBox}>
                            <p>The ratio of the areas of two similar triangles is equal to the square of the ratio of their corresponding sides.</p>
                            <p>Area(ABC) / Area(PQR) = (AB/PQ)² = (BC/QR)² = (AC/PR)²</p>
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Pay close attention to the order of vertices when writing similarity statements (e.g., △ABC ~ △PQR). BPT and Pythagoras Theorem proofs are very important for theory exams. Visualization is key—always draw a clear diagram before solving.</p>
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
