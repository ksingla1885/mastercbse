# Backend - CBSE Educational Platform Server

## 📁 Directory Structure

```
backend/
├── server.js                    # Main Express application
├── package.json                 # Dependencies
├── .env                        # Environment variables
│
├── config/                     # Configuration files
│   ├── database.js            # Supabase connection
│   └── server.js              # Server configuration
│
├── controllers/                # Business logic
│   └── dashboardController.js # Dashboard routing logic
│
├── middleware/                 # Custom middleware
│   ├── auth.js               # Authentication & authorization
│   └── validation.js         # Input validation
│
└── routes/                    # API routes
    ├── auth.js               # Authentication endpoints
    ├── dashboard.js          # Dashboard endpoints
    └── admin.js              # Admin endpoints
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Edit `.env` file:
```bash
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
PORT=3000
NODE_ENV=development
```

### 3. Start Server
```bash
npm start
```

Server runs at: `http://localhost:3000`

---

## 📋 API Routes

### Authentication Routes (`/api/auth`)
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - User logout

### Dashboard Routes (`/api/dashboard`)
- `GET /api/dashboard/data` - Get dashboard data
- `GET /api/dashboard/redirect` - Get dashboard redirect URL
- `GET /api/dashboard/subjects/:stream` - Get stream subjects

### Admin Routes (`/api/admin`)
- `GET /api/admin/users` - Get all users (admin only)
- `GET /api/admin/analytics` - Get analytics (admin only)
- `POST /api/admin/content` - Upload content (admin only)

---

## 🔧 Configuration

### config/server.js
Main server configuration including:
- Port settings
- CORS configuration
- Cookie settings
- File upload settings

### config/database.js
Database connection and initialization:
- Supabase client setup
- Environment variable validation

---

## 🛡️ Middleware

### auth.js
- `isAuthenticated` - Require authentication
- `isAdmin` - Require admin role
- `errorHandler` - Global error handling

### validation.js
- `validateLogin` - Validate login credentials
- `validateRegister` - Validate registration data
- `validateDashboard` - Validate dashboard access

---

## 📚 Controllers

### dashboardController.js
Handles dashboard-related logic:
- Dashboard routing by class and stream
- Subject mapping for streams
- Dashboard data retrieval

---

## 🔌 Extending the Backend

### Add New Route
1. Create file in `/routes` directory
2. Import it in `server.js`
3. Register with `app.use('/api/path', routeHandler)`

Example:
```javascript
// routes/courses.js
const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ courses: [] });
});

module.exports = router;
```

Then in `server.js`:
```javascript
const courseRoutes = require('./routes/courses');
app.use('/api/courses', courseRoutes);
```

### Add New Middleware
1. Create file in `/middleware` directory
2. Export middleware function
3. Import and use in routes

Example:
```javascript
// middleware/custom.js
const customMiddleware = (req, res, next) => {
    // Custom logic
    next();
};

module.exports = { customMiddleware };
```

### Add New Controller
1. Create file in `/controllers` directory
2. Export controller functions
3. Use in routes

---

## 🔍 Key Files Explained

### server.js
- Initializes Express app
- Sets up middleware
- Registers routes
- Starts server on specified port
- Updated to use modular configuration and routes

### .env
Required environment variables:
```
SUPABASE_URL=       # Your Supabase project URL
SUPABASE_ANON_KEY=  # Your Supabase anonymous key
PORT=3000           # Server port
NODE_ENV=development # Environment
```

### package.json
Dependencies:
- `express` - Web framework
- `@supabase/supabase-js` - Database & Auth
- `cors` - Cross-origin requests
- `cookie-parser` - Cookie handling
- `dotenv` - Environment variables
- `multer` - File uploads
- `ejs` - Template engine (for future use)

---

## 📊 Database Schema

### Users Table (Supabase)
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  name VARCHAR(255),
  role VARCHAR(50),          -- 'student', 'admin', 'premium'
  class INTEGER,             -- 9-12
  stream VARCHAR(50),        -- 'pcm', 'pcb', 'commerce', 'humanities'
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

---

## 🔐 Authentication Flow

```
1. User submits login credentials
2. POST /api/auth/login
3. Supabase validates credentials
4. Session created
5. Cookie set on client
6. Redirect to dashboard
```

---

## 🚨 Error Handling

Global error handler in middleware catches:
- Invalid input
- Authentication errors
- Database errors
- Server errors

All errors return JSON:
```json
{
  "success": false,
  "message": "Error description"
}
```

---

## 📝 Logging

Server logs startup info:
```
✅ Server running on port 3000
📍 Environment: development
🌐 URL: http://localhost:3000
```

---

## 🔄 Development Workflow

1. **Create Route**
   - New file in `/routes`
   - Define endpoints

2. **Create Controller** (if needed)
   - New file in `/controllers`
   - Implement business logic

3. **Add Middleware** (if needed)
   - New file in `/middleware`
   - Implement validation/auth

4. **Register in server.js**
   - Import route file
   - Add `app.use()` statement

5. **Test**
   - Use Postman or curl
   - Verify response

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in .env
PORT=3001
```

### Module Not Found
```bash
# Reinstall dependencies
npm install
```

### Supabase Connection Error
```bash
# Check .env has valid:
# - SUPABASE_URL
# - SUPABASE_ANON_KEY
```

---

## 📚 Related Documentation

- `../../README.md` - Main project guide
- `../../API_REFERENCE.md` - Complete API docs
- `../../PROJECT_STRUCTURE.md` - Project structure
- `../../DASHBOARD_SYSTEM.md` - Dashboard architecture

---

## ✅ Checklist for New Developers

- [ ] Installed Node.js & npm
- [ ] Installed project dependencies (`npm install`)
- [ ] Created `.env` file with Supabase credentials
- [ ] Started server (`npm start`)
- [ ] Tested at `http://localhost:3000`
- [ ] Read route documentation
- [ ] Explored controller logic

---

## 🎯 Next Steps

1. Implement Supabase authentication in routes
2. Create additional routes for features
3. Add database models and queries
4. Implement file upload functionality
5. Add comprehensive error logging
6. Create unit tests
7. Deploy to production server

---

**Backend Ready to Use! 🚀**
