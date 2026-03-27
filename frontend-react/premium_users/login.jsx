import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from './js/services/authService';
import '../src/styles/PremiumLogin.css';

const PremiumLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '', type: 'info' });

    useEffect(() => {
        // Check for URL parameters
        const params = new URLSearchParams(window.location.search);
        if (params.get('registered') === 'true') {
            showAlert('Registration successful! Please sign in to continue.', 'success');
        }
        if (params.get('reset') === 'success') {
            showAlert('Your password has been reset successfully. Please sign in with your new password.', 'success');
        }
    }, []);

    const showAlert = (message, type = 'info') => {
        setAlert({ show: true, message, type });
        if (type !== 'error') {
            setTimeout(() => setAlert({ show: false, message: '', type: 'info' }), 5000);
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            showAlert('Email is required', 'error');
            return;
        }
        if (!validateEmail(email)) {
            showAlert('Please enter a valid email address', 'error');
            return;
        }
        if (!password) {
            showAlert('Password is required', 'error');
            return;
        }
        if (password.length < 6) {
            showAlert('Password must be at least 6 characters', 'error');
            return;
        }

        setLoading(true);
        try {
            const userData = await authService.login(email, password);
            showAlert('Login successful! Redirecting...', 'success');

            // Redirect based on class and stream
            // Since this is now React, we use navigate
            // logic mirrored from getDashboardUrl in original script

            setTimeout(() => {
                const userClass = parseInt(userData.class);
                const stream = (userData.stream || '').toLowerCase().trim();

                if (userClass === 9) navigate('/premium/dashboard/9_default');
                else if (userClass === 10) navigate('/premium/dashboard/10_default');
                else if ((userClass === 11 || userClass === 12) && stream) {
                    navigate(`/premium/dashboard/${userClass}_${stream}`);
                } else {
                    // Default fallback if logic fails or data missing, checking for class 12 specifically due to previous context
                    if (userClass === 12) navigate('/premium/dashboard');
                    else navigate('/premium/dashboard');
                }
            }, 1000);

        } catch (error) {
            console.error('Login error:', error);
            showAlert(error.message || 'Invalid email or password.', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="premium-login-page">
            <div className="login-container">
                {/* Left Side */}
                <div className="login-illustration">
                    <div className="illustration-content">
                        <h2>Welcome Back!</h2>
                        <p>Sign in to continue to your account and access premium study materials.</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="login-form-container">
                    <div className="login-header">
                        <div className="logo">
                            <i className="fas fa-graduation-cap"></i>
                            <span>mastercbse</span>
                        </div>
                        <h1>Welcome Back!</h1>
                        <p>Please sign in to continue</p>
                    </div>

                    {alert.show && (
                        <div className={`alert alert-${alert.type}`}>
                            <i className={`fas ${alert.type === 'success' ? 'fa-check-circle' : alert.type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}`}></i>
                            <span>{alert.message}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} id="loginForm">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="password-input">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <i className={`far ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                            <Link to="/premium/forgot-password" class="forgot-password">Forgot Password?</Link>
                        </div>

                        <div className="form-group">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="form-check-input"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label htmlFor="rememberMe" className="form-check-label">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className={`btn btn-primary btn-block ${loading ? 'loading' : ''}`} disabled={loading}>
                            <span className="btn-text">Sign In</span>
                            {loading && <span className="spinner-border"></span>}
                        </button>

                        <div className="divider">
                            <span>or continue with</span>
                        </div>

                        <div className="social-login">
                            <button type="button" className="btn btn-google">
                                <i className="fab fa-google"></i> Google
                            </button>
                            <button type="button" className="btn btn-facebook">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </button>
                        </div>

                        <div className="register-link">
                            Don't have an account? <Link to="/premium/register">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PremiumLogin;