import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../englishChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter21 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 21: The Book That Saved the Earth</h1>
                    <p>A humorous futuristic play about how a nursery rhyme book defeated a Martian invasion.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>This play by Claire Boiko is set in the 25th century. It tells the story of how a book of nursery rhymes, "Mother Goose," saved the Earth from an invasion by Martians in the 20th century. It is a brilliant satire on the arrogance of power and the unexpected strength of literature and imagination.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>The play begins in a museum in the 25th century, where a historian is explaining how Earth was saved from a Martian invasion five hundred years ago. The leader of the Martians, "Think-Tank," who believes he is the most intelligent being in the universe, plans a conquest of Earth. He sends a crew (Omega, Iota, and Oop) to a library on Earth to investigate.</p>
                        <p>The Martians, who have never seen a book, mistake them first for "sandwiches" and try to eat them. Later, they decide they are communication devices. They use "vitamins" to increase their intelligence and try to "read" a book called "Mother Goose." Think-Tank completely misinterprets the nursery rhymes. He thinks "Humpty Dumpty" is a picture of himself being defeated by humans. Panicked, he believes Earth has a sophisticated technology and a plan to capture Mars. He immediately orders his crew to retreat and flees to Alpha Centauri. Thus, a book of "silly" nursery rhymes saved the Earth.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Themes</h3>
                        <ul>
                            <li><strong>Knowledge vs. Wisdom:</strong> Think-Tank has information but lacks the wisdom to interpret it correctly.</li>
                            <li><strong>Arrogance and its Downfall:</strong> Think-Tank’s ego makes him see threats where there are none.</li>
                            <li><strong>The Cultural Power of Literature:</strong> Even simple nursery rhymes carry a weight of imagination that can baffle a purely logical or militaristic mind.</li>
                            <li><strong>Satire:</strong> The play mocks the tropes of science fiction and alien invasions by making the "invader" a complete fool.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Character Analysis</h3>
                        <ul>
                            <li><strong>Think-Tank:</strong> The Commander-in-Chief of Mars. He is incredibly arrogant, believes himself to be beautiful and brilliant, and treats his subordinates with contempt. His fear of being "captured" shows his underlying cowardice.</li>
                            <li><strong>Noodle:</strong> Think-Tank’s apprentice. He is actually much more intelligent and observant than his master but is careful to suggest ideas in a way that lets Think-Tank take the credit.</li>
                            <li><strong>Historian:</strong> The narrator from the 25th century who provides the context and the moral of the story.</li>
                            <li><strong>Omega, Iota, and Oop:</strong> The Martian crew members. They are disciplined but completely confused by Earth’s "sandwiches" (books).</li>
                        </ul>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>
                        <div className={styles.practiceQuestion}>1. What was the name of the book that saved the Earth?</div>
                        <div className={styles.practiceQuestion}>2. How did the Martians initially try to "eat" the books?</div>
                        <div className={styles.practiceQuestion}>3. Why did Think-Tank decide to flee to Alpha Centauri?</div>
                        <div className={styles.practiceQuestion}>4. How did Noodle manage Think-Tank's ego?</div>
                    </section>

                    <section className={styles.section}>
                        <h3>Answers</h3>
                        <ul>
                            <li><strong>1.</strong> "Mother Goose," a collection of nursery rhymes for children.</li>
                            <li><strong>2.</strong> They thought they were sandwiches—Earth’s communication devices were actually "crude" eating items according to their logic.</li>
                            <li><strong>3.</strong> He misinterpreted the nursery rhyme of Humpty Dumpty as a threat to his own safety, believing Earthlings were coming for him.</li>
                            <li><strong>4.</strong> He would politely correct Think-Tank by saying "I was just thinking... if I may be so bold..." so Think-Tank could pretend it was his own idea.</li>
                        </ul>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Key Points for Revision</h3>
                        <p>Author: Claire Boiko. Genre: Science Fiction Satire. Key takeaway: Literature has the power to bridge or block any gap. Focus on the humor of the Martian's misinterpretations.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter21;
