
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SocialScience.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class9SocialScience = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const historyChapters = [
        { id: 'h1', title: 'The French Revolution', summary: 'The end of monarchy and the rise of democratic rights.' },
        { id: 'h2', title: 'Socialism in Europe and the Russian Revolution', summary: 'The transformation of society and the fall of the Tsar.' },
        { id: 'h3', title: 'Nazism and the Rise of Hitler', summary: 'The rise of Germany, Nazi ideology, and the aftermath of WWI.' },
        { id: 'h4', title: 'Forest Society and Colonialism', summary: 'Impact of colonial rules on forest communities and biodiversity.' },
        { id: 'h5', title: 'Pastoralists in the Modern World', summary: 'Lives of nomadic herders and the impact of borders and colonial laws.' }
    ];

    const geographyChapters = [
        { id: 'g1', title: 'India – Size and Location', summary: 'Indias geographical location and its significance in Asia.' },
        { id: 'g2', title: 'Physical Features of India', summary: 'Himalayas, plains, plateaus, and coastal regions.' },
        { id: 'g3', title: 'Drainage', summary: 'The river systems of India and their impact on the economy.' },
        { id: 'g4', title: 'Climate', summary: 'Monsoon patterns, seasonal variations, and climatic controls.' },
        { id: 'g5', title: 'Natural Vegetation and Wildlife', summary: 'Types of forests, flora, fauna, and conservation.' },
        { id: 'g6', title: 'Population', summary: 'Size, distribution, and dynamics of population growth.' }
    ];

    const civicsChapters = [
        { id: 'ps1', title: 'What is Democracy? Why Democracy?', summary: 'Defining democracy and exploring its various features.' },
        { id: 'ps2', title: 'Constitutional Design', summary: 'Making of the Indian Constitution and its democratic values.' },
        { id: 'ps3', title: 'Electoral Politics', summary: 'The process of elections and how democracy works in India.' },
        { id: 'ps4', title: 'Working of Institutions', summary: 'Parliament, Judiciary, and the Executive branches.' },
        { id: 'ps5', title: 'Democratic Rights', summary: 'Rights in a democracy and their role in protecting citizens.' }
    ];

    const economicsChapters = [
        { id: 'e1', title: 'The Story of Village Palampur', summary: 'Basic concepts of production and village economics.' },
        { id: 'e2', title: 'People as Resource', summary: 'Human capital, education, and health as economic factors.' },
        { id: 'e3', title: 'Poverty as a Challenge', summary: 'Global and Indian poverty trends and anti-poverty measures.' },
        { id: 'e4', title: 'Food Security in India', summary: 'Buffer stock, PDS, and ensuring food for all citizens.' }
    ];

    const handleChapterClick = (id) => {
        navigate(`/class/Class 9/Social Science/Chapter-${id}`);
    };

    const renderChapterCategory = (title, chapters, tag) => (
        <section className={styles.categorySection}>
            <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}></div>
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
                            Explore Content
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className={styles.ssPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Class 9 Social Science</h1>
                    <p>Journey through History, Geography, Politics, and Economics to understand the world we live in.</p>
                </div>
            </header>

            <main className={styles.container}>
                {renderChapterCategory('History', historyChapters, 'History')}
                {renderChapterCategory('Geography', geographyChapters, 'Geography')}
                {renderChapterCategory('Political Science', civicsChapters, 'Civics')}
                {renderChapterCategory('Economics', economicsChapters, 'Economics')}
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class9SocialScience;
