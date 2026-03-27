import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter4 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 4: Quadratic Equations</h1>
                    <p>Solving equations of degree two using multiple techniques.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>Quadratic equations are central to algebra and model various real-world phenomena. This chapter covers the standard form of quadratic equations, methods of finding roots (factorization, formula), and the significance of the discriminant.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Standard Form & Formula</h3>
                        <div className={styles.solutionBox}>
                            <p>Standard Form: <strong>ax² + bx + c = 0</strong> (a ≠ 0)</p>
                            <p><strong>Quadratic Formula:</strong></p>
                            <p style={{ fontSize: '1.2rem' }}>x = [-b ± √(b² - 4ac)] / 2a</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Nature of Roots</h3>
                        <p>The term <strong>D = b² - 4ac</strong> is called the discriminant. It tells us the nature of the roots:</p>
                        <ul>
                            <li><strong>D &gt; 0:</strong> Two distinct real roots.</li>
                            <li><strong>D = 0:</strong> Two equal real roots.</li>
                            <li><strong>D &lt; 0:</strong> No real roots (roots are imaginary).</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>NCERT Exercise Solutions</h3>

                        <h4>Exercise 4.2 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Solve x² - 3x - 10 = 0 by Factorization.
                        </div>
                        <div className={styles.solutionBox}>
                            Split the middle term: x² - 5x + 2x - 10 = 0<br />
                            x(x - 5) + 2(x - 5) = 0<br />
                            (x - 5)(x + 2) = 0<br />
                            Roots: <strong>5 and -2</strong>.
                        </div>

                        <h4>Exercise 4.4 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Find the nature of roots for 2x² - 3x + 5 = 0.
                        </div>
                        <div className={styles.solutionBox}>
                            Here, a = 2, b = -3, c = 5.<br />
                            D = b² - 4ac = (-3)² - 4(2)(5) = 9 - 40 = <strong>-31</strong>.<br />
                            Since D &lt; 0, the equation has <strong>no real roots</strong>.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Remember that "completing the square" is a technique used to derive the quadratic formula. In word problems, if you get a negative value for time, length, or speed, discard it. Always simplify the quadratic equation to its standard form before applying the formula.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter4;
