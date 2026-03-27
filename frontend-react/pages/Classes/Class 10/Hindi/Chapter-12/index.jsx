import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter12 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 12: इस जल प्रलय में</h1>
                    <p>फणीश्वरनाथ रेणु द्वारा रचित बाढ़ की विभीषिका का आंखों देखा वर्णन।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>'इस जल प्रलय में' रिपोर्टाज विधा की एक श्रेष्ठ रचना है। इसमें लेखक फणीश्वरनाथ रेणु ने 1975 में पटना में आई भयानक बाढ़ का अत्यंत सजीव और रोंगटे खड़े कर देने वाला विवरण प्रस्तुत किया है। लेखक अपने अनुभवों के माध्यम से बाढ़ की आहट, लोगों की घबराहट और फिर धीरे-धीरे शहर के जलमग्न होने की पूरी प्रक्रिया को बयां करते हैं।</p>
                        <p>रेणु जी ने दिखाया है कि कैसे प्रकृति की एक आपदा पूरे मानवीय जीवन को अस्त-व्यस्त कर देती है। लोग खाने-पीने और सुरक्षित ठिकानों की तलाश में मशक्कत करते हैं, लेकिन इसी बीच मानवीय संवेदना और एकजुटता भी देखने को मिलती है।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>प्रमुख तत्व (Key Elements)</h3>
                        <ul>
                            <li><strong>यथार्थ चित्रण:</strong> बाढ़ के पानी का बढ़ना और उसकी भयानक आवाज का वास्तविक वर्णन।</li>
                            <li><strong>मानवीय प्रतिक्रिया:</strong> आपदा के समय डर, जिज्ञासा और फिर सामूहिक संघर्ष का अहसास।</li>
                            <li><strong>लेखकीय दृष्टि:</strong> एक साहित्यकार के नजरिए से घटना का सूक्ष्म निरीक्षण।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>महत्वपूर्ण प्रसंग (Important Incidents)</h3>
                        <p>लेखक अपने साथियों के साथ रिक्शा पर निकलकर बाढ़ की स्थिति देखने जाते हैं। वे रेडियो पर पल-पल की खबरें सुनते हैं और देखते हैं कि कैसे देखते-ही-देखते राजेंद्र नगर का चौराहा और अन्य इलाके डूबने लगते हैं। यह सन्नाटा और पानी का शोर एक अजीब सा आतंक पैदा करता है।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. बाढ़ की खबर सुनकर लोग किस तरह की तैयारी करने लगे?</div>
                        <div className={styles.practiceQuestion}>2. लेखक ने बाढ़ को 'मृत्यु का तरल दूत' क्यों कहा है?</div>
                        <div className={styles.practiceQuestion}>3. आपदा के समय हमें किस प्रकार की सावधानी बरतनी चाहिए?</div>
                        <div className={styles.practiceQuestion}>4. इस पाठ के आधार पर बाढ़ के समय की मानवीय संवेदनाओं को स्पष्ट कीजिए।</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>लेखक: फणीश्वरनाथ रेणु | विधा: रिपोर्टाज | मुख्य संदेश: प्राकृतिक आपदाओं के प्रति सजगता और आपदा के समय साहस न खोना।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter12;
