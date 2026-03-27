import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../../../../../../src/services/authService';
import StreamService from '../../../../../../../src/services/streamService';
import '../../../../../../../src/styles/PremiumDashboard.css';

// Note: Imports adjusted to point to src folder from current location: 
// premium_users/dashboards/class12/commerce/ (depth 4) -> ../../../.. to root -> src/...
// Depth: 
// premium_users (1)
// dashboards (2)
// class12 (3)
// commerce (4)
// So ../../../../ is correct to reach frontend-react root. 
// Wait, let's verify depth again.
// d:\CBSE\frontend-react\premium_users\dashboards\class12\commerce\dashboard.jsx
// file is in commerce.
// .. -> class12
// .. -> dashboards
// .. -> premium_users
// .. -> frontend-react
// .. -> CBSE (outside) -> No.
// So ../../../../ is correct to get to frontend-react.
// Then src/services/authService.
// So: ../../../../src/services/authService
//
// My previous thought had too many ..'s in the import statement I just wrote in thought block.
// I will use ../../../../src...

const CommerceDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const currentUser = authService.getCurrentUser();

            if (!currentUser) {
                // If not logged in, redirect to login page (adjust path as needed)
                window.location.href = '/premium_users/login.html';
                return;
            }

            // Verify the user is in the correct stream
            if (currentUser.stream?.toLowerCase() !== 'commerce') {
                StreamService.redirectToDashboard(currentUser);
                return;
            }

            setUser(currentUser);
            setLoading(false);
        };

        checkAuth();
    }, [navigate]);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await authService.logout();
            window.location.href = '/premium_users/login.html';
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (loading) return <div className="loading-spinner">Loading...</div>;

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <h2>mastercbse</h2>
                    <p>Class 12 Commerce</p>
                </div>
                <nav className="nav-menu">
                    <a href="#" className="nav-item active"><i className="fas fa-home"></i> Home</a>
                    <a href="#" className="nav-item"><i className="fas fa-book"></i> Study Material</a>
                    <a href="#" className="nav-item"><i className="fas fa-tasks"></i> Assignments</a>
                    <a href="#" className="nav-item"><i className="fas fa-chart-line"></i> Progress</a>
                    <a href="#" className="nav-item"><i className="fas fa-question-circle"></i> Doubts</a>
                    <a href="#" className="nav-item" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Logout</a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <header className="header">
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
                        <h1>Commerce Stream - Class 12</h1>
                        <a href="/dashboard" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }} className="change-stream">Change Stream</a>
                    </div>

                    <div className="welcome-banner">
                        <h2>Welcome, <span id="welcomeName">{user.name || 'Student'}</span>!</h2>
                        <p>Access your Class 12 Commerce resources and prepare for board exams.</p>
                    </div>

                    {/* Board Exam Notice */}
                    <div className="board-exam-section">
                        <h3><i className="fas fa-exclamation-circle"></i> Board Exam Preparation</h3>
                        <p>Access board exam resources, sample papers, and previous year questions to excel in your CBSE Class 12 Board Exams.</p>
                        <a href="#board-resources" className="btn btn-sm btn-primary">View Resources</a>
                    </div>

                    {/* Core Subjects */}
                    <div className="section">
                        <h2>Core Subjects</h2>
                        <div className="subject-option" onClick={() => navigate('#accountancy')}>
                            <i className="fas fa-calculator"></i>
                            <div className="subject-info">
                                <h3>Accountancy</h3>
                                <p>Company Accounts, Financial Statements, and Analysis</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>

                        <div className="subject-option" onClick={() => navigate('#business-studies')}>
                            <i className="fas fa-chart-line"></i>
                            <div className="subject-info">
                                <h3>Business Studies</h3>
                                <p>Principles of Management, Marketing, and Finance</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>

                        <div className="subject-option" onClick={() => navigate('#economics')}>
                            <i className="fas fa-percent"></i>
                            <div className="subject-info">
                                <h3>Economics</h3>
                                <p>Macroeconomics and Indian Economic Development</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>

                    {/* Additional Resources */}
                    <div className="section">
                        <h2>Additional Resources</h2>
                        <div className="dashboard-grid">
                            <div className="card">
                                <i className="fas fa-file-invoice"></i>
                                <h3>Sample Papers</h3>
                                <p>Latest CBSE sample papers with solutions</p>
                                <a href="#" className="btn btn-outline">View Papers</a>
                            </div>
                            <div className="card">
                                <i className="fas fa-graduation-cap"></i>
                                <h3>CA/CS Foundation</h3>
                                <p>Professional course preparation</p>
                                <a href="#" className="btn btn-outline">Start Learning</a>
                            </div>
                            <div className="card">
                                <i className="fas fa-chart-pie"></i>
                                <h3>Stock Market</h3>
                                <p>Learn about trading and investments</p>
                                <a href="#" className="btn btn-outline">Explore</a>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Tests */}
                    <div className="section">
                        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <h2 style={{ margin: 0 }}>Upcoming Tests</h2>
                            <a href="#" className="view-all" style={{ color: '#2563eb', textDecoration: 'none' }}>View All</a>
                        </div>
                        <div className="upcoming-tests">
                            <div className="test-card">
                                <div className="test-subject">Accountancy</div>
                                <div className="test-topic">Company Accounts</div>
                                <div className="test-date">Tomorrow, 10:00 AM</div>
                                <a href="#" className="btn btn-sm btn-primary">Start Test</a>
                            </div>
                            <div className="test-card">
                                <div className="test-subject">Economics</div>
                                <div className="test-topic">National Income Accounting</div>
                                <div className="test-date">In 2 days, 11:30 AM</div>
                                <a href="#" className="btn btn-sm btn-primary">Start Test</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommerceDashboard;
