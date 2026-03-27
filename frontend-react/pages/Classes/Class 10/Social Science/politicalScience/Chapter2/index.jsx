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
                    <h1>Chapter 2: Federalism</h1>
                    <p>Division of power between central and state governments.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explores federalism as a system of government where power is divided between the central and state governments. It discusses how federalism accommodates regional diversity and ensures balanced governance in India.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Federalism is a system where power is shared between a central authority and constituent units, such as states or provinces. In India, it is enshrined in the Constitution, combining federal features with unitary elements for national unity. The division of powers is outlined in three lists: Union List (subjects like defense), State List (subjects like police), and Concurrent List (shared subjects like education). This allows states to govern local matters while the center handles national issues.</p>
                        <p>Decentralization through Panchayati Raj institutions strengthens federalism by empowering local governments. The chapter contrasts federal systems in India, USA, and Belgium, highlighting how federalism manages diversity and prevents central overreach. <strong>Additional Insights:</strong> Federalism promotes cooperation, accommodates regional aspirations, and ensures that power is not concentrated, fostering democratic participation at all levels.</p>
                        <p>Furthermore, the chapter discusses challenges like regional imbalances and the role of the judiciary in resolving center-state disputes, emphasizing federalism's role in India's unity amid diversity.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Union List:</strong> Subjects exclusively under central government, such as foreign affairs and currency.</li>
                                <li><strong>State List:</strong> Subjects for state governments, including agriculture and law and order.</li>
                                <li><strong>Concurrent List:</strong> Subjects shared between center and states, like forests and marriage laws.</li>
                                <li><strong>Decentralization:</strong> Transfer of power to local bodies for effective local governance.</li>
                                <li><strong>Quasi-Federal:</strong> India's federal system with strong central powers for emergencies.</li>
                                <li><strong>Inter-State Council:</strong> Body to promote coordination between center and states.</li>
                                <li><strong>Special Provisions:</strong> For certain states like Jammu and Kashmir under Article 370.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            What is federalism and why is it important?
                        </div>
                        <div className={styles.solutionBox}>
                            Federalism divides power between central and state governments; it's important for managing diversity, preventing central domination, and allowing local governance.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the three lists in the Indian federal system.
                        </div>
                        <div className={styles.solutionBox}>
                            Union List for central subjects, State List for state subjects, Concurrent List for shared subjects, ensuring balanced power distribution.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Compare federalism in India and the USA.
                        </div>
                        <div className={styles.solutionBox}>
                            India's quasi-federal system has strong center; USA's is more rigid with equal state powers, but both accommodate diversity.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Describe the unitary features in the Indian Constitution.
                        </div>
                        <div className={styles.solutionBox}>
                            Includes President's rule, single constitution, and central control over states during emergencies.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Federalism: Power division. Lists: Union, State, Concurrent. Decentralization: Local governance. India: Quasi-federal. <strong>Additional Notes:</strong> Federalism ensures unity in diversity, promoting balanced and inclusive governance.</p>
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
