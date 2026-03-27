import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/admin.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        totalStudents: 0,
        activeCourses: 0,
        completionRate: 0,
        pendingActions: 0
    });
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load dashboard data
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        try {
            const baseUrl = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'production' ? '/api' : 'http://localhost:3000/api');
            const response = await fetch(`${baseUrl}/admin/dashboard/stats`, {
                credentials: 'include'
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setStats({
                        totalStudents: data.stats.totalUsers || 0,
                        activeCourses: data.stats.totalContent || 0,
                        completionRate: 0,
                        pendingActions: 0
                    });
                }
            }
        } catch (error) {
            console.error('Error loading dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            let baseUrl = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api', '/api/auth') : (import.meta.env.MODE === 'production' ? '/api/auth' : 'http://localhost:3000/api/auth');
            if (import.meta.env.VITE_API_URL && !import.meta.env.VITE_API_URL.endsWith('/auth')) {
                baseUrl = import.meta.env.VITE_API_URL.replace(/\/$/, '') + '/auth';
            }
            await fetch(`${baseUrl}/admin/logout`, {
                method: 'POST',
                credentials: 'include'
            });
            localStorage.clear();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
            localStorage.clear();
            navigate('/');
        }
    };

    const handleRemoveDummyData = async () => {
        if (!window.confirm('Are you sure you want to remove all dummy data? This action cannot be undone.')) {
            return;
        }

        try {
            const baseUrl = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'production' ? '/api' : 'http://localhost:3000/api');
            const response = await fetch(`${baseUrl}/admin/dummy-data`, {
                method: 'DELETE',
                credentials: 'include'
            });

            const data = await response.json();

            if (data.success) {
                alert(data.message);
                await loadDashboardData();
            } else {
                alert('Failed to remove dummy data: ' + data.message);
            }
        } catch (error) {
            console.error('Error removing dummy data:', error);
            alert('An error occurred while removing dummy data');
        }
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    if (loading) {
        return <div className="admin-loading">Loading dashboard...</div>;
    }

    return (
        <div className="admin-container">
            {/* Sidebar */}
            <aside className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-header" onClick={() => navigate('../index.html')}>
                    <h2><i className="fas fa-graduation-cap"></i> mastercbse</h2>
                </div>
                <nav className="nav-menu">
                    <div className="nav-item">
                        <a href="#" className="nav-link active">
                            <i className="fas fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="content_management/content_management.html" className="nav-link">
                            <i className="fas fa-book"></i>
                            <span>Content Management</span>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="user_management/user_management.html" className="nav-link">
                            <i className="fas fa-users"></i>
                            <span>User Management</span>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="analytics/analytics.html" className="nav-link">
                            <i className="fas fa-chart-line"></i>
                            <span>Analytics</span>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="system_settings/system_settings.html" className="nav-link">
                            <i className="fas fa-cog"></i>
                            <span>System Settings</span>
                        </a>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Top Bar */}
                <div className="top-bar">
                    <button className="menu-toggle" onClick={toggleSidebar}>
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="page-title">
                        <h1>Dashboard Overview</h1>
                        <p>Welcome back, Admin! Here's what's happening with your platform.</p>
                    </div>
                    <div className="user-menu">
                        <div className="user-avatar">
                            <img src="https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff" alt="Admin" />
                            <div className="user-info">
                                <div className="user-name">Admin User</div>
                                <div className="user-role">Super Admin</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                    <div className="stat-card primary">
                        <div className="stat-header">
                            <div>
                                <div className="stat-value">{stats.totalStudents.toLocaleString()}</div>
                                <div className="stat-label">Total Students</div>
                                <div className="stat-change positive">
                                    <i className="fas fa-arrow-up"></i> 12% from last month
                                </div>
                            </div>
                            <div className="stat-icon primary">
                                <i className="fas fa-user-graduate"></i>
                            </div>
                        </div>
                    </div>

                    <div className="stat-card success">
                        <div className="stat-header">
                            <div>
                                <div className="stat-value">{stats.activeCourses.toLocaleString()}</div>
                                <div className="stat-label">Active Courses</div>
                                <div className="stat-change positive">
                                    <i className="fas fa-arrow-up"></i> 5% from last month
                                </div>
                            </div>
                            <div className="stat-icon success">
                                <i className="fas fa-book-open"></i>
                            </div>
                        </div>
                    </div>

                    <div className="stat-card warning">
                        <div className="stat-header">
                            <div>
                                <div className="stat-value">{stats.completionRate}%</div>
                                <div className="stat-label">Completion Rate</div>
                                <div className="stat-change negative">
                                    <i className="fas fa-arrow-down"></i> 2% from last month
                                </div>
                            </div>
                            <div className="stat-icon warning">
                                <i className="fas fa-chart-pie"></i>
                            </div>
                        </div>
                    </div>

                    <div className="stat-card danger">
                        <div className="stat-header">
                            <div>
                                <div className="stat-value">{stats.pendingActions}</div>
                                <div className="stat-label">Pending Actions</div>
                                <div className="stat-change positive">
                                    <i className="fas fa-arrow-down"></i> 3 from yesterday
                                </div>
                            </div>
                            <div className="stat-icon danger">
                                <i className="fas fa-tasks"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <h2 className="section-title">
                    <i className="fas fa-bolt"></i>
                    Quick Actions
                </h2>

                <div className="quick-actions">
                    <div className="action-card">
                        <h3><i className="fas fa-plus-circle"></i> Add New Content</h3>
                        <p>Create and publish new educational materials, assignments, or resources for your students.</p>
                        <a href="content_management/content_management.html" className="btn btn-primary">
                            <i className="fas fa-plus"></i> Create Content
                        </a>
                    </div>

                    <div className="action-card">
                        <h3><i className="fas fa-user-plus"></i> Add New User</h3>
                        <p>Invite new students, teachers, or administrators to join the platform.</p>
                        <a href="user_management/user_management.html" className="btn btn-primary">
                            <i className="fas fa-user-plus"></i> Add User
                        </a>
                    </div>

                    <div className="action-card">
                        <h3><i className="fas fa-chart-bar"></i> View Reports</h3>
                        <p>Access detailed analytics and reports on platform usage and student performance.</p>
                        <a href="analytics/analytics.html" className="btn btn-outline">
                            <i className="fas fa-arrow-right"></i> View Reports
                        </a>
                    </div>

                    <div className="action-card">
                        <h3><i className="fas fa-trash-alt"></i> Remove Dummy Data</h3>
                        <p>Remove all test/sample data from the database to clean up your production environment.</p>
                        <button className="btn btn-danger" onClick={handleRemoveDummyData}>
                            <i className="fas fa-trash"></i> Remove Dummy Data
                        </button>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h3>System Settings</h3>
                    <p>Configure system settings and preferences.</p>
                    <button className="btn" onClick={() => window.location.href = 'system_settings/system_settings.html'}>
                        Settings
                    </button>
                    <button className="btn btn-secondary" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
