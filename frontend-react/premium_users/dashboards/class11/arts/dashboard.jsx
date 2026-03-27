import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../../../js/services/authService.js';
import StreamService from '../../../../js/services/streamService.js';
import './dashboard.css';

const ArtsDashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const initializeDashboard = async () => {
            try {
                const currentUser = authService.getCurrentUser();
                
                if (!currentUser) {
                    navigate('/premium_users/login');
                    return;
                }

                // Verify the user is in the correct stream
                if (currentUser.stream?.toLowerCase() !== 'arts') {
                    StreamService.redirectToDashboard(currentUser);
                    return;
                }

                setUser(currentUser);
            } catch (error) {
                console.error('Dashboard initialization error:', error);
                navigate('/premium_users/login');
            } finally {
                setLoading(false);
            }
        };

        initializeDashboard();
    }, [navigate]);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await authService.logout();
            navigate('/premium_users/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleSubjectClick = (subject) => {
        navigate(`/premium_users/dashboards/class11/arts/${subject}`);
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <h2>mastercbse</h2>
                    <p>Class 11 Arts</p>
                </div>
                <nav className="nav-menu">
                    <a href="#" className="active">
                        <i className="fas fa-home"></i> Home
                    </a>
                    <a href="#">
                        <i className="fas fa-book"></i> Study Material
                    </a>
                    <a href="#">
                        <i className="fas fa-tasks"></i> Assignments
                    </a>
                    <a href="#">
                        <i className="fas fa-chart-line"></i> Progress
                    </a>
                    <a href="#">
                        <i className="fas fa-question-circle"></i> Doubts
                    </a>
                    <a href="#" onClick={handleLogout} id="logoutBtn">
                        <i className="fas fa-sign-out-alt"></i> Logout
                    </a>
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
                        <span>{user?.name || user?.email || 'Loading...'}</span>
                        <div className="user-avatar">
                            <i className="fas fa-user-circle"></i>
                        </div>
                    </div>
                </header>

                <div className="dashboard-content">
                    <div className="stream-header">
                        <h1>Arts Stream</h1>
                        <a href="../dashboard.html" className="change-stream">Change Stream</a>
                    </div>
                    
                    <div className="welcome-banner">
                        <h2>Welcome, {user?.name || 'Student'}!</h2>
                        <p>Access your arts stream resources and explore humanities.</p>
                    </div>

                    {/* Core Subjects */}
                    <div className="section">
                        <h2>Core Subjects</h2>
                        <div 
                            className="subject-option" 
                            onClick={() => handleSubjectClick('history')}
                        >
                            <i className="fas fa-landmark"></i>
                            <div className="subject-info">
                                <h3>History</h3>
                                <p>World History and Indian History</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                        
                        <div 
                            className="subject-option" 
                            onClick={() => handleSubjectClick('geography')}
                        >
                            <i className="fas fa-globe-asia"></i>
                            <div className="subject-info">
                                <h3>Geography</h3>
                                <p>Physical and Human Geography</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                        
                        <div 
                            className="subject-option" 
                            onClick={() => handleSubjectClick('political-science')}
                        >
                            <i className="fas fa-balance-scale"></i>
                            <div className="subject-info">
                                <h3>Political Science</h3>
                                <p>Indian Constitution and Politics</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>

                    {/* Additional Subjects */}
                    <div className="section">
                        <h2>Additional Subjects</h2>
                        <div className="dashboard-grid">
                            <div className="card">
                                <i className="fas fa-brain"></i>
                                <h3>Psychology</h3>
                                <p>Human behavior and mind</p>
                                <a href="#" className="btn">Open</a>
                            </div>
                            <div className="card">
                                <i className="fas fa-palette"></i>
                                <h3>Fine Arts</h3>
                                <p>Painting and Visual Arts</p>
                                <a href="#" className="btn">Open</a>
                            </div>
                            <div className="card">
                                <i className="fas fa-language"></i>
                                <h3>English Core</h3>
                                <p>Literature and writing skills</p>
                                <a href="#" className="btn">Open</a>
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
                                <div className="test-topic">The French Revolution</div>
                                <div className="test-date">Tomorrow, 10:00 AM</div>
                                <a href="#" className="btn btn-sm">Start Test</a>
                            </div>
                            <div className="test-card">
                                <div className="test-subject">Geography</div>
                                <div className="test-topic">Earth's Structure</div>
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

export default ArtsDashboard;
