import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic11 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 11: Letter Writing</h1>
                    <p>Master the art of formal and informal correspondence.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>Written Communication</h2>
                        <p>Letters are an essential form of written communication. In the CBSE curriculum, you are tested on two main types: <strong>Formal</strong> and <strong>Informal</strong> letters.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>1. Formal Letters</h3>
                        <p>These are written for official purposes to authorities, editors, or business firms. They must be concise and follow a strict format.</p>
                        <div className={styles.ruleBox}>
                            <strong>Standard Format:</strong>
                            <ol>
                                <li><strong>Sender's Address:</strong> Your contact info.</li>
                                <li><strong>Date:</strong> The day of writing.</li>
                                <li><strong>Receiver's Address:</strong> Recipient's official title and address.</li>
                                <li><strong>Subject:</strong> A brief line stating the purpose.</li>
                                <li><strong>Salutation:</strong> Dear Sir / Madam.</li>
                                <li><strong>Body:</strong> 3 paragraphs (Intro, Details, Conclusion).</li>
                                <li><strong>Complimentary Close:</strong> Yours sincerely / faithfully.</li>
                                <li><strong>Name & Signature</strong></li>
                            </ol>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>2. Informal Letters</h3>
                        <p>These are personal letters written to friends, relatives, or family members. The tone is relaxed and casual.</p>
                        <div className={styles.ruleBox}>
                            <strong>Standard Format:</strong>
                            <ol>
                                <li><strong>Sender's Address:</strong> Top left.</li>
                                <li><strong>Date</strong></li>
                                <li><strong>Salutation:</strong> Dear [Name] / My dear [Name].</li>
                                <li><strong>Body:</strong> Personal thoughts and news.</li>
                                <li><strong>Complimentary Close:</strong> Your lovingly / Best wishes.</li>
                                <li><strong>Name</strong></li>
                            </ol>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Sample: Letter to Editor (Formal)</h3>
                        <div className={styles.sampleBox}>
                            <p>123, Green Park<br />New Delhi<br />15th Oct 2023</p>
                            <p>The Editor<br />The Times of India<br />New Delhi</p>
                            <p><strong>Subject: Need for more playgrounds</strong></p>
                            <p>Dear Sir,<br />Through the columns of your esteemed newspaper, I wish to highlight the lack of playgrounds... [Body] ...Yours sincerely, Ravi.</p>
                        </div>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Writing Practice</h3>
                        <div className={styles.practiceQuestion}>Write a letter to the Principal requesting leave. (Formal)</div>
                        <div className={styles.practiceQuestion}>Write a letter to your cousin inviting them for Diwali. (Informal)</div>
                        <div className={styles.practiceQuestion}>What is the correct closing for a letter to an Editor? (A: Yours sincerely)</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic11;
