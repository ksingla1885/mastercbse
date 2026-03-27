import React from 'react';
import { useNavigate } from 'react-router-dom';
import './economics.css';

const EconomicsIndex = () => {
    const navigate = useNavigate();

    const navigateToChapter = (chapterNumber) => {
        navigate(`/classes/class-10/social-science/economics/chapter${chapterNumber}`);
    };

    return (
        <div className="social-science-page economics-page">
            <section className="hero" id="home">
                <div className="hero-content">
                    <h1>Class 10 Economics</h1>
                    <p>Explore development, sectors, money, and globalization.</p>
                </div>
            </section>

            <section className="chapters-overview" id="chapters">
                <h2>Class 10 Economics Chapters</h2>
                <div className="chapters-grid">
                    <div className="chapter-card">
                        <h3>Chapter 1: Development</h3>
                        <p>Understanding economic development and indicators.</p>
                        <button className="cta-button" onClick={() => navigateToChapter(1)}>Read Chapter</button>
                    </div>

                    <div className="chapter-card">
                        <h3>Chapter 2: Sectors of the Indian Economy</h3>
                        <p>Primary, secondary, and tertiary sectors.</p>
                        <button className="cta-button" onClick={() => navigateToChapter(2)}>Read Chapter</button>
                    </div>

                    <div className="chapter-card">
                        <h3>Chapter 3: Money and Credit</h3>
                        <p>Role of money and credit in the economy.</p>
                        <button className="cta-button" onClick={() => navigateToChapter(3)}>Read Chapter</button>
                    </div>

                    <div className="chapter-card">
                        <h3>Chapter 4: Globalisation and the Indian Economy</h3>
                        <p>Impact of globalization on India.</p>
                        <button className="cta-button" onClick={() => navigateToChapter(4)}>Read Chapter</button>
                    </div>

                    <div className="chapter-card">
                        <h3>Chapter 5: Consumer Rights</h3>
                        <p>Understanding consumer protection and rights.</p>
                        <button className="cta-button" onClick={() => navigateToChapter(5)}>Read Chapter</button>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="chapters-overview">
                    <h2>About Class 10 Economics Resources</h2>
                    <div className="chapters-grid">
                        <div className="chapter-card">
                            <h3>Learning Objectives</h3>
                            <p>Class 10 Economics focuses on development, sectors, money, and globalization to understand economic systems.</p>
                        </div>

                        <div className="chapter-card">
                            <h3>Key Topics</h3>
                            <ul>
                                <li>Development indicators</li>
                                <li>Economic sectors</li>
                                <li>Globalization</li>
                                <li>Consumer Rights</li>
                            </ul>
                        </div>

                        <div className="chapter-card">
                            <h3>Study Tips</h3>
                            <ul>
                                <li>Analyze data and graphs</li>
                                <li>Understand real-world examples</li>
                                <li>Discuss economic policies</li>
                                <li>Use case studies</li>
                            </ul>
                        </div>

                        <div className="chapter-card">
                            <h3>Resources</h3>
                            <p>Access summaries, questions, and activities for Class 10 Economics.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EconomicsIndex;
