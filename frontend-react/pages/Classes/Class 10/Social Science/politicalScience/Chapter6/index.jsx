import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter6 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Chapter 6: Political Parties</h1>
                    <p>Functions and types of political parties.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter discusses the crucial role of political parties in democratic systems, including their functions, types, and challenges. It explores how parties shape governance and represent diverse interests in society.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Political parties are organized groups that contest elections, form governments, and influence policy-making. They articulate ideologies, mobilize voters, and ensure accountability. In India, the multi-party system allows for diverse representation, with parties like the Indian National Congress and Bharatiya Janata Party dominating at the national level, while regional parties address local issues.</p>
                        <p>The chapter covers party systems: one-party (e.g., China), two-party (e.g., USA), and multi-party (e.g., India). Challenges include lack of internal democracy, dynastic politics, and corruption. Coalitions form when no party gets a majority, as seen in India's National Democratic Alliance. <strong>Additional Insights:</strong> Political parties are vital for democracy, providing choices to voters, but require reforms for transparency and inclusivity.</p>
                        <p>Furthermore, the chapter examines how parties adapt to social changes, use media for campaigns, and the need for internal elections to strengthen democracy within parties.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Party System:</strong> Classification based on the number of parties, influencing governance and competition.</li>
                                <li><strong>National Parties:</strong> Parties with influence across multiple states, recognized by the Election Commission.</li>
                                <li><strong>Regional Parties:</strong> Parties focused on specific states or regions, representing local interests.</li>
                                <li><strong>Coalitions:</strong> Alliances between parties to form governments when no single party wins a majority.</li>
                                <li><strong>Partisan Politics:</strong> Loyalty to a party, which can lead to polarization but also organized opposition.</li>
                                <li><strong>Internal Democracy:</strong> Democratic processes within parties, like elections for leadership.</li>
                                <li><strong>Defection:</strong> When politicians switch parties, often for personal gain, weakening party loyalty.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Important Figures and Examples</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Indian National Congress (INC):</strong> Oldest party, led India's freedom struggle and post-independence governance.</li>
                                <li><strong>Bharatiya Janata Party (BJP):</strong> Major national party, emphasizing cultural nationalism and economic development.</li>
                                <li><strong>Communist Party of India (CPI):</strong> Represents left-wing ideologies, focusing on workers' rights.</li>
                                <li><strong>Dravida Munnetra Kazhagam (DMK):</strong> Regional party in Tamil Nadu, advocating for Dravidian interests.</li>
                                <li><strong>National Democratic Alliance (NDA):</strong> Coalition led by BJP, forming governments at center and states.</li>
                                <li><strong>United Progressive Alliance (UPA):</strong> Coalition led by INC, emphasizing social welfare.</li>
                                <li><strong>Election Commission of India:</strong> Regulates parties and ensures fair elections.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            1. What are the main functions of political parties in a democracy?
                        </div>
                        <div className={styles.solutionBox}>
                            Parties contest elections, form governments, make policies, and represent public interests, ensuring accountability.
                        </div>

                        <div className={styles.practiceQuestion}>
                            2. Explain the different types of party systems with examples.
                        </div>
                        <div className={styles.solutionBox}>
                            One-party (China: single dominant party), two-party (USA: Democrats and Republicans), multi-party (India: multiple parties competing).
                        </div>

                        <div className={styles.practiceQuestion}>
                            3. Discuss the role of national and regional parties in India.
                        </div>
                        <div className={styles.solutionBox}>
                            National parties influence nationwide policies; regional parties address local issues and form coalitions for stability.
                        </div>

                        <div className={styles.practiceQuestion}>
                            4. How do coalitions contribute to governance?
                        </div>
                        <div className={styles.solutionBox}>
                            Coalitions allow diverse parties to share power, representing varied interests and preventing single-party dominance.
                        </div>

                        <div className={styles.practiceQuestion}>
                            5. What are the challenges faced by political parties?
                        </div>
                        <div className={styles.solutionBox}>
                            Challenges include corruption, dynastic politics, lack of transparency, and failure to address public needs.
                        </div>

                        <div className={styles.practiceQuestion}>
                            6. Describe the importance of internal democracy in parties.
                        </div>
                        <div className={styles.solutionBox}>
                            Internal democracy ensures leadership accountability, encourages participation, and strengthens party credibility.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Parties: Contest elections, form governments. Systems: One, two, multi-party. India: National and regional. Coalitions: For stability. <strong>Additional Notes:</strong> Political parties are the backbone of democracy, requiring reforms for better representation.</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter6;
