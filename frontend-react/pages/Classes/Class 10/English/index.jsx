import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './English.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class10English = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const firstFlight = [
        { id: '1', title: 'A Letter to God', summary: 'The story of Lencho, a farmer with immense faith in God, and his letter requesting help.' },
        { id: '2', title: 'Nelson Mandela: Long Walk to Freedom', summary: 'Excerpts from the autobiography of Nelson Mandela, focusing on the struggle against apartheid.' },
        { id: '3', title: 'Two Stories about Flying', summary: 'His First Flight and Black Aeroplane - stories of individual courage and mystery.' },
        { id: '4', title: 'From the Diary of Anne Frank', summary: 'Insights into the life of a young Jewish girl hiding from the Nazis during WWII.' },
        { id: '5', title: 'The Hundred Dresses – I', summary: 'A story about a young Polish girl who is teased by her classmates for her unique clothes.' },
        { id: '6', title: 'The Hundred Dresses – II', summary: 'Continuation of the story where the truth about Wanda’s dresses is revealed.' },
        { id: '7', title: 'Glimpses of India', summary: 'Three stories showing the cultural richness of Goa, Coorg, and Assam.' },
        { id: '8', title: 'Mijbil the Otter', summary: 'A heartwarming story about the narrator’s unique pet otter and their bond.' },
        { id: '9', title: 'Madam Rides the Bus', summary: 'An eight-year-old girl’s first adventurous bus ride alone to the town.' },
        { id: '10', title: 'The Sermon at Benares', summary: 'The teachings of Buddha on the inevitability of death and reaching peace.' },
        { id: '11', title: 'The Proposal', summary: 'A humorous one-act play about common misunderstandings and marriage proposals.' }
    ];

    const footprints = [
        { id: '12', title: 'A Triumph of Surgery', summary: 'A humorous story about a pampered dog and his recovery through sensible treatment.' },
        { id: '13', title: 'The Thief\'s Story', summary: 'A tale of trust, redemption and how kindness can change a person\'s character.' },
        { id: '14', title: 'The Midnight Visitor', summary: 'A clever detective story where intelligence prevails over brute force.' },
        { id: '15', title: 'A Question of Trust', summary: 'A story of two clever thieves outsmarting each other in a house robbery.' },
        { id: '16', title: 'Footprints without Feet', summary: 'The adventures of an invisible scientist and the chaos he creates in a village.' },
        { id: '17', title: 'The Making of a Scientist', summary: 'The journey of Richard Ebright from a butterfly collector to a world-renowned biologist.' },
        { id: '18', title: 'The Necklace', summary: 'A tragic story of vanity and the high price paid for a moment of social glory.' },
        { id: '19', title: 'The Hack Driver', summary: 'A humorous account of a lawyer being outsmarted by a clever rural man.' },
        { id: '20', title: 'Bholi', summary: 'The inspiring transformation of a neglected girl into a confident woman through education.' },
        { id: '21', title: 'The Book That Saved the Earth', summary: 'A humorous play about how a nursery rhyme book stopped an alien invasion.' }
    ];

    const handleChapterClick = (id) => {
        navigate(`/class/Class 10/English/Chapter-${id}`);
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
                            Explore Literature
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
                    <h1>English Literature</h1>
                    <p>Master the art of expression and explore human emotions through the classics of Class 10 English.</p>
                    <button className={styles.samplePaperBtn} onClick={() => navigate('/sample-papers?class=10&subject=English')}>
                        📄 Explore Sample Papers
                    </button>
                </div>
            </header>

            <main className={styles.container}>
                <section className={styles.grammarBanner}>
                    <div className={styles.grammarContent}>
                        <h2>English Grammar & Writing</h2>
                        <p>Master Tenses, Voice, Narration, and professional writing skills.</p>
                        <button className={styles.grammarBtn} onClick={() => navigate('/class/Class 10/English/Grammar')}>
                            Study Grammar
                        </button>
                    </div>
                </section>
                {renderCategory('First Flight', firstFlight, 'Main Course')}
                {renderCategory('Footprints without Feet', footprints, 'Supplementary')}
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class10English;
