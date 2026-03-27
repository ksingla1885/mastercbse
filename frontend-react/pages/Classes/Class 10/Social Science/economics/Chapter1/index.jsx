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
                    <h1>Chapter 1: Development</h1>
                    <p>Understanding economic development and indicators.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explores the concept of development, different perspectives on what development means, and various indicators used to measure it. It discusses the importance of sustainable development and addressing inequalities in India and globally.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Development is a multifaceted concept that goes beyond mere economic growth. While some view development as increased income or industrialization, others emphasize improvements in health, education, equality, and environmental sustainability. For example, a country with high per capita income but poor health indicators may not be considered developed.</p>
                        <p>Key indicators include per capita income (average income per person), literacy rate, infant mortality rate, and the Human Development Index (HDI), which combines life expectancy, education, and income. India ranks moderately on HDI due to disparities in development across states and groups. The chapter highlights sustainable development, ensuring that current progress does not compromise future generations, and addresses global inequalities between developed and developing countries.</p>
                        <p>National and international efforts, such as the Millennium Development Goals (MDGs) and Sustainable Development Goals (SDGs), aim to reduce poverty, improve health, and promote equality. In India, policies focus on inclusive growth to reduce regional and social disparities. <strong>Additional Insights:</strong> Development should be people-centered, promoting freedom, equality, and sustainability, as emphasized by economists like Amartya Sen, who focuses on capabilities and human well-being.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Per Capita Income:</strong> Average income per person, calculated as total national income divided by population; useful but doesn't show distribution.</li>
                                <li><strong>Human Development Index (HDI):</strong> Composite index measuring life expectancy, education, and per capita income to assess overall development.</li>
                                <li><strong>Sustainable Development:</strong> Development that meets present needs without compromising future generations, balancing economic, social, and environmental aspects.</li>
                                <li><strong>Global Inequality:</strong> Differences in development levels between rich and poor countries, often measured by income disparities.</li>
                                <li><strong>National Income:</strong> Total value of goods and services produced in a country, used to gauge economic growth.</li>
                                <li><strong>Public Facilities:</strong> Services like healthcare, education, and sanitation that contribute to quality of life.</li>
                                <li><strong>Inclusive Growth:</strong> Economic growth that benefits all sections of society, reducing poverty and inequality.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Why do different people have different notions of development?
                        </div>
                        <div className={styles.solutionBox}>
                            People have different goals: some prioritize income, others education, health, or equality, based on their experiences and needs.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain per capita income as an indicator of development.
                        </div>
                        <div className={styles.solutionBox}>
                            It shows average wealth but hides inequalities, as a high average can mask poverty in parts of the population.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Describe the components of the Human Development Index.
                        </div>
                        <div className={styles.solutionBox}>
                            HDI includes life expectancy at birth, mean years of schooling, expected years of schooling, and gross national income per capita.
                        </div>

                        <div className={styles.practiceQuestion}>
                            What is sustainable development? Give examples.
                        </div>
                        <div className={styles.solutionBox}>
                            Sustainable development balances economic growth with environmental protection, e.g., using renewable energy and conserving resources.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Discuss the differences in development between Kerala and Punjab.
                        </div>
                        <div className={styles.solutionBox}>
                            Kerala has higher HDI due to better education and health, while Punjab has higher per capita income but lower social indicators.
                        </div>
                    </section>


                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Development: Beyond income, includes quality of life. Indicators: Per capita, HDI. Sustainability: For future generations. Inequality: National and global. <strong>Additional Notes:</strong> Inclusive and sustainable development promotes human well-being and environmental health.</p>
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
