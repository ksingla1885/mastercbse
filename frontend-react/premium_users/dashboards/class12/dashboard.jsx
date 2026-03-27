import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../js/services/authService';
import StreamService from '../../js/services/streamService';
import '../../../src/styles/PremiumDashboard.css';

const Class12Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const currentUser = await authService.getCurrentUser();

            if (!currentUser) {
                navigate('/premium/login');
                return;
            }

            if (currentUser.stream) {
                // If user already has a stream, redirect to their dashboard
                StreamService.redirectToDashboard(currentUser);
                return;
            }

            setUser(currentUser);
            setLoading(false);
        };

        checkAuth();
    }, []);

    const handleStreamSelect = async (stream) => {
        try {
            const updatedUser = await StreamService.saveStreamPreference(stream);
            StreamService.redirectToDashboard(updatedUser);
        } catch (error) {
            console.error('Error saving stream preference:', error);
            alert('Failed to save stream selection. Please try again.');
        }
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await authService.logout();
            navigate('/premium/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (loading) return <div className="loading-container">Loading...</div>;

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <h2>mastercbse</h2>
                    <p>Class 12 Dashboard</p>
                </div>
                <nav className="nav-menu">
                    <a href="#" className="nav-item active"><i className="fas fa-home"></i> Home</a>
                    <a href="#" className="nav-item"><i className="fas fa-book"></i> Study Material</a>
                    <a href="#" className="nav-item"><i className="fas fa-tasks"></i> Assignments</a>
                    <a href="#" className="nav-item"><i className="fas fa-chart-line"></i> Progress</a>
                    <a href="#" onClick={handleLogout} className="nav-item" id="logoutBtn"><i className="fas fa-sign-out-alt"></i> Logout</a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <header className="header">
                    <div className="search-bar">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search..." style={{ border: 'none', marginLeft: '10px', outline: 'none' }} />
                    </div>
                    <div className="user-info">
                        <span id="userName">{user?.name || user?.email}</span>
                        <div className="user-avatar">
                            <i className="fas fa-user-circle"></i>
                        </div>
                    </div>
                </header>

                <div className="dashboard-content">
                    <h1>Welcome to Class 12</h1>
                    <div className="welcome-banner">
                        <h2>Hello, <span id="welcomeName">{user?.name || 'Student'}</span>!</h2>
                        <p>Please select your stream to continue to your personalized dashboard.</p>
                    </div>

                    {/* Stream Selection */}
                    <div className="stream-selection">
                        <h2>Select Your Stream</h2>
                        <p>Choose the stream you're enrolled in to access relevant study materials and resources for your Class 12 board exams.</p>

                        <div className="stream-cards">
                            <div className="stream-card" id="scienceStream">
                                <div className="stream-icon">
                                    <i className="fas fa-atom"></i>
                                </div>
                                <h3>Science (PCM/PCB)</h3>
                                <p>Physics, Chemistry, Mathematics/Biology, and more. Ideal for students preparing for engineering, medical, or pure science fields.</p>
                                <button className="select-stream" onClick={() => handleStreamSelect('science')}>Select Science</button>
                            </div>

                            <div className="stream-card" id="commerceStream">
                                <div className="stream-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h3>Commerce</h3>
                                <p>Accountancy, Business Studies, Economics, and more. Perfect for future entrepreneurs, CAs, and business professionals.</p>
                                <button className="select-stream" onClick={() => handleStreamSelect('commerce')}>Select Commerce</button>
                            </div>

                            <div className="stream-card" id="artsStream">
                                <div className="stream-icon">
                                    <i className="fas fa-palette"></i>
                                </div>
                                <h3>Arts/Humanities</h3>
                                <p>History, Geography, Political Science, and more. For students interested in social sciences, law, or civil services.</p>
                                <button className="select-stream" onClick={() => handleStreamSelect('arts')}>Select Arts</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class12Dashboard;
