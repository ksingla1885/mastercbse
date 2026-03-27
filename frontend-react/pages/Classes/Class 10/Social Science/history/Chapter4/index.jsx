import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter4 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 4: The Age of Industrialisation</h1>
                    <p>Explore the Industrial Revolution and its impacts.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter covers the Industrial Revolution in Britain, its spread to other countries, and the impact on society, economy, and labor. It explores the transformation from agrarian to industrial societies and the associated social changes.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>The Industrial Revolution began in Britain in the late 18th century, marked by innovations like the spinning jenny, water frame, and steam engine, which mechanized production and increased efficiency. Factories replaced cottage industries, leading to urbanization as people migrated to cities for jobs. Britain became the "workshop of the world" due to its coal, iron, and textile industries. The revolution spread to Europe and the United States, influencing global economies.</p>
                        <p>The chapter discusses the role of cotton textiles, iron and steel production, and railways in industrialization. It highlights the harsh conditions for workers, including long hours, low wages, child labor, and dangerous environments, leading to social reforms. Movements like Luddism opposed machines, while thinkers like Karl Marx critiqued capitalism. Post-Industrial Revolution, labor laws improved working conditions, and socialism emerged as a response to inequalities.</p>
                        <p>Industrialization also led to imperialism, as European powers sought raw materials and markets. In India, it disrupted traditional crafts and led to deindustrialization. <strong>Additional Insights:</strong> Industrialization created wealth and technological progress but also social problems like urban slums, pollution, and class conflicts, influencing modern labor rights and economic policies.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Proto-Industrialisation:</strong> Cottage-based production before factories, laying groundwork for industrialization.</li>
                                <li><strong>Factory System:</strong> Machine-based production in centralized locations, increasing output but exploiting labor.</li>
                                <li><strong>Urbanisation:</strong> Migration to cities for jobs, leading to overcrowding and new social structures.</li>
                                <li><strong>Labor Reforms:</strong> Laws like the Factory Acts to improve working conditions and limit child labor.</li>
                                <li><strong>Luddism:</strong> Movement against machines seen as threats to jobs and traditional skills.</li>
                                <li><strong>Marxism:</strong> Critique of capitalism advocating for workers' control over production.</li>
                                <li><strong>Imperialism and Industrialization:</strong> Industrial powers sought colonies for resources and markets.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What were the main inventions that sparked the Industrial Revolution?
                        </div>
                        <div className={styles.solutionBox}>
                            Main inventions included the spinning jenny (James Hargreaves), water frame (Richard Arkwright), steam engine (James Watt), and railways (George Stephenson), enabling mass production and transportation.
                        </div>

                        <div className={styles.practiceQuestion}>
                            How did industrialization affect workers and society?
                        </div>
                        <div className={styles.solutionBox}>
                            It led to long working hours, low wages, child labor, and urban slums, but also created job opportunities, raised living standards for some, and fostered social reforms and class consciousness.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Describe the factory system and its advantages and disadvantages.
                        </div>
                        <div className={styles.solutionBox}>
                            The factory system involved large-scale production using machines, advantages included higher efficiency and cheaper goods, disadvantages were worker exploitation, health risks, and loss of traditional skills.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the rise of socialism in response to industrialization.
                        </div>
                        <div className={styles.solutionBox}>
                            Socialism rose as a critique of capitalist inequalities, with thinkers like Marx advocating for collective ownership to eliminate exploitation and promote equality among workers.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Industrial Revolution: Britain, 18th century, inventions like steam engine. Factory System: Machine production, urbanization. Impacts: Worker exploitation, reforms, socialism. India: Deindustrialization, raw materials. <strong>Additional Notes:</strong> Industrialization shaped modern economies and societies, highlighting the balance between progress and social justice, influencing global development.</p>
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
