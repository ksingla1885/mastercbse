/**
 * Validation Middleware
 * Handles input validation and sanitization
 */

/**
 * Validate login credentials
 */
const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Email and password are required'
        });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email format'
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            success: false,
            message: 'Password must be at least 6 characters'
        });
    }

    next();
};

/**
 * Validate registration data
 */
const validateRegister = (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email format'
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            success: false,
            message: 'Password must be at least 6 characters'
        });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({
            success: false,
            message: 'Passwords do not match'
        });
    }

    // Sanitize name
    req.body.name = String(name).trim().substring(0, 255);

    next();
};

/**
 * Validate dashboard access
 */
const validateDashboard = (req, res, next) => {
    const { classAndStream } = req.params;

    if (!classAndStream) {
        return res.status(400).json({
            success: false,
            message: 'Class and stream are required'
        });
    }

    next();
};

module.exports = {
    validateLogin,
    validateRegister,
    validateDashboard
};
