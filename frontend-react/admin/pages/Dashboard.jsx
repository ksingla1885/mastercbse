import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { apiService } from '../services/apiService';
import Sidebar from '../components/Sidebar';
import StatsCard from '../components/StatsCard';
import UsersTable from '../components/UsersTable';
import ConfirmationModal from '../components/ConfirmationModal';
import '../styles/dashboard.css';
import '../styles/sidebar.css';
import '../styles/modal.css';
import '../styles/confirmation-modal.css';

const AdminDashboard = () => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState({ isOpen: false, title: '', message: '', type: 'info' });
    const [stats, setStats] = useState({
        totalUsers: 0,
        premiumUsers: 0,
        totalRevenue: 0,
        activeSubscriptions: 0
    });
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const initializeDashboard = async () => {
            try {
                // Auto-login for testing
                try {
                    const loginResponse = await authService.adminLogin({
                        email: import.meta.env.VITE_ADMIN_EMAIL,
                        password: import.meta.env.VITE_ADMIN_PASSWORD
                    });

                    if (loginResponse.success) {
                        // Auto-login successful
                    }
                } catch (loginError) {
                    console.log('Dashboard auto-login failed, using test admin:', loginError.message);
                }

                // Set admin user
                const currentAdmin = {
                    name: 'Ketan Singla',
                    email: import.meta.env.VITE_ADMIN_EMAIL,
                    role: 'admin'
                };
                setAdmin(currentAdmin);
                localStorage.setItem('adminUser', JSON.stringify(currentAdmin));

                // Fetch dashboard data
                await fetchDashboardData();
            } catch (error) {
                console.error('Dashboard initialization error:', error);
            } finally {
                setLoading(false);
            }
        };

        initializeDashboard();
    }, []);

    const fetchDashboardData = async () => {
        try {
            // Fetch dashboard stats from API
            const statsResponse = await apiService.getDashboardStats();

            if (statsResponse.success) {
                setStats(statsResponse.stats);
            }

            // Fetch recent users from API
            const usersResponse = await apiService.getUsers({ limit: 5 });

            if (usersResponse.success) {
                setUsers(usersResponse.users);
            }
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            // Fallback to mock data if API fails
            setStats({
                totalUsers: 0,
                premiumUsers: 0,
                totalRevenue: 0,
                activeSubscriptions: 0
            });

            setUsers([]);
        }
    };

    const handleLogout = async () => {
        try {
            await authService.logout();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (loading) {
        return <div className="admin-loading">Loading dashboard...</div>;
    }

    return (
        <>
            <div className="admin-dashboard">
                <Sidebar admin={admin} onLogout={handleLogout} />

                <div className="admin-main-content">
                    <header className="admin-header">
                        <h1>Admin Dashboard</h1>
                        <p>Welcome back, {admin?.name}</p>
                    </header>

                    <section className="admin-stats">
                        <StatsCard
                            title="Total Users"
                            value={stats.totalUsers}
                            icon="fas fa-users"
                            color="#667eea"
                        />
                        <StatsCard
                            title="Premium Users"
                            value={stats.premiumUsers}
                            icon="fas fa-crown"
                            color="#f6ad55"
                        />
                        <StatsCard
                            title="Total Revenue"
                            value={`₹${stats.totalRevenue.toLocaleString()}`}
                            icon="fas fa-rupee-sign"
                            color="#48bb78"
                        />
                        <StatsCard
                            title="Active Subscriptions"
                            value={stats.activeSubscriptions}
                            icon="fas fa-check-circle"
                            color="#ed8936"
                        />
                    </section>

                    <section className="admin-content-section">
                        <div className="section-header">
                            <h2>Recent Users</h2>
                            <button className="btn-secondary btn-sm">View All Users</button>
                        </div>
                        <UsersTable users={users} />
                    </section>

                    <section className="admin-content-section">
                        <div className="section-header">
                            <h2>Quick Actions</h2>
                        </div>
                        <div className="quick-actions">
                            <button className="action-btn">
                                <i className="fas fa-user-plus"></i>
                                Add New User
                            </button>
                            <button className="action-btn">
                                <i className="fas fa-chart-bar"></i>
                                View Analytics
                            </button>
                            <button className="action-btn">
                                <i className="fas fa-cog"></i>
                                Settings
                            </button>
                            <button className="action-btn">
                                <i className="fas fa-file-alt"></i>
                                Generate Report
                            </button>
                        </div>
                    </section>
                </div>
            </div>

            <ConfirmationModal
                isOpen={notification.isOpen}
                title={notification.title}
                message={notification.message}
                confirmText="OK"
                showCancel={false}
                type={notification.type}
                onConfirm={() => setNotification(prev => ({ ...prev, isOpen: false }))}
                onCancel={() => setNotification(prev => ({ ...prev, isOpen: false }))}
            />
        </>
    );
};

export default AdminDashboard;
