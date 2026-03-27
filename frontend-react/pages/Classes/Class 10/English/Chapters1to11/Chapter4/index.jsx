import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter4 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 4: From the Diary of Anne Frank</h1>
                    <p>Insights into Anne's life during hiding.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This chapter is an excerpt from Anne Frank's diary, providing a glimpse into her life in hiding during the Nazi occupation of the Netherlands. It offers a poignant look at the human spirit amid tragedy.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Anne Frank, a 13-year-old Jewish girl, describes her experiences hiding in a secret annex with her family to escape the Nazis. She writes about the challenges of living in confined spaces, the constant fear of discovery, and her personal growth. Anne reflects on her relationships with her family and the outside world, expressing her dreams and frustrations.</p>
                        <p>The diary reveals Anne's optimism, intelligence, and longing for freedom, making it a powerful account of resilience during the Holocaust. It highlights the psychological toll of isolation and the importance of hope in dark times.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Hope and Resilience:</strong> Anne's positive outlook despite hardships, showing inner strength.</li>
                            <li><strong>Adolescence and Identity:</strong> Growing up in isolation, exploring self-discovery.</li>
                            <li><strong>Family Dynamics:</strong> Relationships in close quarters, revealing tensions and bonds.</li>
                            <li><strong>The Holocaust:</strong> Impact of war on individuals, emphasizing human suffering.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Anne Frank:</strong> Intelligent, introspective, and hopeful young girl with a vivid imagination.</li>
                            <li><strong>Anne's Family:</strong> Her parents and sister, showing family bonds and conflicts in hiding.</li>
                            <li><strong>Other Inhabitants:</strong> The van Daan family and Mr. Dussel, representing shared hardships.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Describe Anne's life in the secret annex.</div>
                        <div className={styles.practiceQuestion}>2. What emotions does Anne express in her diary?</div>
                        <div className={styles.practiceQuestion}>3. Explain the theme of resilience in the chapter.</div>
                        <div className={styles.practiceQuestion}>4. How does Anne's diary reflect the horrors of the Holocaust?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> Anne's life in the secret annex involved living in cramped quarters with her family, constant fear of discovery, and daily routines to avoid detection.</li>
                            <li><strong>2.</strong> Anne expresses frustration, hope, loneliness, and optimism, reflecting her complex feelings during hiding.</li>
                            <li><strong>3.</strong> Resilience is shown through Anne's ability to find joy and hope despite the dangers and restrictions of hiding.</li>
                            <li><strong>4.</strong> The diary captures the personal impact of persecution, loss of freedom, and the threat of death, humanizing the tragedy.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Anne Frank. Genre: Diary Excerpt. Main Theme: Survival and Hope. Key focus: The power of writing as a way to maintain sanity and identity.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter4;
