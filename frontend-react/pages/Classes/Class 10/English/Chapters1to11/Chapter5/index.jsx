import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter5 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 5: The Hundred Dresses – I</h1>
                    <p>A story about bullying and empathy.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This story by Eleanor Estes addresses themes of bullying, prejudice, and empathy through the experiences of a young girl named Wanda Petronski. It serves as a moral lesson on the consequences of discrimination.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Wanda Petronski, a poor Polish immigrant, attends school in an American town. She is often teased by classmates for her unusual name and worn-out clothes. Peggy and Maddie, two popular girls, frequently mock Wanda about her claim of owning a hundred dresses, which is likely a fabrication to cope with bullying.</p>
                        <p>Wanda wins a drawing contest for designing dresses but disappears from school afterward. The story highlights the impact of bullying and the regret felt by those who participated. Wanda's drawings serve as a symbol of her inner world, contrasting with her outward struggles.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Bullying and Prejudice:</strong> The harmful effects of teasing based on differences and economic status.</li>
                            <li><strong>Empathy and Regret:</strong> Maddie's realization of the consequences of her silence.</li>
                            <li><strong>Immigration and Identity:</strong> The isolation of being "different" in a new culture.</li>
                            <li><strong>Friendship and Peer Pressure:</strong> How social hierarchy can influence behavior.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Wanda Petronski:</strong> A quiet, talented girl who uses her art as an escape from a harsh reality.</li>
                            <li><strong>Peggy:</strong> Popular and confident, she leads the "dress game" without realizing its cruelty.</li>
                            <li><strong>Maddie:</strong> Peggy's best friend who participates reluctantly due to her own poverty and fear of becoming the next target.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Why did Wanda claim to have a hundred dresses?</div>
                        <div className={styles.practiceQuestion}>2. Describe the relationship between Peggy and Maddie.</div>
                        <div className={styles.practiceQuestion}>3. What lesson did Maddie learn from the incident?</div>
                        <div className={styles.practiceQuestion}>4. Explain the theme of empathy in the story.</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> Wanda likely claimed this to gain some dignity or as an artistic vision of what she hoped to have.</li>
                            <li><strong>2.</strong> They are close, but Maddie is dependent and fearful of Peggy's disapproval.</li>
                            <li><strong>3.</strong> Maddie realized that being a "silent bystander" is as bad as being the bully.</li>
                            <li><strong>4.</strong> Empathy grows as Maddie begins to imagine herself in Wanda's place, feeling her pain and humiliation.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Eleanor Estes. Key Concept: Social sensitivity and the psychological impact of poverty and bullying on children. Focus on the contrast between Wanda's silence and her artistic vibrance.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter5;
