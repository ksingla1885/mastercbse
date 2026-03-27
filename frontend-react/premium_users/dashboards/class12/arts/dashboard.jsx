import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../../../src/services/authService';
import StreamService from '../../../../src/services/streamService';
import '../../../../src/styles/PremiumDashboard.css';
import '../../../../src/styles/Class12ArtsDashboard.css';

const Class12ArtsDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = authService.getCurrentUser();

        if (!currentUser) {
            navigate('/login');
            return;
        }

        // Verify the user is in the correct stream
        if (currentUser.stream?.toLowerCase() !== 'arts') {
            const correctPath = StreamService.getDashboardPath(currentUser);
            navigate(correctPath);
            return;
        }

        setUser(currentUser);
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

    if (!user) return <div className="loading">Loading...</div>;

    return (
        <div className="dashboard-container class12-arts-dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <h2>mastercbse</h2>
                    <p>Class 12 Arts</p>
                </div>
                <nav className="nav-menu">
                    <a href="#" className="active"><i className="fas fa-home"></i> Home</a>
                    <a href="#"><i className="fas fa-book"></i> Study Material</a>
                    <a href="#"><i className="fas fa-tasks"></i> Assignments</a>
                    <a href="#"><i className="fas fa-chart-line"></i> Progress</a>
                    <a href="#"><i className="fas fa-question-circle"></i> Doubts</a>
                    <a href="#" onClick={handleLogout} id="logoutBtn"><i className="fas fa-sign-out-alt"></i> Logout</a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <header className="top-bar">
                    <div className="search-bar">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="user-info">
                        <span id="userName">{user.name || user.email}</span>
                        <div className="user-avatar">
                            <i className="fas fa-user-circle"></i>
                        </div>
                    </div>
                </header>

                <div className="dashboard-content">
                    <div className="stream-header">
                        <h1>Arts Stream - Class 12</h1>
                        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/premium/dashboard'); }} className="change-stream">Change Stream</a>
                    </div>

                    <div className="welcome-banner">
                        <h2>Welcome, <span id="welcomeName">{user.name || 'Student'}</span>!</h2>
                        <p>Access your Class 12 Arts resources and prepare for board exams.</p>
                    </div>

                    {/* Board Exam Notice */}
                    <div className="board-exam-section">
                        <h3><i className="fas fa-exclamation-circle"></i> Board Exam Preparation</h3>
                        <p>Access board exam resources, sample papers, and previous year questions to excel in your CBSE Class 12 Board Exams.</p>
                        <a href="#board-resources" className="btn btn-sm">View Resources</a>
                    </div>

                    {/* Core Subjects */}
                    <div className="section">
                        <h2>Core Subjects</h2>
                        <div className="subject-option" onClick={() => navigate('#history')}>
                            <i className="fas fa-landmark"></i>
                            <div className="subject-info">
                                <h3>History</h3>
                                <p>Modern Indian History, World History, and Historiography</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>

                        <div className="subject-option" onClick={() => navigate('#political-science')}>
                            <i className="fas fa-balance-scale"></i>
                            <div className="subject-info">
                                <h3>Political Science</h3>
                                <p>Contemporary World Politics and Politics in India since Independence</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>

                        <div className="subject-option" onClick={() => navigate('#geography')}>
                            <i className="fas fa-globe-asia"></i>
                            <div className="subject-info">
                                <h3>Geography</h3>
                                <p>Human Geography and India: People and Economy</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>

                    {/* Additional Resources */}
                    <div className="section">
                        <h2>Additional Resources</h2>
                        <div className="dashboard-grid">
                            <div className="card">
                                <i className="fas fa-book-reader"></i>
                                <h3>Sample Papers</h3>
                                <p>Latest CBSE sample papers with solutions</p>
                                <a href="#" className="btn">View Papers</a>
                            </div>
                            <div className="card">
                                <i className="fas fa-university"></i>
                                <h3>Humanities</h3>
                                <p>Resources for higher education in humanities</p>
                                <a href="#" className="btn">Explore</a>
                            </div>
                            <div className="card">
                                <i className="fas fa-pen-nib"></i>
                                <h3>Creative Writing</h3>
                                <p>Develop your writing skills</p>
                                <a href="#" className="btn">Start Writing</a>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Tests */}
                    <div className="section">
                        <div className="section-header">
                            <h2>Upcoming Tests</h2>
                            <a href="#" className="view-all">View All</a>
                        </div>
                        <div className="upcoming-tests">
                            <div className="test-card">
                                <div className="test-subject">History</div>
                                <div className="test-topic">The Harappan Civilization</div>
                                <div className="test-date">Tomorrow, 10:00 AM</div>
                                <a href="#" className="btn btn-sm">Start Test</a>
                            </div>
                            <div className="test-card">
                                <div className="test-subject">Political Science</div>
                                <div className="test-topic">The Cold War Era</div>
                                <div className="test-date">In 2 days, 11:30 AM</div>
                                <a href="#" className="btn btn-sm">Start Test</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class12ArtsDashboard;
