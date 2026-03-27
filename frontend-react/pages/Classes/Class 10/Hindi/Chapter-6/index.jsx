import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter6 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 6: कबीर की साखियाँ</h1>
                    <p>संत कबीर दास के दोहों के माध्यम से जीवन के सत्य और नैतिक मूल्यों का ज्ञान।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>कबीर की साखियाँ मानव जीवन के लिए अमूल्य उपदेश हैं। 'साखी' का अर्थ है 'साक्षी' या आँखों देखा सत्य। कबीरदास जी ने इन दोहों के माध्यम से आडंबरों का विरोध किया है और ईश्वर की निराकार भक्ति पर बल दिया है।</p>
                        <p>इन साखियों में कबीर ने बताया है कि प्रेम का एक अक्षर पढ़ने वाला ही सच्चा ज्ञानी है। उन्होंने जाति-पाँति, ऊँच-नीच और धर्म के नाम पर होने वाले झगड़ों को व्यर्थ बताया है। उनके अनुसार ईश्वर हमारे हृदय के भीतर विद्यमान है, उसे बाहर खोजने की आवश्यकता नहीं है।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>प्रमुख शिक्षाएं (Major Teachings)</h3>
                        <ul>
                            <li><strong>मधुर वाणी:</strong> कबीर कहते हैं कि हमें ऐसी वाणी बोलनी चाहिए जिससे दूसरों को शांति मिले और हमारा अपना मन भी शीतल रहे।</li>
                            <li><strong>अहंकार का त्याग:</strong> जब तक व्यक्ति के भीतर 'मैं' (अहंकार) है, तब तक उसे ईश्वर की प्राप्ति नहीं हो सकती।</li>
                            <li><strong>सच्चा प्रेम:</strong> पोथी पढ़-पढ़कर जग मुआ, पंडित भया न कोय। ढाई आखर प्रेम का, पढ़े सो पंडित होय।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>काव्य शैली (Poetic Style)</h3>
                        <p>कबीर की भाषा सधुक्कड़ी है, जिसमें अनेक भाषाओं के शब्द मिलते हैं। उनके दोहे संक्षिप्त होते हुए भी गहरे अर्थ समेटे हुए हैं। वे सीधे दिल पर चोट करते हैं और समाज सुधार का मार्ग प्रशस्त करते हैं।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. कबीर की दृष्टि में 'पंडित' कौन है?</div>
                        <div className={styles.practiceQuestion}>2. 'मीठी वाणी' बोलने से दूसरों को सुख और अपने तन को शीतलता कैसे प्राप्त होती है?</div>
                        <div className={styles.practiceQuestion}>3. कबीर ने संसार को 'सुखिया' और अपने आप को 'दुखिया' क्यों कहा है?</div>
                        <div className={styles.practiceQuestion}>4. 'कस्तूरी कुंडल बसै' के माध्यम से कबीर क्या समझाना चाहते हैं?</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>कवि: संत कबीरदास | विधा: साखी/दोहा | मुख्य संदेश: आडंबरों का त्याग कर सच्चे प्रेम और मानवीय मूल्यों को अपनाना।</p>
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
