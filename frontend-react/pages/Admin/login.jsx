import React from 'react';
import './login.css';

const AdminLogin = () => {
    return (
        <div id="login-container">
            <div className="admin-badge">ADMIN</div>
            <h1>Admin Access</h1>
            <p className="form-description">Sign in to manage mastercbse educational resources and content</p>

            <div id="error-message" className="error-message"></div>

            <div className="info-message">
                <p><strong>Security Notice:</strong> Admin authentication is required for each access to ensure security. You will be asked to log in every time you access the admin dashboard.</p>
            </div>

            <form id="admin-login-form">
                <div className="form-group">
                    <input type="email" id="admin-email" placeholder="Email address" required />
                </div>
                <div className="form-group">
                    <input type="password" id="admin-password" placeholder="Password" required />
                </div>
                <button type="submit">
                    <i className="fas fa-sign-in-alt"></i> Sign In
                </button>
            </form>

            <div className="links">
                <p><a href="../index.html">← Back to Main Site</a></p>
            </div>
        </div>
    );
};

export default AdminLogin;
