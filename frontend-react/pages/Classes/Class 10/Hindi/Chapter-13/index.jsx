import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter13 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 13: मेरे संग की औरतें</h1>
                    <p>लेखिका के परिवार की विलक्षण महिलाओं की स्वतंत्र सोच और उनके जीवन संघर्ष की कहानी।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>'मेरे संग की औरतें' एक संस्मरणात्मक गद्य है जिसमें लेखिका ने अपने परिवार की उन महिलाओं का चित्रण किया है जिन्होंने लीक से हटकर अपना जीवन जिया। इसमें उनकी नानी, माँ और उनकी बहनों के व्यक्तित्व की विशेषताओं को उभारा गया है।</p>
                        <p>लेखिका की नानी अनपढ़ और पर्दानशीं होने के बावजूद अपने अंतिम समय में अपनी बेटी (लेखिका की माँ) की शादी एक ऐसे व्यक्ति से करने की इच्छा जताती हैं जो साहबों का पिछलग्गू न होकर एक सच्चा क्रांतिकारी हो। वहीं लेखिका की माँ भी बहुत साधारण लेकिन स्वतंत्र विचारों वाली थीं। वे कभी पारंपरिक घरेलू कार्यों में नहीं डूबीं, बल्कि सादगी और सत्यनिष्ठा के साथ अपना जीवन व्यतीत किया।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>परिवार की महिलाएं (Women of the Family)</h3>
                        <ul>
                            <li><strong>नानी:</strong> देशभक्ति की भावना से ओतप्रोत और स्पष्टवादी।</li>
                            <li><strong>माँ:</strong> कोमल हृदय वाली, सत्यवादी और ईमानदारी की प्रतिमूर्ति।</li>
                            <li><strong>परदादी:</strong> लीक से हटकर चलने वाली, जिन्होंने अपनी बहू के लिए पहली संतान लड़की होने की मन्नत मांगी थी।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>मुख्य संदेश (Main Message)</h3>
                        <p>यह अध्याय हमें बताता है कि स्वतंत्रता केवल बाहर की दुनिया में नहीं, बल्कि विचारों में होती है। अपनी पहचान बनाए रखते हुए समाज में अपनी जगह बनाना ही वास्तविक व्यक्तित्व है। लेखिका ने यह भी दिखाया है कि कैसे शिक्षा और स्वतंत्र सोच ने उनके पूरे परिवार को एक नई दिशा दी।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. लेखिका ने अपनी नानी को कभी देखा नहीं था, फिर भी उनके व्यक्तित्व से वे क्यों प्रभावित थीं?</div>
                        <div className={styles.practiceQuestion}>2. लेखिका की माँ के व्यक्तित्व की कौन-सी दो विशेषताएँ आपको सबसे अच्छी लगीं?</div>
                        <div className={styles.practiceQuestion}>3. शिक्षा के प्रति लेखिका के क्या विचार हैं और उन्होंने इसे कैसे प्राप्त किया?</div>
                        <div className={styles.practiceQuestion}>4. 'लीक से हटकर चलना' - इस वाक्यांश का पाठ के संदर्भ में क्या अर्थ है?</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>लेखिका: मन्नू भंडारी (पाठ्यपुस्तकानुसार) | विधा: संस्मरण | मुख्य विषय: स्त्री स्वतंत्रता और पारिवारिक मूल्य।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter13;
