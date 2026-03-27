import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter8 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 8: Mijbil the Otter</h1>
                    <p>A heartwarming story of a pet otter and its adventures.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This story by Gavin Maxwell describes the author's experience with an otter named Mijbil, which he brought from Iraq to London. It highlights the deep bond between humans and animals and the unique joy that comes with caring for a wild creature.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>The narrator, living in Iraq, decides to keep an otter as a pet instead of a dog. He acquires an otter from the Tigris marshes and names him Mijbil. The story chronicles the challenges of transporting a wild animal on a flight to London, where Mijbil escapes from his box and creates a scene on the airplane.</p>
                        <p>In London, Mijbil develops unique habits, like playing with ping-pong balls on the narrator's sloping suitcase. The narrator reflects on how people in London, unfamiliar with otters, make wild guesses about what kind of animal Mijbil is—calling him everything from a baby hippo to a "brontosaur."</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Human-Animal Bond:</strong> The emotional connection and mutual understanding between Gavin Maxwell and Mijbil.</li>
                            <li><strong>Responsibility:</strong> The intense care and patience required to look after a pet with wild instincts.</li>
                            <li><strong>Nature vs. Domesticity:</strong> The struggle of fitting a wild creature into a human environment.</li>
                            <li><strong>Curiosity of the Unknown:</strong> The humorous reactions of common people to an exotic animal.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>The Narrator:</strong> Patient, observant, and deeply compassionate toward animals. He treats Mijbil as a family member.</li>
                            <li><strong>Mijbil (The Otter):</strong> Energetic, highly intelligent, and playful. He has a "thirst" for water and physical activities.</li>
                            <li><strong>The Air Hostess:</strong> A kind woman who helps the narrator manage the chaos during the flight, showing professionalism and empathy.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Why did the narrator choose an otter as a pet?</div>
                        <div className={styles.practiceQuestion}>2. Describe the chaos on the airplane.</div>
                        <div className={styles.practiceQuestion}>3. What were some of Mijbil's favorite toys in London?</div>
                        <div className={styles.practiceQuestion}>4. How did the Londoners react to Mijbil?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> His previous dog had died, and he felt the marshes in Iraq were the perfect environment for an otter.</li>
                            <li><strong>2.</strong> Mijbil escaped his box, disappeared under the seats, and caused a passenger to jump onto her seat in fear of a "rat."</li>
                            <li><strong>3.</strong> Ping-pong balls, marbles, and a rubber fruit. He was particularly inventive with the ping-pong balls on the narrator's suitcase.</li>
                            <li><strong>4.</strong> They were puzzled; they guessed he was a seal, a walrus, or even a miniature dragon, showing their lack of knowledge about otters.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Gavin Maxwell. Key takeaway: Wild animals have specific needs and behaviors that must be respected even when kept as pets. Focus on the humor and descriptive language used by the author.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter8;
