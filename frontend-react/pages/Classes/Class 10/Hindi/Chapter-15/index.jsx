import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter15 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 15: माटी वाली</h1>
                    <p>विस्थापन की त्रासदी और एक गरीब महिला के संघर्ष की मार्मिक कहानी।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>'माटी वाली' कहानी टिहरी (उत्तराखंड) की पृष्ठभूमि पर आधारित है। यह कहानी एक ऐसी बूढ़ी महिला की है जो पूरे शहर में लाल मिट्टी पहुँचाने का काम करती है। शहर के घरों में चूल्हे लीपने और मिट्टी के कामों के लिए उसी पर निर्भरता है। वह गरीब है, बेसहारा है और उसका अपना कोई घर या जमीन नहीं है।</p>
                        <p>कहानी का मुख्य मोड़ तब आता है जब टिहरी बांध के निर्माण के कारण पूरे शहर को खाली करने का आदेश दिया जाता है। माटी वाली के पास विस्थापन का कोई विकल्प नहीं है क्योंकि उसके पास अपना कोई 'कागज' (दावा) नहीं है। वह कहती है - "गरीब आदमी का श्मशान नहीं उजड़ना चाहिए।" यह वाक्य विकास के नाम पर होने वाले विस्थापन के दर्द को बयान करता है।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>मुख्य पात्र (Key Characters)</h3>
                        <ul>
                            <li><strong>माटी वाली:</strong> एक मेहनतकश, ईमानदार और स्वाभिमानी बूढ़ी औरत।</li>
                            <li><strong>उसका बुड्ढा:</strong> उसका बीमार पति, जिसकी देखभाल ही उसके जीवन का एकमात्र लक्ष्य है।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>विस्थापन की समस्या (Problem of Displacement)</h3>
                        <p>यह कहानी हमें याद दिलाती है कि बड़े बांध और विकास की योजनाएं गरीबों और मजलूमों के लिए कितनी दुखद हो सकती हैं। जिनके पास अपनी जड़ों को साबित करने के लिए दस्तावेज़ नहीं होते, वे अपनों और अपनी जमीन से बेदखल कर दिए जाते हैं।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. 'माटी वाली' के पास अपने अच्छे या बुरे भाग्य के बारे में ज्यादा सोचने का समय क्यों नहीं था?</div>
                        <div className={styles.practiceQuestion}>2. "गरीब आदमी का श्मशान नहीं उजड़ना चाहिए।" - इस कथन का आशय स्पष्ट कीजिए।</div>
                        <div className={styles.practiceQuestion}>3. टिहरी के लोगों के लिए माटी वाली का क्या महत्व था?</div>
                        <div className={styles.practiceQuestion}>4. विस्थापन की समस्या हमारे समाज के लिए एक चुनौती है। पाठ के आधार पर चर्चा कीजिए।</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>लेखक: शेखर जोशी (पाठ्यपुस्तकानुसार) | विषय: विस्थापन और गरीबी | मुख्य संदेश: विकास की प्रक्रिया में मानवीय संवेदनाओं का सम्मान होना चाहिए।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter15;
