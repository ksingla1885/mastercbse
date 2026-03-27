import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter18 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 18: The Necklace</h1>
                    <p>A tragic tale of vanity, social ambition, and a cruel twist of fate.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This classic short story by Guy de Maupassant explores the destructive power of vanity and dissatisfaction. It follows Mathilde Loisel, a woman whose desire to appear wealthier than she is leads to ten years of misery, only to culminate in a shocking, ironic realization.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Mathilde Loisel is a beautiful woman born into a family of clerks. She feels she is destinied for a life of luxury and is constantly miserable in her modest middle-class home. Her husband, a kind clerk, secures an invitation to a grand ball at the Ministry. To look the part, Mathilde buys a dress with her husband's savings and borrows a stunning diamond necklace from her wealthy friend, Madame Forestier.</p>
                        <p>Mathilde is the star of the ball, but the night ends in disaster when she loses the necklace. Too proud to admit the truth, the Loisels spend their entire fortune and borrow heavily to buy an identical replacement for 36,000 francs. For the next ten years, they live in extreme poverty, working multiple jobs and living in a garret. Mathilde loses her beauty and youth to hard labor. At the end of these ten years, she meets Madame Forestier and tells her the truth. She is stunned to learn that the original necklace was a "paste"—a fake worth no more than five hundred francs.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Vanity and Greed:</strong> Mathilde’s lack of contentment and her desire to "show off" are the root causes of her downfall.</li>
                            <li><strong>The Irony of Social Status:</strong> Mathilde wanted to be more than a clerk’s wife; in trying to reach that height, she ended up in even deeper poverty.</li>
                            <li><strong>Appearance vs. Reality:</strong> The necklace appeared to be a fortune but was worthless, much like Mathilde’s dream of high society.</li>
                            <li><strong>The Cost of Pride:</strong> Had Mathilde told her friend the truth immediately, she would have saved her life from a decade of suffering.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Mathilde Loisel:</strong> Initially vain, self-centered, and ungrateful. However, she shows a heroic, if tragic, resilience during the ten years of poverty, which she endures without complaining.</li>
                            <li><strong>Monsieur Loisel:</strong> A selfless and devoted husband. He gives up his dreams and his comfort to satisfy his wife's whims and later to save their "honor."</li>
                            <li><strong>Madame Forestier:</strong> A wealthy friend who represents the security Mathilde craves. Her revelation at the end provides the story's crushing ironic weight.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Why was Mathilde always unhappy in her early married life?</div>
                        <div className={styles.practiceQuestion}>2. How did Monsieur Loisel manage to find the money for the replacement necklace?</div>
                        <div className={styles.practiceQuestion}>3. How did the ten years of poverty change Mathilde?</div>
                        <div className={styles.practiceQuestion}>4. What was the "cruel joke" that fate played on the Loisels?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> She felt she was born for all delicacies and luxuries, and she suffered from the poverty of her apartment and the worn-out chairs.</li>
                            <li><strong>2.</strong> He used 18,000 francs left by his father and borrowed the rest from usurers and money-lenders at high interest rates.</li>
                            <li><strong>3.</strong> She became a "strong, hard woman" of a poor household. She learned to haggle, do heavy housework, and live without any trace of her former elegance.</li>
                            <li><strong>4.</strong> They sacrificed their entire lives to pay for a real diamond necklace only to find out that the one they lost was an imitation.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Guy de Maupassant. Literary Device: Situational Irony. Key takeaway: Honor and honesty are more valuable than appearances. Focus on the contrast between the ball night and the years that followed.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter18;
