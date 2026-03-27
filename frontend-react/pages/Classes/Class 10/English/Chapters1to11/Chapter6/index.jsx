import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter6 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 6: The Hundred Dresses – II</h1>
                    <p>Continuation of the story on friendship and regret.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This is the sequel to "The Hundred Dresses – I," continuing the story of Maddie and Peggy as they reflect on their actions and seek to make amends. It explores themes of forgiveness and personal growth.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>After Wanda's disappearance, Maddie and Peggy visit her old house and learn she has moved to the city. They write a letter to Wanda, expressing regret for their bullying. Wanda replies, forgiving them and revealing that the hundred dresses were her drawings—specifically, she gifts two of the drawings to them, which amazingly feature their own faces.</p>
                        <p>Maddie learns to stand up against injustice, inspired by Wanda's talent and kindness. The story emphasizes forgiveness and personal growth. The letter exchange symbolizes closure and the power of forgiveness in healing emotional wounds.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Forgiveness:</strong> Wanda's ability to forgive her tormentors, which is a powerful act of grace.</li>
                            <li><strong>Personal Growth:</strong> Maddie's development from a bystander to a person of moral conviction.</li>
                            <li><strong>Art as Expression:</strong> Recognition of Wanda's talent as her way of communicating her worth.</li>
                            <li><strong>Moral Courage:</strong> The resolution to never be a silent witness to injustice again.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Maddie:</strong> Grows significantly, carrying the guilt until it transforms her into a more courageous person.</li>
                            <li><strong>Peggy:</strong> Also shows regret, though Maddie's internal struggle is more profound.</li>
                            <li><strong>Wanda:</strong> Even in absence, she remains the moral center of the story through her generosity and lack of malice.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. How do Maddie and Peggy try to make amends?</div>
                        <div className={styles.practiceQuestion}>2. What revelation does Wanda's letter bring?</div>
                        <div className={styles.practiceQuestion}>3. Explain Maddie's character development.</div>
                        <div className={styles.practiceQuestion}>4. Discuss the theme of forgiveness in the story.</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> They visit Boggins Heights and later write a friendly letter asking about her new school and telling her she won the contest.</li>
                            <li><strong>2.</strong> Wanda's letter shows she bears no grudge; she asks the teacher to give the green dress drawing to Peggy and the blue one to Maddie.</li>
                            <li><strong>3.</strong> Maddie realizes that silence is compliance and vows to speak up in the future, even if it means losing a friend.</li>
                            <li><strong>4.</strong> Wanda's forgiveness is the "hundredth dress"—a beautiful, expansive gesture that covers the ugliness of the bullying.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Eleanor Estes. Key Lesson: The importance of speaking out against bullying. Focus on the emotional impact of the "drawings" as a metaphor for Wanda's unseen reality.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter6;
