import React, { useEffect } from 'react';
import Navbar from '../../../../../../src/components/Navbar';
import styles from '../GrammarTopic.module.css';

const Topic1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.topicPage}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Topic 1: Parts of Speech</h1>
                    <p>The building blocks of the English language.</p>
                </div>
            </header>

            <main className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2>What are Parts of Speech?</h2>
                        <p>Imagine English is like a big toy box, and each word is a different toy. Parts of speech are like labels on those toys – they tell us what each word does in a sentence. There are eight main parts of speech in English.</p>

                        <div className={styles.ruleBox}>
                            <strong>The 8 Parts of Speech:</strong> Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, and Interjection.
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>1. Nouns (The Name-Givers)</h3>
                        <p>Nouns are naming words. They name people, places, things, or ideas.</p>
                        <div className={styles.exampleGrid}>
                            <div className={styles.exampleCard}>
                                <strong>Proper Nouns</strong>
                                Special names (capitalized): Ravi, Mumbai, Himalaya.
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Common Nouns</strong>
                                Everyday names: dog, city, teacher, book.
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Abstract Nouns</strong>
                                Feelings or ideas: love, courage, happiness, fear.
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>2. Pronouns (The Replacers)</h3>
                        <p>Pronouns take the place of nouns to avoid repetition.</p>
                        <div className={styles.ruleBox}>
                            Example: <em>Ravi</em> is playing. <em>He</em> is happy. (He replaces Ravi)
                        </div>
                        <ul>
                            <li><strong>Personal:</strong> I, you, he, she, it, we, they.</li>
                            <li><strong>Possessive:</strong> Mine, yours, his, hers, ours, theirs.</li>
                            <li><strong>Demonstrative:</strong> This, that, these, those.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>3. Verbs (The Action Heroes)</h3>
                        <p>Verbs show action or a state of being. Every sentence must have a verb.</p>
                        <div className={styles.exampleGrid}>
                            <div className={styles.exampleCard}>
                                <strong>Action Verbs</strong>
                                Physical or mental actions: run, sing, think, eat.
                            </div>
                            <div className={styles.exampleCard}>
                                <strong>Linking Verbs</strong>
                                Connect subject to description: is, am, are, was, were.
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>4. Adjectives (The Describers)</h3>
                        <p>Adjectives describe or modify nouns and pronouns.</p>
                        <p>Examples: A <strong>big</strong> red apple. A <strong>beautiful</strong> flower. <strong>Seven</strong> boys.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>5. Adverbs (The How-Words)</h3>
                        <p>Adverbs describe verbs, adjectives, or other adverbs. They often end in '-ly'.</p>
                        <ul>
                            <li><strong>Manner:</strong> Slowly, quickly, happily.</li>
                            <li><strong>Time:</strong> Soon, now, yesterday.</li>
                            <li><strong>Place:</strong> Here, there, everywhere.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>6. Prepositions (The Position Words)</h3>
                        <p>Prepositions show the relationship of a noun to another word.</p>
                        <p>Common ones: in, on, at, by, under, over, between, among.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>7. Conjunctions (The Joiners)</h3>
                        <p>Conjunctions connect words, phrases, or clauses.</p>
                        <p>Examples: and, but, or, because, so, although.</p>
                    </section>

                    <section className={styles.section}>
                        <h3>8. Interjections (The Emotion Words)</h3>
                        <p>Interjections express strong emotions or sudden feelings.</p>
                        <p>Examples: Wow!, Oh!, Alas!, Hurrah!, Oops!</p>
                    </section>

                    <section className={styles.practiceSection}>
                        <h3>Quick Practice</h3>
                        <div className={styles.practiceQuestion}>Identify the noun: "The <strong>cat</strong> sat on the mat."</div>
                        <div className={styles.practiceQuestion}>Identify the verb: "She <strong>runs</strong> every morning."</div>
                        <div className={styles.practiceQuestion}>Identify the adjective: "It was a <strong>beautiful</strong> day."</div>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Topic1;
