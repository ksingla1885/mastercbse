import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter14 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 14: The Midnight Visitor</h1>
                    <p>An intriguing story of mystery and intellect over brawn.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This spy thriller by Robert Arthur features Ausable, a secret agent who doesn't look like a spy. The story explores the idea that intelligence and a steady mind are more effective tools in espionage than physical strength or weapons.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Ausable is a secret agent who is fat and speaks with an American accent, disappointing Fowler, a writer looking for "romantic" spy adventures. They go to Ausable's small room on the top floor of a gloomy French hotel. Inside, they find Max, another agent, holding a pistol and demanding a report on some missiles.</p>
                        <p>Ausable remains exceptionally calm. He starts talking about a non-existent balcony under his window and complains about the management. When there’s a knock at the door, Ausable tells Max it's the police he called for protection. Panicked, Max jumps out the window, believing he's landing on the balcony. Instead, he falls to his death as there was no balcony. The "police" turn out to be a waiter bringing drinks. Ausable’s quick wit saved the day without a single shot being fired.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Brains over Brawn:</strong> Ausable defeats an armed man using nothing but his imagination and presence of mind.</li>
                            <li><strong>Appearance vs. Reality:</strong> Fowler expects a spy to be suave and athletic; he finds a fat man who looks like a common person but possesses a sharp mind.</li>
                            <li><strong>The power of Conviction:</strong> Ausable narrates his lie with such detail and confidence that Max never questions its truth.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Ausable:</strong> A secret agent who lacks the "glamour" of a Hollywood spy but has extraordinary wit. He is a master of psychological manipulation.</li>
                            <li><strong>Max:</strong> A slender, somewhat fox-like man. He is dangerous because he is armed, but his undoing is his lack of composure and critical thinking.</li>
                            <li><strong>Fowler:</strong> A young, romantic writer who learns that true danger and heroism don't always look the way they do in books.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Why was Fowler disappointed when he first met Ausable?</div>
                        <div className={styles.practiceQuestion}>2. How did Ausable create the "balcony" in Max's mind?</div>
                        <div className={styles.practiceQuestion}>3. Who was actually at the door when Max jumped?</div>
                        <div className={styles.practiceQuestion}>4. What does the story teach us about being a secret agent?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> Because Ausable was fat, lived in a small, shabby room, and lacked the "mysterious music" or "slender agents" Fowler imagined.</li>
                            <li><strong>2.</strong> He told a detailed story about how it was the second time in a month someone had entered through that balcony, making it sound like a recurring nuisance.</li>
                            <li><strong>3.</strong> It was Henry, the waiter, who had come to deliver the drinks Ausable had ordered earlier.</li>
                            <li><strong>4.</strong> That wit and presence of mind are more valuable than physical weapons and that appearances can be highly deceptive.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Robert Arthur. Key symbol: The "balcony" represents a fabrication that became a fatal reality for Max. Genre: Mystery/Detective fiction.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter14;
