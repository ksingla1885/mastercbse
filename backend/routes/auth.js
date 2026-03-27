/**
 * Authentication Routes
 * Handles login, registration, logout, and user endpoints
 */

const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdminAuth } = require('../middleware/auth');
const { validateLogin, validateRegister } = require('../middleware/validation');

/**
 * POST /api/auth/login
 * User login endpoint
 */
router.post('/login', validateLogin, async (req, res) => {
    try {
        const { email, password } = req.body;

        // TODO: Implement Supabase authentication
        // const { data, error } = await supabase.auth.signInWithPassword({
        //     email,
        //     password
        // });

        res.json({
            success: true,
            message: 'Login endpoint - implement Supabase auth',
            user: {
                email
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Login failed'
        });
    }
});

/**
 * POST /api/auth/register
 * User registration endpoint
 */
router.post('/register', validateRegister, async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // TODO: Implement Supabase registration
        // const { data, error } = await supabase.auth.signUp({
        //     email,
        //     password,
        //     options: { data: { name } }
        // });

        res.status(201).json({
            success: true,
            message: 'Registration endpoint - implement Supabase auth',
            user: {
                email,
                name
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Registration failed'
        });
    }
});

/**
 * GET /api/auth/me
 * Get current user info
 */
router.get('/me', isAuthenticated, (req, res) => {
    try {
        res.json({
            success: true,
            message: 'Current user endpoint - implement user fetch',
            user: null
        });

    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to get user'
        });
    }
});

/**
 * POST /api/auth/admin/login
 * Admin login endpoint
 */
router.post('/admin/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check against hardcoded admin credentials (from server.js)
        const validEmail = process.env.ADMIN_EMAIL;
        const validPassword = process.env.ADMIN_PASSWORD;

        if (email === validEmail && password === validPassword) {
            // Create admin session
            const sessionId = 'admin_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            const adminUser = {
                id: 1,
                name: 'Ketan Singla',
                email: email,
                role: 'admin'
            };

            // Store session
            req.sessions[sessionId] = adminUser;

            // Set session cookie
            res.cookie('adminSessionId', sessionId, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 24 * 60 * 60 * 1000 // 24 hours
            });

            res.json({
                success: true,
                message: 'Admin login successful',
                user: adminUser,
                token: sessionId
            });
        } else {
            res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

    } catch (error) {
        console.error('Admin login error:', error);
        res.status(500).json({
            success: false,
            message: 'Login failed'
        });
    }
});

/**
 * POST /api/auth/logout
 * User logout endpoint
 */
router.post('/logout', isAuthenticated, (req, res) => {
    try {
        // TODO: Clear session/token
        res.clearCookie('sessionId');

        res.json({
            success: true,
            message: 'Logged out successfully'
        });

    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({
            success: false,
            message: 'Logout failed'
        });
    }
});

/**
 * GET /api/auth/admin/verify
 * Verify admin session
 */
router.get('/admin/verify', isAdminAuth, (req, res) => {
    try {
        res.json({
            success: true,
            message: 'Admin session valid',
            user: req.user
        });
    } catch (error) {
        console.error('Admin verification error:', error);
        res.status(500).json({
            success: false,
            message: 'Verification failed'
        });
    }
});

/**
 * POST /api/auth/admin/logout
 * Admin logout endpoint
 */
router.post('/admin/logout', (req, res) => {
    try {
        const sessionId = req.cookies.adminSessionId;
        
        // Clear session
        if (sessionId && req.sessions[sessionId]) {
            delete req.sessions[sessionId];
        }

        // Clear cookie
        res.clearCookie('adminSessionId');

        res.json({
            success: true,
            message: 'Admin logged out successfully'
        });

    } catch (error) {
        console.error('Admin logout error:', error);
        res.status(500).json({
            success: false,
            message: 'Logout failed'
        });
    }
});

module.exports = router;
