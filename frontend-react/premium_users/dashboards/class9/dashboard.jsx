import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../js/services/authService';
import '../../../src/styles/PremiumDashboard.css';

const Class9Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = authService.getCurrentUser();
            if (!currentUser) {
                navigate('/login'); // Adjust route as needed
                return;
            }
            setUser(currentUser);
            setLoading(false);
        };

        fetchUser();
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

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <h2>mastercbse</h2>
                    <p>Class 9 Dashboard</p>
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
                    <h1>Welcome to Class 9 Dashboard</h1>
                    <div className="welcome-banner">
                        <h2>Hello, <span id="welcomeName">{user.name || 'Student'}</span>!</h2>
                        <p>Access your study materials, assignments, and track your progress.</p>
                    </div>

                    {/* Class 9 Specific Content */}
                    <div className="dashboard-grid">
                        <div className="card">
                            <i className="fas fa-book-open"></i>
                            <h3>Mathematics</h3>
                            <p>Access chapter-wise study materials and practice problems</p>
                            <a href="#" className="btn">Open</a>
                        </div>
                        <div className="card">
                            <i className="fas fa-flask"></i>
                            <h3>Science</h3>
                            <p>Explore Physics, Chemistry, and Biology resources</p>
                            <a href="#" className="btn">Open</a>
                        </div>
                        <div className="card">
                            <i className="fas fa-globe-asia"></i>
                            <h3>Social Studies</h3>
                            <p>History, Geography, and Civics study materials</p>
                            <a href="#" className="btn">Open</a>
                        </div>
                        <div className="card">
                            <i className="fas fa-language"></i>
                            <h3>Languages</h3>
                            <p>English, Hindi, and other language resources</p>
                            <a href="#" className="btn">Open</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class9Dashboard;
