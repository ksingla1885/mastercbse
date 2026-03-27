require('dotenv').config();
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Import configuration
const serverConfig = require('./config/server');
const { supabase } = require('./config/database');
const prisma = require('./config/prisma');
const dashboardController = require('./controllers/dashboardController');

// Import middleware
const { isAuthenticated, isAdmin, errorHandler } = require('./middleware/auth');

// Import routes
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/users');
const contentRoutes = require('./routes/content');

const app = express();
const PORT = serverConfig.port;

// Set up EJS (views) - pointing to a placeholder or disabled
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '..', 'frontend', 'pages'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(serverConfig.cors));

// Session middleware (for non-Supabase routes if needed)
const sessions = {};

// Pass sessions to all requests
app.use((req, res, next) => {
    req.sessions = sessions;
    next();
});

// Handle preflight requests
app.options('*', cors());

// In-memory user storage (for demo purposes)
// In production, this would be in a database
const users = [
    {
        id: 1,
        name: 'Ketan Singla',
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

// Simple password hashing (in production, use bcrypt)
const hashPassword = (password) => {
    // This is a simple hash for demo purposes
    // In production, use bcrypt: return bcrypt.hashSync(password, 10);
    return Buffer.from(password).toString('base64');
};

/**
 * Compare password with stored password
 * Handles both plain text and hashed passwords for backward compatibility
 */
const comparePassword = (inputPassword, storedPassword) => {
    // Debug log
    console.log('Password comparison:', {
        inputPassword,
        storedPassword,
        isMatch: inputPassword === storedPassword,
        isHashedMatch: hashPassword(inputPassword) === storedPassword
    });

    // Check if passwords match directly (plain text) or when hashed
    return inputPassword === storedPassword ||
        hashPassword(inputPassword) === storedPassword;
};

// Static files - point to frontend-react/dist (once built) or backend assets
// app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')));

// Ensure content directory exists
const contentUploadsDir = path.join(__dirname, 'uploads', 'content');
if (!fs.existsSync(contentUploadsDir)) {
    fs.mkdirSync(contentUploadsDir, { recursive: true });
}

// Ensure premium_user folder exists in backend/uploads
const premiumUserDir = path.join(__dirname, 'uploads', 'premium_users');
if (!fs.existsSync(premiumUserDir)) {
    fs.mkdirSync(premiumUserDir, { recursive: true });
}

// Serve uploaded content static files
app.use('/content', express.static(contentUploadsDir));

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, premiumUserDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Admin login endpoint with hardcoded credentials
app.post('/api/admin/login', (req, res) => {
    try {
        const { email, password } = req.body;

        // Hardcoded admin credentials
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

        // Validate credentials
        if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Create admin session
        const sessionId = Math.random().toString(36).substring(2);
        sessions[sessionId] = {
            id: 'admin-001',
            email: ADMIN_EMAIL,
            name: 'Ketan Singla',
            role: 'admin'
        };

        // Set cookie
        res.cookie('adminSessionId', sessionId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        res.json({
            success: true,
            user: {
                id: 'admin-001',
                email: ADMIN_EMAIL,
                name: 'Ketan Singla',
                role: 'admin'
            },
            token: sessionId
        });

    } catch (error) {
        console.error('Admin login error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred during login'
        });
    }
});

// Admin logout endpoint
app.post('/api/admin/logout', (req, res) => {
    const sessionId = req.cookies.adminSessionId;
    if (sessionId) {
        delete sessions[sessionId];
    }
    res.clearCookie('adminSessionId');
    res.json({ success: true, message: 'Logged out successfully' });
});

// API Routes

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = users.find(u => u.email === email);

        // Check if user exists and password is correct
        if (!user || !comparePassword(password, user.password)) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Create session
        const sessionId = Math.random().toString(36).substring(2);
        sessions[sessionId] = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
        };

        // Set cookie
        res.cookie('sessionId', sessionId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        // Return user data (without password)
        const { password: _, ...userData } = user;
        res.json({
            success: true,
            user: userData,
            token: sessionId // In production, return a JWT token
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred during login'
        });
    }
});

// Get current user
app.get('/api/auth/me', isAuthenticated, (req, res) => {
    // Return user data (without password)
    const { password, ...userData } = req.user;
    res.json({
        success: true,
        user: userData
    });
});

// Logout
app.post('/api/auth/logout', (req, res) => {
    const sessionId = req.cookies.sessionId;
    if (sessionId) {
        delete sessions[sessionId];
    }
    res.clearCookie('sessionId');
    res.json({ success: true, message: 'Logged out successfully' });
});

// Routes

// Serving files from the old frontend is disabled
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'frontend', 'landing.html'));
// });
// app.use('/', express.static(path.join(__dirname, '..', 'frontend')));

// Old HTML routes are disabled - now handled by React
// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'frontend', 'login.html'));
// });
// app.get('/signup', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'frontend', 'signup.html'));
// });

