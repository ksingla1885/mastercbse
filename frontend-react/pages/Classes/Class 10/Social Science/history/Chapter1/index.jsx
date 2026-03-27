import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter1 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 1: The Rise of Nationalism in Europe</h1>
                    <p>Explore the emergence of nationalism in Europe during the 19th century.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter discusses the growth of nationalism in Europe, focusing on the French Revolution, the role of figures like Napoleon, and the unification movements in Italy and Germany. It explores how political, economic, and cultural factors contributed to the formation of nation-states in the 19th century.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>The French Revolution (1789-1799) marked the beginning of nationalism by introducing ideas of liberty, equality, and fraternity. It inspired people across Europe to fight against absolutism and feudalism. The Revolution began with the storming of the Bastille and the establishment of the National Assembly, which abolished feudal privileges and declared the Rights of Man. Napoleon Bonaparte, who rose to power during this period, spread these ideas through his conquests across Europe, but his defeat at Waterloo in 1815 led to the Congress of Vienna, which restored conservative regimes and aimed to suppress revolutionary movements.</p>
                        <p>In the mid-19th century, nationalism led to the unification of Italy under leaders like Giuseppe Mazzini, Count Cavour, and Giuseppe Garibaldi, culminating in the formation of the Kingdom of Italy in 1861. Similarly, Germany was unified under Otto von Bismarck through a series of wars, including those against Denmark, Austria, and France, resulting in the German Empire in 1871. The chapter highlights how economic factors, like the Industrial Revolution, and cultural movements, such as the revival of folklore and language, contributed to the rise of nation-states. <strong>Additional Insights:</strong> Nationalism was not just political but also cultural, with movements for language and folklore revival. It often led to both unity within nations and conflicts between them, influencing global history and setting the stage for future wars.</p>
                        <p>Furthermore, the chapter discusses the role of liberalism and conservatism in shaping European politics. Liberals advocated for constitutional governments and individual rights, while conservatives sought to maintain traditional monarchies. The 1848 Revolutions across Europe, though largely unsuccessful, demonstrated the growing demand for democratic reforms and national unification.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>French Revolution:</strong> Sparked ideas of nationalism and democracy, leading to the end of absolute monarchy in France and inspiring similar movements elsewhere.</li>
                                <li><strong>Napoleon Bonaparte:</strong> Spread revolutionary ideas but also caused backlash through his invasions, which provoked national resistance in other countries.</li>
                                <li><strong>Unification of Italy:</strong> Achieved through a combination of wars, diplomacy, and popular uprisings, with key roles played by Mazzini, Garibaldi, and Cavour.</li>
                                <li><strong>Unification of Germany:</strong> Led by Prussia under Bismarck, using "blood and iron" policies to unite German states through military victories.</li>
                                <li><strong>Congress of Vienna:</strong> Attempted to suppress nationalism and restore the balance of power after Napoleon's defeat.</li>
                                <li><strong>Liberalism and Conservatism:</strong> Ideological conflicts between advocates of change and those preserving traditional structures.</li>
                                <li><strong>1848 Revolutions:</strong> Widespread uprisings demanding political reforms and national unification across Europe.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What were the main ideas introduced by the French Revolution and how did they contribute to nationalism?
                        </div>
                        <div className={styles.solutionBox}>
                            The French Revolution introduced ideas of liberty, equality, and fraternity, challenging absolute monarchy and promoting democratic principles, which inspired nationalist movements across Europe by emphasizing national sovereignty over feudal systems.
                        </div>

                        <div className={styles.practiceQuestion}>
                            How did Napoleon contribute to the rise of nationalism in Europe?
                        </div>
                        <div className={styles.solutionBox}>
                            Napoleon spread revolutionary ideas through his conquests, implementing the Napoleonic Code that promoted equality before the law, but his invasions also provoked national resistance, fostering a sense of unity against foreign domination.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Describe the process of Italian unification and the roles of key figures.
                        </div>
                        <div className={styles.solutionBox}>
                            Italian unification involved Mazzini's advocacy for a republic, Cavour's diplomatic efforts and alliances (e.g., with France), and Garibaldi's military campaigns, leading to the Kingdom of Italy in 1861 under Victor Emmanuel II.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain Bismarck's role in German unification and his policy of "blood and iron."
                        </div>
                        <div className={styles.solutionBox}>
                            Bismarck, as Prussian Prime Minister, used wars against Denmark, Austria, and France to unify German states under Prussian leadership, emphasizing military strength over speeches for national unity.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>French Revolution: 1789-1799, ideas of liberty, equality, fraternity. Napoleon: Spread nationalism, defeated at Waterloo in 1815. Unification: Italy (1861) with Mazzini, Cavour, Garibaldi; Germany (1871) with Bismarck. Congress of Vienna: 1815, conservative reaction. 1848 Revolutions: Failed uprisings for reform. <strong>Additional Notes:</strong> Nationalism led to both unity and conflict in Europe, influencing global history and contributing to events like World War I. Understanding these events helps in analyzing modern nation-building processes.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter1;
