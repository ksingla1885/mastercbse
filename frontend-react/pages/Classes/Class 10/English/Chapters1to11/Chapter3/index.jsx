import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

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
                    <h1>Chapter 3: Two Stories about Flying</h1>
                    <p>Discover tales of courage and adventure in the skies.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This chapter consists of two short stories: "His First Flight" by Liam O'Flaherty and "Black Aeroplane" by Frederick Forsyth. Both stories explore themes of fear, courage, and self-discovery through aviation, using metaphors of flight to represent personal growth and the unknown.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>His First Flight - Summary</h3>
                        <p>A young seagull is afraid to fly. His parents encourage him, but he refuses. One day, hungry and alone, he is forced to take his first flight when he dives for food. He succeeds and joins his family, learning that overcoming fear leads to freedom.</p>
                        <p><strong>Insight:</strong> This story uses the seagull as a symbol for human hesitation and the necessity of facing fears to achieve independence.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Black Aeroplane - Summary</h3>
                        <p>A pilot flying alone at night encounters a storm and follows a mysterious black aeroplane that guides him to safety. When he lands, he learns there was no other plane on radar, leaving the mystery unsolved.</p>
                        <p><strong>Insight:</strong> The story creates suspense and explores themes of the supernatural, questioning reality and human perception.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Courage and Fear:</strong> Overcoming initial fears to achieve growth.</li>
                            <li><strong>Instinct and Survival:</strong> Trusting natural instincts in critical situations.</li>
                            <li><strong>Mystery and the Unknown:</strong> Elements of suspense and the unexplained.</li>
                            <li><strong>Self-Discovery:</strong> Learning about oneself through personal challenges.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>The Young Seagull:</strong> Represents hesitation and eventual triumph over fear.</li>
                            <li><strong>The Pilot:</strong> A brave figure facing unknown dangers, relying on instinct.</li>
                            <li><strong>Supporting Characters:</strong> Parents and radar controllers who provide context and contrast.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Describe the young seagull's first flight experience.</div>
                        <div className={styles.practiceQuestion}>2. What mystery surrounds the black aeroplane?</div>
                        <div className={styles.practiceQuestion}>3. How do both stories illustrate the theme of courage?</div>
                        <div className={styles.practiceQuestion}>4. Compare the two stories in terms of setting and outcome.</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> Driven by hunger, the seagull leaps off the ledge, flutters his wings, and successfully flies for the first time.</li>
                            <li><strong>2.</strong> The pilot follows a black plane to safety, but radar shows no other plane was in the sky, leaving its existence a mystery.</li>
                            <li><strong>3.</strong> Both stories show courage through facing fears: the seagull overcomes physical fear, and the pilot trusts an unknown guide.</li>
                            <li><strong>4.</strong> "His First Flight" is a natural, realistic victory, while "Black Aeroplane" is a supernatural mystery.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Authors: Liam O'Flaherty & Frederick Forsyth. Genre: Short Stories. Central Themes: Courage vs. Fear, and the role of the unknown in personal growth.</p>
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
