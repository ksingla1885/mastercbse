import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter13 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 13: The Thief's Story</h1>
                    <p>A tale of redemption and the power of trust.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This story by Ruskin Bond explores the theme of redemption through the life of a young thief named Hari Singh. It demonstrates how genuine compassion and trust can transform a person more effectively than any punishment.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Anil, a 25-year-old strugglesome writer, is approached by a 15-year-old thief who calls himself Hari Singh. Anil is kind, simple, and easy-going—the perfect target for a thief. Anil hires Hari as a cook, even though Hari doesn't know how to cook. Instead of being angry at the terrible food, Anil teaches Hari how to cook and, more importantly, how to read and write.</p>
                        <p>Hari continues to cheat Anil by making a small profit from grocery shopping, but he is moved by Anil's absolute trust. One night, Hari steals a large sum of money Anil had just earned. He runs to the railway station but finds himself unable to board the train. His conscience, awakened by Anil's kindness and the prospect of education, forces him to return the money. Anil discovers the theft (as the notes are still damp) but says nothing, choosing to forgive Hari through silence and a promise of a regular salary.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Redemption:</strong> The transition of a character from crime to morality through positive influence.</li>
                            <li><strong>The Power of Education:</strong> Hari realizes that being literate could earn him much more respect and money than stealing ever could.</li>
                            <li><strong>Trust and Compassion:</strong> Anil’s unconditional trust acts as a mirror that forces Hari to see his own potential for goodness.</li>
                            <li><strong>Silence as Forgiveness:</strong> Anil’s choice not to confront Hari about the stolen money is a powerful act of mercy.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Hari Singh:</strong> A seasoned thief for his age, he is observant and manipulative but possesses a faint spark of conscience that Anil eventually fans into a flame.</li>
                            <li><strong>Anil:</strong> A kind, careless, and generous man. He is a writer who earns in fits and starts but is always willing to share what he has. He represents the redemptive power of the human spirit.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Why did Hari Singh take on a new name every month?</div>
                        <div className={styles.practiceQuestion}>2. What kind of person was Anil?</div>
                        <div className={styles.practiceQuestion}>3. Why could Hari Singh not board the Lucknow Express?</div>
                        <div className={styles.practiceQuestion}>4. How did Anil react to the theft the next morning?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> To keep ahead of the police and his former employers.</li>
                            <li><strong>2.</strong> He was a simple, kind, and easy-going man who lived beyond his means but had a heart of gold.</li>
                            <li><strong>3.</strong> His conscience and the memory of Anil's trust made him hesitate long enough to miss the train. Or as he put it, "something" stopped him.</li>
                            <li><strong>4.</strong> He knew about it (the notes were wet from the rain), but he didn't hand Hari over to the police; instead, he gave him a fifty-rupee note and promised to pay him regularly.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Ruskin Bond. Symbolism: The "damp notes" represent a washed-away past. Key takeaway: Trust is a greater deterrent to crime than fear.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter13;
