/**
 * Server Configuration
 * Central configuration for the Express application
 */

module.exports = {
    // Server Port
    port: process.env.PORT || 3000,
    
    // Environment
    env: process.env.NODE_ENV || 'development',
    
    // CORS Configuration
    cors: {
        origin: [
            'http://localhost:3000',
            'http://127.0.0.1:3000',
            'http://localhost:5500',
            'http://127.0.0.1:5500',
            'http://localhost:5173',
            'http://127.0.0.1:5173'
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    
    // Cookie Configuration
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    },
    
    // File Upload Configuration
    upload: {
        maxFileSize: 50 * 1024 * 1024, // 50MB
        allowedTypes: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'jpg', 'jpeg', 'png']
    }
};
