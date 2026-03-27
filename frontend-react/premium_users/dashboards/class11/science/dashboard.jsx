import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../../../src/services/authService';
import StreamService from '../../../../src/services/streamService';
import '../../../../src/styles/PremiumDashboard.css';

const ScienceDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = authService.getCurrentUser();

        if (!currentUser) {
            navigate('/premium/login');
            return;
        }

        // Verify the user is in the correct stream
        if (currentUser.stream?.toLowerCase() !== 'science' &&
            currentUser.stream?.toLowerCase() !== 'pcm' &&
            currentUser.stream?.toLowerCase() !== 'pcb') {

            // If StreamService.redirectToDashboard uses window.location, let it handle generic redirection
            // Or manually redirect using navigate if we knew the logic perfectly.
            // StreamService.redirectToDashboard(currentUser); 
            // Better to custom handle if we want SPA navigation, but keeping it simple for now:
            const path = StreamService.getDashboardPath(currentUser);
            if (path) navigate(path);
            return;
        }

        setUser(currentUser);
    }, [navigate]);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await authService.logout();
            navigate('/premium/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (!user) return <div className="loading-state">Loading...</div>;

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <h2>mastercbse</h2>
                    <p>Class 11 Science</p>
                </div>
                <nav className="nav-menu">
                    <a href="#" className="active" onClick={(e) => e.preventDefault()}><i className="fas fa-home"></i> Home</a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-book"></i> Study Material</a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-tasks"></i> Assignments</a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-chart-line"></i> Progress</a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-question-circle"></i> Doubts</a>
                    <a href="#" onClick={handleLogout} id="logoutBtn"><i className="fas fa-sign-out-alt"></i> Logout</a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <header className="top-bar header">
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
                        <h1>Science Stream (PCM/PCB)</h1>
                        <a href="/premium/dashboard" className="change-stream">Change Stream</a>
                    </div>

                    <div className="welcome-banner welcome-card">
                        <h2>Hello, <span id="welcomeName">{user.name || 'Student'}</span>!</h2>
                        <p>Access your science stream resources and track your progress.</p>
                    </div>

                    {/* Core Subjects */}
                    <div className="section">
                        <h2>Core Subjects</h2>
                        <div className="subject-option" onClick={() => navigate('#physics')}>
                            <i className="fas fa-atom"></i>
                            <div className="subject-info">
                                <h3>Physics</h3>
                                <p>Mechanics, Thermodynamics, and more</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>

                        <div className="subject-option" onClick={() => navigate('#chemistry')}>
                            <i className="fas fa-flask"></i>
                            <div className="subject-info">
                                <h3>Chemistry</h3>
                                <p>Organic, Inorganic, and Physical Chemistry</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>

                        <div className="subject-option" onClick={() => navigate('#maths')}>
                            <i className="fas fa-calculator"></i>
                            <div className="subject-info">
                                <h3>Mathematics</h3>
                                <p>Calculus, Algebra, and more</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>

                        <div className="subject-option" onClick={() => navigate('#biology')}>
                            <i className="fas fa-dna"></i>
                            <div className="subject-info">
                                <h3>Biology</h3>
                                <p>Botany and Zoology</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>

                    {/* Additional Subjects */}
                    <div className="section">
                        <h2>Additional Subjects</h2>
                        <div className="dashboard-grid">
                            <div className="card">
                                <i className="fas fa-laptop-code"></i>
                                <h3>Computer Science</h3>
                                <p>Python programming and more</p>
                                <a href="#" className="btn btn-primary">Open</a>
                            </div>
                            <div className="card">
                                <i className="fas fa-language"></i>
                                <h3>English Core</h3>
                                <p>Literature and writing skills</p>
                                <a href="#" className="btn btn-primary">Open</a>
                            </div>
                            <div className="card">
                                <i className="fas fa-book"></i>
                                <h3>Hindi Core</h3>
                                <p>हिंदी साहित्य और व्याकरण</p>
                                <a href="#" className="btn btn-primary">Open</a>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Tests */}
                    <div className="section">
                        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h2>Upcoming Tests</h2>
                            <a href="#" className="view-all btn btn-outline btn-sm">View All</a>
                        </div>
                        <div className="upcoming-tests" style={{ marginTop: '0' }}>
                            <div className="test-card">
                                <div className="test-subject">Physics</div>
                                <div className="test-topic">Units and Measurements</div>
                                <div className="test-date">Tomorrow, 10:00 AM</div>
                                <a href="#" className="btn btn-sm btn-primary">Start Test</a>
                            </div>
                            <div className="test-card">
                                <div className="test-subject">Chemistry</div>
                                <div className="test-topic">Structure of Atom</div>
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

export default ScienceDashboard;
