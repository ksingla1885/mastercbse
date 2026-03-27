
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Mathematics.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class9Maths = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const chapters = [
        { id: 1, title: 'Number Systems', description: 'Explore irrational numbers, real numbers and their decimal expansions.' },
        { id: 2, title: 'Polynomials', description: 'Zeroes of a polynomial, remainder theorem, factorisation and identities.' },
        { id: 3, title: 'Coordinate Geometry', description: 'Cartesian system, plotting points in a plane with given coordinates.' },
        { id: 4, title: 'Linear Equations in Two Variables', description: 'Solution of a linear equation, graph and equations of lines parallel to axes.' },
        { id: 5, title: 'Introduction to Euclid’s Geometry', description: 'Euclid’s definitions, axioms and postulates.' },
        { id: 6, title: 'Lines and Angles', description: 'Basic terms, intersecting lines, parallel lines and transversals.' },
        { id: 7, title: 'Triangles', description: 'Congruence of triangles, criteria for congruence and properties.' },
        { id: 8, title: 'Quadrilaterals', description: 'Angle sum property, types of quadrilaterals and mid-point theorem.' },
        { id: 9, title: 'Areas of Parallelograms and Triangles', description: 'Figures on the same base and between the same parallels.' },
        { id: 10, title: 'Circles', description: 'Angle subtended by a chord, perpendicular from center, circles through three points.' },
        { id: 11, title: 'Constructions', description: 'Basic constructions, and construction of triangles.' },
        { id: 12, title: 'Heron’s Formula', description: 'Area of a triangle using Heron’s formula and its applications.' },
        { id: 13, title: 'Surface Areas and Volumes', description: 'Surface area and volume of spheres, cones, cylinders, and cuboids.' },
        { id: 14, title: 'Statistics', description: 'Collection of data, presentation of data, graphical representation and central tendency.' },
        { id: 15, title: 'Probability', description: 'An experimental approach to probability.' }
    ];

    const handleChapterClick = (id) => {
        // Navigate to the specific chapter page if it exists
        navigate(`/class/Class 9/Mathematics/Chapter${id}`);
    };

    return (
        <div className={styles.mathPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Class 9 Mathematics</h1>
                    <p>Master concepts from Number Systems to Probability with our curated study material and practice problems.</p>
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

export default Class9Maths;
