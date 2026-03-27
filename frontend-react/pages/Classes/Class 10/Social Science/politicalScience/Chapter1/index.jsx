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
                    <h1>Chapter 1: Power Sharing</h1>
                    <p>Understanding power sharing in democracy.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter discusses the concept of power sharing in democratic systems, explaining why it is essential for maintaining peace and stability in diverse societies. It explores different forms of power sharing and their importance in preventing conflict and promoting inclusivity.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Power sharing is a fundamental principle of democracy that involves the distribution of power among different organs of government, levels of government, and various social groups to prevent any single entity from dominating others. In diverse societies like Belgium and Sri Lanka, power sharing helps manage conflicts arising from ethnic, linguistic, or religious differences. Belgium adopted a power-sharing model with equal representation for Dutch and French-speaking communities, while Sri Lanka's majoritarian policies led to civil war, highlighting the need for inclusive governance.</p>
                        <p>In India, power sharing occurs through horizontal division (among legislature, executive, and judiciary), vertical division (between central and state governments), and community-based sharing (among different social groups). The Constitution ensures checks and balances, decentralization through local governments, and reservation for marginalized communities. <strong>Additional Insights:</strong> Power sharing promotes inclusivity, reduces divisions, and fosters a sense of belonging among citizens, making democracy more representative and stable.</p>
                        <p>Furthermore, the chapter discusses how power sharing in coalitions and federal systems prevents authoritarianism and encourages participation from all sections of society, drawing lessons from global examples.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Horizontal Division of Power:</strong> Separation of powers among the legislature, executive, and judiciary to ensure checks and balances and prevent misuse of authority.</li>
                                <li><strong>Vertical Division of Power:</strong> Distribution of power between the central government and state governments, as seen in federal systems like India.</li>
                                <li><strong>Community Power Sharing:</strong> Sharing power among different social groups, such as linguistic or religious communities, to address diversity.</li>
                                <li><strong>Checks and Balances:</strong> Mechanisms to ensure no single organ of government becomes too powerful, promoting accountability.</li>
                                <li><strong>Decentralization:</strong> Delegation of power to local governments (Panchayati Raj) for better governance at the grassroots level.</li>
                                <li><strong>Federalism:</strong> A system where power is divided between central and regional governments, accommodating regional diversity.</li>
                                <li><strong>Majoritarianism:</strong> Rule by the majority without considering minority rights, which can lead to conflict as in Sri Lanka.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What is power sharing and why is it important in a democracy?
                        </div>
                        <div className={styles.solutionBox}>
                            Power sharing is the distribution of power among different groups and levels to prevent domination and promote stability; it ensures inclusivity, reduces conflicts, and makes governance more representative in diverse societies.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the horizontal division of power with examples.
                        </div>
                        <div className={styles.solutionBox}>
                            Horizontal division separates powers among legislature (makes laws), executive (implements laws), and judiciary (interprets laws), as in the Indian system where Parliament, government, and Supreme Court check each other.
                        </div>

                        <div className={styles.practiceQuestion}>
                            How does community power sharing help in managing diversity?
                        </div>
                        <div className={styles.solutionBox}>
                            It ensures representation for different social groups through reservations, language policies, and regional autonomy, preventing marginalization and fostering equality, as seen in India's provisions for minorities.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Compare the power-sharing models in Belgium and Sri Lanka.
                        </div>
                        <div className={styles.solutionBox}>
                            Belgium's model accommodates linguistic diversity through equal community representation and separate regions, ensuring stability; Sri Lanka's majoritarian approach favored Sinhalese, leading to Tamil unrest and civil war.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Power Sharing: Distribution among organs, levels, and groups. Horizontal: Legislature, executive, judiciary. Vertical: Central-state. Community: Social groups. Belgium: Success story. Sri Lanka: Cautionary tale. <strong>Additional Notes:</strong> Power sharing is crucial for unity in diversity, promoting peace and inclusive governance in democracies worldwide.</p>
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
