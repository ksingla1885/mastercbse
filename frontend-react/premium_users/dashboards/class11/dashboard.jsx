import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../js/services/authService.jsx';
import '../../../src/styles/PremiumDashboard.css';

const Class11Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [activeStream, setActiveStream] = useState('');

    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        if (!currentUser) {
            // navigate('/login'); // specific login path might need adjustment
            // For now, redirect to main login or handle as needing auth
            // Assuming there is a route for login
            window.location.href = '/login'; // Fallback if internal routing setup isn't fully known, but try safe navigation
            return;
        }
        setUser(currentUser);

        // Initialize stream from user preference or default
        if (currentUser.stream) {
            setActiveStream(currentUser.stream.toLowerCase());
        }
    }, [navigate]);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await authService.logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleStreamSelect = (stream) => {
        setActiveStream(stream);
        if (user) {
            const updatedUser = { ...user, stream };
            // Simulate saving to local storage as per original script
            localStorage.setItem('user', JSON.stringify(updatedUser)); // Adjust key if authService uses a specific one
            // Ideally call authService.updateUser(updatedUser) if it exists
        }
    };

    if (!user) return <div className="loading">Loading...</div>;

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <h2>mastercbse</h2>
                    <p>Class 11 Dashboard</p>
                </div>
                <nav className="nav-menu">
                    <Link to="#" className="nav-item active"><i className="fas fa-home"></i> Home</Link>
                    <Link to="#" className="nav-item"><i className="fas fa-book"></i> Study Material</Link>
                    <Link to="#" className="nav-item"><i className="fas fa-tasks"></i> Assignments</Link>
                    <Link to="#" className="nav-item"><i className="fas fa-chart-line"></i> Progress</Link>
                    <div onClick={handleLogout} className="nav-item" role="button" tabIndex={0}><i className="fas fa-sign-out-alt"></i> Logout</div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <header className="header">
                    <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: '#f3f4f6', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
                        <i className="fas fa-search" style={{ color: '#9ca3af', marginRight: '0.5rem' }}></i>
                        <input type="text" placeholder="Search..." style={{ border: 'none', background: 'transparent', outline: 'none', width: '200px' }} />
                    </div>
                    <div className="user-info">
                        <span id="userName">{user.name || user.email}</span>
                        <div className="user-avatar">
                            <i className="fas fa-user-circle"></i>
                        </div>
                    </div>
                </header>

                <div className="dashboard-content">
                    <div className="welcome-card">
                        <h1>Welcome to Class 11</h1>
                        <div className="welcome-banner">
                            <h2>Hello, <span id="welcomeName">{user.name || 'Student'}</span>!</h2>
                            <p>Please select your stream to continue to your dashboard.</p>
                        </div>
                    </div>

                    {/* Stream Selection */}
                    <div className="stream-selection">
                        <div className="section-title">
                            <h2>Select Your Stream</h2>
                            <p>Choose the stream you're enrolled in to access relevant study materials and resources.</p>
                        </div>

                        <div className="stream-buttons">
                            <button
                                className={`stream-btn ${activeStream === 'science' ? 'active' : ''}`}
                                onClick={() => handleStreamSelect('science')}
                            >
                                Science (PCM/PCB)
                            </button>
                            <button
                                className={`stream-btn ${activeStream === 'commerce' ? 'active' : ''}`}
                                onClick={() => handleStreamSelect('commerce')}
                            >
                                Commerce
                            </button>
                            <button
                                className={`stream-btn ${activeStream === 'arts' ? 'active' : ''}`}
                                onClick={() => handleStreamSelect('arts')}
                            >
                                Arts/Humanities
                            </button>
                        </div>
                    </div>

                    {/* Science Stream */}
                    {activeStream === 'science' && (
                        <div className="stream-content active">
                            <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Science Stream (PCM/PCB)</h2>
                            <div className="dashboard-grid">
                                <Card icon="fas fa-atom" title="Physics" description="Mechanics, Thermodynamics, and more" />
                                <Card icon="fas fa-flask" title="Chemistry" description="Organic, Inorganic, and Physical Chemistry" />
                                <Card icon="fas fa-calculator" title="Mathematics" description="Calculus, Algebra, and more" />
                                <Card icon="fas fa-dna" title="Biology" description="Botany and Zoology" />
                                <Card icon="fas fa-laptop-code" title="Computer Science" description="Python programming and more" />
                                <Card icon="fas fa-language" title="English Core" description="Literature and writing skills" />
                            </div>
                        </div>
                    )}

                    {/* Commerce Stream */}
                    {activeStream === 'commerce' && (
                        <div className="stream-content active">
                            <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Commerce Stream</h2>
                            <div className="dashboard-grid">
                                <Card icon="fas fa-calculator" title="Accountancy" description="Financial accounting and statements" />
                                <Card icon="fas fa-chart-line" title="Business Studies" description="Business concepts and case studies" />
                                <Card icon="fas fa-percent" title="Economics" description="Micro and Macro Economics" />
                                <Card icon="fas fa-calculator" title="Mathematics" description="Business Mathematics" />
                                <Card icon="fas fa-gavel" title="Entrepreneurship" description="Business planning and management" />
                                <Card icon="fas fa-language" title="English Core" description="Literature and writing skills" />
                            </div>
                        </div>
                    )}

                    {/* Arts Stream */}
                    {activeStream === 'arts' && (
                        <div className="stream-content active">
                            <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Arts Stream</h2>
                            <div className="dashboard-grid">
                                <Card icon="fas fa-landmark" title="History" description="World History and Indian History" />
                                <Card icon="fas fa-globe-asia" title="Geography" description="Physical and Human Geography" />
                                <Card icon="fas fa-balance-scale" title="Political Science" description="Indian Constitution and Politics" />
                                <Card icon="fas fa-brain" title="Psychology" description="Human behavior and mind" />
                                <Card icon="fas fa-palette" title="Fine Arts" description="Painting and Visual Arts" />
                                <Card icon="fas fa-language" title="English Core" description="Literature and writing skills" />
                            </div>
                        </div>
                    )}

                    {/* Common Resources */}
                    <div className="section-title" style={{ marginTop: '40px' }}>
                        <h2>Common Resources</h2>
                    </div>
                    <div className="dashboard-grid">
                        <Card icon="fas fa-book-reader" title="Sample Papers" description="Previous year question papers" />
                        <Card icon="fas fa-trophy" title="Competitive Exams" description="Entrance exam preparation" btnText="Explore" />
                        <Card icon="fas fa-graduation-cap" title="Career Guidance" description="Career options and counseling" btnText="Explore" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper Component for Cards to reduce repetition
const Card = ({ icon, title, description, btnText = "Open" }) => (
    <div className="card">
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn btn-outline">{btnText}</button>
    </div>
);

export default Class11Dashboard;
