import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MathChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter3 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 3: Pair of Linear Equations in Two Variables</h1>
                    <p>Solving Systems through Graphical and Algebraic Methods.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter focuses on systems of two linear equations in two variables. We learn how to represent them geometrically as lines and how to find their common solutions using various algebraic techniques like substitution, elimination, and cross-multiplication.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Consistency of Equations</h3>
                        <div className={styles.solutionBox}>
                            <p>For equations: <strong>a₁x + b₁y + c₁ = 0</strong> and <strong>a₂x + b₂y + c₂ = 0</strong>:</p>
                            <ul>
                                <li><strong>Unique Solution:</strong> a₁/a₂ ≠ b₁/b₂ (Lines intersect)</li>
                                <li><strong>Infinitely Many Solutions:</strong> a₁/a₂ = b₁/b₂ = c₁/c₂ (Coincident lines)</li>
                                <li><strong>No Solution:</strong> a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (Parallel lines)</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Algebraic Methods</h3>
                        <ul>
                            <li><strong>Substitution Method:</strong> Express one variable in terms of the other from one equation and substitute it into the second equation.</li>
                            <li><strong>Elimination Method:</strong> Multiply one or both equations by suitable constants to make the coefficients of one variable equal, then add or subtract to eliminate that variable.</li>
                            <li><strong>Cross-Multiplication Method:</strong> A direct formulaic approach for finding x and y using coefficients.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>NCERT Exercise Solutions</h3>

                        <h4>Exercise 3.2 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Solve x + y = 14 and x - y = 4 using Substitution.
                        </div>
                        <div className={styles.solutionBox}>
                            From eq (2): x = y + 4.<br />
                            Substitute in eq (1): (y + 4) + y = 14 ⇒ 2y = 10 ⇒ <strong>y = 5</strong>.<br />
                            Then x = 5 + 4 = <strong>9</strong>.
                        </div>

                        <h4>Exercise 3.3 Highlights</h4>
                        <div className={styles.practiceQuestion}>
                            Solve 3x + 4y = 10 and 2x - 2y = 2 using Elimination.
                        </div>
                        <div className={styles.solutionBox}>
                            Multiply eq (2) by 2: 4x - 4y = 4.<br />
                            Add to eq (1): (3x + 4y) + (4x - 4y) = 10 + 4 ⇒ 7x = 14 ⇒ <strong>x = 2</strong>.<br />
                            Substitute x=2 in eq (1): 3(2) + 4y = 10 ⇒ 4y = 4 ⇒ <strong>y = 1</strong>.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Always check the ratios of coefficients first to determine the nature of solutions. Be careful with sign changes during substitution and elimination. Word problems involving ages, fractions, and speeds are highly important for exams.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter3;
