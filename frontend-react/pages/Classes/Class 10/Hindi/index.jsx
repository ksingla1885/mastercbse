import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hindi.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class10Hindi = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const kshitijProse = [
        { id: '1', title: 'दो बैलों की कथा', author: 'मुंशी प्रेमचंद', summary: 'स्वतंत्रता की चाह और जानवरों की संवेदनशीलता की मार्मिक कहानी।' },
        { id: '2', title: 'ल्हासा की ओर', author: 'राहुल सांकृत्यायन', summary: 'तिब्बत की यात्रा का जीवंत और ज्ञानवर्धक वृत्तांत।' },
        { id: '3', title: 'उपभोक्तावाद की संस्कृति', author: 'हरिशंकर परसाई', summary: 'आधुनिक जीवनशैली और विज्ञापन के मायाजाल पर तीखा व्यंग्य।' },
        { id: '4', title: 'साँवले सपनों की याद', author: 'अज्ञेय', summary: 'मशहूर पक्षी विज्ञानी सालिम अली के व्यक्तित्व का सुंदर संस्मरण।' },
        { id: '5', title: 'नाना साहब की पुत्री देवी मैना को भस्म कर दिया गया', author: 'भारतेन्दु हरिश्चंद्र', summary: '1857 की क्रांति के एक अल्पज्ञात लेकिन साहसी अध्याय का चित्रण।' }
    ];

    const kshitijPoetry = [
        { id: '6', title: 'कबीर की साखियाँ', author: 'कबीर', summary: 'नैतिक मूल्यों और आडंबरों के विरोध का काव्यमय संदेश।' },
        { id: '7', title: 'मीरा के पद', author: 'मीरा', summary: 'श्रीकृष्ण के प्रति अनन्य प्रेम और भक्ति का मधुर गायन।' },
        { id: '8', title: 'सवैये', author: 'तुलसीदास', summary: 'ब्रज की महिमा और श्री कृष्ण की लीलाओं का सरस वर्णन।' },
        { id: '9', title: 'वाख', author: 'लल्लेश्वरी', summary: 'कश्मीरी कवयित्री के भक्ति मार्ग और आत्मज्ञान के सूत्र।' },
        { id: '10', title: 'कैदी और कोकिला', author: 'माखनलाल चतुर्वेदी', summary: 'स्वतंत्रता संग्राम के दौरान जेल की यातना और कोयल से संवाद।' },
        { id: '11', title: 'ग्राम श्री', author: 'सुमित्रानंदन पंत', summary: 'गाँव की प्राकृतिक सुंदरता और हरियाली का अनुपम वर्णन।' }
    ];

    const kritika = [
        { id: '12', title: 'इस जल प्रलय में', author: 'फणीश्वरनाथ रेणु', summary: 'बाढ़ की विभीषिका का आंखों देखा और रोंगटे खड़े कर देने वाला विवरण।' },
        { id: '13', title: 'मेरे संग की औरतें', author: 'मन्नू भंडारी', summary: 'लेखिका के परिवार की महिलाओं की स्वतंत्र वैचारिकता का चित्रण।' },
        { id: '14', title: 'रीढ़ की हड्डी', author: 'जगदंबा प्रसाद', summary: 'समाज में स्त्रियों की स्थिति और खोखले संस्कारों पर प्रहार करती एकांकी।' },
        { id: '15', title: 'माटी वाली', author: 'शेखर जोशी', summary: 'विस्थापन की समस्या और एक गरीब महिला के संघर्ष की कहानी।' },
        { id: '16', title: 'किस तरह आखिरकार मैं हिंदी में आया', author: 'प्रभाकर माचवे', summary: 'एक साहित्यकार के भाषाई सफर और हिंदी से जुड़ाव का वृत्तांत।' }
    ];

    const handleChapterClick = (id) => {
        navigate(`/class/Class 10/Hindi/Chapter-${id}`);
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
                            अध्याय पढ़ें
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
                    <h1>कक्षा 10 हिंदी (Hindi)</h1>
                    <p>साहित्य की गहराइयों, कवियों की कल्पनाओं और लेखकों के भावों के माध्यम से हिंदी भाषा की समृद्धि को जानें।</p>
                    <button className={styles.samplePaperBtn} onClick={() => navigate('/sample-papers?class=10&subject=Hindi')}>
                        📄 Explore Sample Papers
                    </button>
                </div>
            </header>

            <main className={styles.container}>
                {renderCategory('क्षितिज - गद्य खंड', kshitijProse, 'गद्य')}
                {renderCategory('क्षितिज - काव्य खंड', kshitijPoetry, 'काव्य')}
                {renderCategory('कृतिका - भाग 1', kritika, 'पूरक पाठ्यपुस्तक')}
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class10Hindi;
