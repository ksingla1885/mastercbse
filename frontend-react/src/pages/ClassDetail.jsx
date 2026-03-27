import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { classes } from '../data/classData';
import Navbar from '../components/Navbar';

const ClassDetail = () => {
    const { classId } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    // Find the class data based on the ID or Name
    // Note: the URL param might be "Class 1" or "class-1" depending on how we routed it.
    // In Home.jsx we did: navigate(`/class/${className}`); so it will be "Class 1".
    const classData = classes.find(c => c.name === classId);

    if (!classData) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Class Not Found</h2>
                <button className="cta-button" onClick={() => navigate('/home')}>Go Back Home</button>
            </div>
        );
    }

    const handleSubjectClick = (subject) => {
        // For now, these might redirect to specific subject pages or just show an alert
        // In the original, it was navigateToSubject('English')
        alert(`Navigating to ${subject} resources... (Feature coming soon)`);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="class-detail-page">
            <Navbar />

            <section className="hero" id="home">
                <div className="hero-content">
                    <h1>Welcome to {classData.name}</h1>
                    <p>
                        Explore the foundational subjects for {classData.name}.
                        Build a strong base in {classData.subjects.join(', ')}.
                    </p>
                    <button className="cta-button" onClick={toggleModal}>Get Started</button>
                </div>
            </section>

            <section className="classes-overview" id="subjects">
                <h2>{classData.name} Subjects</h2>
                <div className="classes-grid">
                    {classData.subjects.map((subject, index) => (
                        <div className="class-card" key={index}>
                            <h3>{subject}</h3>
                            <ul>
                                {/* 
                  If 'details' exists in classData for this subject, show it.
                  Otherwise, show generic items or placeholder.
                */}
                                {classData.details && classData.details[subject] ? (
                                    classData.details[subject].map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))
                                ) : (
                                    <li>Resources unavailable</li>
                                )}
                            </ul>
                            <button className="cta-button" onClick={() => handleSubjectClick(subject)}>Explore Subject</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="about" id="about">
                <div className="classes-overview">
                    <h2>About {classData.name} Resources</h2>
                    <div className="classes-grid">
                        <div className="class-card">
                            <h3>Learning Objectives</h3>
                            <p>{classData.name} focuses on building foundational skills through engaging and age-appropriate content.</p>
                        </div>

                        <div className="class-card">
                            <h3>Key Subjects</h3>
                            <ul>
                                {classData.subjects.map((subject, idx) => (
                                    <li key={idx}>{subject}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="class-card">
                            <h3>Resources</h3>
                            <p>Access worksheets, interactive activities, and supplementary materials designed specifically for {classData.name} students.</p>
                            <button className="cta-button" onClick={toggleModal}>Access Resources</button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2024 mastercbse. All rights reserved.</p>
            </footer>

            {/* Login Modal */}
            {showModal && (
                <div className="modal" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <div className="modal-content" style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '8px',
                        maxWidth: '500px',
                        textAlign: 'center'
                    }}>
                        <span className="close" onClick={toggleModal} style={{ float: 'right', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</span>
                        <h2>Join Our Learning Community</h2>
                        <p>Sign up or log in to access personalized features, track your progress, and get the most out of our educational resources!</p>
                        <div style={{ marginTop: '1rem' }}>
                            <button className="cta-button" onClick={() => alert('Sign Up functionality coming soon')} style={{ marginRight: '1rem' }}>Sign Up</button>
                            <button className="cta-button" style={{ backgroundColor: '#aaa' }} onClick={toggleModal}>Maybe Later</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClassDetail;
