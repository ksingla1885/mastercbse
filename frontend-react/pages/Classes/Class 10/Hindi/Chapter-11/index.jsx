import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter11 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 11: ग्राम श्री</h1>
                    <p>कवि सुमित्रानंदन पंत द्वारा रचित प्रकृति की सुंदरता का अनुपम वर्णन।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>'ग्राम श्री' कविता में सुमित्रानंदन पंत ने ग्रामीण प्रकृति के वैभव का सजीव चित्रण किया है। कवि ने बताया है कि किस प्रकार वसंत ऋतु के आगमन पर गाँव की धरती हरियाली से भर जाती है और खेतों में विविध प्रकार की फसलें, फल और फूल लहलहाने लगते हैं।</p>
                        <p>कविता में खेतों में फैली मखमल के समान कोमल हरियाली, अलसी के नीले फूल, सरसों की पीली रंगत और गंगा की रेती पर पड़ती सूर्य की किरणों का मनोहारी वर्णन है। यह कविता प्रकृति के प्रति कवि के अटूट प्रेम और उसकी सूक्ष्म निरीक्षण दृष्टि का परिचायक है।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>प्रमुख भाव (Major Themes)</h3>
                        <ul>
                            <li><strong>प्रकृति सौंदर्य:</strong> ग्रामीण अंचल की प्राकृतिक सुंदरता और हरियाली का चित्रण।</li>
                            <li><strong>ऋतु परिवर्तन:</strong> वसंत ऋतु के प्रभाव से प्रकृति में होने वाले सुखद परिवर्तनों का वर्णन।</li>
                            <li><strong>आत्मिक शांति:</strong> गाँव की शांति और सुंदरता से मिलने वाले मानसिक सुकून का अहसास।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>काव्य सौंदर्य (Poetic Beauty)</h3>
                        <p>पंत जी को 'प्रकृति का सुकुमार कवि' कहा जाता है। इस कविता में उन्होंने मानवीकरण अलंकार का सुंदर प्रयोग किया है, जैसे धरती का हँसना या पेड़ों का झूमना। भाषा अत्यंत कोमल, मधुर और चित्रात्मक है।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. 'ग्राम श्री' कविता में किन-किन फसलों का वर्णन किया गया है?</div>
                        <div className={styles.practiceQuestion}>2. कवि ने ग्रामीण प्रकृति को 'मखमल' जैसा क्यों कहा है?</div>
                        <div className={styles.practiceQuestion}>3. कविता में गंगा की रेती का वर्णन किस प्रकार किया गया है?</div>
                        <div className={styles.practiceQuestion}>4. सुमित्रानंदन पंत को प्रकृति का सुकुमार कवि क्यों कहा जाता है?</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>कवि: सुमित्रानंदन पंत | शैली: चित्रात्मक और विवरणात्मक | मुख्य विषय: ग्रामीण हरियाली और समृद्धि। यह कविता हमें अपनी जड़ों और प्रकृति से जुड़ने का संदेश देती है।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter11;
