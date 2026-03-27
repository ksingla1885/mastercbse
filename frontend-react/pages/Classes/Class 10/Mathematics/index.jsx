import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Mathematics.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class10Maths = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const chapters = [
        { id: 1, title: 'Real Numbers', description: 'Euclid’s division lemma, fundamental theorem of arithmetic, irrational numbers and rational numbers.' },
        { id: 2, title: 'Polynomials', description: 'Zeroes of a polynomial, relationship between zeroes and coefficients, division algorithm for polynomials.' },
        { id: 3, title: 'Pair of Linear Equations in Two Variables', description: 'Graphical and algebraic methods of solution, cross-multiplication and reducible forms.' },
        { id: 4, title: 'Quadratic Equations', description: 'Standard form, solution by factorisation, completing the square and quadratic formula.' },
        { id: 5, title: 'Arithmetic Progressions', description: 'Motivation for AP, nth term and sum of first n terms, applications in daily life.' },
        { id: 6, title: 'Triangles', description: 'Similar triangles, criteria for similarity, areas of similar triangles and Pythagoras theorem.' },
        { id: 7, title: 'Coordinate Geometry', description: 'Review of coordinate geometry, distance formula, section formula and area of a triangle.' },
        { id: 8, title: 'Introduction to Trigonometry', description: 'Trigonometric ratios, values for specific angles, identities and complementary angles.' },
        { id: 9, title: 'Some Applications of Trigonometry', description: 'Heights and distances, angle of elevation and depression, multi-step problems.' },
        { id: 10, title: 'Circles', description: 'Tangent to a circle, properties of tangents from an external point.' },
        { id: 11, title: 'Constructions', description: 'Division of a line segment, construction of tangents to a circle.' },
        { id: 12, title: 'Areas Related to Circles', description: 'Area of sector and segment, perimeter and area of plane figures.' },
        { id: 13, title: 'Surface Areas and Volumes', description: 'Surface area and volume of combinations of solids, frustum of a cone.' },
        { id: 14, title: 'Statistics', description: 'Mean, median and mode of grouped data, cumulative frequency graphs (ogives).' },
        { id: 15, title: 'Probability', description: 'Classical definition, simple problems on single events.' }
    ];

    const handleChapterClick = (id) => {
        navigate(`/class/Class 10/Mathematics/Chapter${id}`);
    };

    return (
        <div className={styles.mathPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Class 10 Mathematics</h1>
                    <p>Conquer the CBSE Board exams with our comprehensive guides to Real Numbers, Geometry, Trigonometry, and more.</p>
                    <button className={styles.heroBtn} onClick={() => navigate('/sample-papers?class=10&subject=Mathematics')}>
                        📝 Explore Sample Papers
                    </button>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.chapterGrid}>
                    {chapters.map((chapter) => (
                        <div key={chapter.id} className={styles.chapterCard}>
                            <div className={styles.chapterHeader}>
                                <div className={styles.chapterNumber}>{chapter.id}</div>
                                <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                            </div>
                            <p className={styles.chapterDescription}>{chapter.description}</p>
                                <button
                                    className={styles.exploreBtn}
                                    onClick={() => handleChapterClick(chapter.id)}
                                >
                                    Explore Chapter
                                </button>
                        </div>
                    ))}
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class10Maths;
