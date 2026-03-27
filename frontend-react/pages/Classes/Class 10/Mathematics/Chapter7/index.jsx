import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter7 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 7: Coordinate Geometry</h1>
                    <p>Connecting Algebra and Geometry through the Cartesian Plane.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>Coordinate geometry allows us to locate points and shapes on a plane using algebraic formulas. In this chapter, we discover how to calculate distances between points, find points that divide line segments in specific ratios, and calculate areas of triangles using vertex coordinates.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Essential Formulas</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Distance Formula:</strong> Distance between (x₁, y₁) and (x₂, y₂):</p>
                            <p><strong>d = √[(x₂ - x₁)² + (y₂ - y₁)²]</strong></p>
                        </div>
                        <div className={styles.solutionBox}>
                            <p><strong>Section Formula:</strong> Coordinates of point P dividing AB in ratio m₁ : m₂:</p>
                            <p><strong>P = [ (m₁x₂ + m₂x₁)/(m₁ + m₂), (m₁y₂ + m₂y₁)/(m₁ + m₂) ]</strong></p>
                            <p><em>Midpoint Formula (1:1 ratio): [ (x₁ + x₂)/2, (y₁ + y₂)/2 ]</em></p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Area of a Triangle</h3>
                        <div className={styles.solutionBox}>
                            <p>Area of △ABC with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃):</p>
                            <p><strong>Area = 1/2 |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|</strong></p>
                            <p><em>Note: If the area is 0, the points are collinear (lie on the same line).</em></p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>NCERT Exercise Solutions</h3>

                        <h4>Exercise 7.1 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Find the distance between points (2, 3) and (4, 1).
                        </div>
                        <div className={styles.solutionBox}>
                            x₁=2, y₁=3, x₂=4, y₂=1.<br />
                            d = √[(4 - 2)² + (1 - 3)²] = √[2² + (-2)²] = √[4 + 4] = √8 = <strong>2√2 units</strong>.
                        </div>

                        <h4>Exercise 7.2 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Find the coordinates of the midpoint of the line joining (4, -1) and (-2, -3).
                        </div>
                        <div className={styles.solutionBox}>
                            Midpoint = [ (4 + (-2))/2, (-1 + (-3))/2 ] = [ 2/2, -4/2 ] = <strong>(1, -2)</strong>.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Practice identifying the 'm' and 'n' values carefully in section formula problems. Always remember to take the absolute value (magnitude) when calculating area, as area cannot be negative. Be mindful of coordinate signs in different quadrants.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter7;
