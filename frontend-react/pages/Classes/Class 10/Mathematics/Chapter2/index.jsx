import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter2 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 2: Polynomials</h1>
                    <p>Understanding Zeros, Coefficients, and the Geometry of Polynomial Functions.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explores the world of polynomials, focusing on their degrees, zeroes, and the algebraic relationships between their coefficients and roots. We also look at the division algorithm for polynomials and how to interpret their graphs.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <ul>
                            <li><strong>Degree of a Polynomial:</strong> The highest power of the variable in the polynomial. For example, in 3x³ + 2x² + 5, the degree is 3.</li>
                            <li><strong>Zeros of a Polynomial:</strong> A real number 'k' is said to be a zero of a polynomial p(x) if p(k) = 0.</li>
                            <li><strong>Geometric Meaning:</strong> The zeroes of a polynomial p(x) are the x-coordinates of the points where the graph of y = p(x) intersects the x-axis.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Relationship Between Zeroes and Coefficients</h3>
                        <div className={styles.solutionBox}>
                            <p>For a Quadratic Polynomial <strong>ax² + bx + c</strong> with zeroes α and β:</p>
                            <ul>
                                <li><strong>Sum of Zeroes (α + β):</strong> -b / a</li>
                                <li><strong>Product of Zeroes (αβ):</strong> c / a</li>
                            </ul>
                        </div>
                        <div className={styles.solutionBox}>
                            <p>For a Cubic Polynomial <strong>ax³ + bx² + cx + d</strong> with zeroes α, β, and γ:</p>
                            <ul>
                                <li><strong>Sum (α + β + γ):</strong> -b / a</li>
                                <li><strong>Sum of Product taken two at a time:</strong> c / a</li>
                                <li><strong>Product (αβγ):</strong> -d / a</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>NCERT Exercise Solutions</h3>

                        <h4>Exercise 2.2 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Find the zeroes of x² - 2x - 8 and verify the relationship.
                        </div>
                        <div className={styles.solutionBox}>
                            x² - 2x - 8 = (x - 4)(x + 2).<br />
                            Zeroes are <strong>4 and -2</strong>.<br />
                            <strong>Sum:</strong> 4 + (-2) = 2. Also, -b/a = -(-2)/1 = 2.<br />
                            <strong>Product:</strong> 4 × (-2) = -8. Also, c/a = -8/1 = -8.<br />
                            Verified.
                        </div>

                        <h4>Exercise 2.3 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Divide p(x) = x³ - 3x² + 5x - 3 by g(x) = x² - 2.
                        </div>
                        <div className={styles.solutionBox}>
                            Using long division for polynomials:<br />
                            <strong>Quotient:</strong> x - 3<br />
                            <strong>Remainder:</strong> 7x - 9<br />
                            By Division Algorithm: Dividend = Divisor × Quotient + Remainder.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Practice identifying the number of zeroes from graphs. Master the sum and product formulas for quadratic and cubic polynomials. Always verify your division results using the division algorithm formula.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter2;
