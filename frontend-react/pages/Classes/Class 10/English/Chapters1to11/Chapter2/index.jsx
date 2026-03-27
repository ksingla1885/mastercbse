import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter2 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 2: Nelson Mandela: Long Walk to Freedom</h1>
                    <p>Learn about Mandela's journey and fight against apartheid.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This chapter is an excerpt from Nelson Mandela's autobiography, focusing on his inauguration as South Africa's first black president and his reflections on the struggle against apartheid. It serves as an inspirational account of resilience and the triumph of justice over oppression.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>On May 10, 1994, Nelson Mandela was inaugurated as the first black President of South Africa. In his speech, he reflects on the long fight against apartheid, a system of racial segregation enforced by the white minority government. Mandela describes his 27 years in prison and the sacrifices made by freedom fighters.</p>
                        <p>He emphasizes that true freedom is not just the absence of chains but the ability to live with dignity. Mandela honors those who fought for democracy, including international leaders and ordinary citizens. He vows to build a nation based on equality, where blacks and whites can live together without fear.</p>
                        <p>The chapter highlights Mandela's commitment to reconciliation and his vision for a united South Africa. It underscores the importance of forgiveness and collective effort in nation-building.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Freedom and Equality:</strong> The struggle for equal rights and the end of apartheid, emphasizing that freedom involves dignity and rights for all.</li>
                            <li><strong>Sacrifice and Perseverance:</strong> The long fight and personal sacrifices for freedom, as seen in Mandela's imprisonment.</li>
                            <li><strong>Reconciliation:</strong> Building a united nation after years of division, promoting forgiveness over revenge.</li>
                            <li><strong>Leadership:</strong> Mandela's role as a symbol of hope and justice, inspiring global leaders.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Nelson Mandela:</strong> A courageous leader, prisoner, and president who fought for justice. His wisdom and forgiveness define his character.</li>
                            <li><strong>Freedom Fighters:</strong> Anonymous heroes who sacrificed for the cause, representing collective struggle.</li>
                            <li><strong>International Supporters:</strong> Leaders from other countries who supported the anti-apartheid movement, showing global solidarity.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. Describe the significance of May 10, 1994, in Nelson Mandela's life.</div>
                        <div className={styles.practiceQuestion}>2. What does Mandela mean by "true freedom"?</div>
                        <div className={styles.practiceQuestion}>3. How does Mandela honor the sacrifices of others?</div>
                        <div className={styles.practiceQuestion}>4. Explain the theme of reconciliation in the chapter.</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> May 10, 1994, marked Nelson Mandela's inauguration as the first black President of South Africa, symbolizing the end of apartheid.</li>
                            <li><strong>2.</strong> Mandela means that true freedom is not just the absence of physical chains but the ability to live with dignity, equality, and without fear.</li>
                            <li><strong>3.</strong> Mandela honors the sacrifices by thanking freedom fighters, international leaders, and ordinary citizens who contributed to the struggle.</li>
                            <li><strong>4.</strong> Reconciliation emphasizes building a united South Africa where blacks and whites live together in peace, forgiving past injustices for a better future.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Nelson Mandela. Genre: Autobiography Excerpt. Main Theme: Freedom from Apartheid. Key concepts: Dignity, Sacrifice, and the "Extraordinary Human Disaster" of Apartheid.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter2;
