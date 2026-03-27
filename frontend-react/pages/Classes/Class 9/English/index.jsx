
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './English.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class9English = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const beehiveProse = [
        { id: 'bp1', title: 'The Fun They Had', summary: 'A futuristic look at education and the discovery of an old real book.' },
        { id: 'bp2', title: 'The Sound of Music', summary: 'The inspiring journeys of Evelyn Glennie and Bismillah Khan.' },
        { id: 'bp3', title: 'The Little Girl', summary: 'Kezias journey of understanding her fathers strict behavior.' },
        { id: 'bp4', title: 'A Truly Beautiful Mind', summary: 'A biographical sketch of Albert Einstein’s scientific and humanistic side.' },
        { id: 'bp5', title: 'The Snake and the Mirror', summary: 'A humorous encounter between a doctor and a snake.' },
        { id: 'bp6', title: 'My Childhood', summary: 'APJ Abdul Kalam’s early life experiences and formative years.' },
        { id: 'bp7', title: 'Packing', summary: 'The hilarious chaotic experience of Jerome, Harris, and George.' },
        { id: 'bp8', title: 'Reach for the Top', summary: 'The determined paths taken by Santosh Yadav and Maria Sharapova.' },
        { id: 'bp9', title: 'The Bond of Love', summary: 'The deep emotional connection between a human family and a sloth bear.' },
        { id: 'bp10', title: 'Kathmandu', summary: 'A travelogue describing the vibrant and busy temples of Nepal.' },
        { id: 'bp11', title: 'If I Were You', summary: 'A clever playwright outwits a criminal who tries to impersonate him.' }
    ];

    const beehivePoems = [
        { id: 'bm1', title: 'The Road Not Taken', summary: 'A philosophical poem about the choices we make in life.' },
        { id: 'bm2', title: 'Wind', summary: 'The destructive yet creative power of the wind and human resilience.' },
        { id: 'bm3', title: 'Rain on the Roof', summary: 'The soothing and nostalgic memories triggered by the sound of rain.' },
        { id: 'bm4', title: 'The Lake Isle of Innisfree', summary: 'A longing for peace and tranquility in the lap of nature.' },
        { id: 'bm5', title: 'A Legend of the Northland', summary: 'A folk tale about the consequences of greed and selfishness.' },
        { id: 'bm6', title: 'No Men Are Foreign', summary: 'A powerful message of universal brotherhood and global unity.' },
        { id: 'bm7', title: 'The Duck and the Kangaroo', summary: 'A light-hearted poem about travel, friendship, and collaboration.' },
        { id: 'bm8', title: 'On Killing a Tree', summary: 'The resilience of nature and the cruelty of destroying living beings.' },
        { id: 'bm9', title: 'The Snake Trying', summary: 'Watching a harmless snake try to escape the reach of predators.' },
        { id: 'bm10', title: 'A Slumber Did My Spirit Seal', summary: 'A deep reflection on life, death, and the union with nature.' }
    ];

    const momentsSupplementary = [
        { id: 'ms1', title: 'The Lost Child', summary: 'A child’s fascination and eventual fear when separated from parents.' },
        { id: 'ms2', title: 'The Adventures of Toto', summary: 'The mischievous antics of a little red monkey in a household.' },
        { id: 'ms3', title: 'Iswaran the Storyteller', summary: 'The uncanny art of storytelling and the power of imagination.' },
        { id: 'ms4', title: 'In the Kingdom of Fools', summary: 'A satirical story about logic and wisdom in a bizarre kingdom.' },
        { id: 'ms5', title: 'The Happy Prince', summary: 'The selflessness of a statue and a swallow helping the needy.' },
        { id: 'ms6', title: 'Weathering the Storm in Ersama', summary: 'A young man’s leadership and courage during a natural disaster.' },
        { id: 'ms7', title: 'The Last Leaf', summary: 'A touching story of self-sacrifice and the healing power of art.' },
        { id: 'ms8', title: 'A House Is Not a Home', summary: 'Overcoming the loss of material belongings and finding true home.' },
        { id: 'ms9', title: 'The Accidental Tourist', summary: 'Humorous travel mishaps of an uncoordinated traveler.' },
        { id: 'ms10', title: 'The Beggar', summary: 'The transformation of a drunkard through kind words and hard work.' }
    ];

    const handleChapterClick = (id) => {
        navigate(`/class/Class 9/English/Chapter-${id}`);
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
                            <p className={styles.chapterSummary}>{chapter.summary}</p>
                        </div>
                        <button className={styles.exploreBtn} onClick={() => handleChapterClick(chapter.id)}>
                            Read Literature
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className={styles.englishPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Class 9 English Literature</h1>
                    <p>Dive into the world of prose and poetry with Beehive and Moments. Master reading skills and appreciate literary beauty.</p>
                </div>
            </header>

            <main className={styles.container}>
                {renderCategory('Beehive - Prose', beehiveProse, 'Prose')}
                {renderCategory('Beehive - Poetry', beehivePoems, 'Poetry')}
                {renderCategory('Moments - Supplementary', momentsSupplementary, 'Supplementary')}
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class9English;