// Handle registration with Supabase
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Check if user already exists
        const { data: existingUser, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();

        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already registered' });
        }

        // Create user in Supabase Auth
        const { data: authData, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name,
                    role: 'premium'
                }
            }
        });

        if (signUpError) throw signUpError;

        // Create user in your users table
        const { data: newUser, error: dbError } = await supabase
            .from('users')
            .insert([
                {
                    id: authData.user.id,
                    email,
                    name,
                    role: 'premium'
                }
            ])
            .select()
            .single();

        if (dbError) throw dbError;

        // Sign in the user
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (signInError) throw signInError;

        // Set session cookie
        res.cookie('sb-access-token', signInData.session.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        // Return success response
        res.status(201).json({
            success: true,
            message: 'Registration successful',
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'An error occurred during registration'
        });
    }
});

// Handle login with Supabase
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Input validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            });
        }

        // Sign in with Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            console.error('Login error:', error.message);
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Get user data from your users table
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('id', data.user.id)
            .single();

        if (userError) throw userError;

        // Set session cookie
        res.cookie('sb-access-token', data.session.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        // Return user data
        res.json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            },
            token: data.session.access_token
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'An error occurred during login'
        });
    }
});

// Admin dashboard (simple for demo)
app.get('/admin', isAdmin, (req, res) => {
    res.send(`
        <h1>Admin Dashboard</h1>
        <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="file" required>
            <button type="submit">Upload</button>
        </form>
        <a href="/resources">View Resources</a>
    `);
});

// Upload file (admin only)
app.post('/upload', isAdmin, upload.single('file'), (req, res) => {
    res.json({ message: 'File uploaded', file: req.file });
});

// Old resources route disabled
app.get('/resources', isAuthenticated, (req, res) => {
    res.json({ message: "Please use the React dashboard to access resources." });
});

// Delete file (admin only)
app.delete('/file/:filename', isAdmin, (req, res) => {
    const filePath = path.join(premiumUserDir, req.params.filename);
    fs.unlink(filePath, (err) => {
        if (err) {
            res.status(500).json({ error: 'Error deleting file' });
        } else {
            res.json({ message: 'File deleted' });
        }
    });
});

// Update file (admin only) - for demo, just rename
app.put('/file/:oldFilename/:newFilename', isAdmin, (req, res) => {
    const oldPath = path.join(premiumUserDir, req.params.oldFilename);
    const newPath = path.join(premiumUserDir, req.params.newFilename);
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            res.status(500).json({ error: 'Error updating file' });
        } else {
            res.json({ message: 'File updated' });
        }
    });
});

// ============================================
// DASHBOARD ROUTES
// ============================================

// Dashboard HTML serving disabled - React frontend should handle routing
app.get('/dashboard/:classAndStream', isAuthenticated, (req, res) => {
    res.status(404).json({ error: "HTML dashboards are deprecated. Use the React frontend." });
});

// Redirect to user's specific dashboard based on class and stream
app.get('/dashboard', isAuthenticated, dashboardController.redirectToDashboard);

// API endpoint to get dashboard data
app.get('/api/dashboard/data', isAuthenticated, dashboardController.getDashboardData);

// Helper function to get dashboard file path
function getDashboardFilePath(userClass, stream) {
    const classNum = parseInt(userClass);
    const normalizedStream = (stream || '').toLowerCase().trim();

    // For classes 9-10
    if (classNum === 9) {
        return 'frontend/pages/dashboards/class_9_default.html';
    }
    if (classNum === 10) {
        return 'frontend/pages/dashboards/class_10_default.html';
    }

    // For classes 11-12 with streams
    if ((classNum === 11 || classNum === 12) && normalizedStream) {
        const streamFile = `class_${classNum}_${normalizedStream}.html`;
        return `frontend/pages/dashboards/${streamFile}`;
    }

    // Fallback to default
    return 'frontend/pages/dashboards/dashboard_default.html';
}

// Old Static Class/Admin serving disabled
// Serve Classes pages
// app.get('/Classes/:classFolder/*', (req, res) => {
//     const { classFolder } = req.params;
//     const restOfPath = req.params[0] || 'index.html';

//     // Decode the URL path in case it has encoded characters (like %20 for spaces)
//     const decodedClassFolder = decodeURIComponent(classFolder);
//     const decodedRestPath = decodeURIComponent(restOfPath);

//     const filePath = path.join(__dirname, '..', 'frontend', 'pages', 'Classes', decodedClassFolder, decodedRestPath);

//     res.sendFile(filePath, (err) => {
//         if (err) {
//             console.error('Class page error:', err.message);
//             res.status(404).json({ error: 'Page not found' });
//         }
//     });
// });

// Serve Admin pages
// app.get('/Admin/*', (req, res) => {
//     const filePath = req.params[0] || 'index.html';
//     const decodedPath = decodeURIComponent(filePath);

//     const fullPath = path.join(__dirname, '..', 'frontend', 'pages', 'Admin', decodedPath);

//     res.sendFile(fullPath, (err) => {
//         if (err) {
//             console.error('Admin page error:', err.message);
//             res.status(404).json({ error: 'Admin page not found' });
//         }
//     });
// });

// ============================================
// REGISTER API ROUTES
// ============================================

// Authentication routes
app.use('/api/auth', authRoutes);

// Dashboard routes
app.use('/api/dashboard', dashboardRoutes);

// Admin routes
app.use('/api/admin', adminRoutes);

// User routes (Prisma)
app.use('/api/users', userRoutes);

// Content routes (Prisma)
app.use('/api/content', contentRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`📍 Environment: ${serverConfig.env}`);
    console.log(`🌐 URL: http://localhost:${PORT}`);
});
