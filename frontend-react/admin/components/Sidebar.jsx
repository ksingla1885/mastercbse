import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ admin, onLogout }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { path: '/admin/dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
        { path: '/admin/users', icon: 'fas fa-users', label: 'Users' },
        { path: '/admin/content', icon: 'fas fa-book', label: 'Content Management' },
        { path: '/admin/subscriptions', icon: 'fas fa-crown', label: 'Subscriptions' },
        { path: '/admin/analytics', icon: 'fas fa-chart-bar', label: 'Analytics' },
        { path: '/admin/settings', icon: 'fas fa-cog', label: 'Settings' },
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="admin-sidebar">
            <div className="sidebar-header">
                <h2>Admin Panel</h2>
                <p>mastercbse</p>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <button
                        key={item.path}
                        className={`sidebar-nav-item ${
                            location.pathname === item.path ? 'active' : ''
                        }`}
                        onClick={() => handleNavigation(item.path)}
                    >
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="admin-profile-card">
                    <div className="admin-avatar">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="admin-info">
                        <p className="admin-name">{admin?.name || 'Ketan Singla'}</p>
                        <p className="admin-role">Administrator</p>
                    </div>
                </div>
                <button className="logout-btn" onClick={onLogout}>
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
