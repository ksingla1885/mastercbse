import React, { useEffect, useState } from 'react';
import { authService } from '../../js/services/authService.jsx';
import '../../../src/styles/PremiumDashboard.css';

const Class10Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = authService.getCurrentUser();

        if (!currentUser) {
            // Redirect to login if not authenticated
            // Assuming we are in a SPA router environment or fallback to window location
            window.location.href = '/premium/login';
            return;
        }
        setUser(currentUser);
    }, []);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await authService.logout();
            window.location.href = '/premium/login';
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (!user) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <h2>mastercbse</h2>
                    <p>Class 10 Dashboard</p>
                </div>
                <nav className="nav-menu">
                    <a href="#" className="active"><i className="fas fa-home"></i> Home</a>
                    <a href="#"><i className="fas fa-book"></i> Study Material</a>
                    <a href="#"><i className="fas fa-tasks"></i> Assignments</a>
                    <a href="#"><i className="fas fa-chart-line"></i> Progress</a>
                    <a href="#"><i className="fas fa-question-circle"></i> Doubts</a>
                    <a href="#" id="logoutBtn" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Logout</a>
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
                    <h1>Welcome to Class 10 Dashboard</h1>
                    <div className="welcome-banner">
                        <h2>Hello, <span id="welcomeName">{user.name || 'Student'}</span>!</h2>
                        <p>Access your study materials, assignments, and track your progress for CBSE Class 10.</p>
                    </div>

                    {/* Class 10 Specific Content */}
                    <div className="dashboard-grid">
                        <div className="card">
                            <i className="fas fa-calculator"></i>
                            <h3>Mathematics</h3>
                            <p>Practice problems and solutions for CBSE Class 10</p>
                            <a href="#" className="btn">Open</a>
                        </div>

                        <div className="card">
                            <i className="fas fa-flask"></i>
                            <h3>Science</h3>
                            <p>Physics, Chemistry, and Biology study materials</p>
                            <a href="#" className="btn">Open</a>
                        </div>

                        <div className="card">
                            <i className="fas fa-language"></i>
                            <h3>English</h3>
                            <p>Literature and language skills development</p>
                            <a href="#" className="btn">Open</a>
                        </div>

                        <div className="card">
                            <i className="fas fa-book"></i>
                            <h3>Hindi</h3>
                            <p>हिंदी व्याकरण और साहित्य</p>
                            <a href="#" className="btn">Open</a>
                        </div>

                        <div className="card">
                            <i className="fas fa-globe-asia"></i>
                            <h3>Social Science</h3>
                            <p>History, Geography, and Political Science</p>
                            <a href="#" className="btn">Open</a>
                        </div>

                        <div className="card">
                            <i className="fas fa-laptop-code"></i>
                            <h3>Information Technology</h3>
                            <p>Computer applications and coding</p>
                            <a href="#" className="btn">Open</a>
                        </div>

                        <div className="card">
                            <i className="fas fa-book-reader"></i>
                            <h3>Sample Papers</h3>
                            <p>Previous year question papers</p>
                            <a href="#" className="btn">Open</a>
                        </div>

                        <div className="card">
                            <i className="fas fa-trophy"></i>
                            <h3>Competitive Exams</h3>
                            <p>NTSE, Olympiads, and more</p>
                            <a href="#" className="btn">Explore</a>
                        </div>
                    </div>

                    {/* Upcoming Tests Section */}
                    <div className="section-title">
                        <h2>Upcoming Tests</h2>
                        <a href="#" className="view-all">View All</a>
                    </div>
                    <div className="upcoming-tests">
                        <div className="test-card">
                            <div className="test-subject">Mathematics</div>
                            <div className="test-topic">Real Numbers</div>
                            <div className="test-date">Tomorrow, 10:00 AM</div>
                            <a href="#" className="btn btn-sm">Start Test</a>
                        </div>
                        <div className="test-card">
                            <div className="test-subject">Science</div>
                            <div className="test-topic">Chemical Reactions</div>
                            <div className="test-date">In 2 days, 11:30 AM</div>
                            <a href="#" className="btn btn-sm">Start Test</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class10Dashboard;
