import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../ScienceChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter7 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sciencePage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 7: How do Organisms Reproduce?</h1>
                    <p>The Continuity of Life</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter discusses the process of reproduction in plants and animals. It covers both asexual modes (like fission, budding) and sexual reproduction, explaining gamete formation, fertilization, and embryonic development.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Asexual Reproduction</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Fission:</strong> Binary (Amoeba, Leishmania), Multiple (Plasmodium).</p>
                            <p><strong>Budding:</strong> Hydra, Yeast.</p>
                            <p><strong>Spore Formation:</strong> Rhizopus.</p>
                            <p><strong>Regeneration:</strong> Planaria, Hydra.</p>
                            <p><strong>Vegetative Propagation:</strong> Artificial (Grafting), Natural (Leaves - Bryophyllum).</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Sexual Reproduction (Flowering Plants)</h3>
                        <div className={styles.solutionBox}>
                            <p><strong>Male:</strong> Stamen (Anther produces Pollen).</p>
                            <p><strong>Female:</strong> Pistil/Carpel (Stigma, Style, Ovary → Ovules → Egg).</p>
                            <p><strong>Pollination:</strong> Transfer of pollen (Self/Cross). Agents: Wind, Water, Animals.</p>
                            <p><strong>Fertilization:</strong> Pollen tube grows → Male gamete fuses with Egg (Zygote) → Ovule becomes Seed, Ovary becomes Fruit.</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Sexual Reproduction (Humans)</h3>
                        <div className={styles.conceptBox}>
                            <p><strong>Male System:</strong> Testis (Sperm & Testosterone), Vas Deferens, Prostrate/Seminal Vesicles (Fluid), Penis.</p>
                            <p><strong>Female System:</strong> Ovaries (Egg & Estrogen), Fallopian Tube (Site of fertilization), Uterus (Womb), Vagina.</p>
                            <p><strong>Menstruation:</strong> Monthly shedding of uterine lining if no fertilization occurs.</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Important Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What is the importance of DNA copying in reproduction?
                        </div>
                        <div className={styles.solutionBox}>
                            DNA transmits genetic information (characters/traits) from parents to offspring. It is the basis of inheritance. Small inaccuracies during copying lead to variation, which is essential for evolution.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Why does menstruation occur?
                        </div>
                        <div className={styles.solutionBox}>
                            The uterus prepares itself every month to receive a fertilized egg by thickening its lining. If fertilization does not occur, this lining breaks down and comes out as blood and mucus.
                        </div>

                        <div className={styles.practiceQuestion}>
                            What are the different methods of contraception?
                        </div>
                        <div className={styles.solutionBox}>
                            <strong>Barrier:</strong> Condoms, Diaphragm.<br />
                            <strong>Chemical:</strong> Oral pills (change hormonal balance).<br />
                            <strong>IUD:</strong> Copper-T.<br />
                            <strong>Surgical:</strong> Vasectomy (Male), Tubectomy (Female).
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Sexual reproduction brings variation essential for survival. The Placenta is a disc-like tissue connecting the embryo to the mother's uterine wall for nutrition and waste removal. STDs (Gonorrhea, Syphilis, HIV-AIDS) can be prevented by using condoms.</p>
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
