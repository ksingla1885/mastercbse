import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter11 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 11: Constructions</h1>
                    <p>Precision and Accuracy in Geometric Drawings.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter deals with methods of constructing geometric shapes using only a ruler and a compass. We learn to divide a line segment in a given ratio, construct a triangle similar to a given triangle, and draw tangents to a circle from an external point.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Constructions</h3>
                        <ul>
                            <li><strong>Division of a Line Segment:</strong> Dividing a line segment AB in a ratio m:n, both internally and externally.</li>
                            <li><strong>Construction of Similar Triangles:</strong> Constructing a triangle similar to a given triangle with a scale factor of m/n.</li>
                            <li><strong>Tangents to a Circle:</strong> Drawing tangents to a circle from a point P lying outside the circle.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Steps of Construction</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>To draw a pair of tangents to a circle of radius 'r' from a point 'P' at distance 'd' from the center:</strong></p>
                            <ol>
                                <li>Join the center O to the point P.</li>
                                <li>Draw the perpendicular bisector of the line segment OP to find its midpoint M.</li>
                                <li>Taking M as center and MO (or MP) as radius, draw a circle.</li>
                                <li>This circle intersects the original circle at two points, say T₁ and T₂.</li>
                                <li>Join PT₁ and PT₂. These are the required tangents.</li>
                            </ol>
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Accuracy is paramount in constructions. Always ensure your pencil is sharp. Do not erase the construction arcs, as they show the method used. Always verify your construction by measuring the lengths or angles if asked.</p>
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
