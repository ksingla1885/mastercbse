import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import '../../styles/PremiumLogin.css';

const PremiumLogin = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '', type: 'info' });
    const emailInputRef = useRef(null);

    useEffect(() => {
        // Auto-focus email field
        emailInputRef.current?.focus();

        // Check for URL parameters
        if (searchParams.get('registered') === 'true') {
            showAlert('Registration successful! Please sign in to continue.', 'success');
        }
        if (searchParams.get('reset') === 'success') {
            showAlert('Your password has been reset successfully. Please sign in with your new password.', 'success');
        }
        const message = searchParams.get('message');
        const messageType = searchParams.get('type') || 'info';
        if (message) {
            showAlert(decodeURIComponent(message), messageType);
        }
    }, [searchParams]);

    const showAlert = (message, type = 'info') => {
        setAlert({ show: true, message, type });
        if (type !== 'error' && type !== 'danger') {
            setTimeout(() => {
                setAlert({ show: false, message: '', type: 'info' });
            }, 5000);
        }
    };

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const getDashboardUrl = (userClass, stream = null) => {
        const classNum = parseInt(userClass);
        const normalizedStream = (stream || '').toLowerCase().trim();

        if (classNum === 9) return '/premium/dashboard/9_default';
        if (classNum === 10) return '/premium/dashboard/10_default';

        if ((classNum === 11 || classNum === 12) && normalizedStream) {
            return `/premium/dashboard/${classNum}_${normalizedStream}`;
        }

        return '/premium/dashboard/default';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {
            // Simulate API call - Replace with actual auth service
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Mock user data - Replace with actual API response
            const userData = {
                email: formData.email,
                class: 11,
                stream: 'pcm'
            };

            // Store auth data
            sessionStorage.setItem('isAuthenticated', 'true');
            sessionStorage.setItem('userEmail', formData.email);
            localStorage.setItem('userData', JSON.stringify(userData));

            showAlert('Login successful! Redirecting to your dashboard...', 'success');

            const dashboardUrl = getDashboardUrl(userData.class, userData.stream);

            setTimeout(() => {
                navigate(dashboardUrl);
            }, 1500);

        } catch (error) {
            console.error('Login error:', error);
            showAlert(error.message || 'Invalid email or password. Please try again.', 'error');
            setFormData(prev => ({ ...prev, password: '' }));
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSocialLogin = (provider) => {
        showAlert(`${provider} authentication is not yet implemented.`, 'info');
        // TODO: Implement OAuth
    };

    const getAlertIcon = () => {
        switch (alert.type) {
            case 'success':
                return 'fas fa-check-circle';
            case 'error':
            case 'danger':
                return 'fas fa-exclamation-circle';
            case 'warning':
                return 'fas fa-exclamation-triangle';
            default:
                return 'fas fa-info-circle';
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-header">
                    <h1>Welcome Back!</h1>
                    <p>Please sign in to continue to your account</p>
                </div>

                {/* Alert Messages */}
                {alert.show && (
                    <div className={`alert alert-${alert.type}`}>
                        <i className={getAlertIcon()}></i>
                        <span>{alert.message}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`form-control ${errors.email ? 'error' : ''}`}
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            ref={emailInputRef}
                            required
                        />
                        {errors.email && (
                            <div className="error-message" style={{ display: 'block' }}>
                                {errors.email}
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className={`form-control ${errors.password ? 'error' : ''}`}
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label="Toggle password visibility"
                            >
                                <i className={`far ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                        {errors.password && (
                            <div className="error-message" style={{ display: 'block' }}>
                                {errors.password}
                            </div>
                        )}
                        <Link to="/premium/forgot-password" className="forgot-password">
                            Forgot Password?
                        </Link>
                    </div>

                    <div className="form-group">
                        <div className="form-check" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                className="form-check-input"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            <label htmlFor="rememberMe" className="form-check-label" style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>
                                Remember me
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                        <span className="btn-text">{loading ? 'Signing in...' : 'Sign In'}</span>
                        {loading && (
                            <span className="spinner-border spinner-border-sm" style={{ marginLeft: '0.5rem' }} role="status" aria-hidden="true"></span>
                        )}
                    </button>

                    <div className="divider">
                        <span>or continue with</span>
                    </div>

                    <div className="social-login">
                        <button type="button" className="btn btn-google" onClick={() => handleSocialLogin('Google')}>
                            <i className="fab fa-google"></i> Google
                        </button>
                        <button type="button" className="btn btn-facebook" onClick={() => handleSocialLogin('Facebook')}>
                            <i className="fab fa-facebook-f"></i> Facebook
                        </button>
                    </div>

                    <div className="register-link">
                        Don't have an account? <Link to="/premium/register">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PremiumLogin;
