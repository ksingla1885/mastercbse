import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { apiService } from '../services/apiService';
import Sidebar from '../components/Sidebar';
import '../styles/dashboard.css';
import '../styles/sidebar.css';
import '../styles/settings.css';

const Settings = () => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('general');
    const [settings, setSettings] = useState({
        general: {
            siteName: 'mastercbse',
            siteEmail: 'support@mastercbse.com',
            maintenance: false,
            registration: true
        },
        payment: {
            razorpayKey: 'rzp_live_...', // Default value - in production this would come from backend
            currency: 'INR',
            monthlyPrice: 100,
            annualPrice: 1200
        },
        email: {
            smtpHost: 'smtp.gmail.com',
            smtpPort: 587,
            emailUser: 'noreply@mastercbse.com',
            emailPassword: '••••••••'
        },
        security: {
            sessionTimeout: 30,
            maxLoginAttempts: 5,
            passwordMinLength: 8,
            twoFactorAuth: false
        }
    });
    const [saveStatus, setSaveStatus] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const initializePage = async () => {
            try {
                // Auto-login for testing
                try {
                    const loginResponse = await authService.adminLogin({
                        email: import.meta.env.VITE_ADMIN_EMAIL,
                        password: import.meta.env.VITE_ADMIN_PASSWORD
                    });

                    if (loginResponse.success) {
                        // Auto-login successful
                    }
                } catch (loginError) {
                    console.log('Settings auto-login failed, using test admin:', loginError.message);
                }

                // Set admin user
                const currentAdmin = { 
                    name: 'Ketan Singla', 
                    email: import.meta.env.VITE_ADMIN_EMAIL, 
                    role: 'admin' 
                };
                setAdmin(currentAdmin);
                localStorage.setItem('adminUser', JSON.stringify(currentAdmin));

                // Load settings from backend
                try {
                    const response = await apiService.getSettings();
                    if (response.success && response.data) {
                        setSettings(response.data);
                        // Settings loaded from backend
                    }
                } catch (apiError) {
                    // Settings API not available, using defaults
                    // Continue with default settings
                }

            } catch (error) {
                console.error('Page initialization error:', error);
            } finally {
                setLoading(false);
            }
        };

        initializePage();
    }, []);

    const handleLogout = async () => {
        try {
            await authService.logout();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleSettingChange = (category, field, value) => {
        setSettings(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [field]: value
            }
        }));
    };

    const handleSaveSettings = async (category) => {
        try {
            setSaveStatus('Saving...');

            // Call API to save settings
            const response = await apiService.updateSettings(settings[category]);

            if (response.success) {
                setSaveStatus('Settings saved successfully!');
            } else {
                setSaveStatus('Error saving settings');
            }

            setTimeout(() => setSaveStatus(''), 3000);
        } catch (error) {
            console.error('Save settings error:', error);
            setSaveStatus('Error saving settings');
            setTimeout(() => setSaveStatus(''), 3000);
        }
    };

    const handleBackup = async () => {
        try {
            setSaveStatus('Creating backup...');

            const response = await apiService.createBackup();

            if (response.success) {
                setSaveStatus('Backup created successfully!');
                // Optionally download the backup
                if (response.backupUrl) {
                    window.open(response.backupUrl, '_blank');
                }
            } else {
                setSaveStatus('Error creating backup');
            }

            setTimeout(() => setSaveStatus(''), 3000);
        } catch (error) {
            console.error('Backup error:', error);
            setSaveStatus('Error creating backup');
            setTimeout(() => setSaveStatus(''), 3000);
        }
    };

    const handleClearCache = async () => {
        try {
            setSaveStatus('Clearing cache...');

            const response = await apiService.clearCache();

            if (response.success) {
                setSaveStatus('Cache cleared successfully!');
            } else {
                setSaveStatus('Error clearing cache');
            }

            setTimeout(() => setSaveStatus(''), 3000);
        } catch (error) {
            console.error('Clear cache error:', error);
            setSaveStatus('Error clearing cache');
            setTimeout(() => setSaveStatus(''), 3000);
        }
    };

    const tabs = [
        { id: 'general', label: 'General', icon: 'fas fa-cog' },
        { id: 'payment', label: 'Payment', icon: 'fas fa-credit-card' },
        { id: 'email', label: 'Email', icon: 'fas fa-envelope' },
        { id: 'security', label: 'Security', icon: 'fas fa-shield-alt' }
    ];

    if (loading) {
        return <div className="admin-loading">Loading settings...</div>;
    }

    // Always render the page, even if admin is not set

    return (
        <div className="admin-dashboard">
            <Sidebar admin={admin || { name: 'Ketan Singla', email: import.meta.env.VITE_ADMIN_EMAIL, role: 'admin' }} onLogout={handleLogout} />

            <div className="admin-main-content">
                <header className="admin-header">
                    <h1>Settings</h1>
                    <p>Configure and manage platform settings</p>
                </header>

                {saveStatus && (
                    <div className={`save-status ${saveStatus.includes('Error') ? 'error' : 'success'}`}>
                        {saveStatus}
                    </div>
                )}

                <div className="settings-container">
                    <div className="settings-tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <i className={tab.icon}></i>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="settings-content">
                        {activeTab === 'general' && (
                            <div className="settings-section">
                                <h3>General Settings</h3>
                                <div className="form-group">
                                    <label>Site Name</label>
                                    <input
                                        type="text"
                                        value={settings.general.siteName}
                                        onChange={(e) => handleSettingChange('general', 'siteName', e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Site Email</label>
                                    <input
                                        type="email"
                                        value={settings.general.siteEmail}
                                        onChange={(e) => handleSettingChange('general', 'siteEmail', e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={settings.general.maintenance}
                                            onChange={(e) => handleSettingChange('general', 'maintenance', e.target.checked)}
                                        />
                                        Maintenance Mode
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={settings.general.registration}
                                            onChange={(e) => handleSettingChange('general', 'registration', e.target.checked)}
                                        />
                                        Allow User Registration
                                    </label>
                                </div>
                                <button
                                    className="btn-primary"
                                    onClick={() => handleSaveSettings('general')}
                                >
                                    Save General Settings
                                </button>
                            </div>
                        )}

                        {activeTab === 'payment' && (
                            <div className="settings-section">
                                <h3>Payment Settings</h3>
                                <div className="form-group">
                                    <label>Razorpay Key</label>
                                    <input
                                        type="text"
                                        value={settings.payment.razorpayKey}
                                        onChange={(e) => handleSettingChange('payment', 'razorpayKey', e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Currency</label>
                                    <select
                                        value={settings.payment.currency}
                                        onChange={(e) => handleSettingChange('payment', 'currency', e.target.value)}
                                    >
                                        <option value="INR">INR (₹)</option>
                                        <option value="USD">USD ($)</option>
                                        <option value="EUR">EUR (€)</option>
                                    </select>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Monthly Price (₹)</label>
                                        <input
                                            type="number"
                                            value={settings.payment.monthlyPrice}
                                            onChange={(e) => handleSettingChange('payment', 'monthlyPrice', parseInt(e.target.value))}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Annual Price (₹)</label>
                                        <input
                                            type="number"
                                            value={settings.payment.annualPrice}
                                            onChange={(e) => handleSettingChange('payment', 'annualPrice', parseInt(e.target.value))}
                                        />
                                    </div>
                                </div>
                                <button
                                    className="btn-primary"
                                    onClick={() => handleSaveSettings('payment')}
                                >
                                    Save Payment Settings
                                </button>
                            </div>
                        )}

                        {activeTab === 'email' && (
                            <div className="settings-section">
                                <h3>Email Configuration</h3>
                                <div className="form-group">
                                    <label>SMTP Host</label>
                                    <input
                                        type="text"
                                        value={settings.email.smtpHost}
                                        onChange={(e) => handleSettingChange('email', 'smtpHost', e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>SMTP Port</label>
                                    <input
                                        type="number"
                                        value={settings.email.smtpPort}
                                        onChange={(e) => handleSettingChange('email', 'smtpPort', parseInt(e.target.value))}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email User</label>
                                    <input
                                        type="email"
                                        value={settings.email.emailUser}
                                        onChange={(e) => handleSettingChange('email', 'emailUser', e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Password</label>
                                    <input
                                        type="password"
                                        value={settings.email.emailPassword}
                                        onChange={(e) => handleSettingChange('email', 'emailPassword', e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn-secondary">
                                        <i className="fas fa-paper-plane"></i> Send Test Email
                                    </button>
                                </div>
                                <button
                                    className="btn-primary"
                                    onClick={() => handleSaveSettings('email')}
                                >
                                    Save Email Settings
                                </button>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="settings-section">
                                <h3>Security Settings</h3>
                                <div className="form-group">
                                    <label>Session Timeout (minutes)</label>
                                    <input
                                        type="number"
                                        value={settings.security.sessionTimeout}
                                        onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Max Login Attempts</label>
                                    <input
                                        type="number"
                                        value={settings.security.maxLoginAttempts}
                                        onChange={(e) => handleSettingChange('security', 'maxLoginAttempts', parseInt(e.target.value))}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password Minimum Length</label>
                                    <input
                                        type="number"
                                        value={settings.security.passwordMinLength}
                                        onChange={(e) => handleSettingChange('security', 'passwordMinLength', parseInt(e.target.value))}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={settings.security.twoFactorAuth}
                                            onChange={(e) => handleSettingChange('security', 'twoFactorAuth', e.target.checked)}
                                        />
                                        Enable Two-Factor Authentication
                                    </label>
                                </div>
                                <button
                                    className="btn-primary"
                                    onClick={() => handleSaveSettings('security')}
                                >
                                    Save Security Settings
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <section className="admin-content-section">
                    <h3>System Maintenance</h3>
                    <div className="maintenance-actions">
                        <button className="btn-secondary" onClick={handleBackup}>
                            <i className="fas fa-download"></i> Create Backup
                        </button>
                        <button className="btn-secondary" onClick={handleClearCache}>
                            <i className="fas fa-sync"></i> Clear Cache
                        </button>
                        <button className="btn-secondary" onClick={() => window.location.href = '/admin/dashboard'}>
                            <i className="fas fa-broom"></i> Clean Database
                        </button>
                        <button className="btn-danger" onClick={handleLogout}>
                            <i className="fas fa-exclamation-triangle"></i> Logout
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Settings;
