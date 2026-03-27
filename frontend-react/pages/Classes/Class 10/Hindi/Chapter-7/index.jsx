import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter7 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 7: मीरा के पद</h1>
                    <p>भक्ति काल की महान कवयित्री मीराबाई की श्रीकृष्ण के प्रति अनन्य प्रेम और भक्ति।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>मीराबाई के ये पद उनकी श्रीकृष्ण के प्रति समर्पण की भावना को उजागर करते हैं। मीरा अपने आराध्य (देव) से अपनी पीड़ा दूर करने की विनती करती हैं। वे कहती हैं कि जिस प्रकार आपने द्रौपदी की लाज बचाई, प्रह्लाद के लिए नरसिंह अवतार लिया और डूबते हाथी की रक्षा की, उसी प्रकार मेरी सांसारिक व्याधियों को भी दूर करें।</p>
                        <p>अगले पदों में मीरा श्रीकृष्ण की चाकरी (सेवा) करने की इच्छा प्रकट करती हैं। वे बाग लगाना चाहती हैं ताकि रोज़ सुबह उठकर उनके दर्शन कर सकें। मीरा का प्रेम पवित्र और स्वार्थरहित है, वे केवल अपने 'गिरधर गोपाल' की भक्ति में लीन रहना चाहती हैं।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>भक्ति भावना (Devotional Spirit)</h3>
                        <ul>
                            <li><strong>दास्य भाव:</strong> मीरा स्वयं को कृष्ण की दासी मानकर उनकी सेवा करना चाहती हैं।</li>
                            <li><strong>अनन्य भक्ति:</strong> उनके जीवन का एकमात्र लक्ष्य और सत्य केवल श्रीकृष्ण ही हैं।</li>
                            <li><strong>पीड़ा और पुकार:</strong> वे अपने कष्टों को हरने के लिए प्रभु को उनके पुराने चमत्कारों की याद दिलाती हैं।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>काव्यगत विशेषताएँ (Poetic Features)</h3>
                        <p>मीरा की भाषा राजस्थानी मिश्रित ब्रज भाषा है। उनके पदों में गेयता (म्यूजिकलिटी) है और करुणा रस की प्रधानता है। अलंकारिक रूप में वे बहुत ही सरल लेकिन प्रभावशाली उपमाओं का प्रयोग करती हैं।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. पहले पद में मीरा ने अपनी पीड़ा दूर करने के लिए किन-किन उदाहरणों का प्रयोग किया है?</div>
                        <div className={styles.practiceQuestion}>2. मीरा श्रीकृष्ण की चाकरी क्यों करना चाहती हैं? स्पष्ट कीजिए।</div>
                        <div className={styles.practiceQuestion}>3. 'बिंदरावण की कुंज-गली में, गोबिंद लीला गास्यूँ' - इस पंक्ति का भाव स्पष्ट कीजिए।</div>
                        <div className={styles.practiceQuestion}>4. मीरा के पदों में निहित भक्ति के स्वरूप पर प्रकाश डालिए।</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>कवयित्री: मीराबाई | काल: भक्ति काल | मुख्य रस: भक्ति और करुणा | संदेश: ईश्वर के प्रति पूर्ण समर्पण और अटूट विश्वास ही मोक्ष का मार्ग है।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter7;
