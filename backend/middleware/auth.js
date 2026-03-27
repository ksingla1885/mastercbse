/**
 * Authentication Middleware
 * Handles user authentication and authorization
 */

const isAuthenticated = (req, res, next) => {
    try {
        // Check for admin session first
        const adminSessionId = req.cookies.adminSessionId;
        if (adminSessionId && req.sessions && req.sessions[adminSessionId]) {
            req.user = req.sessions[adminSessionId];
            req.isAdmin = true;
            return next();
        }

        // Check for token in Authorization header
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            // In a real app, verify the JWT token here
            req.token = token;
            return next();
        }

        // Fallback to session check
        const sessionId = req.cookies.sessionId;
        if (sessionId && req.sessions && req.sessions[sessionId]) {
            req.user = req.sessions[sessionId];
            req.sessionId = sessionId;
            return next();
        }

        // If no valid auth found
        res.status(401).json({
            success: false,
            message: 'Authentication required'
        });

    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(500).json({
            success: false,
            message: 'Authentication error'
        });
    }
};

/**
 * Admin-only Middleware
 * Checks if user has admin role
 */
const isAdmin = (req, res, next) => {
    try {
        // Check if user is admin
        if (req.user && req.user.role === 'admin') {
            return next();
        }

        res.status(403).json({
            success: false,
            message: 'Admin access required'
        });

    } catch (error) {
        console.error('Admin middleware error:', error);
        res.status(500).json({
            success: false,
            message: 'Authorization error'
        });
    }
};

/**
 * Admin Authentication Middleware
 * Specifically for admin routes
 */
const isAdminAuth = (req, res, next) => {
    try {
        // Check for admin session
        const adminSessionId = req.cookies.adminSessionId;
        if (adminSessionId && req.sessions && req.sessions[adminSessionId]) {
            const adminUser = req.sessions[adminSessionId];
            if (adminUser.role === 'admin') {
                req.user = adminUser;
                req.isAdmin = true;
                return next();
            }
        }

        res.status(401).json({
            success: false,
            message: 'Admin authentication required'
        });

    } catch (error) {
        console.error('Admin auth middleware error:', error);
        res.status(500).json({
            success: false,
            message: 'Admin authentication error'
        });
    }
};

/**
 * Error Handling Middleware
 * Catches and handles errors
 */
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    const status = err.status || 500;
    const message = err.message || 'Internal server error';

    res.status(status).json({
        success: false,
        message: message,
        ...(process.env.NODE_ENV === 'development' && { error: err })
    });
};

module.exports = {
    isAuthenticated,
    isAdmin,
    isAdminAuth,
    errorHandler
};
