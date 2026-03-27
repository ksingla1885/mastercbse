/**
 * Dashboard Routes
 * Handles dashboard-related endpoints
 */

const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { isAuthenticated } = require('../middleware/auth');
const { validateDashboard } = require('../middleware/validation');

/**
 * GET /api/dashboard/data
 * Get dashboard data for authenticated user
 */
router.get('/data', isAuthenticated, dashboardController.getDashboardData);

/**
 * GET /api/dashboard/redirect
 * Get redirect URL for user's dashboard
 */
router.get('/redirect', isAuthenticated, dashboardController.redirectToDashboard);

/**
 * GET /api/dashboard/subjects/:stream
 * Get subjects for a specific stream
 */
router.get('/subjects/:stream', (req, res) => {
    try {
        const { stream } = req.params;
        const subjects = dashboardController.getSubjectsForStream(stream);

        res.json({
            success: true,
            stream,
            subjects
        });

    } catch (error) {
        console.error('Dashboard subjects error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch subjects'
        });
    }
});

module.exports = router;
