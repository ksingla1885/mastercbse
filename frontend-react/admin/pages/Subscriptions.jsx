import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { apiService } from '../services/apiService';
import Sidebar from '../components/Sidebar';
import ConfirmationModal from '../components/ConfirmationModal';
import '../styles/dashboard.css';
import '../styles/sidebar.css';
import '../styles/subscriptions.css';
import '../styles/confirmation-modal.css';

const Subscriptions = () => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [subscriptions, setSubscriptions] = useState([]);
    const [revenue, setRevenue] = useState({
        total: 0,
        monthly: 0,
        active: 0,
        cancelled: 0
    });
    const [selectedPeriod, setSelectedPeriod] = useState('month');
    const [cancelModal, setCancelModal] = useState({ isOpen: false, subscriptionId: null });
    const navigate = useNavigate();

    useEffect(() => {
        const initializePage = async () => {
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
                    console.log('Subscriptions auto-login failed, using test admin:', loginError.message);
                }

                // Set admin user
                const currentAdmin = { 
                    name: 'Ketan Singla', 
                    email: import.meta.env.VITE_ADMIN_EMAIL, 
                    role: 'admin' 
                };
                setAdmin(currentAdmin);
                localStorage.setItem('adminUser', JSON.stringify(currentAdmin));

                // Fetch subscriptions data
                await fetchSubscriptions();
            } catch (error) {
                console.error('Page initialization error:', error);
            } finally {
                setLoading(false);
            }
        };

        initializePage();
    }, []);

    const fetchSubscriptions = async () => {
        try {
            const response = await apiService.getSubscriptions();

            if (response.success) {
                setSubscriptions(response.subscriptions || []);

                // Calculate revenue from real data
                const subscriptions = response.subscriptions || [];
                const totalRevenue = subscriptions.reduce((sum, sub) => sum + (sub.amount || 0), 0);
                const monthlyRevenue = subscriptions
                    .filter(sub => sub.plan === 'Monthly' && sub.status === 'active')
                    .reduce((sum, sub) => sum + (sub.amount || 0), 0);
                const activeCount = subscriptions.filter(sub => sub.status === 'active').length;
                const cancelledCount = subscriptions.filter(sub => sub.status === 'cancelled').length;

                setRevenue({
                    total: totalRevenue,
                    monthly: monthlyRevenue,
                    activeCount,
                    cancelledCount
                });
            }
        } catch (error) {
            console.error('Error fetching subscriptions:', error);
            // Set empty data if API fails
            setSubscriptions([]);
            setRevenue({
                total: 0,
                monthly: 0,
                activeCount: 0,
                cancelledCount: 0
            });
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

    const getStatusClass = (status) => {
        const statusClasses = {
            active: 'status-active',
            cancelled: 'status-cancelled',
            expired: 'status-expired'
        };
        return statusClasses[status] || 'status-inactive';
    };

    const getPlanIcon = (plan) => {
        return plan === 'Annual' ? 'fas fa-calendar-alt' : 'fas fa-calendar-day';
    };

    const handleCancelSubscription = (subscriptionId) => {
        setCancelModal({ isOpen: true, subscriptionId });
    };

    const handleConfirmCancel = () => {
        const subscriptionId = cancelModal.subscriptionId;
        setSubscriptions(subscriptions.map(sub =>
            sub.id === subscriptionId ? { ...sub, status: 'cancelled', autoRenew: false } : sub
        ));
        setCancelModal({ isOpen: false, subscriptionId: null });
    };

    const handleRenewSubscription = (subscriptionId) => {
        setSubscriptions(subscriptions.map(sub =>
            sub.id === subscriptionId ? { ...sub, status: 'active', autoRenew: true } : sub
        ));
    };

    const handleToggleAutoRenew = (subscriptionId) => {
        setSubscriptions(subscriptions.map(sub =>
            sub.id === subscriptionId ? { ...sub, autoRenew: !sub.autoRenew } : sub
        ));
    };

    if (loading) {
        return <div className="admin-loading">Loading subscriptions...</div>;
    }

    return (
        <div className="admin-dashboard">
            <Sidebar admin={admin} onLogout={handleLogout} />

            <div className="admin-main-content">
                <header className="admin-header">
                    <h1>Subscription Management</h1>
                    <p>Monitor and manage user subscriptions and revenue</p>
                </header>

                <section className="revenue-stats">
                    <div className="stat-card revenue-card">
                        <div className="stat-icon">
                            <i className="fas fa-rupee-sign"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Total Revenue</h3>
                            <p>₹{revenue.total.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="stat-card revenue-card">
                        <div className="stat-icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Monthly Revenue</h3>
                            <p>₹{revenue.monthly.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Active Subscriptions</h3>
                            <p>{revenue.active}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            <i className="fas fa-times-circle"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Cancelled</h3>
                            <p>{revenue.cancelled}</p>
                        </div>
                    </div>
                </section>

                <section className="admin-content-section">
                    <div className="section-header">
                        <h2>Subscriptions ({subscriptions.length})</h2>
                        <div className="subscription-actions">
                            <select
                                value={selectedPeriod}
                                onChange={(e) => setSelectedPeriod(e.target.value)}
                                className="period-select"
                            >
                                <option value="week">This Week</option>
                                <option value="month">This Month</option>
                                <option value="year">This Year</option>
                                <option value="all">All Time</option>
                            </select>
                            <button className="btn-primary">
                                <i className="fas fa-download"></i> Export Report
                            </button>
                        </div>
                    </div>

                    <div className="subscriptions-table-container">
                        <table className="subscriptions-table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Plan</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Auto Renew</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscriptions.map((subscription) => (
                                    <tr key={subscription.id}>
                                        <td>
                                            <div className="user-info">
                                                <div className="user-avatar">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                                <div>
                                                    <div className="user-name">{subscription.user}</div>
                                                    <div className="user-email">{subscription.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="plan-info">
                                                <i className={getPlanIcon(subscription.plan)}></i>
                                                <span>{subscription.plan}</span>
                                            </div>
                                        </td>
                                        <td className="amount">₹{subscription.amount}</td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(subscription.status)}`}>
                                                {subscription.status}
                                            </span>
                                        </td>
                                        <td>{new Date(subscription.startDate).toLocaleDateString()}</td>
                                        <td>{new Date(subscription.endDate).toLocaleDateString()}</td>
                                        <td>
                                            <button
                                                className={`auto-renew-toggle ${subscription.autoRenew ? 'enabled' : 'disabled'}`}
                                                onClick={() => handleToggleAutoRenew(subscription.id)}
                                            >
                                                {subscription.autoRenew ? 'ON' : 'OFF'}
                                            </button>
                                        </td>
                                        <td>
                                            <div className="subscription-actions">
                                                {subscription.status === 'active' ? (
                                                    <button
                                                        className="action-btn-small cancel-btn"
                                                        title="Cancel Subscription"
                                                        onClick={() => handleCancelSubscription(subscription.id)}
                                                    >
                                                        <i className="fas fa-times"></i>
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="action-btn-small renew-btn"
                                                        title="Renew Subscription"
                                                        onClick={() => handleRenewSubscription(subscription.id)}
                                                    >
                                                        <i className="fas fa-redo"></i>
                                                    </button>
                                                )}
                                                <button className="action-btn-small" title="View Details">
                                                    <i className="fas fa-eye"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            <ConfirmationModal
                isOpen={cancelModal.isOpen}
                title="Cancel Subscription"
                message="Are you sure you want to cancel this subscription? The user will lose access to premium features after the current period ends."
                confirmText="Cancel Subscription"
                cancelText="Keep Subscription"
                type="danger"
                onConfirm={handleConfirmCancel}
                onCancel={() => setCancelModal({ isOpen: false, subscriptionId: null })}
            />
        </div>
    );
};

export default Subscriptions;
