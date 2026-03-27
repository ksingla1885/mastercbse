import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../src/styles/PremiumForgotPassword.css';

const PremiumForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Check for email parameter in URL
        const params = new URLSearchParams(window.location.search);
        const emailParam = params.get('email');
        if (emailParam) {
            setEmail(decodeURIComponent(emailParam));
        }
    }, []);

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Please enter your email address');
            return;
        }

        if (!isValidEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setLoading(true);

        try {
            // Simulate API call (replace with authService.resetPassword when available)
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSuccess(true);
        } catch (err) {
            console.error(err);
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="premium-forgot-password">
            <div className="forgot-password-container">
                <div className="forgot-password-form">
                    <div className="forgot-password-header">
                        <h1>Forgot Password?</h1>
                        <p>Enter your email address and we'll send you a link to reset your password.</p>
                    </div>

                    {success ? (
                        <div className="success-message fade-in">
                            <i className="fas fa-check-circle"></i>
                            <div className="success-message-content">
                                <h4>Password Reset Email Sent</h4>
                                <p>We've sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the instructions to reset your password.</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} id="forgotPasswordForm">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`form-control ${error ? 'error' : ''}`}
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoFocus
                                />
                                {error && <div className="error-message" style={{ display: 'block' }}>{error}</div>}
                            </div>

                            <div className="form-group" style={{ marginTop: '2rem' }}>
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    <span className="btn-text">{loading ? 'Sending...' : 'Send Reset Link'}</span>
                                    {loading && <span className="spinner-border"></span>}
                                </button>
                            </div>

                            <div className="back-to-login">
                                <Link to="/premium/login"><i className="fas fa-arrow-left"></i> Back to Login</Link>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PremiumForgotPassword;
