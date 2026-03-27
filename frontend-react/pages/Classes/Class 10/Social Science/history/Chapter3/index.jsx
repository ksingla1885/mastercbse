import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter3 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 3: The Making of a Global World</h1>
                    <p>Explore globalization and economic changes.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter examines the development of global trade, imperialism, and the interconnectedness of the world through economic and cultural exchanges. It explores how historical events shaped globalization from ancient times to the modern era.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>The chapter discusses the pre-modern world with ancient trade routes like the Silk Road, which connected Asia, Europe, and Africa, facilitating the exchange of goods such as silk, spices, and precious metals, as well as ideas, religions, and technologies. European exploration, driven by the search for new trade routes, led to the Age of Discovery, with figures like Christopher Columbus and Vasco da Gama establishing sea routes to Asia and the Americas in the 15th and 16th centuries. This era marked the beginning of European colonialism, where powers like Portugal, Spain, Britain, and France established empires for resources and markets.</p>
                        <p>The Industrial Revolution in the 18th and 19th centuries intensified global trade, with Britain leading in manufacturing and exporting goods worldwide. The chapter covers the era of imperialism, including the Scramble for Africa and the Opium Wars in China, where European powers imposed unequal treaties. It also examines the Great Depression of the 1930s, triggered by the 1929 stock market crash, which led to economic downturns, unemployment, and protectionist policies, highlighting global interdependence.</p>
                        <p>Post-World War II developments include the Bretton Woods Conference (1944), which established institutions like the International Monetary Fund (IMF) and World Bank to stabilize the global economy, promote free trade, and aid reconstruction. The chapter discusses decolonization movements, the rise of multinational corporations, and the growth of global institutions. <strong>Additional Insights:</strong> Globalization has led to cultural exchanges but also inequalities, as seen in labor movements, environmental issues, and economic disparities between developed and developing nations.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Silk Road:</strong> Ancient trade route connecting Asia and Europe, facilitating cultural and economic exchanges.</li>
                                <li><strong>Age of Discovery:</strong> European explorations in the 15th-16th centuries, leading to global connections and colonialism.</li>
                                <li><strong>Colonialism:</strong> European powers' control over colonies for resources, markets, and strategic advantages.</li>
                                <li><strong>Industrial Revolution:</strong> Shift to machine-based production, boosting global trade and urbanization.</li>
                                <li><strong>Great Depression:</strong> Economic crisis in the 1930s, caused by overproduction, speculation, and global interconnectedness.</li>
                                <li><strong>Bretton Woods System:</strong> Post-WWII agreements establishing IMF, World Bank, and fixed exchange rates for economic stability.</li>
                                <li><strong>Decolonization:</strong> Process of colonies gaining independence, reshaping global power dynamics.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What was the significance of the Silk Road in global history?
                        </div>
                        <div className={styles.solutionBox}>
                            The Silk Road was an ancient network of trade routes connecting China, India, and Europe, facilitating the exchange of goods, ideas, religions, and technologies, laying the foundation for global interconnectedness.
                        </div>

                        <div className={styles.practiceQuestion}>
                            How did European colonialism affect global trade and economies?
                        </div>
                        <div className={styles.solutionBox}>
                            Colonialism led to the exploitation of colonies for raw materials and markets, creating unequal trade relations, draining wealth from colonies, and establishing European dominance in global commerce.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Describe the impact of the Industrial Revolution on the world economy.
                        </div>
                        <div className={styles.solutionBox}>
                            The Industrial Revolution shifted economies from agriculture to industry, increasing global trade through mass production, leading to urbanization, imperialism, and the spread of capitalism worldwide.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the causes and consequences of the Great Depression.
                        </div>
                        <div className={styles.solutionBox}>
                            Causes included stock market speculation, overproduction, and bank failures; consequences were massive unemployment, poverty, and protectionism, prompting global economic reforms.
                        </div>
                    </section>


                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Silk Road: Ancient trade routes for goods and ideas. Age of Discovery: European explorations and colonialism. Industrial Revolution: Economic shift and global trade. Great Depression: 1929 crisis with worldwide effects. Bretton Woods: Post-war economic institutions. Decolonization: End of empires and new nations. <strong>Additional Notes:</strong> Globalization has created interdependence but also challenges like inequality and environmental degradation, emphasizing the need for sustainable development.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter3;
