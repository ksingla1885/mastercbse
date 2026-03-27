import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter9 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 9: Madam Rides the Bus</h1>
                    <p>An adventurous journey of a young girl.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This story by Vallikkannan depicts the curiosity and determination of an eight-year-old girl named Valli who embarks on her first bus journey alone. It is a sensitive story about a child's first encounter with the larger world—the mystery of life and the tragedy of death.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Valli, a curious girl from a small village, spends her time watching the bus that passes her street every hour. Her strongest desire is to ride that bus. She meticulously plans her trip, saving every coin, resisting the temptation to buy candy or ride the merry-go-round, and gathering information by listening to neighbors' conversations.</p>
                        <p>During the ride, she acts with great dignity—insisting on being treated like an adult ("Madam") and observing the beautiful canal, palm trees, and mountains outside. However, the return journey brings a somber realization when she sees a young cow, which had been lively earlier, lying dead by the roadside. This encounter with death silences her and marks the beginning of her maturity.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Curiosity vs. Reality:</strong> The gap between a child's wonder and the somber truths of the world.</li>
                            <li><strong>Self-Respect:</strong> Valli's insistence on being treated as an independent individual.</li>
                            <li><strong>Life and Death:</strong> The cyclical and unpredictable nature of life, witnessed through the cow.</li>
                            <li><strong>Perseverance:</strong> Valli's disciplined way of saving money and planning her dream trip.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Valli (Valliammai):</strong> Mature beyond her years, highly observant, and fiercely independent. She is sensitive but self-assured.</li>
                            <li><strong>The Conductor:</strong> A jolly man who is amused by Valli’s "grown-up" behavior and calls her "Madam" to play along.</li>
                            <li><strong>The Elderly Woman:</strong> Represents the traditional, fussy perspective on children, contrast to Valli's independence.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. How did Valli save money for her first bus journey?</div>
                        <div className={styles.practiceQuestion}>2. Why didn't Valli get off the bus at the town station?</div>
                        <div className={styles.practiceQuestion}>3. What changed Valli’s mood on her way back home?</div>
                        <div className={styles.practiceQuestion}>4. How did Valli react when the conductor offered her a free drink?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> She carefully saved every stray coin, stifling her desires for toys, peppermint, and even a merry-go-round ride.</li>
                            <li><strong>2.</strong> She was afraid of getting lost and her main goal was the ride itself, not the town, so she stayed on her seat.</li>
                            <li><strong>3.</strong> She saw a dead cow on the road, the same one that had been running joyfully in front of the bus earlier.</li>
                            <li><strong>4.</strong> She politely refused, showing her self-respect and maturity in not accepting favors from strangers.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Vallikkannan. Key Lesson: The journey to maturity often involves a loss of innocence. Focus on Valli's internal planning versus her external experience.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter9;
