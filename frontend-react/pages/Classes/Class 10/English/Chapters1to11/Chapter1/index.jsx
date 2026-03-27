import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter1 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 1: A Letter to God</h1>
                    <p>Explore the story of Lencho and his unwavering faith.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This chapter is a story written by G.L. Fuentes, highlighting the theme of unwavering faith in God. It tells the tale of Lencho, a poor farmer, and his deep belief in divine intervention during times of hardship. The story emphasizes how faith can provide hope even in the face of adversity, and it critiques human institutions while praising simple, childlike trust.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Lencho, a hardworking farmer, lives in a small house on the crest of a low hill with his wife and two sons. He is deeply religious and has immense faith in God. One year, his cornfield is destroyed by a hailstorm, leaving his family in despair. Believing that only God can help, Lencho writes a letter to God, asking for 100 pesos to sow his field again and support his family until the next harvest.</p>
                        <p>He posts the letter at the post office, where the postmaster, amused by the letter, decides to help. The postmaster collects money from his employees and friends, but can only gather 70 pesos. He sends this amount to Lencho in an envelope signed "God."</p>
                        <p>When Lencho receives the money, he is grateful but counts only 70 pesos. Disappointed, he writes another letter to God, complaining that the post office employees must have stolen 30 pesos, as God cannot make mistakes. The postmaster is shocked by Lencho's unwavering faith and lack of doubt in God.</p>
                        <p><strong>Irony of the Story:</strong> The story uses irony to show Lencho's blind faith. The postmaster represents human kindness, but Lencho's suspicion of the post office highlights a lack of trust in institutions.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Faith and Belief:</strong> Lencho's absolute faith in God shows how strong belief can persist even in adversity.</li>
                            <li><strong>Honesty and Integrity:</strong> The postmaster's act of kindness highlights human honesty and compassion.</li>
                            <li><strong>Bureaucracy vs. Faith:</strong> The story subtly contrasts the simple faith of an individual with the perceived corruption of institutions.</li>
                            <li><strong>Simplicity and Innocence:</strong> Lencho's childlike trust reflects a purity of heart that is rare in the modern world.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Lencho:</strong> A simple, hardworking farmer with unshakeable faith. He is optimistic and believes God will help him.</li>
                            <li><strong>The Postmaster:</strong> A kind-hearted man who helps Lencho, representing human compassion and empathy.</li>
                            <li><strong>Lencho's Family:</strong> Supportive and united in hardship, sharing Lencho's faith.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Why did Lencho write a letter to God?</div>
                        <div className={styles.practiceQuestion}>2. How did the postmaster help Lencho?</div>
                        <div className={styles.practiceQuestion}>3. What was Lencho's reaction when he received 70 pesos?</div>
                        <div className={styles.practiceQuestion}>4. Explain the theme of faith in the story.</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> Lencho wrote the letter because his crops were destroyed by a hailstorm and he believed only God could help him replant his fields.</li>
                            <li><strong>2.</strong> The postmaster collected money from colleagues and friends to send to Lencho, signing it "God" to keep Lencho's faith alive.</li>
                            <li><strong>3.</strong> Lencho was disappointed because he received less than he asked for. He suspected the postal workers of stealing the money.</li>
                            <li><strong>4.</strong> The story shows that faith is a powerful tool for hope, but it also shows how faith can sometimes lead to a lack of trust in fellow humans.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: G.L. Fuentes. Genre: Short Story. Main Theme: Faith in God. Key elements: Irony, human kindness, and the struggle of a simple farmer. Focus on the relationship between faith and evidence.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter1;
