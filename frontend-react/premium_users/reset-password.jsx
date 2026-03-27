import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import '../src/styles/PremiumResetPassword.css';

const PremiumResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // State
    const [token, setToken] = useState('');
    const [isTokenValid, setIsTokenValid] = useState(true);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tokenParam = searchParams.get('token');

        if (!tokenParam) {
            // In a real app, strict check. Here simulated.
            // setIsTokenValid(false); 
        }
        setToken(tokenParam);

        // Simulating token validation API call
        // const validateToken = async () => { ... }
        // validateToken();
    }, [location]);

    const calculateStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    };

    const strength = calculateStrength(newPassword);

    const getStrengthColor = (strength) => {
        const colors = ['#f44336', '#ff9800', '#2196f3', '#4caf50'];
        return colors[strength - 1] || '#e0e0e0';
    };

    const getStrengthText = (strength) => {
        const labels = ['Very Weak', 'Weak', 'Moderate', 'Strong'];
        return labels[strength - 1] || 'Very Weak';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPasswordError('');

        if (newPassword !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        if (strength < 3) {
            setPasswordError('Password is too weak. Please follow requirements.');
            return;
        }

        setLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSuccess(true);
            setTimeout(() => {
                navigate('/premium/login?reset=success');
            }, 3000);
        } catch (error) {
            setPasswordError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!isTokenValid) {
        return (
            <div className="premium-reset-password">
                <div className="reset-password-container">
                    <div className="token-expired">
                        <i className="fas fa-exclamation-circle"></i>
                        <h2>Link Expired or Invalid</h2>
                        <p>The password reset link has expired or is invalid. Please request a new password reset link.</p>
                        <Link to="/premium/forgot-password" className="btn-resend">Request New Link</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="premium-reset-password">
            <div className="reset-password-container">
                <div className="reset-password-form">
                    <div className="reset-password-header">
                        <h1>Reset Your Password</h1>
                        <p>Create a new password for your account</p>
                    </div>

                    {success ? (
                        <div className="success-message fade-in">
                            <i className="fas fa-check-circle"></i>
                            <div className="success-message-content">
                                <h4>Password Reset Successful!</h4>
                                <p>Your password has been successfully updated. Redirecting to login...</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="newPassword" class="form-label">New Password</label>
                                <div className="password-input">
                                    <i className="fas fa-lock input-icon"></i>
                                    <input
                                        type={showNewPassword ? "text" : "password"}
                                        id="newPassword"
                                        className="form-control"
                                        placeholder="Enter new password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                    >
                                        <i className={`fas ${showNewPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                    </button>
                                </div>

                                <div className="password-strength">
                                    <div className="strength-meter">
                                        {[1, 2, 3].map(idx => (
                                            <div
                                                key={idx}
                                                className="strength-segment"
                                                style={{ backgroundColor: idx <= strength ? getStrengthColor(strength) : '#e0e0e0' }}
                                            />
                                        ))}
                                    </div>
                                    <div className="strength-text" style={{ color: strength > 0 ? getStrengthColor(strength) : '#666' }}>
                                        Password strength: <span>{getStrengthText(strength)}</span>
                                    </div>
                                </div>

                                <ul className="password-requirements">
                                    <li className={newPassword.length >= 8 ? 'valid' : ''}>At least 8 characters</li>
                                    <li className={/[A-Z]/.test(newPassword) ? 'valid' : ''}>At least one uppercase letter</li>
                                    <li className={/[0-9]/.test(newPassword) ? 'valid' : ''}>At least one number</li>
                                    <li className={/[^A-Za-z0-9]/.test(newPassword) ? 'valid' : ''}>At least one special character</li>
                                </ul>
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword" class="form-label">Confirm New Password</label>
                                <div className="password-input">
                                    <i className="fas fa-lock input-icon"></i>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        className="form-control"
                                        placeholder="Confirm new password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                    </button>
                                </div>
                                {passwordError && <div className="error-message" style={{ display: 'block' }}>{passwordError}</div>}
                            </div>

                            <div className="form-group" style={{ marginTop: '2rem' }}>
                                <button type="submit" className="btn btn-primary" disabled={loading || strength < 3 || newPassword !== confirmPassword}>
                                    <span className="btn-text">{loading ? 'Resetting Password...' : 'Reset Password'}</span>
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

export default PremiumResetPassword;
