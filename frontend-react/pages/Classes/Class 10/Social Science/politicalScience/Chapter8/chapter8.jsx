import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const Chapter8 = () => {
    useEffect(() => {
        // Modal functions
        window.closeLoginModal = function () {
            const modal = document.getElementById('loginModal');
            if (modal) modal.style.display = 'none';
        };

        window.showLoginModal = function () {
            const modal = document.getElementById('loginModal');
            if (modal) modal.style.display = 'block';
        };

        // Close modal when clicking outside
        const handleWindowClick = function (event) {
            const modal = document.getElementById('loginModal');
            if (modal && event.target === modal) {
                modal.style.display = 'none';
            }
        };

        window.addEventListener('click', handleWindowClick);

        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, []);

    return (
        <div className="social-science-page political-science-page">
            <header className="header">
                <div className="nav-container">
                    <div className="logo">CBSE Resources - Class 10 Political Science</div>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="../../index.html">Home</a></li>
                            <li><a href="../index.html">Political Science</a></li>
                            <li><a href="#content">Content</a></li>
                            <li><a href="../../../../premium_users/index.html" className="premium-nav">Premium</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); window.showLoginModal(); }}>Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="hero" id="home">
                <div className="hero-content">
                    <h1>Chapter 8: Challenges to Democracy</h1>
                    <p>Addressing challenges faced by democracies.</p>
                </div>
            </section>

            <section className="content" id="content">
                <h2>Chapter 8: Challenges to Democracy</h2>
                <p>This chapter addresses the challenges faced by democracies, including foundational, expansion, and deepening issues. It emphasizes the need for reforms to strengthen democratic institutions and ensure effective governance.</p>

                <div className="topic-section">
                    <h3>Detailed Summary</h3>
                    <p>Democracies worldwide face three types of challenges: foundational (establishing stable democracy in new nations), challenge of expansion (extending democratic rights to all sections), and challenge of deepening (improving the quality of democracy through greater participation and accountability). In India, foundational challenges involve ensuring free and fair elections, while expansion includes empowering marginalized groups. Deepening requires reducing corruption, increasing transparency, and enhancing citizen involvement.</p>
                    <p>The chapter discusses how corruption, inequality, and lack of internal democracy in parties hinder democratic progress. Reforms like the Right to Information Act and electoral changes are essential. Global examples, such as Myanmar's transition to democracy, illustrate foundational challenges. <strong>Additional Insights:</strong> Active citizen participation and legal reforms are key to overcoming challenges, ensuring that democracy remains responsive and inclusive.</p>
                    <p>Furthermore, the chapter highlights the role of education, media, and civil society in deepening democracy and promoting a culture of tolerance and accountability.</p>
                </div>

                <div className="topic-section">
                    <h3>Key Concepts</h3>
                    <ul>
                        <li><strong>Foundational Challenge:</strong> Establishing and stabilizing democracy in countries transitioning from non-democratic regimes.</li>
                        <li><strong>Challenge of Expansion:</strong> Extending democratic rights and participation to all social groups, including women and minorities.</li>
                        <li><strong>Challenge of Deepening:</strong> Improving the quality of democracy by enhancing accountability, reducing corruption, and increasing participation.</li>
                        <li><strong>Democratic Reforms:</strong> Changes like electoral reforms and transparency laws to strengthen democratic processes.</li>
                        <li><strong>Corruption:</strong> Misuse of power for personal gain, undermining public trust in democracy.</li>
                        <li><strong>Inequality:</strong> Social and economic disparities that limit equal participation in democratic processes.</li>
                        <li><strong>Citizen Participation:</strong> Active involvement of people in governance through voting, protests, and civic engagement.</li>
                    </ul>
                </div>

                <div className="topic-section">
                    <h3>Important Figures and Examples</h3>
                    <ul>
                        <li><strong>Myanmar:</strong> Transitioning from military rule, facing foundational challenges in establishing stable democracy.</li>
                        <li><strong>Pakistan:</strong> Struggles with military interventions, highlighting the need for civilian supremacy.</li>
                        <li><strong>Right to Information Act (RTI):</strong> Indian law promoting transparency and reducing corruption.</li>
                        <li><strong>Electoral Bonds:</strong> Controversial reform in India aimed at increasing transparency in political funding.</li>
                        <li><strong>Mexico:</strong> Reforms to combat corruption and strengthen institutions in a developing democracy.</li>
                        <li><strong>Aung San Suu Kyi:</strong> Leader in Myanmar's democratic transition, facing challenges in implementation.</li>
                        <li><strong>Anna Hazare:</strong> Indian activist who led anti-corruption movements, pushing for democratic reforms.</li>
                    </ul>
                </div>

                <div className="practice-section">
                    <h3>Practice Questions</h3>
                    <p>1. What are the three main challenges to democracy?</p>
                    <p>2. Explain the foundational challenge with an example.</p>
                    <p>3. Discuss the challenge of expansion in the context of India.</p>
                    <p>4. How can the deepening of democracy be achieved?</p>
                    <p>5. Describe the impact of corruption on democratic systems.</p>
                    <p>6. What role does citizen participation play in overcoming democratic challenges?</p>
                </div>

                <div className="topic-section">
                    <h3>Answers to Practice Questions</h3>
                    <ul>
                        <li><strong>1. What are the three main challenges to democracy?</strong> Foundational (establishing stability), expansion (extending rights), and deepening (improving quality and participation).</li>
                        <li><strong>2. Explain the foundational challenge with an example.</strong> Involves making democracy stable in new nations, e.g., Myanmar transitioning from military rule to civilian government.</li>
                        <li><strong>3. Discuss the challenge of expansion in the context of India.</strong> Expanding rights to women, minorities, and backward classes through reservations and inclusive policies.</li>
                        <li><strong>4. How can the deepening of democracy be achieved?</strong> Through reforms like RTI, reducing corruption, and increasing public participation in governance.</li>
                        <li><strong>5. Describe the impact of corruption on democratic systems.</strong> Corruption erodes trust, leads to inequality, and undermines accountability, weakening democratic institutions.</li>
                        <li><strong>6. What role does citizen participation play in overcoming democratic challenges?</strong> Active citizens through voting, protests, and awareness ensure responsive governance and drive reforms.</li>
                    </ul>
                </div>

                <div className="key-points">
                    <h3>Key Points for Revision</h3>
                    <p>Challenges: Foundational, expansion, deepening. Reforms: RTI, electoral changes. Participation: Key to strengthening. <strong>Additional Notes:</strong> Overcoming challenges requires collective effort to make democracy more inclusive and effective.</p>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 CBSE Educational Resources. All rights reserved.</p>
                    <p className="premium-cta">Want to explore more? <a href="../../../../premium_users/index.html" className="premium-link">Unlock Premium Content</a></p>
                </div>
            </footer>

            {/* Login Modal */}
            <div id="loginModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={window.closeLoginModal}>&times;</span>
                    <h2>Join Our Learning Community</h2>
                    <p>Sign up or log in to access personalized features, track your progress, and get the most out of our educational resources!</p>
                    <button className="modal-button" onClick={() => alert('Login functionality would be implemented here')}>Sign Up</button>
                    <button className="modal-button cancel" onClick={window.closeLoginModal}>Maybe Later</button>
                </div>
            </div>
        </div>
    );
};

export default Chapter8;
