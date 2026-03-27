import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter10 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 10: Circles</h1>
                    <p>Understanding Tangents, Radii, and Geometric Invariants of the Circle.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explores the unique properties of lines that touch circles. We learn about tangents, the points of contact, and prove fundamental theorems that relate tangents to the geometry of the circle as a whole.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Definitions</h3>
                        <ul>
                            <li><strong>Secant:</strong> A line that intersects a circle in two distinct points.</li>
                            <li><strong>Tangent:</strong> A line that intersects the circle at only one point. This point is called the <strong>Point of Contact</strong>.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Core Theorems</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Theorem 10.1:</strong> The tangent at any point of a circle is perpendicular to the radius through the point of contact.</p>
                        </div>
                        <div className={styles.solutionBox}>
                            <p><strong>Theorem 10.2:</strong> The lengths of tangents drawn from an external point to a circle are equal.</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>NCERT Exercise Solutions</h3>

                        <div className={styles.practiceQuestion}>
                            How many tangents can a circle have?
                        </div>
                        <div className={styles.solutionBox}>
                            A circle is made of infinite points, and at each point, one tangent can be drawn. Therefore, a circle has <strong>infinite tangents</strong>.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Find the length of a tangent from point P, 10cm from the center of a circle of radius 6cm.
                        </div>
                        <div className={styles.solutionBox}>
                            By Theorem 10.1, the triangle formed by Center(O), Point(P), and Point of Contact(T) is right-angled at T.<br />
                            OP² = OT² + PT² ⇒ 10² = 6² + PT²<br />
                            100 = 36 + PT² ⇒ PT² = 64 ⇒ <strong>PT = 8cm</strong>.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Remember that from a point inside a circle, zero tangents can be drawn. From a point on the circle, exactly one tangent can be drawn. From a point outside the circle, exactly two tangents can be drawn. Use Pythagoras Theorem frequently in circle problems.</p>
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
