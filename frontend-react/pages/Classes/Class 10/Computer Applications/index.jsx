import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ComputerApplications.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class10ComputerApps = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const networking = [
        { id: 'networking', title: 'Networking Fundamentals', summary: 'World Wide Web, web servers, clients, websites, web pages, web browsers, blogs, news groups, HTML, web address, e-mail, address, downloading and uploading files.' },
        { id: 'web-services', title: 'Services on Internet', summary: 'Information retrieval, locating sites using search engines and finding people on the net.' },
        { id: 'ca3', title: 'Web Services', summary: 'Chat, video conferencing, e-Learning, e-Banking, e-Shopping, e-Reservation, e-Governance, e-Groups and social networking sites.' }
    ];

    const html = [
        { id: 'html-css', title: 'Introduction to HTML & CSS', summary: 'Basic structure of HTML, tags, attributes, and creating simple web pages with CSS styling.' },
        { id: 'ca5', title: 'HTML Tags', summary: 'Body, H1..H6, P, BR, HR, FONT, IMG, A, UL, OL, LI tags and their attributes.' },
        { id: 'ca6', title: 'HTML Forms & Tables', summary: 'Creating tables, rows, cells and interactive forms with input types.' }
    ];

    const ethics = [
        { id: 'java-basics', title: 'Java Basics', summary: 'Introduction to Java programming, variables, control structures, and basic programs.' },
        { id: 'ca7', title: 'Cyber Ethics', summary: 'Netiquettes, software piracy, copyright, freedom of information and digital divide.' },
        { id: 'ca8', title: 'E-commerce', summary: 'Impact of e-commerce, fraud prevention and secure transactions.' }
    ];

    const handleChapterClick = (id) => {
        if (id === 'html-css' || id === 'java-basics' || id === 'networking') {
            navigate(`/class/Class 10/Computer Applications/Chapter-${id}`);
        } else {
            navigate('/premium');
        }
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
                            Run Application
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className={styles.compPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Computer Applications</h1>
                    <p>Mastering web technologies, networking essentials, and the ethical landscape of the digital world.</p>
                    <button className={styles.samplePaperBtn} onClick={() => navigate('/sample-papers?class=10&subject=Computer Applications')}>
                        📄 Explore Sample Papers
                    </button>
                </div>
            </header>

            <main className={styles.container}>
                {renderCategory('Networking', networking, 'Connect')}
                {renderCategory('HTML & Web Design', html, 'Build')}
                {renderCategory('Ethics & Commerce', ethics, 'Policy')}
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class10ComputerApps;
