import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/PremiumDashboard.css';

const PremiumDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check authentication
        const isAuthenticated = sessionStorage.getItem('isAuthenticated');
        const userEmail = sessionStorage.getItem('userEmail');
        const userData = localStorage.getItem('userData');

        if (isAuthenticated && userEmail) {
            const parsedUserData = userData ? JSON.parse(userData) : {};
            const userName = userEmail.split('@')[0];
            setUser({
                email: userEmail,
                name: userName.charAt(0).toUpperCase() + userName.slice(1),
                initial: userEmail.charAt(0).toUpperCase(),
                ...parsedUserData
            });
            setLoading(false);
        } else {
            // Redirect to login
            setTimeout(() => {
                navigate('/premium/login?message=' + encodeURIComponent('Please log in to access the dashboard') + '&type=error');
            }, 2000);
        }
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem('isAuthenticated');
        sessionStorage.removeItem('userEmail');
        localStorage.removeItem('userData');
        navigate('/premium/login?message=' + encodeURIComponent('You have been successfully logged out') + '&type=success');
    };

    if (loading) {
        return (
            <div className="dashboard-container">
                <div className="loading-screen">
                    <div className="spinner"></div>
                    <p>Loading dashboard...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="dashboard-container">
                <div className="alert alert-error">
                    <i className="fas fa-exclamation-circle"></i>
                    <span>You need to be logged in to access the dashboard.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">mastercbse</div>
                <ul className="nav-menu">
                    <li className="nav-item active">
                        <i className="fas fa-home"></i> Dashboard
                    </li>
                    <li className="nav-item">
                        <i className="fas fa-book"></i> My Courses
                    </li>
                    <li className="nav-item">
                        <i className="fas fa-tasks"></i> Assignments
                    </li>
                    <li className="nav-item">
                        <i className="fas fa-chart-line"></i> Progress
                    </li>
                    <li className="nav-item">
                        <i className="fas fa-cog"></i> Settings
                    </li>
                    <li className="nav-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                        <i className="fas fa-sign-out-alt"></i> Logout
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <div className="header">
                    <h2>Dashboard</h2>
                    <div className="user-info">
                        <span>{user.email}</span>
                        <div className="user-avatar">{user.initial}</div>
                    </div>
                </div>

                {/* Welcome Card */}
                <div className="welcome-card">
                    <h1>Welcome back, {user.name}! 👋</h1>
                    <p>Here's what's happening with your learning journey today.</p>
                </div>

                {/* Dashboard Content */}
                <div className="dashboard-content">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-book-open"></i>
                            </div>
                            <div className="stat-info">
                                <h3>12</h3>
                                <p>Courses Enrolled</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-tasks"></i>
                            </div>
                            <div className="stat-info">
                                <h3>8</h3>
                                <p>Assignments Pending</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <div className="stat-info">
                                <h3>85%</h3>
                                <p>Average Score</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="stat-info">
                                <h3>24h</h3>
                                <p>Study Time</p>
                            </div>
                        </div>
                    </div>

                    <div className="content-grid">
                        <div className="content-card">
                            <h3>Your Learning Progress</h3>
                            <p>You're doing great! Keep up the good work.</p>
                            <div style={{ marginTop: '1rem' }}>
                                <Link to="/home" className="btn btn-primary">Continue Learning</Link>
                            </div>
                        </div>

                        <div className="content-card">
                            <h3>Recent Activity</h3>
                            <ul className="activity-list">
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    <span>Completed Chapter 5 - Mathematics</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    <span>Submitted Assignment - Physics</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    <span>Scored 92% in Chemistry Quiz</span>
                                </li>
                            </ul>
                        </div>

                        <div className="content-card">
                            <h3>Upcoming Deadlines</h3>
                            <ul className="deadline-list">
                                <li>
                                    <span className="deadline-date">Feb 5</span>
                                    <span>Mathematics Assignment</span>
                                </li>
                                <li>
                                    <span className="deadline-date">Feb 8</span>
                                    <span>Physics Lab Report</span>
                                </li>
                                <li>
                                    <span className="deadline-date">Feb 10</span>
                                    <span>Chemistry Test</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PremiumDashboard;
