import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter9 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 9: वाख</h1>
                    <p>कश्मीरी कवयित्री लल्लेश्वरी द्वारा रचित भक्ति और आत्मज्ञान के प्रभावशाली सूत्र।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>'वाख' कश्मीरी भाषा की लोकप्रिय कवयित्री लल्लद्यद (लल्लेश्वरी) की काव्य शैली है। इन वाखों के माध्यम से उन्होंने सामाजिक धार्मिक आडंबरों का विरोध किया है और ईश्वर के प्रति सच्चे प्रेम और आत्मज्ञान पर बल दिया है।</p>
                        <p>कवयित्री कहती हैं कि मनुष्य कच्चे धागे की रस्सी से अपनी जीवन रूपी नाव को खींच रहा है, पता नहीं प्रभु कब उसकी पुकार सुनेंगे और उसे इस भवसागर से पार उतारेंगे। वे बताती हैं कि जब तक मनुष्य के भीतर से 'मैं' (अहंकार) और 'पराया' (भेदभाव) का भाव नहीं जाता, तब तक वह परमात्मा को प्राप्त नहीं कर सकता।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>प्रमुख संदेश (Main Messages)</h3>
                        <ul>
                            <li><strong>आत्मज्ञान ही सच्चा ज्ञान:</strong> जिसने स्वयं को जान लिया, उसने ही साहिब (ईश्वर) को जान लिया।</li>
                            <li><strong>मध्यमार्ग का महत्व:</strong> 'खा-खाकर कुछ पाएगा नहीं, न खाकर बनेगा अहंकारी।' अर्थात् जीवन में संतुलन आवश्यक है।</li>
                            <li><strong>धार्मिक एकता:</strong> ईश्वर हिंदू-मुसलमान में भेद नहीं करता, वह तो हर जगह (थल-थल में) बसता है।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>काव्य शैली (Style)</h3>
                        <p>जैसे कबीर के दोहे और मीरा के पद प्रसिद्ध हैं, वैसे ही लल्लद्यद के वाख प्रसिद्ध हैं। इनकी भाषा सरल और जनभाषा के करीब है। ये वाख कश्मीरी संस्कृति और दर्शन का महत्वपूर्ण हिस्सा हैं।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. 'रस्सी' यहाँ किसके लिए प्रयुक्त हुआ है और वह कैसी है?</div>
                        <div className={styles.practiceQuestion}>2. कवयित्री द्वारा मुक्ति के लिए किए जाने वाले प्रयास व्यर्थ क्यों हो रहे हैं?</div>
                        <div className={styles.practiceQuestion}>3. 'खा-खाकर कुछ पाएगा नहीं, न खाकर बनेगा अहंकारी' - इस पंक्ति का भाव स्पष्ट कीजिए।</div>
                        <div className={styles.practiceQuestion}>4. 'ज्ञानी' से कवयित्री का क्या अभिप्राय है?</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>कवयित्री: लल्लेश्वरी | विधा: वाख | मुख्य संदेश: धार्मिक संकीर्णता से ऊपर उठकर आत्मज्ञान और समरसता को अपनाना।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter9;
