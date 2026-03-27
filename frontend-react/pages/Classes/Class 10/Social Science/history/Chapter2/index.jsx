import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter2 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 2: Nationalism in India</h1>
                    <p>Explore the Indian freedom struggle and key figures.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter discusses the growth of nationalism in India, covering the First War of Independence, the formation of the Indian National Congress, and the role of leaders like Gandhi and others in the freedom movement. It explores the socio-economic and political factors that fueled the struggle for independence from British colonial rule.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>The First War of Independence (1857), also known as the Sepoy Mutiny, was a major uprising against British rule, sparked by grievances over land revenue policies, religious interference, and military issues such as the use of cartridges greased with cow and pig fat. Although suppressed, it laid the foundation for organized nationalism and exposed the weaknesses of British administration. The revolt spread across northern and central India, involving soldiers, peasants, and local rulers, and led to the end of the East India Company's rule, with India coming under direct British Crown control in 1858.</p>
                        <p>The Indian National Congress (INC) was formed in 1885 by A.O. Hume and other leaders to demand greater Indian participation in governance. Initially moderate, it focused on petitions and resolutions, but under leaders like Bal Gangadhar Tilak and Lala Lajpat Rai, it became more radical, advocating for Swaraj (self-rule). The chapter covers the Non-Cooperation Movement (1920-1922), led by Mahatma Gandhi, which involved boycotting British goods and institutions; the Civil Disobedience Movement (1930-1934), highlighted by the Dandi March against the salt tax; and the Quit India Movement (1942), which demanded immediate British withdrawal during World War II.</p>
                        <p>It also discusses the role of other leaders like Jawaharlal Nehru, Subhas Chandra Bose, and the impact of World Wars on the freedom struggle, including the formation of the Indian National Army (INA). The chapter highlights how nationalism in India was influenced by socio-economic factors, including poverty, discrimination, and cultural revival. <strong>Additional Insights:</strong> Nationalism in India was a blend of political, economic, and cultural movements, with Gandhi's philosophy of non-violence (Ahimsa) and Satyagraha playing a pivotal role in mobilizing the masses and achieving independence in 1947, though accompanied by the partition of India.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>First War of Independence (1857):</strong> Revolt against British policies, marking the beginning of organized resistance.</li>
                                <li><strong>Indian National Congress:</strong> Formed in 1885 for political representation, evolving from moderate to radical under extremist leaders.</li>
                                <li><strong>Gandhi's Movements:</strong> Non-Cooperation, Civil Disobedience, and Quit India, emphasizing non-violent protest.</li>
                                <li><strong>Partition and Independence:</strong> Division of India into India and Pakistan in 1947, leading to independence.</li>
                                <li><strong>Role of Press and Education:</strong> Newspapers and educational institutions spread nationalist ideas and fostered unity.</li>
                                <li><strong>Morley-Minto Reforms (1909):</strong> Introduced separate electorates, dividing Hindus and Muslims politically.</li>
                                <li><strong>Montagu-Chelmsford Reforms (1919):</strong> Increased Indian participation in provincial governments but retained British control.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What were the main causes of the First War of Independence in 1857?
                        </div>
                        <div className={styles.solutionBox}>
                            Causes included economic exploitation through high land revenues, social reforms like Sati abolition offending religious sentiments, military grievances such as low pay and discriminatory treatment, and the immediate trigger of greased cartridges symbolizing cultural insensitivity.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Describe the role of Gandhi in the Indian freedom struggle.
                        </div>
                        <div className={styles.solutionBox}>
                            Gandhi led non-violent movements like Non-Cooperation (boycotting British goods) and Civil Disobedience (Dandi March against salt tax), mobilizing masses through Satyagraha and promoting self-reliance via Khadi and village industries.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the significance of the Quit India Movement.
                        </div>
                        <div className={styles.solutionBox}>
                            Launched in 1942 during WWII, it demanded immediate British withdrawal, leading to mass arrests and underground activities, intensifying the freedom struggle and pressuring Britain to consider independence.
                        </div>

                        <div className={styles.practiceQuestion}>
                            How did the Indian National Congress evolve over time?
                        </div>
                        <div className={styles.solutionBox}>
                            Started as a moderate body in 1885 for petitions, became radical under extremists like Tilak advocating Swaraj, and under Gandhi focused on mass movements, eventually leading the country to independence.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>First War of Independence: 1857, causes include greased cartridges, economic exploitation. INC: 1885, moderate to radical evolution. Gandhi: Non-violence, Dandi March, Quit India. Independence: 1947, partition into India and Pakistan. <strong>Additional Notes:</strong> Nationalism in India was a multifaceted movement involving diverse groups, with non-violence as a key strategy. It not only achieved political freedom but also inspired global decolonization efforts.</p>
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
