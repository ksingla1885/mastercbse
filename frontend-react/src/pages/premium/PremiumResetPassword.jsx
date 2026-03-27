import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import '../../styles/PremiumResetPassword.css';

const PremiumResetPassword = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState({ newPassword: false, confirmPassword: false });
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [requirements, setRequirements] = useState({
        length: false,
        uppercase: false,
        number: false,
        special: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [tokenValid, setTokenValid] = useState(true);

    useEffect(() => {
        const token = searchParams.get('token');
        const email = searchParams.get('email');

        // Simulate token validation
        if (!token || !email) {
            setTokenValid(false);
        }
    }, [searchParams]);

    const calculatePasswordStrength = (password) => {
        const reqs = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[^A-Za-z0-9]/.test(password)
        };

        setRequirements(reqs);
        const strength = Object.values(reqs).filter(Boolean).length;
        setPasswordStrength(strength);
        return strength;
    };

    const getStrengthColor = () => {
        const colors = ['#f44336', '#ff9800', '#2196f3', '#4caf50'];
        return colors[passwordStrength - 1] || '#f44336';
    };

    const getStrengthText = () => {
        const texts = ['Very Weak', 'Weak', 'Moderate', 'Strong'];
        return texts[passwordStrength - 1] || 'Very Weak';
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'newPassword') {
            calculatePasswordStrength(value);
        }

        // Clear error when user types
        if (error) setError('');
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const isFormValid = () => {
        return passwordStrength >= 3 &&
            formData.newPassword &&
            formData.confirmPassword &&
            formData.newPassword === formData.confirmPassword;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (passwordStrength < 3) {
            setError('Password is not strong enough');
            return;
        }

        setLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSuccess(true);

            // Redirect to login after delay
            setTimeout(() => {
                navigate('/premium/login?passwordReset=true');
            }, 3000);

        } catch (error) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!tokenValid) {
        return (
            <div className="reset-password-container">
                <div className="token-expired">
                    <i className="fas fa-exclamation-circle"></i>
                    <h2>Link Expired or Invalid</h2>
                    <p>The password reset link has expired or is invalid. Please request a new password reset link.</p>
                    <Link to="/premium/forgot-password" className="btn-resend">Request New Link</Link>
                </div>
            </div>
        );
    }

    if (success) {
        return (
            <div className="reset-password-container">
                <div className="reset-password-form">
                    <div className="success-message fade-in">
                        <i className="fas fa-check-circle"></i>
                        <div className="success-message-content">
                            <h4>Password Reset Successful!</h4>
                            <p>Your password has been successfully updated. You can now log in with your new password.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="reset-password-container">
            <div className="reset-password-form">
                <div className="reset-password-header">
                    <h1>Reset Your Password</h1>
                    <p>Create a new password for your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="newPassword" className="form-label">New Password</label>
                        <div className="password-input">
                            <i className="fas fa-lock input-icon"></i>
                            <input
                                type={showPassword.newPassword ? 'text' : 'password'}
                                id="newPassword"
                                name="newPassword"
                                className="form-control"
                                placeholder="Enter new password"
                                value={formData.newPassword}
                                onChange={handlePasswordChange}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => togglePasswordVisibility('newPassword')}
                            >
                                <i className={`fas ${showPassword.newPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                        <div className="password-strength">
                            <div className="strength-meter">
                                {[0, 1, 2].map(i => (
                                    <div
                                        key={i}
                                        className="strength-segment"
                                        style={{ backgroundColor: i < passwordStrength ? getStrengthColor() : '#e0e0e0' }}
                                    ></div>
                                ))}
                            </div>
                            <div className="strength-text">
                                Password strength: <span style={{ color: getStrengthColor() }}>{getStrengthText()}</span>
                            </div>
                        </div>
                        <ul className="password-requirements">
                            <li className={requirements.length ? 'valid' : ''}>At least 8 characters</li>
                            <li className={requirements.uppercase ? 'valid' : ''}>At least one uppercase letter</li>
                            <li className={requirements.number ? 'valid' : ''}>At least one number</li>
                            <li className={requirements.special ? 'valid' : ''}>At least one special character</li>
                        </ul>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                        <div className="password-input">
                            <i className="fas fa-lock input-icon"></i>
                            <input
                                type={showPassword.confirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Confirm new password"
                                value={formData.confirmPassword}
                                onChange={handlePasswordChange}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => togglePasswordVisibility('confirmPassword')}
                            >
                                <i className={`fas ${showPassword.confirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                        {error && <div className="error-message" style={{ display: 'block' }}>{error}</div>}
                    </div>

                    <div className="form-group" style={{ marginTop: '2rem' }}>
                        <button type="submit" className="btn btn-primary" disabled={!isFormValid() || loading}>
                            <span className="btn-text">{loading ? 'Resetting Password...' : 'Reset Password'}</span>
                            {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
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

export default PremiumResetPassword;
