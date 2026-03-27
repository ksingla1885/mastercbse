import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter15 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 15: A Question of Trust</h1>
                    <p>Explores themes of trust, deception, and the irony of criminal honor.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This story by Victor Canning is a masterpiece of irony. It tells the story of Horace Danby, a "respectable" thief who finds himself outmaneuvered by a fellow criminal. The title suggests that even among thieves, trust is a complicated and often dangerous thing.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Horace Danby is a 50-year-old unmarried man who makes locks and is considered helpful and honest. However, he has a secret: once a year, he robs a safe to buy rare and expensive books. He plans his robberies meticulously. This year, his target is Shotover Grange.</p>
                        <p>While breaking into the safe, he is confronted by a beautiful young woman who claims to be the wife of the house owner. She tells him she's forgotten the safe's combination. Believing her, Horace opens the safe for her without gloves, thinking he's escaping a police report. Two days later, he is arrested because his fingerprints are all over the safe. He then realizes that the "lady in red" was actually another thief who played him perfectly. Horace, who believed in the "honor among thieves," is now the assistant librarian in prison, still thinking about the clever woman who tricked him.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Honor Among Thieves:</strong> The ironic subversion of the idea that criminals respect one another.</li>
                            <li><strong>Appearance vs. Reality:</strong> The lady in red used her charm and the setting of the house to create a perfectly convincing (but false) identity.</li>
                            <li><strong>Meticulous Planning vs. Human Error:</strong> Despite his detailed planning, Horace's hay fever and his tendency to trust a "classy" woman led to his downfall.</li>
                            <li><strong>Irony:</strong> A man who makes locks (symbols of security) is easily "unlocked" by a clever deceiver.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Horace Danby:</strong> A peculiar man with a high-end hobby (rare books) funded by crime. He is careful but ultimately naive about human nature. He suffers from hay fever, which acts as a comedic catalyst for his discovery.</li>
                            <li><strong>The Lady in Red:</strong> An expert manipulator. She is calm, confident, and uses her intelligence to steal not just the jewels, but also Horace's freedom. She represents the "newer," more ruthless type of criminal.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Why did Horace Danby rob only once a year?</div>
                        <div className={styles.practiceQuestion}>2. How did the young lady manage to convince Horace she was the owner?</div>
                        <div className={styles.practiceQuestion}>3. What was Horace's "weakness" mentioned in the story?</div>
                        <div className={styles.practiceQuestion}>4. Why did Horace get arrested even though he didn't take the jewels himself?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> He only needed enough money to buy rare books through an agent; he wasn't a professional criminal looking for vast wealth.</li>
                            <li><strong>2.</strong> She was incredibly confident, knew the dog's name (Sherry), and acted with authority, even pretending to be bothered by the mess he made.</li>
                            <li><strong>3.</strong> His passion for rare books and his physical ailment, hay fever, which caused him to sneeze and alert the intruder.</li>
                            <li><strong>4.</strong> In his hurry to do a "favor" for the lady, he took off his gloves and left fingerprints all over the safe and the room.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Victor Canning. Key realization: Horace fell for the "lady" because of his own "respectability" and desire to be a gentleman thief. Focus on the word "Trust" and how it's used ironically.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter15;
