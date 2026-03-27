import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter4 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 4: साँवले सपनों की याद</h1>
                    <p>पक्षी प्रेमी सालिम अली के व्यक्तित्व और उनकी प्रकृति के प्रति दीवानगी का एक मार्मिक संस्मरण।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>'साँवले सपनों की याद' हिंदी साहित्य का एक अत्यंत भावुक संस्मरण है। यह अध्याय महान पक्षी विज्ञानी सालिम अली की मृत्यु के तुरंत बाद लिखा गया था। इसमें उनके जीवन के अंतिम सफर और उनके व्यक्तित्व की उन विशेषताओं को याद किया गया है जिन्होंने उन्हें विश्व प्रसिद्ध 'बर्ड वॉचर' बनाया।</p>
                        <p>सालिम अली का पूरा जीवन पक्षियों और प्रकृति की सेवा में समर्पित था। उनकी आँखों पर चढ़ी दूरबीन उनकी मौत के बाद ही उतरी थी। वे प्रकृति के लिए एक 'टापू' बनने के बजाय 'अथाह सागर' बनकर उभरे थे। उन्होंने साइलेंट वैली जैसे पारिस्थितिक क्षेत्रों को बचाने के लिए भी अपना योगदान दिया था।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>सालिम अली का व्यक्तित्व (Personality of Salim Ali)</h3>
                        <ul>
                            <li><strong>पक्षी प्रेम:</strong> वे पक्षियों की खोज में मीलों पैदल चलते थे और उनकी समस्याओं को गहराई से समझते थे।</li>
                            <li><strong>प्रकृति रक्षक:</strong> उन्होंने तत्कालीन प्रधानमंत्री चौधरी चरण सिंह से मिलकर केरल की साइलेंट वैली को बचाने का अनुरोध किया था।</li>
                            <li><strong>सादगी:</strong> उनके पास केवल एक दूरबीन और प्रकृति को देखने की एक जादुई नजर थी।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>जटिल प्रश्नों के उत्तर (Answers to Complex Questions)</h3>
                        <p>सालिम अली के लिए पक्षी केवल रिसर्च का विषय नहीं थे, बल्कि वे उनके लिए एक संगीत के समान थे। वे मानते थे कि प्रकृति को मनुष्य की नजर से नहीं, बल्कि प्रकृति की ही नजर से देखना चाहिए।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. किस घटना ने सालिम अली के जीवन की दिशा को बदल दिया और उन्हें पक्षी प्रेमी बना दिया?</div>
                        <div className={styles.practiceQuestion}>2. सालिम अली ने पूर्व प्रधानमंत्री के सामने पर्यावरण से संबंधित किन संभावित खतरों का चित्र खींचा होगा?</div>
                        <div className={styles.practiceQuestion}>3. 'लॉरेंस की तरह अपने आप को प्रकृति के समर्पित कर देना' - इस पंक्ति का आशय स्पष्ट कीजिए।</div>
                        <div className={styles.practiceQuestion}>4. 'वह एक टापू बनने की बजाय अथाह सागर बनकर उभरे थे' - इसका क्या अर्थ है?</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>विषय: महान पक्षी विज्ञानी सालिम अली का जीवन | मुख्य संदेश: प्रकृति और वन्यजीवों के प्रति संवेदनशील होना।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter4;
