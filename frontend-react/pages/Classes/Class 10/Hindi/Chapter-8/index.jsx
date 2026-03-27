import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HindiChapter.module.css';
import Navbar from '../../../../../src/components/Navbar';

const Chapter8 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>अध्याय 8: सवैये</h1>
                    <p>गोस्वामी तुलसीदास द्वारा रचित भगवान राम के सौंदर्य और उनकी बाल-लीलाओं का वर्णन।</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>सारांश (Summary)</h2>
                        <p>तुलसीदास जी के इन सवैयों में अयोध्या के राजकुंआरों (विशेषकर श्रीराम) के रूप-सौंदर्य और उनके मानवीय गुणों का अत्यंत प्रभावशाली वर्णन मिलता है। कवि ने राम के वन-गमन के समय के दृश्यों और ग्राम-वधुओं के साथ उनके संवादों को भी इन छंदों में पिरोया है।</p>
                        <p>सवैयों में बताया गया है कि राम की छवि कैसी मोहिनी है कि जो भी उन्हें देखता है, वह दंग रह जाता है। तुलसीदास की भक्ति केवल आराधना नहीं है, बल्कि वे राम को एक आदर्श पुरुष और मर्यादा पुरुषोत्तम के रूप में समाज के सामने रखते हैं।</p>
                    </section>

                    <section className={styles.section}>
                        <h3>काव्यगत सौंदर्य (Major Features)</h3>
                        <ul>
                            <li><strong>मर्यादा पुरुषोत्तम:</strong> राम के चरित्र में शालीनता, धैर्य और धर्म का संगम है।</li>
                            <li><strong>चित्रात्मकता:</strong> सवोयों को पढ़ते समय आँखों के सामने दृश्य जीवंत हो उठते हैं।</li>
                            <li><strong>ब्रज और अवधी का संगम:</strong> तुलसी ने अपनी रचनाओं में भाषा पर अपने प्रभुत्व का प्रदर्शन किया है।</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>भक्ति और कला (Devotion and Art)</h3>
                        <p>तुलसीदास ने सवैये छंद का बहुत ही कुशलता से प्रयोग किया है। इनमें संगीतात्मकता और लय का अद्भुत संतुलन है। राम के प्रति उनका 'दास्य भाव' सवैयों की गहराइयों में महसूस किया जा सकता है।</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>अभ्यास प्रश्न (Practice Questions)</h3>
                        <div className={styles.practiceQuestion}>1. सवैयों के आधार पर श्रीराम के सौंदर्य का वर्णन कीजिए।</div>
                        <div className={styles.practiceQuestion}>2. ग्राम-वधुओं ने सीता जी से उनके पति के बारे में क्या पूछा?</div>
                        <div className={styles.practiceQuestion}>3. 'सवैये' छंद की क्या विशेषता है? स्पष्ट कीजिए।</div>
                        <div className={styles.practiceQuestion}>4. तुलसीदास की राम के प्रति भक्ति के स्वरूप पर टिप्पणी कीजिए।</div>
                    </section>

                    <section className={styles.keyPoints}>
                        <h3>मुख्य बिंदु (Key Points)</h3>
                        <p>कवि: गोस्वामी तुलसीदास | मुख्य विषय: राम-कथा और राम-सौंदर्य | संदेश: आदर्श जीवन और भक्ति का सामंजस्य।</p>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Chapter8;
