import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter20 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 20: Bholi</h1>
                    <p>A moving story of transformation, self-respect, and the power of a teacher.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This heartwarming story by K.A. Abbas tells the tale of Sulekha, nicknamed "Bholi" (the simpleton), who is neglected by her family due to her physical appearance and slow learning. It is a powerful narrative about how education and a supportive mentor can turn a "nobody" into a confident person who stands up for her dignity.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Sulekha was a normal child, but a head injury at ten months and a bout of smallpox at age two left her with pockmarks and a stammer. Her family, especially her father Ramlal, was only concerned with marrying her off. She was sent to school only because the Tehsildar insisted, and her parents thought no one would marry her anyway.</p>
                        <p>In school, she met a kind teacher who didn't laugh at her stammer but encouraged her with love. This transformed Bholi. Years later, a marriage was arranged for her with Bishamber, a wealthy but older, lame widower. When Bishamber saw Bholi's pockmarked face at the ceremony, he demanded a dowry of five thousand rupees. To save his honor, Ramlal gave the money. However, Bholi shocked everyone by throwing the garland into the fire and refusing to marry a "mean, greedy, and cowardly" man. She declared that she would live with her parents and teach in the same school where she learned so much. Her teacher, watching from a distance, felt the pride of an artist seeing her masterpiece come to life.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>The Power of Education:</strong> Education is portrayed not just as academic learning, but as the foundation of self-respect and courage.</li>
                            <li><strong>Social Discrimination:</strong> The story critiques how society and even families marginalize those who are "different" or "less attractive."</li>
                            <li><strong>The Role of a Teacher:</strong> A teacher is shown as a sculptor who can shape a broken child into a strong individual.</li>
                            <li><strong>Dignity and Self-Worth:</strong> Bholi’s refusal to marry for money is a victory of character over social pressure.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Bholi (Sulekha):</strong> The protagonist. She starts as a neglected, stammering girl and ends as a confident, articulate woman. Her transformation is the soul of the story.</li>
                            <li><strong>The Teacher:</strong> A compassionate woman who provides the "light" of knowledge and confidence. She is the catalyst for Bholi’s change.</li>
                            <li><strong>Ramlal:</strong> Bholi’s father, who is more worried about social standing and the "burden" of a daughter than her happiness.</li>
                            <li><strong>Bishamber Nath:</strong> A greedy and opportunistic man who represents the social evils like the dowry system.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Why was Sulekha called "Bholi"?</div>
                        <div className={styles.practiceQuestion}>2. How did the teacher help Bholi overcome her stammering?</div>
                        <div className={styles.practiceQuestion}>3. Why did Bholi's parents accept Bishamber’s marriage proposal?</div>
                        <div className={styles.practiceQuestion}>4. Why did Bholi refuse to marry Bishamber at the end?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> Because she had suffered a head injury as a baby that damaged part of her brain, making her a "simpleton" or a late bloomer.</li>
                            <li><strong>2.</strong> She spoke to her in a soft, soothing voice, encouraged her to say her name without fear, and gave her a book to inspire her to learn.</li>
                            <li><strong>3.</strong> They thought he was a good match because he was wealthy, had a big shop, and didn't ask for any dowry initially.</li>
                            <li><strong>4.</strong> Because he showed himself to be a greedy and heartless man by demanding five thousand rupees as soon as he saw her face.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: K.A. Abbas. Key Symbol: The "smiling teacher" vs the "greedy groom." Core Message: Education gives one the power to speak the truth and defend one's dignity.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter20;
