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
                    <h1>Chapter 5: Consumer Rights</h1>
                    <p>Understanding consumer protection and rights in the market.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explores consumer rights, responsibilities, and protection mechanisms in the marketplace. It discusses laws, movements, and the role of consumers in ensuring fair trade and quality products.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Consumers are individuals who purchase goods and services for personal use. They face exploitation through adulteration, false advertising, and unfair prices. The Consumer Protection Act, 1986 (amended in 2019) safeguards rights like safety, information, choice, redress, representation, and education.</p>
                        <p>Consumer courts at district, state, and national levels resolve complaints efficiently. Movements like the consumer movement in India, led by figures like Ralph Nader, emphasize awareness. Responsibilities include being informed, reporting malpractices, and choosing sustainable products. Globalization has increased consumer choices but also risks.</p>
                        <p><strong>Additional Insights:</strong> Consumer protection promotes ethical business practices, reduces market failures, and empowers individuals in a globalized economy.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Consumer Rights:</strong> Entitlements including safety, information, choice, redress, representation, and consumer education.</li>
                                <li><strong>Consumer Protection Act (1986/2019):</strong> Indian law establishing consumer courts and defining rights against unfair trade practices.</li>
                                <li><strong>Consumer Courts:</strong> Quasi-judicial bodies (district, state, national) for quick and affordable redressal of grievances.</li>
                                <li><strong>Consumer Responsibilities:</strong> Duties like checking quality, reading labels, and complaining about defects.</li>
                                <li><strong>Adulteration:</strong> Mixing inferior substances in products, violating safety rights.</li>
                                <li><strong>Misleading Advertisements:</strong> False claims in promotions, addressed by consumer laws.</li>
                                <li><strong>Standardization:</strong> Ensuring product quality through BIS and ISO standards.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            List and explain the six consumer rights.
                        </div>
                        <div className={styles.solutionBox}>
                            Right to safety (protection from hazards), information (details on products), choice (variety), redress (complaint resolution), representation (voice in policies), education (awareness).
                        </div>

                        <div className={styles.practiceQuestion}>
                            Describe the structure and functions of consumer courts in India.
                        </div>
                        <div className={styles.solutionBox}>
                            District forums (up to ₹20 lakhs), state commissions (₹20 lakhs to ₹1 crore), national commission (above ₹1 crore); provide quick justice.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Discuss the importance of consumer awareness in the marketplace.
                        </div>
                        <div className={styles.solutionBox}>
                            Informed consumers make better choices, demand quality, and prevent exploitation, leading to fair markets.
                        </div>

                        <div className={styles.practiceQuestion}>
                            What are the responsibilities of consumers?
                        </div>
                        <div className={styles.solutionBox}>
                            Check quality, read labels, complain about defects, choose sustainable products, and promote ethical consumption.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Rights: Safety, information, choice. Laws: Consumer Protection Act. Forums: For redress. Awareness: Essential. <strong>Additional Notes:</strong> Consumer protection fosters trust and ethical practices in the marketplace.</p>
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
