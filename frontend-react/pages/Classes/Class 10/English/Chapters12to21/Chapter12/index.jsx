import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter12 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 12: A Triumph of Surgery</h1>
                    <p>A story of a clever veterinarian and a pampered dog.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This story by James Herriot highlights the cleverness of a veterinarian in treating a pampered dog and outsmarting its owner. It emphasizes the importance of proper pet care and human psychology in veterinary practice.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Mrs. Pumphrey's dog, Tricki, is overfed and spoiled, leading to obesity and severe health issues. The veterinarian, Dr. Herriot, diagnoses the problem immediately: the dog needs a strict diet and exercise, not medicine. To ensure the treatment works, he takes Tricki to his clinic for two weeks, telling Mrs. Pumphrey it's for a "surgery."</p>
                        <p>At the clinic, Tricki is kept with other dogs, given plenty of water, and made to compete for food. He gradually recovers his health and energy. When a transformed, muscular Tricki is returned, a tearful Mrs. Pumphrey declares it a "triumph of surgery," never realizing that the cure was simply natural living and discipline.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Wisdom and Practicality:</strong> Dr. Herriot's pragmatic approach to health over complex medical intervention.</li>
                            <li><strong>Responsible Pet Care:</strong> The dangers of overindulgence and the necessity of discipline for animal welfare.</li>
                            <li><strong>Emotional Attachment:</strong> How excessive love, though well-intentioned, can become harmful.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Dr. Herriot:</strong> A wise, observant, and sensible vet who understands both animal biology and human psychology.</li>
                            <li><strong>Mrs. Pumphrey:</strong> A wealthy, over-anxious lady whose love for her dog manifests in harmful overfeeding.</li>
                            <li><strong>Tricki:</strong> A greedy but affectionate small dog who falls victim to his own appetite and his owner's pampering.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Why was Tricki seriously ill?</div>
                        <div className={styles.practiceQuestion}>2. How did Dr. Herriot manage Mrs. Pumphrey's anxiety during Tricki's stay?</div>
                        <div className={styles.practiceQuestion}>3. What was the real "surgery" performed on Tricki?</div>
                        <div className={styles.practiceQuestion}>4. Why did Mrs. Pumphrey think it was a "Triumph of Surgery"?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> Because Mrs. Pumphrey overfed him with rich food like cream cakes and chocolates, and he had no physical exercise.</li>
                            <li><strong>2.</strong> He kept her informed with "favorable" reports but didn't reveal that the treatment was just diet and play, allowing her to believe it was a medical procedure.</li>
                            <li><strong>3.</strong> There was no physical surgery; it was a metaphorical "surgery" involving a controlled environment and natural recovery.</li>
                            <li><strong>4.</strong> She saw her lethargic, bloated dog transformed into a lithe, hard-muscled animal in just two weeks, which seemed like a miracle.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: James Herriot. Tone: Humorous and instructional. Key Lesson: Discipline is an act of love. Focus on the contrast between the clinic's simplicity and the owner's luxury.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter12;
