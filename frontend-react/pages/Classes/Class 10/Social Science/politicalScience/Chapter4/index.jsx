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
                    <h1>Chapter 4: Gender, Religion and Caste</h1>
                    <p>Role of gender, religion, and caste in politics.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter discusses how gender, religion, and caste influence political participation and representation in democracies. It explores the challenges posed by these social divisions and the measures taken to ensure equality and justice.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Gender inequality in politics is evident in the low representation of women in legislatures worldwide, despite comprising half the population. In India, women's participation is hindered by patriarchal norms, lack of education, and economic dependence. Religion plays a significant role in politics, often leading to communalism where political parties exploit religious sentiments for votes, as seen in partition-era India. Caste influences politics through caste-based voting and discrimination, but movements like those led by B.R. Ambedkar have challenged caste hierarchies.</p>
                        <p>The chapter highlights how secularism in the Indian Constitution ensures equal treatment of all religions, preventing state favoritism. Affirmative action, such as reservations for Scheduled Castes and Tribes, aims to address caste-based inequalities. Women's movements and laws like the 73rd and 74th Amendments mandating women's reservation in local bodies have improved gender representation. <strong>Additional Insights:</strong> Inclusive politics strengthens democracy by addressing inequalities, promoting social justice, and ensuring that diverse groups contribute to decision-making.</p>
                        <p>Furthermore, the chapter examines global examples like the feminist movements in the West and anti-caste struggles in India, emphasizing the need for legal and societal changes to achieve true equality.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Gender Inequality:</strong> Unequal opportunities for women in politics due to societal norms and lack of support.</li>
                                <li><strong>Communalism:</strong> Political mobilization based on religious identities, leading to division and conflict.</li>
                                <li><strong>Casteism:</strong> Discrimination and exclusion based on caste, affecting political participation.</li>
                                <li><strong>Secularism:</strong> Principle of separating religion from state affairs to ensure equal treatment.</li>
                                <li><strong>Feminist Movements:</strong> Efforts to achieve gender equality in political and social spheres.</li>
                                <li><strong>Reservations:</strong> Quotas for women, SC/ST, and OBCs to ensure representation.</li>
                                <li><strong>Patriarchal Society:</strong> Male-dominated structures limiting women's roles in politics.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Discuss the impact of gender inequality on political participation.
                        </div>
                        <div className={styles.solutionBox}>
                            Gender inequality limits women's access to education, resources, and decision-making, resulting in low representation in politics despite comprising half the population.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the concept of communalism with examples.
                        </div>
                        <div className={styles.solutionBox}>
                            Communalism uses religion for political gain, as seen in pre-partition India where leaders exploited Hindu-Muslim differences, leading to violence.
                        </div>

                        <div className={styles.practiceQuestion}>
                            How does caste influence politics in India?
                        </div>
                        <div className={styles.solutionBox}>
                            Caste affects voting patterns, with parties appealing to caste identities, while discrimination excludes lower castes from political power.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Analyze the significance of reservations for marginalized groups.
                        </div>
                        <div className={styles.solutionBox}>
                            Reservations provide political voice to SC/ST/OBCs and women, addressing historical injustices and promoting inclusive governance.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Gender: Low representation, need for quotas. Religion: Communalism threatens unity. Caste: Discrimination affects participation. Secularism: Equal treatment. <strong>Additional Notes:</strong> Inclusive policies combat inequalities, strengthening democratic foundations.</p>
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
