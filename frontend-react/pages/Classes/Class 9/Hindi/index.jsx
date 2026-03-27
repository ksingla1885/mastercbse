
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hindi.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class9Hindi = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const kshitijProse = [
        { id: 'kp1', title: 'दो बैलों की कथा', author: 'मुंशी प्रेमचंद', summary: 'स्वतंत्रता की चाह और जानवरों की संवेदनशीलता की मार्मिक कहानी।' },
        { id: 'kp2', title: 'ल्हासा की ओर', author: 'राहुल सांकृत्यायन', summary: 'तिब्बत की यात्रा का जीवंत और ज्ञानवर्धक वृत्तांत।' },
        { id: 'kp3', title: 'उपभोक्तावाद की संस्कृति', author: 'हरिशंकर परसाई', summary: 'आधुनिक जीवनशैली और विज्ञापन के मायाजाल पर तीखा व्यंग्य।' },
        { id: 'kp4', title: 'साँवले सपनों की याद', author: 'अज्ञेय', summary: 'मशहूर पक्षी विज्ञानी सालिम अली के व्यक्तित्व का सुंदर संस्मरण।' },
        { id: 'kp5', title: 'नाना साहब की पुत्री देवी मैना को भस्म कर दिया गया', author: 'भारतेन्दु हरिश्चंद्र', summary: '1857 की क्रांति के एक अल्पज्ञात लेकिन साहसी अध्याय का चित्रण।' }
    ];

    const kshitijPoetry = [
        { id: 'kp6', title: 'कबीर की साखियाँ', author: 'कबीर', summary: 'नैतिक मूल्यों और आडंबरों के विरोध का काव्यमय संदेश।' },
        { id: 'kp7', title: 'मीरा के पद', author: 'मीराबाई', summary: 'श्रीकृष्ण के प्रति अनन्य प्रेम और भक्ति का मधुर गायन।' },
        { id: 'kp8', title: 'सवैये', author: 'तुलसीदास', summary: 'ब्रज की महिमा और श्री कृष्ण की लीलाओं का सरस वर्णन।' },
        { id: 'kp9', title: 'वाख', author: 'लल्लेश्वरी', summary: 'कश्मीरी कवयित्री के भक्ति मार्ग और आत्मज्ञान के सूत्र।' },
        { id: 'kp10', title: 'कैदी और कोकिला', author: 'माखनलाल चतुर्वेदी', summary: 'स्वतंत्रता संग्राम के दौरान जेल की यातना और कोयल से संवाद।' },
        { id: 'kp11', title: 'ग्राम श्री', author: 'सुमित्रानंदन पंत', summary: 'गाँव की प्राकृतिक सुंदरता और हरियाली का अनुपम वर्णन।' }
    ];

    const kritika = [
        { id: 'kr1', title: 'इस जल प्रलय में', author: 'फणीश्वरनाथ रेणु', summary: 'बाढ़ की विभीषिका का आंखों देखा और रोंगटे खड़े कर देने वाला विवरण।' },
        { id: 'kr2', title: 'मेरे संग की औरतें', author: 'मन्नू भंडारी', summary: 'लेखिका के परिवार की महिलाओं की स्वतंत्र वैचारिकता का चित्रण।' },
        { id: 'kr3', title: 'रीढ़ की हड्डी', author: 'जगदंबा प्रसाद', summary: 'समाज में स्त्रियों की स्थिति और खोखले संस्कारों पर प्रहार करती एकांकी।' },
        { id: 'kr4', title: 'माटी वाली', author: 'शेखर जोशी', summary: 'विस्थापन की समस्या और एक गरीब महिला के संघर्ष की कहानी।' },
        { id: 'kr5', title: 'किस तरह आखिरकार मैं हिंदी में आया', author: 'प्रभाकर माचवे', summary: 'एक साहित्यकार के भाषाई सफर और हिंदी से जुड़ाव का वृत्तांत।' }
    ];

    const handleChapterClick = (id) => {
        navigate(`/class/Class 9/Hindi/Chapter-${id}`);
    };

    const renderCategory = (title, chapters, tag) => (
        <section className={styles.categorySection}>
            <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>{title}</h2>
            </div>
            <div className={styles.chapterGrid}>
                {chapters.map((chapter) => (
                    <div key={chapter.id} className={styles.chapterCard}>
                        <div className={styles.chapterInfo}>
                            <span className={styles.chapterTag}>{tag}</span>
                            <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                            <span className={styles.chapterAuthor}>लेखक/कवि: {chapter.author}</span>
                            <p className={styles.chapterSummary}>{chapter.summary}</p>
                        </div>
                        <button className={styles.exploreBtn} onClick={() => handleChapterClick(chapter.id)}>
                            अध्याय देखें
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className={styles.hindiPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>कक्षा 9 हिंदी (Hindi)</h1>
                    <p>साहित्य की सुंदर यात्रा - क्षितिज और कृतिका के माध्यम से अपनी भाषा और संस्कृति को और गहराई से समझें।</p>
                </div>
            </header>

            <main className={styles.container}>
                {renderCategory('क्षितिज - गद्य खंड', kshitijProse, 'गद्य (Prose)')}
                {renderCategory('क्षितिज - काव्य खंड', kshitijPoetry, 'काव्य (Poetry)')}
                {renderCategory('कृतिका - भाग 1', kritika, 'कृतिका')}
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class9Hindi;
