
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ComputerApplications.module.css';
import Navbar from '../../../../src/components/Navbar';

const Class9ComputerApps = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fundamentals = [
        { id: 'ca1', title: 'Introduction to Computers', summary: 'Characteristics, uses, and the historical generations of computers.' },
        { id: 'ca2', title: 'Components of Computer System', summary: 'Detailed study of Input/Output devices, CPU, and Memory architecture.' },
        { id: 'ca3', title: 'Hardware and Software', summary: 'Understanding System, Application, and Utility software roles.' },
        { id: 'ca4', title: 'Operating System', summary: 'Functions and types of OS including Windows and Linux.' },
        { id: 'ca5', title: 'Number System', summary: 'Binary, Decimal, Octal, Hexadecimal systems and their conversions.' }
    ];

    const programming = [
        { id: 'ca6', title: 'Basics of Programming', summary: 'Problem-solving steps using Algorithms and Flowcharts.' },
        { id: 'ca7', title: 'Introduction to Programming Language', summary: 'Fundamental concepts of Python, Java, or QBASIC coding.' },
        { id: 'ca8', title: 'Data Types and Variables', summary: 'Constants, variables, and identifiers in software development.' },
        { id: 'ca9', title: 'Input and Output Statements', summary: 'Mastering basic I/O commands for user interaction.' }
    ];

    const security = [
        { id: 'ca10', title: 'Internet and Email', summary: 'Deep dive into web services, browsers, search engines, and communication.' },
        { id: 'ca11', title: 'Cyber Safety and Ethics', summary: 'Understanding cybercrime prevention and digital ethics.' },
        { id: 'ca12', title: 'Computer Virus and Security', summary: 'Viral threats, antivirus tools, and essential security precautions.' }
    ];

    const handleChapterClick = (id) => {
        navigate(`/class/Class 9/Computer Applications/Chapter-${id}`);
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
                    <p>Building digital fluency through hardware mastery, algorithmic thinking, and cyber intelligence.</p>
                </div>
            </header>

            <main className={styles.container}>
                {renderCategory('Computer Fundamentals', fundamentals, 'Systems')}
                {renderCategory('Programming Basics', programming, 'Logic')}
                {renderCategory('Cyber & Connectivity', security, 'Security')}
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Class9ComputerApps;
