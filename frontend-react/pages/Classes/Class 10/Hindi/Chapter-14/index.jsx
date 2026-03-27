import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter14 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 14: रीढ़ की हड्डी</h1>
                    <p>स्त्री शिक्षा और समाज की दोहरी मानसिकता पर प्रहार करती एक प्रभावशाली एकांकी।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>'रीढ़ की हड्डी' एक व्यंग्यात्मक एकांकी है जो समाज में लड़कियों की शिक्षा और उनके प्रति संकुचित सोच को उजागर करती है। कहानी रामस्वरूप की बेटी उमा के इर्द-गिर्द घूमती है, जिसे देखने के लिए गोपाल प्रसाद और उनका बेटा शंकर आने वाले हैं।</p>
                        <p>गोपाल प्रसाद एक वकील हैं लेकिन वे चाहते हैं कि उनके बेटे के लिए ऐसी बहू मिले जो बहुत अधिक पढ़ी-लिखी न हो। उमा एम.ए. पास है लेकिन वह सादगी से उनके सामने आती है। जब गोपाल प्रसाद उससे बार-बार सवाल करते हैं और उसे केवल एक 'वस्तु' की तरह परखते हैं, तो उमा चुप रहने के बजाय साहसपूर्वक उन्हें जवाब देती है। वह शंकर की 'रीढ़ की हड्डी' (चरित्र) के बारे में सवाल उठाकर समाज की पोल खोल देती है।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>मुख्य पात्र (Key Characters)</h3>
                        <ul>
                            <li><strong>उमा:</strong> एक शिक्षित, स्वाभिमानी और साहसी लड़की जो शिक्षा का महत्व समझती है।</li>
                            <li><strong>रामस्वरूप:</strong> उमा के पिता, जो अपनी बेटी की शादी के लिए उसकी शिक्षा छिपाने को मजबूर हैं।</li>
                            <li><strong>गोपाल प्रसाद:</strong> संकुचित और दकियानूसी विचारधारा वाले व्यक्ति जो स्त्रियों को पुरुषों से निम्न मानते हैं।</li>
                            <li><strong>शंकर:</strong> गोपाल प्रसाद का बेटा, जिसका अपना कोई व्यक्तित्व या चरित्र (रीढ़ की हड्डी) नहीं है।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>एकांकी का संदेश (Message of the Play)</h3>
                        <p>यह एकांकी हमें सिखाती है कि लड़कियां कोई भे़ड़-बकरी या मेज-कुर्सी नहीं हैं जिनका केवल सौदा किया जाए। उनका अपना मान-सम्मान और अधिकार है। शिक्षा उनके व्यक्तित्व को निखारती है और उन्हें समाज में बराबरी का दर्जा देती है।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. रामस्वरूप और गोपाल प्रसाद के बीच 'शिक्षा' को लेकर क्या मतभेद थे?</div>
                        <div className={styles.practiceQuestion}>2. उमा को गुस्सा क्यों आया और उसने गोपाल प्रसाद से क्या कहा?</div>
                        <div className={styles.practiceQuestion}>3. 'शंकर' जैसे लड़कों को समाज का कलंक क्यों माना गया है?</div>
                        <div className={styles.practiceQuestion}>4. 'रीढ़ की हड्डी' शीर्षक की सार्थकता स्पष्ट कीजिए।</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>लेखक: जगदंबा प्रसाद (पाठ्यपुस्तकानुसार) | विधा: एकांकी | मुख्य संदेश: नारी शिक्षा का समर्थन और समाज की रूढ़िवादी सोच का विरोध।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter14;
