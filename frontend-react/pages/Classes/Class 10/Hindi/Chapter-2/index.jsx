import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter2 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 2: ल्हासा की ओर</h1>
                    <p>राहुल सांकृत्यायन द्वारा रचित तिब्बत की दुर्गम और रोमांचक यात्रा का विवरण।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>'ल्हासा की ओर' हिंदी साहित्य के प्रसिद्ध राहुल सांकृत्यायन द्वारा रचित एक यात्रा-वृत्तांत है। इसमें लेखक ने अपनी 1929-30 की तिब्बत यात्रा का रोमांचक वर्णन किया है। उस समय भारतीयों को तिब्बत जाने की अनुमति नहीं थी, इसलिए लेखक ने एक भिखमंगे (छद्म भेष) के रूप में यह यात्रा की थी।</p>
                        <p>लेखक ने तिब्बत के दुर्गम रास्तों, डाँडा (ऊंचे स्थान) के खतरों और वहाँ के समाज की विशेषताओं (जैसे छुआछूत और पर्दा प्रथा का न होना) पर प्रकाश डाला है। रास्ते में उन्हें थोंगला के खतरनाक मोड़ मिले जहाँ डाकुओं का डर हमेशा बना रहता था।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>तिब्बती समाज (Tibetan Society)</h3>
                        <ul>
                            <li><strong>स्वतंत्र समाज:</strong> स्त्रियां पर्दा नहीं करती थीं और किसी अजनबी के आने पर भी घर में प्रवेश की मनाही नहीं थी।</li>
                            <li><strong>अंधविश्वास:</strong> समाज में धर्म और अंधविश्वासों का भी प्रभाव था।</li>
                            <li><strong>अतिथि सत्कार:</strong> लोग उदार हृदय के थे और मेहमानों की सेवा में तत्पर रहते थे।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>महत्वपूर्ण प्रसंग (Key Highlights)</h3>
                        <p>लेखक और उनके साथी सुमति को ठहरने के लिए अच्छी जगह मिलने के पीछे सुमति की वहाँ के लोगों से जान-पहचान थी। लेखक ने ल्हासा की ओर बढ़ते समय वहाँ की प्राकृतिक सुंदरता और ऊंचे पहाड़ों का बहुत सुंदर वर्णन किया है।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. थोंगला के पहले के आखिरी गाँव पहुँचने पर भिखमंगे के वेश में होने के बावजूद लेखक को ठहरने के लिए उचित स्थान मिला, जबकि बाद की यात्रा में नहीं। क्यों?</div>
                        <div className={styles.practiceQuestion}>2. उस समय के तिब्बत में हथियार का कानून न रहने के कारण यात्रियों को किस प्रकार का भय बना रहता था?</div>
                        <div className={styles.practiceQuestion}>3. लेखक लंकौर के मार्ग में अपने साथियों से किस कारण पिछड़ गया?</div>
                        <div className={styles.practiceQuestion}>4. 'ल्हासा की ओर' पाठ के आधार पर वहां के रहन-सहन और समाज पर टिप्पणी कीजिए।</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>लेखक: राहुल सांकृत्यायन | विधा: यात्रा-वृत्तांत | मुख्य विषय: दुर्गम यात्रा का अनुभव और तिब्बती संस्कृति का ज्ञान।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter2;
