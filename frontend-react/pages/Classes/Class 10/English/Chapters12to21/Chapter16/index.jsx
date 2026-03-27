import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter16 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 16: Footprints without Feet</h1>
                    <p>A mysterious story of invisibility, scientific brilliance, and moral bankruptcy.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This classic story by H.G. Wells introduces us to Griffin, a brilliant but lawless scientist. Having discovered a way to make himself invisible, he uses this incredible power not for the benefit of humanity, but for revenge, theft, and chaos. It is a cautionary tale about science without morality.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Two boys in London are amazed to see fresh muddy footprints appearing on a staircase with no visible person making them. These are the marks of Griffin, who has swallowed certain rare drugs to make his body as transparent as a sheet of glass. However, Griffin discovers that being invisible in winter London is a nightmare—he has to remain naked to stay invisible, leaving him shivering and vulnerable.</p>
                        <p>After setting fire to his landlord's house in revenge, Griffin escapes to the village of Iping. He stays at Mrs. Hall's inn, claiming he wants solitude for his "accident." He soon runs out of money and resorts to burglary. His strange behavior and the "empty" clothes that seem to move on their own terrify the villagers. Eventually, during a confrontation with the village constable Jaffer, Griffin strips off all his clothes to become invisible and escapes, leaving the constable holding onto "nothing."</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Misuse of Science:</strong> Griffin is a brilliant scientist who lacks a conscience. His invention becomes a tool for crime rather than progress.</li>
                            <li><strong>Lawlessness:</strong> The story explores how a person might behave if they were truly "unseen" and free from social consequences.</li>
                            <li><strong>Isolation:</strong> Despite his power, Griffin is miserable, lonely, and constantly on the run, showing that invisibility is a curse as much as a gift.</li>
                            <li><strong>Power and Corruption:</strong> Griffin’s transition from a researcher to a "terrorist" shows how absolute power can corrupt an unstable mind.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Griffin:</strong> A brilliant but irritable, anti-social, and vengeful man. He represents the "mad scientist" trope—intelligent but completely lacking in human empathy.</li>
                            <li><strong>Mrs. Hall:</strong> The friendly but business-minded owner of the inn. She is initially patient with Griffin but becomes suspicious and eventually terrified by his antics.</li>
                            <li><strong>Mr. Jaffers:</strong> The village constable who is a man of duty. He is determined to arrest the criminal, even when the criminal happens to be invisible.</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. How did Griffin become invisible?</div>
                        <div className={styles.practiceQuestion}>2. Why was Griffin 'wandering the streets' of London?</div>
                        <div className={styles.practiceQuestion}>3. What did the boys observe on the steps of the house?</div>
                        <div className={styles.practiceQuestion}>4. How did the invisible man escape from Mrs. Hall's inn?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> He performed experiments on the human body and swallowed certain rare drugs that made his body transparent like glass and solid as well.</li>
                            <li><strong>2.</strong> He had set fire to his landlord's house in revenge, and to escape without being seen, he had to remove all his clothes, leaving him homeless and shivering in the cold.</li>
                            <li><strong>3.</strong> They saw fresh muddy imprints of a pair of bare feet, followed by further footprints descending the steps and disappearing down the street.</li>
                            <li><strong>4.</strong> He became "headless" by removing his bandages and hat, then hit the constable and everyone around him, eventually shedding all his clothes to disappear completely.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: H.G. Wells. Genre: Science Fiction / Thriller. Key takeaway: Discovery without a moral compass leads to destruction. Focus on the irony of Griffin's situation—he is powerful but suffers the most.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter16;
