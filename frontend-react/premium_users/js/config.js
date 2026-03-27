// Application Configuration
window.appConfig = {
    // Supabase Configuration - using generic placeholders
    supabaseUrl: window.VITE_SUPABASE_URL || '',
    supabaseKey: window.VITE_SUPABASE_ANON_KEY || '',
    
    // API Configuration
    API_CONFIG: {
        // Base URL for all API requests
        BASE_URL: 'https://your-api-endpoint.com/api',
        
        // Authentication endpoints
        AUTH: {
            LOGIN: '/auth/login',
            REGISTER: '/auth/register',
            LOGOUT: '/auth/logout',
            ME: '/auth/me',
            REFRESH_TOKEN: '/auth/refresh-token'
        },
        
        // User endpoints
        USERS: {
            BASE: '/users',
            PROFILE: (userId) => `/users/${userId}`,
            SUBJECTS: (userId) => `/users/${userId}/subjects`,
            PASSWORD: (userId) => `/users/${userId}/password`
        },
        
        // Other API endpoints can be added here
        
        // Default request timeout in milliseconds
        TIMEOUT: 30000,
        
        // Enable/disable console logs for debugging
        DEBUG: true
    },
    
    // LocalStorage keys
    STORAGE_KEYS: {
        AUTH_TOKEN: 'authToken',
        USER_DATA: 'userData',
        THEME_PREFERENCE: 'themePreference',
        SIDEBAR_STATE: 'sidebarState'
    },
    
    // Default user settings
    DEFAULT_SETTINGS: {
        theme: 'light',
        notifications: true,
        language: 'en',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    
    // Error messages
    ERROR_MESSAGES: {
        NETWORK_ERROR: 'Network error. Please check your internet connection and try again.',
        SERVER_ERROR: 'Server error. Please try again later.',
        UNAUTHORIZED: 'Your session has expired. Please log in again.',
        FORBIDDEN: 'You do not have permission to access this resource.',
        NOT_FOUND: 'The requested resource was not found.',
        VALIDATION_ERROR: 'Please check your input and try again.',
        UNKNOWN_ERROR: 'An unknown error occurred. Please try again.'
    },
    
    // Success messages
    SUCCESS_MESSAGES: {
        LOGIN_SUCCESS: 'Login successful!',
        LOGOUT_SUCCESS: 'You have been logged out successfully.',
        PROFILE_UPDATED: 'Profile updated successfully.',
        PASSWORD_CHANGED: 'Password changed successfully.'
    }
};
