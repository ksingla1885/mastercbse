import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import '../../styles/PremiumRegister.css';

const PremiumRegister = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        class: '',
        stream: '',
        password: '',
        confirmPassword: '',
        terms: false,
        selectedPlan: 'trial'
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
    const [loading, setLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [alert, setAlert] = useState({ show: false, message: '', type: 'info' });

    useEffect(() => {
        const plan = searchParams.get('plan');
        if (plan && ['basic', 'premium', 'elite', 'monthly', 'quarterly', 'annual'].includes(plan)) {
            setFormData(prev => ({ ...prev, selectedPlan: plan }));
        }
    }, [searchParams]);

    const calculatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/\d/.test(password)) strength += 1;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        return strength;
    };

    const getStrengthText = () => {
        const texts = ['Very Weak', 'Weak', 'Moderate', 'Strong'];
        return texts[passwordStrength] || 'Very Weak';
    };

    const getStrengthColor = () => {
        const colors = ['#f44336', '#f44336', '#ff9800', '#4caf50'];
        return colors[passwordStrength] || '#f44336';
    };

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'Please enter your first name';
        if (!formData.lastName.trim()) newErrors.lastName = 'Please enter your last name';

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (!formData.class) newErrors.class = 'Please select your class';

        if (parseInt(formData.class) >= 11 && !formData.stream) {
            newErrors.stream = 'Please select your stream';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.terms) {
            newErrors.terms = 'You must agree to the terms and conditions';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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

        // Update password strength
        if (name === 'password') {
            setPasswordStrength(calculatePasswordStrength(value));
        }

        // Handle class change
        if (name === 'class') {
            if (parseInt(value) < 11) {
                setFormData(prev => ({ ...prev, stream: '' }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setAlert({ show: true, message: 'Registration successful! Redirecting to login...', type: 'success' });

            setTimeout(() => {
                navigate('/premium/login?registered=true');
            }, 1500);

        } catch (error) {
            console.error('Registration error:', error);
            setAlert({ show: true, message: 'Registration failed. Please try again.', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const showStreamField = parseInt(formData.class) >= 11;

    return (
        <div className="registration-container">
            <div className="registration-form">
                <div className="registration-header">
                    <h1>Create Your Account</h1>
                    <p>Join thousands of students excelling with mastercbse</p>
                </div>

                {alert.show && (
                    <div className={`alert alert-${alert.type}`}>
                        <i className={`fas fa-${alert.type === 'success' ? 'check-circle' : 'info-circle'}`}></i>
                        <span>{alert.message}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className={`form-control ${errors.firstName ? 'error' : ''}`}
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            {errors.firstName && <div className="error-message" style={{ display: 'block' }}>{errors.firstName}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className={`form-control ${errors.lastName ? 'error' : ''}`}
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                            {errors.lastName && <div className="error-message" style={{ display: 'block' }}>{errors.lastName}</div>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`form-control ${errors.email ? 'error' : ''}`}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <div className="error-message" style={{ display: 'block' }}>{errors.email}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className={`form-control ${errors.phone ? 'error' : ''}`}
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        {errors.phone && <div className="error-message" style={{ display: 'block' }}>{errors.phone}</div>}
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="class" className="form-label">Class</label>
                            <select
                                id="class"
                                name="class"
                                className={`form-control ${errors.class ? 'error' : ''}`}
                                value={formData.class}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select your class</option>
                                <option value="9">Class 9</option>
                                <option value="10">Class 10</option>
                                <option value="11">Class 11</option>
                                <option value="12">Class 12</option>
                            </select>
                            {errors.class && <div className="error-message" style={{ display: 'block' }}>{errors.class}</div>}
                        </div>
                        {showStreamField && (
                            <div className="form-group">
                                <label htmlFor="stream" className="form-label">Stream (For 11th & 12th)</label>
                                <select
                                    id="stream"
                                    name="stream"
                                    className={`form-control ${errors.stream ? 'error' : ''}`}
                                    value={formData.stream}
                                    onChange={handleChange}
                                    required={showStreamField}
                                >
                                    <option value="">Select stream</option>
                                    <option value="pcm">Science (PCM)</option>
                                    <option value="pcb">Science (PCB)</option>
                                    <option value="commerce">Commerce</option>
                                    <option value="humanities">Arts/Humanities</option>
                                </select>
                                {errors.stream && <div className="error-message" style={{ display: 'block' }}>{errors.stream}</div>}
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Create Password</label>
                        <div className="password-input">
                            <input
                                type={showPassword.password ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className={`form-control ${errors.password ? 'error' : ''}`}
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength={8}
                            />
                            <i
                                className={`toggle-password fas ${showPassword.password ? 'fa-eye-slash' : 'fa-eye'}`}
                                onClick={() => togglePasswordVisibility('password')}
                            ></i>
                        </div>
                        {errors.password && <div className="error-message" style={{ display: 'block' }}>{errors.password}</div>}
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
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <div className="password-input">
                            <input
                                type={showPassword.confirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <i
                                className={`toggle-password fas ${showPassword.confirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                                onClick={() => togglePasswordVisibility('confirmPassword')}
                            ></i>
                        </div>
                        {errors.confirmPassword && <div className="error-message" style={{ display: 'block' }}>{errors.confirmPassword}</div>}
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                className={`form-check-input ${errors.terms ? 'error' : ''}`}
                                checked={formData.terms}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="terms" className="form-check-label">
                                I agree to the <a href="#" className="text-primary">Terms of Service</a> and{' '}
                                <a href="#" className="text-primary">Privacy Policy</a>. I understand that I'll be redirected to the dashboard to choose a plan after registration.
                            </label>
                            {errors.terms && <div className="error-message" style={{ display: 'block' }}>{errors.terms}</div>}
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            <span className="btn-text">{loading ? 'Creating Account...' : 'Create Account'}</span>
                            {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                        </button>
                    </div>

                    <div className="login-link">
                        Already have an account? <Link to="/premium/login">Log in</Link>
                    </div>
                </form>
            </div>

            <div className="registration-illustration">
                <img
                    src="https://illustrations.popsy.co/amber/student-with-laptop.svg"
                    alt="Student Learning"
                    style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }}
                />
                <div style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
                    <h3>Why join mastercbse?</h3>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', paddingLeft: '1.5rem' }}>
                        <li style={{ marginBottom: '0.75rem' }}>Access to premium study materials</li>
                        <li style={{ marginBottom: '0.75rem' }}>Expert guidance from top educators</li>
                        <li style={{ marginBottom: '0.75rem' }}>Interactive practice tests</li>
                        <li style={{ marginBottom: '0.75rem' }}>Track your progress</li>
                        <li>24/7 doubt resolution</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PremiumRegister;
