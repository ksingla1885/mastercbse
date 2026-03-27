
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Science.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class9Science = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const chemistryChapters = [
        { id: 'c1', title: 'Matter in Our Surroundings', summary: 'Characteristics of matter, states of matter, and change of states.' },
        { id: 'c2', title: 'Is Matter Around Us Pure?', summary: 'Mixtures, types of solutions, and methods of separation.' },
        { id: 'c3', title: 'Atoms and Molecules', summary: 'Laws of chemical combination, Dalton’s atomic theory, and atomic mass.' },
        { id: 'c4', title: 'Structure of the Atom', summary: 'Charged particles in matter, Thomson and Rutherford atomic models.' }
    ];

    const physicsChapters = [
        { id: 'p1', title: 'Motion', summary: 'Describing motion, speed with direction, and graphical representation.' },
        { id: 'p2', title: 'Force and Laws of Motion', summary: 'Balanced and unbalanced forces, Newton’s laws of motion.' },
        { id: 'p3', title: 'Gravitation', summary: 'Universal law of gravitation, free fall, mass vs weight.' },
        { id: 'p4', title: 'Work and Energy', summary: 'Work, kinetic energy, potential energy, and law of conservation.' },
        { id: 'p5', title: 'Sound', summary: 'Production, propagation, and reflection of sound.' }
    ];

    const biologyChapters = [
        { id: 'b1', title: 'The Fundamental Unit of Life', summary: 'Discovery of cells, structural organization, and types of cells.' },
        { id: 'b2', title: 'Tissues', summary: 'Plant tissues, animal tissues, and their structural differences.' },
        { id: 'b3', title: 'Diversity in Living Organisms', summary: 'Basis of classification, hierarchy, and kingdoms.' },
        { id: 'b4', title: 'Why Do We Fall Ill', summary: 'Health and its failure, disease and its causes.' },
        { id: 'b5', title: 'Natural Resources', summary: 'Air, water, soil, and the biogeochemical cycles.' },
        { id: 'b6', title: 'Improvement in Food Resources', summary: 'Crop variety improvement, crop production management.' }
    ];

    const handleChapterClick = (id) => {
        navigate(`/class/Class 9/Science/Chapter-${id}`);
    };

    const renderChapterCategory = (title, chapters, tag) => (
        <section className={styles.categorySection}>
            <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}></div>
                <h2 className={styles.categoryTitle}>{title}</h2>
            </div>
            <div className={styles.chapterGrid}>
                {chapters.map((chapter) => (
                    <div key={chapter.id} className={styles.chapterCard}>
                        <div className={styles.chapterInfo}>
                            <span className={styles.chapterTag}>{tag}</span>
                            <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                            <p className={styles.chapterSummary}>{chapter.summary}</p>
                        </div>
                        <button className={styles.exploreBtn} onClick={() => handleChapterClick(chapter.id)}>
                            Explore Content
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Class 9 Science</h1>
                    <p>Unravel the mysteries of the universe through Physics, Chemistry, and Biology. Explore comprehensive notes and visualized concepts.</p>
                </div>
            </header>

            <main className={styles.container}>
                {renderChapterCategory('Chemistry', chemistryChapters, 'Chemistry')}
                {renderChapterCategory('Physics', physicsChapters, 'Physics')}
                {renderChapterCategory('Biology', biologyChapters, 'Biology')}
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class9Science;
