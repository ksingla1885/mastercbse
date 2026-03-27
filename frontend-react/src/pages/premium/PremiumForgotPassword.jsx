import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/PremiumForgotPassword.css';

const PremiumForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const emailInputRef = useRef(null);

    useEffect(() => {
        emailInputRef.current?.focus();
    }, []);

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (value.trim() === '') {
            setError('');
        } else if (!isValidEmail(value.trim())) {
            setError('Please enter a valid email address');
        } else {
            setError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const trimmedEmail = email.trim();

        if (!isValidEmail(trimmedEmail)) {
            setError('Please enter a valid email address');
            emailInputRef.current?.focus();
            return;
        }

        setLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSuccess(true);

        } catch (error) {
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="forgot-password-container">
                <div className="forgot-password-form">
                    <div className="success-message fade-in">
                        <i className="fas fa-check-circle"></i>
                        <div className="success-message-content">
                            <h4>Password Reset Email Sent</h4>
                            <p>
                                We've sent a password reset link to <strong>{email}</strong>.
                                Please check your inbox and follow the instructions to reset your password.
                            </p>
                            <div style={{ marginTop: '2rem' }}>
                                <Link to="/premium/login" className="btn btn-primary">
                                    <i className="fas fa-arrow-left"></i> Back to Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-form">
                <div className="forgot-password-header">
                    <h1>Forgot Password?</h1>
                    <p>Enter your email address and we'll send you a link to reset your password.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className={`form-control ${error ? 'error' : ''}`}
                            placeholder="Enter your email address"
                            value={email}
                            onChange={handleEmailChange}
                            ref={emailInputRef}
                            required
                        />
                        {error && (
                            <div className="error-message" style={{ display: 'block' }}>
                                {error}
                            </div>
                        )}
                    </div>

                    <div className="form-group" style={{ marginTop: '2rem' }}>
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            <span className="btn-text">
                                {loading ? 'Sending...' : 'Send Reset Link'}
                            </span>
                            {loading && (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            )}
                        </button>
                    </div>

                    <div className="back-to-login">
                        <Link to="/premium/login">
                            <i className="fas fa-arrow-left"></i> Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PremiumForgotPassword;
