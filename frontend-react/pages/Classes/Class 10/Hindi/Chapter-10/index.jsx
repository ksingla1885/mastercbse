import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter10 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 10: कैदी और कोकिला</h1>
                    <p>स्वाधीनता सेनानी माखनलाल चतुर्वेदी द्वारा जेल की काल-कोठरी से रचित एक ओजपूर्ण कविता।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>'कैदी और कोकिला' पराधीन भारत के जेलों की दुर्दशा और स्वतंत्रता सेनानियों पर होने वाले अत्याचारों का एक जीवंत दस्तावेज है। जेल में एकाकी और उदास जीवन जी रहे कवि अर्द्धरात्रि में जब एक कोयल की कूक सुनते हैं, तो वे उससे संवाद करने लगते हैं।</p>
                        <p>कवि कोयल से पूछते हैं कि क्या वह जेल की इन ऊँची और काली दीवारों, लोहे के सींखचों और अंधेरे में उनके कष्टों को देखकर विचलित है? वे बताते हैं कि जेल में उन्हें डाकुओं और बटमारों के साथ रखा गया है, भरपेट भोजन नहीं मिलता और दिनभर कोल्हू का बैल बनकर काम करना पड़ता है। कवि को लगता है कि कोयल भी शायद विद्रोह के बीज बोने आई है।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>प्रमुख भाव (Major Themes)</h3>
                        <ul>
                            <li><strong>देशभक्ति और संघर्ष:</strong> अंग्रेजों के खिलाफ लड़ने वाले वीरों का साहस और उनकी यातनाएँ।</li>
                            <li><strong>प्रकृति का साथ:</strong> कोयल का गान कवि के लिए साहस और प्रेरणा का स्रोत बनता है।</li>
                            <li><strong>स्वतंत्रता की चाह:</strong> काली दीवारें और बेड़ियाँ भी स्वाधीनता की अलख को बुझा नहीं पातीं।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>काव्य की विशेषताएँ (Highlights)</h3>
                        <p>कविता में 'काले' शब्द का बार-बार प्रयोग अंग्रेजी शासन की क्रूरता और अंधकार को दर्शाने के लिए किया गया है (काली तू, रजनी भी काली, शासन की करनी भी काली)। भाषा ओजपूर्ण है और इसमें करुणा एवं वीरता का अद्भुत संगम है।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. कोयल की कूक सुनकर कवि की क्या प्रतिक्रिया थी?</div>
                        <div className={styles.practiceQuestion}>2. कवि ने जेल के कष्टों को 'काली दीवार' और 'बटमारों' के साथ क्यों जोड़ा है?</div>
                        <div className={styles.practiceQuestion}>3. 'अर्द्धरात्रि में कोयल की कूक' कवि को किस बात का संकेत लगती है?</div>
                        <div className={styles.practiceQuestion}>4. इस कविता के माध्यम से तत्कालीन भारतीय जेलों की स्थिति पर प्रकाश डालिए।</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>कवि: माखनलाल चतुर्वेदी | मुख्य विषय: पराधीनता और स्वाधीनता संग्राम | मुख्य संदेश: देश की आजादी के लिए सहर्ष कष्ट सहना और संघर्ष जारी रखना।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter10;
