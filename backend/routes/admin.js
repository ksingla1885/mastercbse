/**
 * Admin Routes
 * Handles admin panel and management endpoints
 */

const express = require('express');
const router = express.Router();
const { isAdminAuth } = require('../middleware/auth');
const adminController = require('../controllers/adminController');
const upload = require('../middleware/upload');


// ============================================
// USER MANAGEMENT ROUTES
// ============================================

/**
 * GET /api/admin/users
 * Get all users with pagination and filtering
 */
router.get('/users', isAdminAuth, adminController.getUsers);

/**
 * GET /api/admin/users/:id
 * Get user by ID
 */
router.get('/users/:id', isAdminAuth, adminController.getUserById);

/**
 * PUT /api/admin/users/:id
 * Update user
 */
router.put('/users/:id', isAdminAuth, adminController.updateUser);

/**
 * DELETE /api/admin/users/:id
 * Delete user
 */
router.delete('/users/:id', isAdminAuth, adminController.deleteUser);

// ============================================
// CONTENT MANAGEMENT ROUTES
// ============================================

/**
 * GET /api/admin/content
 * Get all content with filtering
 */
router.get('/content', isAdminAuth, adminController.getContent);

/**
 * POST /api/admin/content
 * Create new content
 */
router.post('/content', isAdminAuth, upload.single('file'), adminController.createContent);

/**
 * PUT /api/admin/content/:id
 * Update content
 */
router.put('/content/:id', isAdminAuth, upload.single('file'), adminController.updateContent);

/**
 * DELETE /api/admin/content/:id
 * Delete content
 */
router.delete('/content/:id', isAdminAuth, adminController.deleteContent);

// ============================================
// SUBSCRIPTION MANAGEMENT ROUTES
// ============================================

/**
 * GET /api/admin/subscriptions
 * Get all subscriptions with filtering
 */
router.get('/subscriptions', isAdminAuth, adminController.getSubscriptions);

/**
 * PUT /api/admin/subscriptions/:id
 * Update subscription
 */
router.put('/subscriptions/:id', isAdminAuth, adminController.updateSubscription);

// ============================================
// ANALYTICS ROUTES
// ============================================

/**
 * GET /api/admin/analytics
 * Get comprehensive analytics data
 */
router.get('/analytics', isAdminAuth, adminController.getAnalytics);

/**
 * GET /api/admin/dashboard/stats
 * Get dashboard statistics
 */
router.get('/dashboard/stats', isAdminAuth, adminController.getDashboardStats);

// ============================================
// SYSTEM MAINTENANCE ROUTES
// ============================================

/**
 * GET /api/admin/settings
 * Get system settings
 */
router.get('/settings', isAdminAuth, adminController.getSettings);

/**
 * PUT /api/admin/settings
 * Update system settings
 */
router.put('/settings', isAdminAuth, adminController.updateSettings);

/**
 * POST /api/admin/backup
 * Create system backup
 */
router.post('/backup', isAdminAuth, adminController.createBackup);

/**
 * POST /api/admin/cache/clear
 * Clear system cache
 */
router.post('/cache/clear', isAdminAuth, adminController.clearCache);

/**
 * GET /api/admin/analytics
 * Get analytics data
 */
router.get('/analytics', isAdminAuth, adminController.getAnalytics);

module.exports = router;
