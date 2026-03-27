import React, { useState } from 'react';
import './geography.css';

const Geography = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const navigateToChapter = (chapter) => {
    // Navigation logic would go here
    console.log(`Navigating to ${chapter}`);
  };

  const chapters = [
    {
      id: 'Chapter1',
      title: 'Chapter 1: Resources and Development',
      description: 'Understanding types of resources and sustainable development.'
    },
    {
      id: 'Chapter2',
      title: 'Chapter 2: Forest and Wildlife Resources',
      description: 'Conservation and management of forests and wildlife.'
    },
    {
      id: 'Chapter3',
      title: 'Chapter 3: Water Resources',
      description: 'Importance of water and conservation strategies.'
    },
    {
      id: 'Chapter4',
      title: 'Chapter 4: Agriculture',
      description: 'Types of farming and agricultural development in India.'
    },
    {
      id: 'Chapter5',
      title: 'Chapter 5: Minerals and Energy Resources',
      description: 'Mineral distribution and energy sources in India.'
    },
    {
      id: 'Chapter6',
      title: 'Chapter 6: Manufacturing Industries',
      description: 'Industrial development and its impact on the economy.'
    },
    {
      id: 'Chapter7',
      title: 'Chapter 7: Lifelines of National Economy',
      description: 'Transport, communication, and trade in India.'
    }
  ];

  const keyTopics = [
    'Resources and Development',
    'Forest and Wildlife',
    'Water Resources',
    'Agriculture',
    'Minerals and Energy',
    'Manufacturing Industries',
    'Lifelines of Economy'
  ];

  const studyTips = [
    'Use maps for resource distribution',
    'Understand conservation methods',
    'Analyze economic impacts',
    'Practice diagram-based questions'
  ];

  return (
    <div className="social-science-page geography-page">
      <header className="header">
        <div className="nav-container">
          <div className="logo">CBSE Resources - Class 10 Geography</div>
          <nav>
            <ul className="nav-links">
              <li><a href="../index.html">Home</a></li>
              <li><a href="#chapters">Chapters</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="../../../../premium_users/index.html" className="premium-nav">Premium</a></li>
              <li><a href="#" onClick={() => setShowLoginModal(true)}>Login</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Class 10 Geography</h1>
          <p>Explore resources, environment, and economic activities in India.</p>
          <button className="cta-button" onClick={() => setShowLoginModal(true)}>Get Started</button>
        </div>
      </section>

      <section className="chapters-overview" id="chapters">
        <h2>Class 10 Geography Chapters</h2>
        <div className="chapters-grid">
          {chapters.map((chapter) => (
            <div className="chapter-card" key={chapter.id}>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
              <button 
                className="cta-button" 
                onClick={() => navigateToChapter(chapter.id)}
              >
                Read Chapter
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="chapters-overview">
          <h2>About Class 10 Geography Resources</h2>
          <div className="chapters-grid">
            <div className="chapter-card">
              <h3>Learning Objectives</h3>
              <p>Class 10 Geography focuses on resources, environment, and economic activities to understand India's development.</p>
            </div>

            <div className="chapter-card">
              <h3>Key Topics</h3>
              <ul>
                {keyTopics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>

            <div className="chapter-card">
              <h3>Study Tips</h3>
              <ul>
                {studyTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="chapter-card">
              <h3>Resources</h3>
              <p>Access summaries, questions, and activities for Class 10 Geography.</p>
              <button className="cta-button" onClick={() => setShowLoginModal(true)}>Access Resources</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 CBSE Educational Resources. All rights reserved.</p>
          <p className="premium-cta">
            Want to explore more? <a href="../../../../premium_users/index.html" className="premium-link">Unlock Premium Content</a>
          </p>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowLoginModal(false)}>&times;</span>
            <h2>Join Our Learning Community</h2>
            <p>Sign up or log in to access personalized features, track your progress, and get the most out of our educational resources!</p>
            <button 
              className="modal-button" 
              onClick={() => alert('Login functionality would be implemented here')}
            >
              Sign Up
            </button>
            <button className="modal-button cancel" onClick={() => setShowLoginModal(false)}>Maybe Later</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Geography;
