import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter11 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 11: The Proposal</h1>
                    <p>A comedic play about love and misunderstandings.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This is a one-act play by Anton Chekhov, satirizing the absurdities of love, marriage, and property ownership in 19th-century Russia. It uses farce and exaggeration to critique how trivial disputes can overshadow life-altering decisions.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Ivan Lomov, a long-time neighbor and hypochondriac, visits Stepan Chubukov with the intention of proposing to his daughter, Natalya. Chubukov is thrilled, as he wants to marry off his daughter. However, when Lomov and Natalya speak, they quickly fall into a heated argument over the ownership of "Oxen Meadows."</p>
                        <p>After Lomov leaves in a huff, Natalya learns he came to propose and becomes hysterical, demanding her father bring him back. But once he returns, they start another shouting match over whose hunting dog is better—Lomov's 'Guess' or Natalya's 'Squeezer.' Even after they finally agree to marry, the play ends with them still arguing, showing that their temperament remains unchanged.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Economic Marriage:</strong> Marriage as a business deal to combine estates rather than a union of love.</li>
                            <li><strong>Stubbornness and Pride:</strong> How the characters' pride in ownership leads to endless, petty conflicts.</li>
                            <li><strong>Hypochondria:</strong> Lomov's constant complaints about his health serve as a comedic device to underline his nervousness.</li>
                            <li><strong>Farce:</strong> The use of physical comedy and exaggerated situations to make a social point.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Ivan Lomov:</strong> A nervous landowner who is more concerned with his "palpitations" and property rights than romance.</li>
                            <li><strong>Natalya Stepanovna:</strong> An excellent housekeeper and educated woman who is nevertheless extremely argumentative and impulsive.</li>
                            <li><strong>Stepan Chubukov:</strong> A landowner who prioritizes social standing and wealth, acting as a mediator who often ends up fueling the fire.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Why does Lomov decide to marry?</div>
                        <div className={styles.practiceQuestion}>2. What are the two main subjects of argument in the play?</div>
                        <div className={styles.practiceQuestion}>3. How does Natalya react when she finds out about the proposal?</div>
                        <div className={styles.practiceQuestion}>4. Explain the significance of the title "The Proposal."</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> Lomov thinks he is at a "critical age" (35) and needs to lead a quiet, regular life because of his poor health.</li>
                            <li><strong>2.</strong> The ownership of Oxen Meadows and the superiority of their respective hunting dogs.</li>
                            <li><strong>3.</strong> She goes into a state of panic and desperation, ordering her father to bring Lomov back immediately, despite having just insulted him.</li>
                            <li><strong>4.</strong> The title is ironic because the actual "proposal" is almost never completed due to the constant interruptions and arguments.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Anton Chekhov. Key Elements: Satire on the Russian landed gentry. Focus on the comedic timing and the contrast between the characters' noble intentions and their petty behaviors.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter11;
