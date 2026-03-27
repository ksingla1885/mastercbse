import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from './js/services/authService';
import '../src/styles/PremiumDashboard.css';

const PremiumDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const currentUser = await authService.getCurrentUser();
            if (!currentUser) {
                navigate('/premium/login?message=' + encodeURIComponent('Please log in to access the dashboard') + '&type=error');
                return;
            }
            setUser(currentUser);
            setLoading(false);
        };
        checkAuth();
    }, [navigate]);

    const handleLogout = async () => {
        await authService.logout();
        navigate('/premium/login?message=' + encodeURIComponent('You have been successfully logged out') + '&type=success');
    };

    if (loading) {
        return <div className="dashboard-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>;
    }

    const userName = user?.name?.split(' ')[0] || 'Student';
    const userInitial = user?.name?.charAt(0).toUpperCase() || 'U';

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
                    <li className="nav-item" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i> Logout
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <div className="header">
                    <h2>Dashboard</h2>
                    <div className="user-info">
                        <span id="userEmail">{user?.email}</span>
                        <div className="user-avatar" id="userInitial">{userInitial}</div>
                    </div>
                </div>

                {/* Welcome Card */}
                <div className="welcome-card">
                    <h1>Welcome back, <span id="userName">{userName}</span>! 👋</h1>
                    <p>Here's what's happening with your learning journey today.</p>
                </div>

                {/* Dashboard Content */}
                <div id="dashboardContent">
                    <div className="welcome-card" style={{ borderLeftColor: '#4caf50' }}>
                        <h3>Your Learning Progress</h3>
                        <p>You're doing great! Keep up the good work.</p>
                        <div style={{ marginTop: '1rem' }}>
                            <button className="btn btn-primary">Continue Learning</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PremiumDashboard;
