import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter5 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 5: नाना साहब की पुत्री देवी मैना को भस्म कर दिया गया</h1>
                    <p>1857 के प्रथम स्वतंत्रता संग्राम की एक अटूट देशभक्ति और बलिदान की गाथा।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>यह अध्याय 1857 के सिपाही विद्रोह के समय की एक वास्तविक घटना पर आधारित है। नाना साहब के बिठूर महल को अंग्रेजों ने उड़ा दिया था। उनकी नन्ही पुत्री मैना उस महल के अवशेषों से बहुत प्यार करती थी। वह पकड़ी गई और अंग्रेज जनरल आउट्रम ने उससे उसके पिता का पता पूछा, लेकिन मैना ने अपनी जुबान नहीं खोली।</p>
                        <p>अंततः अंग्रेजों ने उस मासूम बालिका को धधकती हुई आग में जीवित जला दिया। मैना की यह शहादत भारतीय इतिहास में एक अमिट अध्याय है, जो हमें सिखाता है कि देशप्रेम की लौ छोटे बच्चों के हृदय में भी कितनी प्रज्ज्वलित हो सकती है।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>मुख्य पात्र (Key Characters)</h3>
                        <ul>
                            <li><strong>मैना:</strong> नाना साहब की वीर और देशभक्त पुत्री।</li>
                            <li><strong>जनरल आउट्रम:</strong> एक क्रूर अंग्रेज अधिकारी जिसने बिठूर का महल नष्ट किया।</li>
                            <li><strong>सर टॉमस हे:</strong> एक अपेक्षाकृत उदार अंग्रेज जो मैना के प्रति सहानुभूति रखता था।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>ऐतिहासिक महत्व (Historical Significance)</h3>
                        <p>यह कहानी हमें याद दिलाती है कि आजादी की लड़ाई में केवल पुरुषों और योद्धाओं ने ही नहीं, बल्कि अबोध बालिकाओं ने भी अपने प्राणों की आहुति दी थी। यह अंग्रेजों की क्रूरता और भारतीयों की सहनशीलता का दस्तावेज है।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. बालिका मैना ने सेनापति 'हे' को कौन-कौन से तर्क देकर महल की रक्षा के लिए प्रेरित किया?</div>
                        <div className={styles.practiceQuestion}>2. मैना जड़ पदार्थ मकान को बचाना चाहती थी पर अंग्रेज उसे नष्ट करना चाहते थे। क्यों?</div>
                        <div className={styles.practiceQuestion}>3. सर टॉमस हे के मन में मैना के प्रति करुणा क्यों जाग उठी?</div>
                        <div className={styles.practiceQuestion}>4. 'मैना को भस्म कर दिया गया' - इस शीर्षक की सार्थकता स्पष्ट कीजिए।</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>लेखक: भारतेन्दु हरिश्चंद्र (पाठ्यपुस्तकानुसार) | विषय: 1857 की क्रांति और बलिदान | मुख्य संदेश: देश के लिए प्राणों का बलिदान देना सर्वोच्च गौरव है।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter5;
