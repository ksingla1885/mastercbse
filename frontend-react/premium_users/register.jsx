import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { authService } from './js/services/authService';
import '../src/styles/PremiumRegister.css';

const PremiumRegister = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        classKey: '', // 'class' is a reserved word
        stream: '',
        password: '',
        confirmPassword: '',
        terms: false
    });

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '', type: 'info' });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    // Parse URL params for plan
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const plan = params.get('plan');
        if (plan) {
            // Ideally store plan selection in context or state if needed later
            console.log("Selected plan:", plan);
        }
    }, [location]);

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [id === 'class' ? 'classKey' : id]: type === 'checkbox' ? checked : value
        }));

        if (id === 'password') {
            calculatePasswordStrength(value);
        }
    };

    const calculatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/\d/.test(password)) strength += 1;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        setPasswordStrength(strength);
    };

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

        // Validation
        if (!formData.firstName || !formData.lastName) {
            showAlert('Please enter your full name', 'error');
            return;
        }
        if (!validateEmail(formData.email)) {
            showAlert('Please enter a valid email address', 'error');
            return;
        }
        if (!formData.phone) {
            showAlert('Please enter a valid phone number', 'error');
            return;
        }
        if (!formData.classKey) {
            showAlert('Please select your class', 'error');
            return;
        }
        if (parseInt(formData.classKey) >= 11 && !formData.stream) {
            showAlert('Please select your stream', 'error');
            return;
        }
        if (formData.password.length < 8) {
            showAlert('Password must be at least 8 characters long', 'error');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            showAlert('Passwords do not match', 'error');
            return;
        }
        if (!formData.terms) {
            showAlert('You must agree to the terms and conditions', 'error');
            return;
        }

        setLoading(true);
        try {
            // Simulate processing or actual API call if endpoints existed
            // Here `authService.register` expects name, email, password
            const fullName = `${formData.firstName} ${formData.lastName}`;

            // Note: detailed profile data (class, stream, phone) would typically go to a separate profile update endpoint
            // or be passed if the register method supports it.
            // authService.register only takes name, email, password based on the file read earlier.
            // We might need to update authService if we want to save extra data, but sticking to interface for now.

            await authService.register(fullName, formData.email, formData.password);

            // If the register method doesn't support extra fields, we might be losing class/stream data here.
            // However, based on the previous scope, we are just converting the front-end file.
            // We'll proceed with the registration call.

            showAlert('Registration successful! Redirecting to login...', 'success');

            setTimeout(() => {
                navigate('/premium/login?registered=true');
            }, 1500);

        } catch (error) {
            console.error('Registration error:', error);
            showAlert(error.message || 'Registration failed. Please try again.', 'error');
        } finally {
            setLoading(false);
        }
    };

    const getStrengthColor = (strength) => {
        const colors = ['#e0e0e0', '#f44336', '#ff9800', '#4caf50', '#4caf50'];
        return colors[strength];
    };

    const getStrengthText = (strength) => {
        const texts = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Strong'];
        return texts[strength];
    };

    return (
        <div className="premium-register-page">
            <div className="registration-container">
                <div className="registration-form">
                    <div className="registration-header">
                        <h1>Create Your Account</h1>
                        <p>Join thousands of students excelling with mastercbse</p>
                    </div>

                    {alert.show && (
                        <div className={`alert alert-${alert.type}`}>
                            <i className={`fas ${alert.type === 'success' ? 'fa-check-circle' : alert.type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}`}></i>
                            <span>{alert.message}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} id="registrationForm">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-control"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                className="form-control"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="class" className="form-label">Class</label>
                                <select
                                    id="class"
                                    className="form-control"
                                    value={formData.classKey}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select your class</option>
                                    <option value="9">Class 9</option>
                                    <option value="10">Class 10</option>
                                    <option value="11">Class 11</option>
                                    <option value="12">Class 12</option>
                                </select>
                            </div>
                            {(parseInt(formData.classKey) >= 11) && (
                                <div className="form-group">
                                    <label htmlFor="stream" className="form-label">Stream</label>
                                    <select
                                        id="stream"
                                        className="form-control"
                                        value={formData.stream}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select stream</option>
                                        <option value="Science">Science (PCM/PCB)</option>
                                        <option value="Commerce">Commerce</option>
                                        <option value="Arts">Arts/Humanities</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" class="form-label">Create Password</label>
                            <div className="password-input">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    minLength="8"
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                            <div className="password-strength">
                                <div className="strength-meter">
                                    {[1, 2, 3, 4].map(idx => (
                                        <div
                                            key={idx}
                                            className="strength-segment"
                                            style={{ backgroundColor: idx <= passwordStrength ? getStrengthColor(passwordStrength) : '#e5e7eb' }}
                                        ></div>
                                    ))}
                                </div>
                                <div className="strength-text" style={{ color: getStrengthColor(passwordStrength) }}>
                                    Password strength: <span>{getStrengthText(passwordStrength)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword" class="form-label">Confirm Password</label>
                            <div className="password-input">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    className="form-control"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
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
                        </div>

                        <div className="form-group">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="form-check-input"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="terms" className="form-check-label">
                                    I agree to the <a href="#" className="text-primary">Terms of Service</a> and <a href="#" className="text-primary">Privacy Policy</a>
                                </label>
                            </div>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className={`btn btn-primary ${loading ? 'loading' : ''}`} disabled={loading}>
                                <span className="btn-text">Create Account</span>
                                {loading && <span className="spinner-border"></span>}
                            </button>
                        </div>

                        <div className="login-link">
                            Already have an account? <Link to="/premium/login">Log in</Link>
                        </div>
                    </form>
                </div>

                <div className="registration-illustration">
                    <img src="https://illustrations.popsy.co/amber/student-with-laptop.svg" alt="Student Learning" />
                    <div>
                        <h3>Why join mastercbse?</h3>
                        <ul>
                            <li>Access to premium study materials</li>
                            <li>Expert guidance from top educators</li>
                            <li>Interactive practice tests</li>
                            <li>Track your progress</li>
                            <li>24/7 doubt resolution</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumRegister;