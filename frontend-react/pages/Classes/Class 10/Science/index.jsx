import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Science.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class10Science = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const chapters = [
        { id: 1, title: 'Chemical Reactions and Equations', description: 'Writing and balancing chemical equations, types of reactions and oxidation-reduction.' },
        { id: 2, title: 'Acids, Bases and Salts', description: 'Chemical properties, pH scale, importance in daily life and preparation of common salts.' },
        { id: 3, title: 'Metals and Non-Metals', description: 'Physical and chemical properties, reactivity series, occurrence and extraction of metals.' },
        { id: 4, title: 'Carbon and Its Compounds', description: 'Bonding in carbon, saturated and unsaturated hydrocarbons, functional groups and reactions.' },
        { id: 5, title: 'Periodic Classification of Elements', description: 'Early attempts, Mendeleev’s periodic table and trends in the modern periodic table.' },
        { id: 6, title: 'Life Processes', description: 'Nutrition, respiration, transportation and excretion in plants and animals.' },
        { id: 7, title: 'Control and Coordination', description: 'Nervous system, reflex action, hormones in animals and coordination in plants.' },
        { id: 8, title: 'How do Organisms Reproduce?', description: 'Asexual and sexual reproduction, reproductive health and family planning.' },
        { id: 9, title: 'Heredity and Evolution', description: 'Accumulation of variation, Mendel’s contribution, speciation and human evolution.' },
        { id: 10, title: 'Light - Reflection and Refraction', description: 'Reflection by spherical mirrors, refraction through glass slab, lens and power.' },
        { id: 11, title: 'Human Eye and Colourful World', description: 'Structure of the eye, defects of vision, refraction through a prism and atmospheric phenomena.' },
        { id: 12, title: 'Electricity', description: 'Electric current, potential difference, Ohm’s law, resistance and heating effect.' },
        { id: 13, title: 'Magnetic Effects of Electric Current', description: 'Magnetic fields, force on current-carrying conductor, electric motor and generator.' }
    ];

    const handleChapterClick = (id) => {
        navigate(`/class/Class 10/Science/Chapter${id}`);
    };

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Class 10 Science</h1>
                    <p>Unlock the secrets of the physical and biological world with our detailed guides for Class 10 CBSE boards.</p>
                    <button
                        className={styles.samplePaperBtn}
                        onClick={() => navigate('/sample-papers?class=10&subject=Science')}
                    >
                        📄 Explore Sample Papers
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

export default Class10Science;
