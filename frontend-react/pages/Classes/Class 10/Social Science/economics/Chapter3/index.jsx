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
                    <h1>Chapter 3: Money and Credit</h1>
                    <p>Understanding the role of money and credit in the economy.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Chapter Overview</h2>
                        <p>This chapter explains the evolution and functions of money, the role of credit in economic activities, and the differences between formal and informal sources of credit in India.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Detailed Summary</h3>
                        <p>Money serves as a medium of exchange, measure of value, and store of value, evolving from barter systems to modern currency. Credit allows borrowing for investment and consumption, crucial for economic growth. In India, formal credit comes from banks and cooperatives, while informal credit from moneylenders often leads to exploitation.</p>
                        <p>Banks accept deposits and provide loans, with the Reserve Bank of India (RBI) regulating money supply. Self-help groups (SHGs) empower women and marginalized groups by providing microcredit. However, excessive borrowing can lead to debt traps, especially in rural areas. The chapter emphasizes financial inclusion and the need for affordable credit.</p>
                        <p><strong>Additional Insights:</strong> Access to credit promotes entrepreneurship and reduces poverty, but requires regulation to prevent crises, as seen in global financial events.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Concepts</h3>
                        <div className={styles.keywordBox}>
                            <ul>
                                <li><strong>Money:</strong> Anything accepted as payment for goods and services, including currency, checks, and digital forms.</li>
                                <li><strong>Credit:</strong> Agreement where lender provides money or goods with expectation of repayment plus interest.</li>
                                <li><strong>Formal Credit:</strong> Regulated sources like banks and cooperatives offering loans at reasonable rates.</li>
                                <li><strong>Informal Credit:</strong> Unregulated sources like moneylenders with high interest rates and exploitative terms.</li>
                                <li><strong>Self-Help Groups (SHGs):</strong> Community-based groups providing microcredit, especially to women and poor.</li>
                                <li><strong>Debt Trap:</strong> Cycle of borrowing to repay previous loans, leading to financial distress.</li>
                                <li><strong>Financial Inclusion:</strong> Ensuring access to banking and credit services for all sections of society.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Practice Questions</h3>

                        <div className={styles.practiceQuestion}>
                            Describe the functions of money in modern economies.
                        </div>
                        <div className={styles.solutionBox}>
                            Money acts as a medium of exchange, measure of value, store of value, and standard of deferred payment.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Differentiate between formal and informal sources of credit.
                        </div>
                        <div className={styles.solutionBox}>
                            Formal sources (banks) are regulated with lower interest; informal (moneylenders) are unregulated with high rates.
                        </div>

                        <div className={styles.practiceQuestion}>
                            Explain the role of banks in providing credit.
                        </div>
                        <div className={styles.solutionBox}>
                            Banks collect deposits from savers and lend to borrowers, facilitating investment and economic growth.
                        </div>

                        <div className={styles.practiceQuestion}>
                            What is a debt trap? How can it be avoided?
                        </div>
                        <div className={styles.solutionBox}>
                            Debt trap is unmanageable debt from repeated borrowing; avoid by budgeting, choosing formal credit, and financial education.
                        </div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>Revision Summary</h3>
                        <p>Money: Medium of exchange. Credit: Borrowing for growth. Formal vs. Informal: Regulated vs. exploitative. SHGs: Empowering rural credit. <strong>Additional Notes:</strong> Access to fair credit and financial literacy are essential for economic empowerment and stability.</p>
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
