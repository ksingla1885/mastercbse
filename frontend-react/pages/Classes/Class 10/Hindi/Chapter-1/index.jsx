import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter1 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 1: दो बैलों की कथा</h1>
                    <p>महान कथाकार मुंशी प्रेमचंद द्वारा रचित जानवरों की संवेदनशीलता और आजादी की लड़ाई की कहानी।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>'दो बैलों की कथा' प्रेमचंद की एक अमर रचना है। यह कहानी झूरी के दो बैलों - हीरा और मोती के माध्यम से मनुष्य और पशु के बीच गहरे संबंध को दर्शाती है। हीरा और मोती केवल जानवर नहीं हैं, बल्कि वे स्वाभिमान, साहस और अटूट मित्रता के प्रतीक हैं।</p>
                        <p>कहानी में दिखाया गया है कि जब झूरी का साला गया उन्हें अपने साथ ले जाता है, तो वे वहां हो रहे अत्याचार को सहन नहीं कर पाते। वे अपनी आजादी के लिए संघर्ष करते हैं, रास्ते में उन्हें कई मुसीबतें आती हैं (जैसे कांजीहौस में कैद होना), लेकिन अपनी चतुराई और एकता के बल पर वे अंततः अपने मालिक झूरी के पास वापस आ जाते हैं।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>मुख्य पात्र (Key Characters)</h3>
                        <ul>
                            <li><strong>हीरा:</strong> धैर्यवान, गंभीर और शांत स्वभाव का बैल।</li>
                            <li><strong>मोती:</strong> थोड़ा गुस्सैल लेकिन साहसी और अन्याय के प्रति मुखर।</li>
                            <li><strong>झूरी:</strong> बैलों का मालिक, जो उन्हें बहुत प्यार करता है।</li>
                            <li><strong>गया:</strong> झूरी का साला, जो बैलों के प्रति क्रूर है।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>संदेश (Message)</h3>
                        <p>यह कहानी हमें सिखाती है कि स्वतंत्रता सहज नहीं मिलती, उसके लिए बार-बार संघर्ष करना पड़ता है। साथ ही, यह जानवरों के प्रति मानवीय संवेदना और उनकी मूक भाषा को समझने की प्रेरणा देती है।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. हीरा और मोती में गहरी मित्रता थी, यह कहानी के किन प्रसंगों से पता चलता है?</div>
                        <div className={styles.practiceQuestion}>2. कांजीहौस में कैद पशुओं की हाजिरी क्यों ली जाती होगी?</div>
                        <div className={styles.practiceQuestion}>3. गया ने हीरा और मोती को दोनों बार सूखा भूसा खाने के लिए दिया क्योंकि...?</div>
                        <div className={styles.practiceQuestion}>4. आजदी की लड़ाई केवल मनुष्यों के लिए नहीं बल्कि सभी प्राणियों के लिए है। स्पष्ट कीजिए।</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>लेखक: मुंशी प्रेमचंद | विषय: पशु-प्रेम और स्वतंत्रता संग्राम | मुख्य संदेश: एकता में शक्ति है और आजादी का कोई मोल नहीं है।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter1;
