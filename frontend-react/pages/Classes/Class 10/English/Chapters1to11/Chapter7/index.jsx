import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter7 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 7: Glimpses of India</h1>
                    <p>Explore the diverse cultures and landscapes of India.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This chapter consists of three stories: "A Baker from Goa" by Lucio Rodrigues, "Coorg" by Lokesh Abrol, and "Tea from Assam" by Arup Kumar Datta. Together, they showcase India's immense cultural diversity, unique traditions, and stunning landscapes.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>1. A Baker from Goa</h3>
                        <p>This story describes the traditional baker in Goa (known as the <i>pader</i>), his distinct musical entry into the village, and his vital role in community life and celebrations. Even though the Portuguese have left, the profession and the ovens still exist, symbolizing cultural continuity.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>2. Coorg</h3>
                        <p>Coorg, or Kodagu, is described as a "piece of heaven" located between Mysore and Mangalore. It is famous for its coffee plantations, evergreen rainforests, and spices. The story highlights the bravery of the Kodavu people and the region's rich martial heritage.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>3. Tea from Assam</h3>
                        <p>Rajvir and Pranjol travel to Assam, the "Tea Country." Rajvir shares legends about the discovery of tea while they witness the vast, beautiful tea gardens. The story emphasizes Assam's status as having the largest concentration of tea plantations in the world.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Unity in Diversity:</strong> Celebrating the variety of lifestyles within one nation.</li>
                            <li><strong>Heritage and Tradition:</strong> How old customs like baking or martial arts define a community.</li>
                            <li><strong>Man and Nature:</strong> The deep connection between regional geography and local livelihood.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Describe the role of the baker in Goan culture.</div>
                        <div className={styles.practiceQuestion}>2. What is the legendary origin of tea according to the story?</div>
                        <div className={styles.practiceQuestion}>3. Why is Coorg called a "piece of heaven"?</div>
                        <div className={styles.practiceQuestion}>4. Compare the occupations highlighted in the three stories.</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Brief Answers</h3>
                        <ul>
                            <li><strong>1.</strong> The baker was a friend and guide to children and provided essential bread for all festivals and weddings.</li>
                            <li><strong>2.</strong> There are two legends mentioned: a Chinese emperor's accidental discovery and a Buddhist monk's story.</li>
                            <li><strong>3.</strong> Because of its breathtaking natural beauty, rolling hills, and lush rainforests.</li>
                            <li><strong>4.</strong> They show a range from urban-traditional (baker) to mountain-warrior agriculure (Coorg) to large-scale plantation work (Assam).</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Key regions: Goa, Coorg, Assam. Focus on the sensory descriptions of each place—the <i>thud and jingle</i> of the baker, the <i>spices and coffee</i> of Coorg, and the <i>acres of tea bushes</i> in Assam.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter7;
