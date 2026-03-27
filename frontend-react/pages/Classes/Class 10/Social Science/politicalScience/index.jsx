import React, { useState, useEffect } from 'react';
import './politicalScience.css';

const PoliticalScience = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Add smooth scrolling for anchor links
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }, []);

    const navigateToChapter = (chapterName) => {
        // Map chapter names to their respective paths
        const chapterPaths = {
            'Chapter1': 'Chapter1/chapter1.html',
            'Chapter2': 'Chapter2/chapter2.html',
            'Chapter3': 'Chapter3/chapter3.html',
            'Chapter4': 'Chapter4/chapter4.html',
            'Chapter5': 'Chapter5/chapter5.html',
            'Chapter6': 'Chapter6/chapter6.html',
            'Chapter7': 'Chapter7/chapter7.html',
            'Chapter8': 'Chapter8/chapter8.html'
        };

        const path = chapterPaths[chapterName];
        if (path) {
            window.location.href = path;
        } else {
            alert('Navigation path not found for ' + chapterName);
        }
    };

    return (
        <div className="social-science-page political-science-page">
            <header className="header">
                <div className="nav-container">
                    <div className="logo">CBSE Resources - Class 10 Political Science</div>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="../index.html">Home</a></li>
                            <li><a href="#chapters">Chapters</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="../../../premium_users/index.html" className="premium-nav">Premium</a></li>
                            <li><a href="#" onClick={() => setShowModal(true)}>Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="hero" id="home">
                <div className="hero-content">
                    <h1>Class 10 Political Science</h1>
                    <p>Explore power sharing, federalism, democracy, and political challenges.</p>
                    <button className="cta-button" onClick={() => setShowModal(true)}>Get Started</button>
                </div>
            </section>

            <section className="chapters-overview" id="chapters">
                <h2>Class 10 Political Science Chapters</h2>
                <div className="chapters-grid">
                    <div className="chapter-card">
                        <h3>Chapter 1: Power Sharing</h3>
                        <p>Understanding power sharing in democracy.</p>
                        <button className="cta-button" onClick={() => navigateToChapter('Chapter1')}>Read Chapter</button>
                    </div>

                    <div className="chapter-card">
                        <h3>Chapter 2: Federalism</h3>
                        <p>Division of power between central and state governments.</p>
                        <button className="cta-button" onClick={() => navigateToChapter('Chapter2')}>Read Chapter</button>
                    </div>

                    <div className="chapter-card">
                        <h3>Chapter 3: Democracy and Diversity</h3>
                        <p>How democracy accommodates social diversity.</p>
                        <button className="cta-button" onClick={() => navigateToChapter('Chapter3')}>Read Chapter</button>
                    </div>

                    <div className="chapter-card">
                        <h3>Chapter 4: Gender, Religion and Caste</h3>
                        <p>Role of gender, religion, and caste in politics.</p>
                        <button className="cta-button" onClick={() => navigateToChapter('Chapter4')}>Read Chapter</button>
                    </div>

                    <div className="chapter-card">
                        <h3>Chapter 5: Popular Struggles and Movements</h3>
                        <p>Movements for rights and justice.</p>
                        <button className="cta-button" onClick={() => navigateToChapter('Chapter5')}>Read Chapter</button>
                    </div>

                    <div className="chapter-card">
                        <h3>Chapter 6: Political Parties</h3>
                        <p>Functions and types of political parties.</p>
                        <button className="cta-button" onClick={() => navigateToChapter('Chapter6')}>Read Chapter</button>
                    </div>

                    <div className="chapter-card">
                        <h3>Chapter 7: Outcomes of Democracy</h3>
                        <p>Evaluating the outcomes of democratic systems.</p>
                        <button className="cta-button" onClick={() => navigateToChapter('Chapter7')}>Read Chapter</button>
                    </div>

                    <div className="chapter-card">
                        <h3>Chapter 8: Challenges to Democracy</h3>
                        <p>Addressing challenges faced by democracies.</p>
                        <button className="cta-button" onClick={() => navigateToChapter('Chapter8')}>Read Chapter</button>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="chapters-overview">
                    <h2>About Class 10 Political Science Resources</h2>
                    <div className="chapters-grid">
                        <div className="chapter-card">
                            <h3>Learning Objectives</h3>
                            <p>Class 10 Political Science focuses on democratic principles, institutions, and societal issues to foster civic awareness.</p>
                        </div>

                        <div className="chapter-card">
                            <h3>Key Topics</h3>
                            <ul>
                                <li>Power Sharing and Federalism</li>
                                <li>Democracy and Diversity</li>
                                <li>Gender, Religion, Caste</li>
                                <li>Popular Struggles</li>
                                <li>Political Parties</li>
                                <li>Outcomes and Challenges</li>
                            </ul>
                        </div>

                        <div className="chapter-card">
                            <h3>Study Tips</h3>
                            <ul>
                                <li>Understand constitutional provisions</li>
                                <li>Analyze case studies</li>
                                <li>Discuss real-world examples</li>
                                <li>Practice diagram-based questions</li>
                            </ul>
                        </div>

                        <div className="chapter-card">
                            <h3>Resources</h3>
                            <p>Access summaries, questions, and activities for Class 10 Political Science.</p>
                            <button className="cta-button" onClick={() => setShowModal(true)}>Access Resources</button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 CBSE Educational Resources. All rights reserved.</p>
                    <p className="premium-cta">Want to explore more? <a href="../../../premium_users/index.html" className="premium-link">Unlock Premium Content</a></p>
                </div>
            </footer>

            {/* Login Modal */}
            {showModal && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h2>Join Our Learning Community</h2>
                        <p>Sign up or log in to access personalized features, track your progress, and get the most out of our educational resources!</p>
                        <button className="modal-button" onClick={() => alert('Login functionality would be implemented here')}>Sign Up</button>
                        <button className="modal-button cancel" onClick={() => setShowModal(false)}>Maybe Later</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PoliticalScience;
