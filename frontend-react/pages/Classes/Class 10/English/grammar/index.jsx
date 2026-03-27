import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../../../src/components/Navbar';
import styles from './EnglishGrammar.module.css';

const GrammarIndex = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const grammarTopics = [
        {
            id: '1',
            title: 'Parts of Speech',
            topics: ['Nouns, pronouns, verbs', 'Adjectives and adverbs', 'Prepositions and conjunctions', 'Interjections']
        },
        {
            id: '2',
            title: 'Tenses',
            topics: ['Present, past, future', 'Continuous and perfect aspects', 'Usage in sentences', 'Common errors']
        },
        {
            id: '3',
            title: 'Active and Passive Voice',
            topics: ['Voice conversion rules', 'Examples and practice', 'Tenses in passive voice', 'Special cases']
        },
        {
            id: '4',
            title: 'Direct and Indirect Speech',
            topics: ['Reporting statements', 'Questions and commands', 'Changes in tenses', 'Punctuation rules']
        },
        {
            id: '5',
            title: 'Clauses',
            topics: ['Noun clauses', 'Adjective clauses', 'Adverb clauses', 'Relative clauses']
        },
        {
            id: '6',
            title: 'Sentence Structure',
            topics: ['Simple, compound, complex', 'Sentence types', 'Phrases and clauses', 'Error correction']
        },
        {
            id: '7',
            title: 'Subject-Verb Agreement',
            topics: ['Basic rules', 'Collective nouns', 'Indefinite pronouns', 'Exceptions']
        },
        {
            id: '8',
            title: 'Prepositions',
            topics: ['Types of prepositions', 'Usage in sentences', 'Common prepositional phrases', 'Exercises']
        },
        {
            id: '9',
            title: 'Conjunctions',
            topics: ['Coordinating conjunctions', 'Subordinating conjunctions', 'Correlative conjunctions', 'Usage examples']
        },
        {
            id: '10',
            title: 'Articles',
            topics: ['Definite and indefinite', 'Rules for usage', 'Omitting articles', 'Practice exercises']
        },
        {
            id: '11',
            title: 'Letter Writing',
            topics: ['Formal letters', 'Informal letters', 'Format and structure', 'Sample letters']
        },
        {
            id: '12',
            title: 'Essay Writing',
            topics: ['Types of essays', 'Structure and outline', 'Introduction and conclusion', 'Tips for writing']
        },
        {
            id: '13',
            title: 'Notice Writing',
            topics: ['Format of notices', 'Language and content', 'Examples', 'Common mistakes']
        },
        {
            id: '14',
            title: 'Report Writing',
            topics: ['Structure of reports', 'Factual reporting', 'Language style', 'Practice samples']
        },
        {
            id: '15',
            title: 'Message Writing',
            topics: ['Telephonic messages', 'Written messages', 'Key elements', 'Examples']
        }
    ];

    const handleTopicClick = (id) => {
        navigate(`/class/Class 10/English/Grammar/Topic-${id}`);
    };

    return (
        <div className={styles.grammarPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Class 10 English Grammar & Writing</h1>
                    <p>Master essential grammar rules and professional writing skills for the CBSE curriculum.</p>
                </div>
            </header>

            <main className={styles.container}>
                <section className={styles.topicsSection}>
                    <div className={styles.sectionHeader}>
                        <h2>Grammar & Composition</h2>
                        <p>Click on a topic to explore detailed rules, examples, and practice exercises.</p>
                    </div>

                    <div className={styles.topicsGrid}>
                        {grammarTopics.map((topic) => (
                            <div key={topic.id} className={styles.topicCard}>
                                <div className={styles.topicHeader}>
                                    <span className={styles.topicNumber}>Topic {topic.id}</span>
                                    <h3>{topic.title}</h3>
                                </div>
                                <ul className={styles.topicList}>
                                    {topic.topics.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <button
                                    className={styles.studyBtn}
                                    onClick={() => handleTopicClick(topic.id)}
                                >
                                    Start Learning
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.aboutSection}>
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutCard}>
                            <h3>Grammar Fundamentals</h3>
                            <p>Understand parts of speech, tenses, voice, and syntax to build a strong foundation for fluent English.</p>
                        </div>
                        <div className={styles.aboutCard}>
                            <h3>Writing Excellence</h3>
                            <p>Learn to craft impactful letters, essays, and reports with proper formats and sophisticated language.</p>
                        </div>
                        <div className={styles.aboutCard}>
                            <h3>Exam Preparation</h3>
                            <p>Focus on common errors, editing tasks, and omision exercises frequently asked in CBSE Board Exams.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default GrammarIndex;
