import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter17 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 17: The Making of a Scientist</h1>
                    <p>The inspiring journey of Richard Ebright and the power of curiosity.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This biographical account by Robert W. Peterson follows the life of Richard Ebright, who went from a curious child collecting butterflies to a world-renowned biologist. The story illustrates that greatness in science is a combination of a first-rate mind, intense curiosity, and the will to win for the right reasons.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Richard Ebright grew up in Pennsylvania with his mother as his only constant companion. From a young age, he was an avid collector of fossils, coins, and especially butterflies. His mother encouraged him by buying him scientific tools and books, particularly the book "The Travels of Monarch X," which opened the world of science to him. Through this book, he began tagging butterflies for Dr. Urquhart of the University of Toronto.</p>
                        <p>Ebright's real scientific career started when he participated in a county science fair and lost. This taught him that science is not just a "display" but real "experiments." He began researching monarch butterflies, discovering that the gold spots on a monarch pupa were not just ornamental but produced a hormone necessary for its development. This led to his groundbreaking work on cell life and DNA, eventually providing answers to how the cell can "read" the blueprint of its DNA. Ebright proved that with persistence, even a childhood hobby can lead to major scientific breakthroughs.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Curiosity as a Catalyst:</strong> Ebright's journey began with simple "why" questions about butterflies.</li>
                            <li><strong>The Role of Mentorship:</strong> His mother’s support and Dr. Urquhart’s guidance were crucial to his success.</li>
                            <li><strong>Resilience in Science:</strong> Losing at a science fair only made Ebright more determined to perform real experiments.</li>
                            <li><strong>The Connectivity of Knowledge:</strong> How studying a small insect led to universal discoveries about DNA and human life.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Richard Ebright:</strong> A multi-faceted personality. He was not just a scientist but also a champion debater, public speaker, canoeist, and expert photographer. He possessed "the first-rate mind" required for scientific discovery.</li>
                            <li><strong>Ebright’s Mother:</strong> A visionary parent who directed her son's curiosity toward learning. She was his "traveling companion" and his most significant influence.</li>
                            <li><strong>Richard A. Weiherer:</strong> Ebright's social studies teacher who praised him for his broader interests and competitive spirit.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. What book did Richard Ebright’s mother give him that became a turning point?</div>
                        <div className={styles.practiceQuestion}>2. What did Ebright realize after losing at the county science fair?</div>
                        <div className={styles.practiceQuestion}>3. What was the purpose of the 12 tiny gold spots on a monarch pupa?</div>
                        <div className={styles.practiceQuestion}>4. How did Ebright’s social studies teacher describe his competitive spirit?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> "The Travels of Monarch X," which told how monarch butterflies migrate to Central America.</li>
                            <li><strong>2.</strong> He realized that the winners had performed real experiments, whereas he had only made a neat display of frog tissues.</li>
                            <li><strong>3.</strong> They weren't just decorative; they produced a hormone necessary for the butterfly's full development and growth.</li>
                            <li><strong>4.</strong> He said Ebright was competitive in a healthy way—not for prizes or fame, but because he wanted to do the best job he could.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Robert W. Peterson. Key discovery: Blueprint of the cell (DNA). Important Lesson: Success in any field requires curiosity, a sharp mind, and the drive to excel for the right reasons.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter17;
