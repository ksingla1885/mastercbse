import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter19 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 19: The Hack Driver</h1>
                    <p>A humorous tale of urban naivety and rural shrewdness.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This story by Sinclair Lewis is a comedic account of a junior assistant clerk in a law firm who is sent to a small town to serve a summons. It humorously explores the contrast between the "sophisticated" city lawyer and the "simple" but actually far more cunning rural folk.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>The narrator is a young lawyer who hates his job of serving summons. He is sent to New Mullion to find a man named Oliver Lutkins. Upon arrival, he meets a friendly, cheerful hack driver who calls himself Bill. Bill tells the lawyer that Lutkins is a hard man to find and offers to drive him around the town to search for him.</p>
                        <p>Throughout the day, Bill takes the lawyer to various places—Fritz’s shop, Gustaff’s barber shop, Gray’s barber shop, and even Lutkins' mother’s farm. Bill manages the conversations everywhere, while the lawyer stays in the background. Bill charges him for every hour and even for lunch. The lawyer is impressed by Bill's "kindness" and his "philosophy" of life. However, when the lawyer returns to town with a colleague who knows Lutkins, he is shocked to discover that the friendly hack driver 'Bill' was actually Oliver Lutkins himself. The entire town, including Lutkins' mother, had been laughing at the lawyer all day.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Appearance vs. Reality:</strong> The lawyer assumes the driver is a simple, honest villager, while he is actually a master of deception.</li>
                            <li><strong>Gullibility:</strong> The story satirizes the lawyer's overconfidence in his own education and status, which makes him easy to trick.</li>
                            <li><strong>Urban vs. Rural:</strong> The clash between the professional, somewhat detached city life and the communal, shrewd, and humorous rural life.</li>
                            <li><strong>Irony:</strong> The man the lawyer spends all day "searching for" is the very man driving him around.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>The Lawyer (Narrator):</strong> Romantic, easily impressed, and somewhat self-important. He is so focused on his "mission" and "Bill's wisdom" that he misses the obvious clues.</li>
                            <li><strong>Oliver Lutkins (Bill):</strong> A clever, mischievous, and talented actor. He manages to play multiple roles and turns the lawyer's visit into a source of entertainment for the whole village.</li>
                            <li><strong>Lutkins' Mother:</strong> Described as a "terror" by Bill, she plays along with the ruse, even threatening the lawyer with a hot iron to add to the comedy.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Why did the lawyer hate his work in the city?</div>
                        <div className={styles.practiceQuestion}>2. How did Bill convince the lawyer that he was a helper?</div>
                        <div className={styles.practiceQuestion}>3. Where did Bill take the lawyer to search for Lutkins?</div>
                        <div className={styles.practiceQuestion}>4. Why did the lawyer feel like a "hen" at the end of the story?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> He had to serve summons, which often involved going to dirty and dangerous corners of the city, and sometimes he was bahkan beaten up.</li>
                            <li><strong>2.</strong> He showed immediate interest in the lawyer's problem, offered his hack at a "reasonable" rate, and claimed to know exactly where Lutkins would be.</li>
                            <li><strong>3.</strong> Fritz’s shop, Gustaff’s shop, Gray’s shop, the pool room, and finally his mother’s farm.</li>
                            <li><strong>4.</strong> He felt embarrassed and foolish because he had been led around by the nose by the very man he was supposed to catch, becoming the laughingstock of the village.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Sinclair Lewis. Genre: Satirical comedy. Key takeaway: Don't underestimate people based on their profession or location. Focus on the lawyer's internal monologue and how it changes.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter19;
