import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { apiService } from '../services/apiService';
import Sidebar from '../components/Sidebar';
import '../styles/dashboard.css';
import '../styles/sidebar.css';
import '../styles/analytics.css';

const Analytics = () => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [timeRange, setTimeRange] = useState('month');
    const [analytics, setAnalytics] = useState({
        users: { total: 0, new: 0, active: 0, retention: 0 },
        revenue: { total: 0, monthly: 0, growth: 0, average: 0 },
        content: { total: 0, views: 0, downloads: 0, engagement: 0 },
        performance: { pageLoad: 0, uptime: 0, errors: 0, satisfaction: 0 },
        charts: { userGrowth: [], revenueTrends: [] },
        topContent: [],
        deviceStats: []
    });
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
                    console.log('Analytics auto-login failed, using test admin:', loginError.message);
                }

                // Set admin user
                const currentAdmin = { 
                    name: 'Ketan Singla', 
                    email: import.meta.env.VITE_ADMIN_EMAIL, 
                    role: 'admin' 
                };
                setAdmin(currentAdmin);
                localStorage.setItem('adminUser', JSON.stringify(currentAdmin));

                // Fetch data
                await fetchAnalytics();
            } catch (error) {
                console.error('Page initialization error:', error);
            } finally {
                setLoading(false);
            }
        };

        initializePage();
    }, []);

    const fetchAnalytics = async () => {
        try {
            // Fetch data from backend
            const response = await apiService.getAnalytics({ timeRange });

            if (response.success && response.analytics) {
                setAnalytics(response.analytics);
            } else {
                setEmptyAnalytics();
            }
        } catch (error) {
            console.error('Error fetching analytics:', error);
            setEmptyAnalytics();
        }
    };

    const setEmptyAnalytics = () => {
        setAnalytics({
            users: { total: 0, new: 0, active: 0, retention: 0 },
            revenue: { total: 0, monthly: 0, growth: 0, average: 0 },
            content: { total: 0, views: 0, downloads: 0, engagement: 0 },
            performance: { pageLoad: 0, uptime: 0, errors: 0, satisfaction: 0 },
            charts: { userGrowth: [], revenueTrends: [] },
            topContent: [],
            deviceStats: []
        });
    };

    const handleLogout = async () => {
        try {
            await authService.logout();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const getTrendIcon = (value) => {
        return value > 0 ? 'fas fa-arrow-up trend-up' : 'fas fa-arrow-down trend-down';
    };

    if (loading) {
        return <div className="admin-loading">Loading analytics...</div>;
    }

    const safeAnalyticsData = analytics || {
        users: { total: 0, new: 0, active: 0, retention: 0 },
        revenue: { total: 0, monthly: 0, growth: 0, average: 0 },
        content: { total: 0, views: 0, downloads: 0, engagement: 0 },
        performance: { pageLoad: 0, uptime: 0, errors: 0, satisfaction: 0 },
        charts: { userGrowth: [], revenueTrends: [] },
        topContent: [],
        deviceStats: []
    };

    return (
        <div className="admin-dashboard">
            <Sidebar admin={admin} onLogout={handleLogout} />

            <div className="admin-main-content">
                <header className="admin-header">
                    <h1>Analytics Dashboard</h1>
                    <p>Comprehensive insights into platform performance and user behavior</p>
                </header>

                <div className="time-range-selector">
                    <select
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                        className="time-range-select"
                    >
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="quarter">This Quarter</option>
                        <option value="year">This Year</option>
                    </select>
                </div>

                <section className="analytics-overview">
                    <div className="overview-card">
                        <div className="overview-header">
                            <h3>User Analytics</h3>
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="overview-metrics">
                            <div className="metric">
                                <span className="metric-value">{(safeAnalyticsData.users?.total || 0).toLocaleString()}</span>
                                <span className="metric-label">Total Users</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">{safeAnalyticsData.users?.new || 0}</span>
                                <span className="metric-label">New Users</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">{safeAnalyticsData.users?.active || 0}</span>
                                <span className="metric-label">Active Users</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">{safeAnalyticsData.users?.retention || 0}%</span>
                                <span className="metric-label">Retention Rate</span>
                            </div>
                        </div>
                    </div>

                    <div className="overview-card">
                        <div className="overview-header">
                            <h3>Revenue Analytics</h3>
                            <i className="fas fa-rupee-sign"></i>
                        </div>
                        <div className="overview-metrics">
                            <div className="metric">
                                <span className="metric-value">₹{(safeAnalyticsData.revenue?.total || 0).toLocaleString()}</span>
                                <span className="metric-label">Total Revenue</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">₹{(safeAnalyticsData.revenue?.monthly || 0).toLocaleString()}</span>
                                <span className="metric-label">Monthly Revenue</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">
                                    <i className={getTrendIcon(safeAnalyticsData.revenue?.growth || 0)}></i>
                                    {safeAnalyticsData.revenue?.growth || 0}%
                                </span>
                                <span className="metric-label">Growth Rate</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">₹{(safeAnalyticsData.revenue?.average || 0).toLocaleString()}</span>
                                <span className="metric-label">Average Order</span>
                            </div>
                        </div>
                    </div>

                    <div className="overview-card">
                        <div className="overview-header">
                            <h3>Content Analytics</h3>
                            <i className="fas fa-book"></i>
                        </div>
                        <div className="overview-metrics">
                            <div className="metric">
                                <span className="metric-value">{(safeAnalyticsData.content?.total || 0).toLocaleString()}</span>
                                <span className="metric-label">Total Content</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">{(safeAnalyticsData.content?.views || 0).toLocaleString()}</span>
                                <span className="metric-label">Total Views</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">{(safeAnalyticsData.content?.downloads || 0).toLocaleString()}</span>
                                <span className="metric-label">Downloads</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">{safeAnalyticsData.content?.engagement || 0}%</span>
                                <span className="metric-label">Engagement Rate</span>
                            </div>
                        </div>
                    </div>

                    <div className="overview-card">
                        <div className="overview-header">
                            <h3>Performance</h3>
                            <i className="fas fa-tachometer-alt"></i>
                        </div>
                        <div className="overview-metrics">
                            <div className="metric">
                                <span className="metric-value">{(safeAnalyticsData.performance?.pageLoad || 0)}s</span>
                                <span className="metric-label">Page Load Time</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">{(safeAnalyticsData.performance?.uptime || 0)}%</span>
                                <span className="metric-label">Uptime</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">{(safeAnalyticsData.performance?.errors || 0)}%</span>
                                <span className="metric-label">Error Rate</span>
                            </div>
                            <div className="metric">
                                <span className="metric-value">{(safeAnalyticsData.performance?.satisfaction || 0)}/5</span>
                                <span className="metric-label">Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="analytics-charts">
                    <div className="chart-container">
                        <div className="chart-header">
                            <h3>User Growth</h3>
                            <div className="chart-actions">
                                <button className="chart-action-btn"><i className="fas fa-download"></i></button>
                                <button className="chart-action-btn"><i className="fas fa-expand"></i></button>
                            </div>
                        </div>
                        {safeAnalyticsData.charts?.userGrowth?.length > 0 ? (
                            <div className="simple-bar-chart">
                                {safeAnalyticsData.charts.userGrowth.map((height, index) => (
                                    <div key={index} className="bar-wrapper">
                                        <div className="bar" style={{ height: `${height}%` }}></div>
                                        <span className="bar-label">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="chart-placeholder">
                                <i className="fas fa-chart-line"></i>
                                <p>No user growth data available</p>
                            </div>
                        )}
                    </div>

                    <div className="chart-container">
                        <div className="chart-header">
                            <h3>Revenue Trends</h3>
                            <div className="chart-actions">
                                <button className="chart-action-btn"><i className="fas fa-download"></i></button>
                                <button className="chart-action-btn"><i className="fas fa-expand"></i></button>
                            </div>
                        </div>
                        {safeAnalyticsData.charts?.revenueTrends?.length > 0 ? (
                            <div className="simple-bar-chart revenue-chart">
                                {safeAnalyticsData.charts.revenueTrends.map((height, index) => (
                                    <div key={index} className="bar-wrapper">
                                        <div className="bar" style={{ height: `${height}%` }}></div>
                                        <span className="bar-label">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="chart-placeholder">
                                <i className="fas fa-chart-bar"></i>
                                <p>No revenue trend data available</p>
                            </div>
                        )}
                    </div>
                </section>

                <section className="analytics-details">
                    <div className="detail-section">
                        <h3>Top Performing Content</h3>
                        <div className="content-ranking">
                            {safeAnalyticsData.topContent?.length > 0 ? (
                                safeAnalyticsData.topContent.map((item, index) => (
                                    <div key={index} className="ranking-item">
                                        <span className="rank">{index + 1}</span>
                                        <div className="content-info">
                                            <span className="content-title">{item.title}</span>
                                            <span className="content-stats">{item.views.toLocaleString()} views • {item.completion}% completion</span>
                                        </div>
                                        <span className="performance-score">{item.score}</span>
                                    </div>
                                ))
                            ) : (
                                <div className="no-data-msg">No top content data available</div>
                            )}
                        </div>
                    </div>

                    <div className="detail-section">
                        <h3>User Activity Heatmap</h3>
                        <div className="simple-heatmap">
                            {Array.from({ length: 28 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="heatmap-cell"
                                    style={{
                                        opacity: safeAnalyticsData.heatmap && safeAnalyticsData.heatmap[i] ? safeAnalyticsData.heatmap[i] : 0.1
                                    }}
                                    title={`Activity Level`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="detail-section">
                        <h3>Device & Browser Stats</h3>
                        <div className="device-stats">
                            {safeAnalyticsData.deviceStats?.length > 0 ? (
                                safeAnalyticsData.deviceStats.map((stat, index) => (
                                    <div key={index} className="stat-item">
                                        <span className="device-name">{stat.name}</span>
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{ width: `${stat.percentage}%` }}></div>
                                        </div>
                                        <span className="stat-percentage">{stat.percentage}%</span>
                                    </div>
                                ))
                            ) : (
                                <div className="no-data-msg">No device data available</div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Analytics;
