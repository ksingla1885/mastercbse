import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SocialScience.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class10SocialScience = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const history = [
        { id: '1', title: 'The Rise of Nationalism in Europe', summary: 'The French Revolution, the making of nationalism in Europe, the age of revolutions (1830-1848).' },
        { id: '2', title: 'Nationalism in India', summary: 'The First World War, Khilafat and Non-Cooperation, differring strands within the movement, towards Civil Disobedience.' },
        { id: '3', title: 'The Making of a Global World', summary: 'The pre-modern world, the nineteenth century (1815-1914), the inter-war economy.' },
        { id: '4', title: 'The Age of Industrialisation', summary: 'The coming of the factory, industrialization in the colonies, factories come up, the peculiarities of industrial growth.' },
        { id: '5', title: 'Print Culture and the Modern World', summary: 'The first printed books, print comes to Europe, the print revolution and its impact, women and print.' }
    ];

    const geography = [
        { id: '1', title: 'Resources and Development', summary: 'Types of resources, development of resources, resource planning in India, land resources and soil as a resource.' },
        { id: '2', title: 'Forest and Wildlife Resources', summary: 'Flora and fauna in India, conservation of forest and wildlife, types and distribution of forest.' },
        { id: '3', title: 'Water Resources', summary: 'Water scarcity and the need for water conservation, multi-purpose river projects.' },
        { id: '4', title: 'Agriculture', summary: 'Types of farming, cropping patterns, major crops, technological and institutional reforms.' },
        { id: '5', title: 'Minerals and Energy Resources', summary: 'Mode of occurrence of minerals, ferrous and non-ferrous minerals, conventional and non-conventional energy resources.' },
        { id: '6', title: 'Manufacturing Industries', summary: 'Importance of manufacturing, contribution of industry to national economy, industrial pollution and environmental degradation.' },
        { id: '7', title: 'Lifelines of National Economy', summary: 'Transport, communication, international trade, tourism as a trade.' }
    ];

    const civics = [
        { id: '1', title: 'Power Sharing', summary: 'Belgium and Sri Lanka, majoritarianism in Sri Lanka, accommodation in Belgium, why power sharing is desirable.' },
        { id: '2', title: 'Federalism', summary: 'What is federalism, what makes India a federal country, how is federalism practiced.' },
        { id: '3', title: 'Democracy and Diversity', summary: 'Origins of social differences, politics of social diversity.' },
        { id: '4', title: 'Gender, Religion and Caste', summary: 'Gender and politics, religion, communalism and politics, caste and politics.' },
        { id: '5', title: 'Popular Struggles and Movements', summary: 'Popular struggles in Nepal and Bolivia, mobilization and organizations, pressure groups and movements.' }
    ];

    const economics = [
        { id: '1', title: 'Development', summary: 'What development promises, income and other goals, national development, how to compare different countries.' },
        { id: '2', title: 'Sectors of the Indian Economy', summary: 'Sectors of economic activities, comparing the three sectors, primary, secondary and tertiary sectors in India.' },
        { id: '3', title: 'Money and Credit', summary: 'Money as a medium of exchange, modern forms of money, loan activities of banks.' },
        { id: '4', title: 'Globalisation and the Indian Economy', summary: 'Production across countries, interlinking production across countries, foreign trade and integration of markets.' },
        { id: '5', title: 'Consumer Rights', summary: 'The consumer in the marketplace, consumer movement, consumer rights, taking the consumer movement forward.' }
    ];

    const handleChapterClick = (topic, id) => {
        const subjectMap = {
            'History': 'history',
            'Geography': 'geography',
            'Political Science': 'politicalScience',
            'Economics': 'economics'
        };
        const subjectPath = subjectMap[topic];
        navigate(`/class/Class 10/Social Science/${subjectPath}/Chapter${id}`);
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
                        <button className={styles.exploreBtn} onClick={() => handleChapterClick(title, chapter.id)}>
                            Read Analysis
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
                    <h1>Social Science</h1>
                    <p>Understanding our past, navigating our world, and shaping our future through History, Geography, Civics, and Economics.</p>
                    <button className={styles.samplePaperBtn} onClick={() => navigate('/sample-papers?class=10&subject=Social Science')}>
                        📄 Explore Sample Papers
                    </button>
                </div>
            </header>

            <main className={styles.container}>
                {renderCategory('History', history, 'Heritage')}
                {renderCategory('Geography', geography, 'Earth')}
                {renderCategory('Political Science', civics, 'Democracy')}
                {renderCategory('Economics', economics, 'Growth')}
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class10SocialScience;
