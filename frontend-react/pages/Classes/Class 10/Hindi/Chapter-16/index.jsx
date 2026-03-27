import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter16 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 16: किस तरह आखिरकार मैं हिंदी में आया</h1>
                    <p>एक साहित्यकार के भाषाई सफर और हिंदी साहित्य से जुड़ने की प्रेरणादायक कहानी।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>यह अध्याय एक आत्मकथात्मक निबंध है जिसमें लेखक ने अपने जीवन के उन पड़ावों का वर्णन किया है जिन्होंने उन्हें हिंदी साहित्य की ओर मोड़ा। लेखक बताते हैं कि कैसे वे शुरुआत में अन्य भाषाओं और विषयों में रुचि रखते थे, लेकिन समय और परिस्थितियों ने उन्हें हिंदी लेखन के करीब ला दिया।</p>
                        <p>लेखक ने हरिवंश राय बच्चन जैसे महान साहित्यकारों के प्रभाव का भी उल्लेख किया है, जिनका साथ और प्रोत्साहन उनके लिए मील का पत्थर साबित हुआ। यह पाठ किसी भाषा को सीखने और उसमें सृजन करने के प्रति लगन और संघर्ष को दर्शाता है।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>महत्वपूर्ण प्रभाव (Major Influences)</h3>
                        <ul>
                            <li><strong>हरिवंश राय बच्चन:</strong> उनके मार्गदर्शन ने लेखक को हिंदी कविताओं और गद्य की गहराई को समझने में मदद की।</li>
                            <li><strong>साहित्यिक वातावरण:</strong> उस समय के साहित्यिक परिवेश ने लेखक के भीतर की सृजनात्मकता को जगाया।</li>
                            <li><strong>आर्थिक संघर्ष:</strong> जीवन की चुनौतियों ने उन्हें लेखन के प्रति अधिक गंभीर बनाया।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>भाषा के प्रति अनुराग (Love for Language)</h3>
                        <p>लेखक का मानना है कि कोई भी भाषा केवल संवाद का साधन नहीं है, बल्कि वह व्यक्ति के भावों और संस्कृति का संवाहक होती है। हिंदी में आने के बाद उन्हें अपनी अभिव्यक्ति का एक विस्तृत धरातल मिला।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. लेखक को हिंदी में लाने में हरिवंश राय बच्चन की क्या भूमिका रही?</div>
                        <div className={styles.practiceQuestion}>2. शुरुआत में लेखक ने किन-किन कठिनाइयों का सामना किया?</div>
                        <div className={styles.practiceQuestion}>3. 'किस तरह आखिरकार मैं हिंदी में आया' - इस शीर्षक की सार्थकता स्पष्ट कीजिए।</div>
                        <div className={styles.practiceQuestion}>4. किसी नई भाषा को सीखने के लिए किन गुणों की आवश्यकता होती है?</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>लेखक: प्रभाकर माचवे (पाठ्यपुस्तकानुसार) | विधा: आत्मकथात्मक निबंध | मुख्य संदेश: निरंतर प्रयास और सच्ची लगन से किसी भी लक्ष्य को पाया जा सकता है।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter16;
