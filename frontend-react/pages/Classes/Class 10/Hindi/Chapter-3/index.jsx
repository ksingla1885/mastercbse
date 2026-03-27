import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter3 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 3: उपभोक्तावाद की संस्कृति</h1>
                    <p>प्रसिद्ध व्यंग्यकार हरिशंकर परसाई द्वारा समाज की बदलती प्रवृत्तियों पर तीखा प्रहार।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>'उपभोक्तावाद की संस्कृति' हरिशंकर परसाई जी का एक वैचारिक निबंध है, जो आज के समाज में बढ़ती भौतिकवादी और दिखावे की प्रवृत्ति पर गंभीर चोट करता है। लेखक बताते हैं कि कैसे हम विज्ञापनों के चंगुल में फंसकर उन चीजों को भी खरीद रहे हैं जिनकी हमें वास्तव में जरूरत नहीं है।</p>
                        <p>आज सुख की परिभाषा बदल गई है। विज्ञापनों के माध्यम से हमें बताया जा रहा है कि केवल उपभोग ही सच्चा सुख है। लोग अपनी आर्थिक क्षमता न होने पर भी कर्ज लेकर केवल 'स्टेटस सिंबल' के लिए महंगी वस्तुएं खरीद रहे हैं, जो हमारी संस्कृति और मर्यादा के लिए घातक है।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>प्रमुख विचार (Key Thoughts)</h3>
                        <ul>
                            <li><strong>विज्ञापनों का मायाजाल:</strong> उत्पादक हमें सम्मोहित कर रहे हैं और हम उनके गुलाम बनते जा रहे हैं।</li>
                            <li><strong>अंधानुकरण:</strong> पश्चिमी शैली का अंधाधुंध अनुकरण हमारी मौलिकता को नष्ट कर रहा है।</li>
                            <li><strong>संसाधनों की बर्बादी:</strong> दिखावे की इस होड़ में हम अपने प्राकृतिक और सीमित संसाधनों का अपव्यय कर रहे हैं।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>सामाजिक प्रभाव (Social Impact)</h3>
                        <p>उपभोक्तावाद की यह संस्कृति हमारे जीवन की गुणवत्ता को गिरा रही है। आपसी संबंध कमजोर हो रहे हैं और समाज में अमीर-गरीब के बीच की खाई गहरी होती जा रही है। संतोष और सादगी जैसे मानवीय मूल्य गायब होते जा रहे हैं।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. लेखक के अनुसार 'सुख' की क्या परिभाषा है और वर्तमान में यह कैसे बदल गई है?</div>
                        <div className={styles.practiceQuestion}>2. आज की उपभोक्तावादी संस्कृति हमारे दैनिक जीवन को किस प्रकार प्रभावित कर रही है?</div>
                        <div className={styles.practiceQuestion}>3. 'प्रतिष्ठा के अनेक रूप होते हैं, चाहे वे हास्यास्पद ही क्यों न हों।' इस पंक्ति का आशय स्पष्ट कीजिए।</div>
                        <div className={styles.practiceQuestion}>4. गांधीजी ने उपभोक्तावादी संस्कृति को लेकर क्या चेतावनी दी थी?</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>लेखक: हरिशंकर परसाई | विधा: वैचारिक निबंध | मुख्य संदेश: दिखावे की प्रवृत्ति से बचकर सादगी और विवेकपूर्ण जीवन अपनाना।</p>
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
