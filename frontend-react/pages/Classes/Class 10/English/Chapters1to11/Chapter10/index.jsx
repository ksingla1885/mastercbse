import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter10 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 10: The Sermon at Benares</h1>
                    <p>Lessons on impermanence and wisdom from Buddha.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This chapter is an excerpt from the teachings of Gautama Buddha. It illustrates the concept of suffering and the path to enlightenment through the story of Kisa Gotami. It provides profound insights into the inevitability of death and the wisdom of acceptance.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>The Story of Kisa Gotami</h3>
                        <p>Kisa Gotami had an only son, and he died. In her grief, she carried the dead child to all her neighbors, asking them for medicine. Eventually, she was directed to the Buddha. The Buddha told her he could help, but first, she must bring him a handful of mustard seeds from a house where no one had lost a child, husband, parent, or friend.</p>
                        <p>She went from house to house but couldn't find a single one that hadn't been visited by death. She realized that she had been selfish in her grief; death is common to all. She understood that in this valley of desolation, there is a path that leads him to immortality who has surrendered all selfishness.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Suffering and Death:</strong> The universality of death and the pain of loss.</li>
                            <li><strong>Impermanence:</strong> The transient nature of life—"mortals are like ripe fruits, always in danger of falling."</li>
                            <li><strong>Wisdom through Acceptance:</strong> Peace of mind is only achieved when one stops lamenting and accepts the natural order.</li>
                            <li><strong>Compassion and Guidance:</strong> Buddha's skillful way of teaching a lesson through experience rather than mere words.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Gautama Buddha:</strong> A compassionate and wise teacher who uses a practical exercise to lead Kisa Gotami to the truth.</li>
                            <li><strong>Kisa Gotami:</strong> Initially blinded by grief, she represents the common human struggle with loss. Her journey from denial to realization is central to the chapter.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. What did Kisa Gotami ask for from her neighbors?</div>
                        <div className={styles.practiceQuestion}>2. What task did the Buddha set for Kisa Gotami?</div>
                        <div className={styles.practiceQuestion}>3. What was the lesson Kisa Gotami learned at the end?</div>
                        <div className={styles.practiceQuestion}>4. How does the Buddha describe the life of mortals?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> She asked for medicine to bring her dead son back to life.</li>
                            <li><strong>2.</strong> To bring a handful of mustard seeds from a house where no one had ever died.</li>
                            <li><strong>3.</strong> She learned that death is universal and common to all, and that grief only increases pain without bringing back the dead.</li>
                            <li><strong>4.</strong> He says the life of mortals is troubled, brief, and combined with pain. He compares them to earthen vessels that are bound to break.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Main Theme: Peace through acceptance of death. Focus on the symbolism of the "mustard seeds" and the contrast between Kisa Gotami's initial despair and final enlightenment.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter10;
