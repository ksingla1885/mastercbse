import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter8 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 8: Heredity and Evolution</h1>
                    <p>Understanding the Blueprint of Life</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter deals with how traits are inherited from parents to offspring. It explains Mendel's laws of inheritance, how sex is determined in humans, and the basic concepts of evolution (though the evolution part is often reduced in recent syllabi, heredity remains core).</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Heredity</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Definition:</strong> Transmission of characters (traits) from parents to offspring.</p>
                            <p><strong>Variation:</strong> Differences in characters among individuals of the same species. It is the basis for evolution.</p>
                            <p><strong>Gene:</strong> The functional unit of heredity present on chromosomes. It codes for a specific protein.</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Mendel's Experiments</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Monohybrid Cross:</strong> Cross between two plants differing in one pair of contrasting characters (e.g., Tall vs Dwarf). <br /> Phenotypic Ratio: 3:1. Genotypic Ratio: 1:2:1.</p>
                            <p><strong>Dihybrid Cross:</strong> Cross involving two pairs of contrasting characters (e.g., Round-Yellow seeds vs Wrinkled-Green seeds). <br /> Phenotypic Ratio: 9:3:3:1.</p>
                            <p><strong>Laws:</strong> Law of Segregation (during gamete formation, factors segregate) and Law of Independent Assortment.</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Sex Determination in Humans</h3>
                        <ul>
                            <li>Humans have 23 pairs of chromosomes. 22 pairs are autosomes, and 1 pair is sex chromosomes.</li>
                            <li><strong>Male:</strong> XY. Produces two types of sperms (50% X-carrying, 50% Y-carrying).</li>
                            <li><strong>Female:</strong> XX. Produces only X-carrying eggs.</li>
                            <li>The sex of the child is determined by the sperm that fertilizes the egg. (X + X = Girl, X + Y = Boy).</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Why did Mendel choose the pea plant for his experiments?
                        </div>
                        <div className={styles.solutionBox}>
                            Pea plants (Pisum sativum) are easy to grow, have a short life cycle, produce many seeds, and have easily observable contrasting traits (e.g., tall/dwarf, purple/white flowers).
                        </div>

                        <div className={styles.practiceQuestion}>
                            How is the sex of a child determined in human beings?
                        </div>
                        <div className={styles.solutionBox}>
                            It depends on the father. If a sperm carrying an X chromosome fertilizes the egg, the child will be a girl (XX). If a sperm carrying a Y chromosome fertilizes the egg, the child will be a boy (XY).
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Acquired traits (learned during lifetime, e.g., swimming) are not inherited. Inherited traits (genetic, e.g., blood group) are passed down. Speciation is the formation of new species from existing ones.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter8;
