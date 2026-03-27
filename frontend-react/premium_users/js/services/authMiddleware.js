/**
 * Authentication Middleware
 * Handles user authentication and authorization
 */

/**
 * Middleware to check if user is authenticated
 * Looks for user data in localStorage (client-side) or session (server-side)
 */
function isUserAuthenticated() {
    const userData = localStorage.getItem('sb-user-data');
    const token = localStorage.getItem('sb-access-token');
    return !!(userData && token);
}

/**
 * Get current authenticated user
 * @returns {Object|null} User object or null if not authenticated
 */
function getCurrentUser() {
    const userDataStr = localStorage.getItem('sb-user-data');
    if (!userDataStr) return null;
    
    try {
        return JSON.parse(userDataStr);
    } catch (error) {
        console.error('Error parsing user data:', error);
        return null;
    }
}

/**
 * Get user's class
 * @returns {number|null} User's class or null
 */
function getUserClass() {
    const user = getCurrentUser();
    return user?.class || null;
}

/**
 * Get user's stream
 * @returns {string|null} User's stream or null
 */
function getUserStream() {
    const user = getCurrentUser();
    return user?.stream || null;
}

/**
 * Redirect to login if not authenticated
 * @param {string} redirectTo - URL to return to after login
 */
function requireAuth(redirectTo = '') {
    if (!isUserAuthenticated()) {
        const returnUrl = redirectTo || window.location.pathname;
        window.location.href = `/premium_users/login.html?redirect=${encodeURIComponent(returnUrl)}`;
    }
}

/**
 * Clear authentication data
 */
function clearAuthData() {
    localStorage.removeItem('sb-access-token');
    localStorage.removeItem('sb-user-data');
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('userEmail');
}

export {
    isUserAuthenticated,
    getCurrentUser,
    getUserClass,
    getUserStream,
    requireAuth,
    clearAuthData
};
