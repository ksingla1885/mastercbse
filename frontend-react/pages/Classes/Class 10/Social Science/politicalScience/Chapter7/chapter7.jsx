import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../SocialScienceChapter.module.css';
import Navbar from '../../../../../../src/components/Navbar';
const Chapter7 = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === 'loginModal') {
        setShowModal(false);
      }
    };

    if (showModal) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [showModal]);

  const openLoginModal = () => setShowModal(true);
  const closeLoginModal = () => setShowModal(false);

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
              <li><a href="#" onClick={openLoginModal}>Login</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Chapter 7: Outcomes of Democracy</h1>
          <p>Evaluating the outcomes of democratic systems.</p>
        </div>
      </section>

      <section className="content" id="content">
        <h2>Chapter 7: Outcomes of Democracy</h2>
        <p>This chapter evaluates the outcomes of democratic systems, assessing whether democracy delivers on its promises of equality, accountability, and development. It compares democracy with other forms of government and examines its successes and limitations.</p>

        <div className="topic-section">
          <h3>Detailed Summary</h3>
          <p>Democracy promotes accountable and legitimate governments that respond to public needs. It ensures rule of law, dignity of individuals, and reduces social and economic inequalities through policies like reservations and welfare programs. While democracies may grow slower economically than authoritarian regimes, they provide stability and legitimacy, preventing famines and conflicts.</p>
          <p>The chapter discusses positive outcomes like enhanced participation, conflict resolution, and accommodation of diversity. However, challenges include corruption, inequality, and inefficiency. Comparing India with China, democracy in India has reduced famines and promoted rights, though economic growth may be slower. <strong>Additional Insights:</strong> Democracy is not just about elections but about delivering justice, equality, and development, making it a superior system despite imperfections.</p>
          <p>Furthermore, the chapter explores how democracies evolve, with room for improvement through reforms, emphasizing that democracy's strength lies in its ability to correct itself.</p>
        </div>

        <div className="topic-section">
          <h3>Key Concepts</h3>
          <ul>
            <li><strong>Accountable Government:</strong> Governments that are responsible to the people and can be removed through elections.</li>
            <li><strong>Legitimate Government:</strong> One that is elected and accepted by the people, ensuring stability.</li>
            <li><strong>Economic Growth:</strong> Democracies may grow slower but provide sustainable development without famines.</li>
            <li><strong>Inequality Reduction:</strong> Policies to reduce social and economic disparities, like affirmative action.</li>
            <li><strong>Dignity of Individuals:</strong> Respect for all citizens, regardless of background, through equal rights.</li>
            <li><strong>Rule of Law:</strong> Equality before law, preventing arbitrary rule and promoting justice.</li>
            <li><strong>Transparency:</strong> Open governance that allows public scrutiny and reduces corruption.</li>
          </ul>
        </div>

        <div className="topic-section">
          <h3>Important Figures and Examples</h3>
          <ul>
            <li><strong>India vs. China:</strong> India (democracy) has no famines since independence, unlike China; focuses on rights over rapid growth.</li>
            <li><strong>Amartya Sen:</strong> Economist who argued that democracies prevent famines by ensuring accountability.</li>
            <li><strong>Pakistan:</strong> Contrasts with India, showing how military rule leads to instability despite similar resources.</li>
            <li><strong>South Africa:</strong> Post-apartheid democracy reduced inequalities through inclusive policies.</li>
            <li><strong>Scandinavian Countries:</strong> Examples of democracies with high equality and welfare, like Norway and Sweden.</li>
            <li><strong>Right to Information Act (India):</strong> Promotes transparency and accountability in governance.</li>
            <li><strong>Universal Adult Franchise:</strong> Ensures all adults can vote, promoting equality in democracies.</li>
          </ul>
        </div>

        <div className="practice-section">
          <h3>Practice Questions</h3>
          <p>1. What are the main outcomes of democracy?</p>
          <p>2. Explain how democracy ensures accountable government.</p>
          <p>3. Discuss the role of democracy in reducing inequality.</p>
          <p>4. Compare the economic outcomes of democracy and dictatorship.</p>
          <p>5. How does democracy promote the dignity of individuals?</p>
          <p>6. Describe the importance of transparency in democratic systems.</p>
        </div>

        <div className="topic-section">
          <h3>Answers to Practice Questions</h3>
          <ul>
            <li><strong>1. What are the main outcomes of democracy?</strong> Outcomes include accountable government, equality, reduced conflicts, and legitimacy through public participation.</li>
            <li><strong>2. Explain how democracy ensures accountable government.</strong> Through regular elections, citizens can remove unresponsive leaders, ensuring governments respond to public needs.</li>
            <li><strong>3. Discuss the role of democracy in reducing inequality.</strong> Democracies implement policies like reservations and welfare to reduce social and economic gaps, promoting fairness.</li>
            <li><strong>4. Compare the economic outcomes of democracy and dictatorship.</strong> Dictatorships may achieve rapid growth but at the cost of rights; democracies ensure sustainable development without famines.</li>
            <li><strong>5. How does democracy promote the dignity of individuals?</strong> By ensuring equal rights, rule of law, and respect for all, regardless of caste, gender, or religion.</li>
            <li><strong>6. Describe the importance of transparency in democratic systems.</strong> Transparency allows public oversight, reduces corruption, and builds trust in government institutions.</li>
          </ul>
        </div>

        <div className="key-points">
          <h3>Key Points for Revision</h3>
          <p>Outcomes: Accountable, legitimate government. Equality: Reduced inequalities. Growth: Sustainable, no famines. <strong>Additional Notes:</strong> Democracy's success lies in delivering justice and equality, making it preferable despite challenges.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 CBSE Educational Resources. All rights reserved.</p>
          <p className="premium-cta">Want to explore more? <a href="../../../../premium_users/index.html" className="premium-link">Unlock Premium Content</a></p>
        </div>
      </footer>

      {/* Login Modal */}
      {showModal && (
        <div id="loginModal" className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={closeLoginModal}>&times;</span>
            <h2>Join Our Learning Community</h2>
            <p>Sign up or log in to access personalized features, track your progress, and get the most out of our educational resources!</p>
            <button className="modal-button" onClick={() => alert('Login functionality would be implemented here')}>Sign Up</button>
            <button className="modal-button cancel" onClick={closeLoginModal}>Maybe Later</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chapter7;
