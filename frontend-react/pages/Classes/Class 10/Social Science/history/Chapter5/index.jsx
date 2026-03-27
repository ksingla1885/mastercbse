import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter5 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 5: Print Culture and the Modern World</h1>
                    <p>Explore the impact of print technology on society.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter examines the invention of the printing press and its role in spreading ideas, knowledge, and culture, leading to social and political changes. It explores how print media influenced education, religion, and nationalism.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>The printing press, invented by Johannes Gutenberg in 1440 in Germany, revolutionized communication by making books affordable and accessible through movable type. This led to the rapid spread of Renaissance ideas, scientific knowledge, and literacy. In Europe, it facilitated the Protestant Reformation, as Martin Luther's 95 Theses were printed and distributed widely, challenging the Catholic Church's authority.</p>
                        <p>In India, print culture arrived with European colonizers and influenced social reforms, education, and the nationalist movement. Figures like Raja Rammohan Roy used print to advocate for social changes, such as abolishing Sati. Newspapers and books spread ideas of liberty and equality, contributing to the Indian Renaissance and the freedom struggle. The Vernacular Press Act of 1878 attempted to control Indian-language publications, highlighting the power of print in mobilizing public opinion.</p>
                        <p>The chapter discusses the impact on women, with increased access to education and literature, and the role of print in fostering public debates and cultural exchanges. <strong>Additional Insights:</strong> Print media democratized knowledge, fostering public opinion, debates, and cultural exchanges, shaping modern democracies and challenging traditional authorities.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Gutenberg's Printing Press:</strong> First movable type printing, enabling mass production of books.</li>
                                <li><strong>Protestant Reformation:</strong> Religious changes sparked by printed Bibles and pamphlets, leading to new Christian denominations.</li>
                                <li><strong>Print in India:</strong> Role in social and political awakening, promoting education and nationalism.</li>
                                <li><strong>Censorship and Press Acts:</strong> Government attempts to control publications, such as the Vernacular Press Act in India.</li>
                                <li><strong>Role in Education:</strong> Print made knowledge accessible, increasing literacy rates and intellectual movements.</li>
                                <li><strong>Impact on Women:</strong> Print provided access to literature and ideas, challenging gender norms.</li>
                                <li><strong>Mass Media and Public Opinion:</strong> Newspapers and books shaped public discourse and political awareness.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What was the impact of Gutenberg's printing press on society?
                        </div>
                        <div className={styles.solutionBox}>
                            Gutenberg's printing press made books affordable, spread knowledge rapidly, increased literacy, and fostered intellectual movements like the Renaissance and Reformation.
                        </div>

                        <div className={styles.practiceQuestion}>
                            How did print culture influence the Protestant Reformation?
                        </div>
                        <div className={styles.solutionBox}>
                            Printed Bibles and Luther's pamphlets allowed widespread dissemination of ideas, challenging the Church's monopoly on religious knowledge and leading to the formation of Protestant sects.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Describe the role of print in India's social and political awakening.
                        </div>
                        <div className={styles.solutionBox}>
                            Print promoted social reforms, education, and nationalism through newspapers and books, inspiring leaders like Roy and Tilak to advocate for change and mobilize against colonialism.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the significance of the Vernacular Press Act.
                        </div>
                        <div className={styles.solutionBox}>
                            The Vernacular Press Act (1878) aimed to censor Indian-language publications to suppress dissent, but it backfired by uniting nationalists and highlighting the importance of press freedom.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Gutenberg: 1440, printing press invention. Reformation: Religious changes via print. India: Social reforms, nationalism through newspapers. Censorship: Vernacular Press Act, 1878. <strong>Additional Notes:</strong> Print culture democratized knowledge, empowered marginalized groups, and laid the foundation for modern media, influencing global communication and cultural shifts.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter5;
