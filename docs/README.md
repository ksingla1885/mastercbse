# CBSE Educational Platform - Restructured Project

## 🎯 Project Overview

The CBSE Educational Platform is a comprehensive web-based educational system with:
- **Student Dashboards** - Class and stream-specific content
- **Premium Features** - Subscription-based advanced access
- **Admin Panel** - Content management and analytics
- **Multi-Stream Support** - PCM, PCB, Commerce, Humanities streams
- **Class Coverage** - Classes 1-12 with stream differentiation from Class 11

---

## 📁 New Project Structure

The project has been optimized with a **clear frontend/backend separation**:

```
CBSE/
├── backend/                    # Node.js Express Server
│   ├── server.js              # Main application
│   ├── controllers/           # Business logic
│   ├── routes/                # API endpoints
│   ├── middleware/            # Custom middleware
│   ├── config/                # Configuration
│   ├── package.json           # Dependencies
│   └── .env                   # Environment variables
│
└── frontend/                  # Client-side application
    ├── pages/                 # HTML pages & templates
    ├── premium_users/         # Premium user system
    ├── public/                # Static assets
    ├── assets/                # CSS & JavaScript
    ├── landing.html           # Landing page
    ├── index.html             # Main page
    └── styles.css             # Global styles
```

### Detailed Structure

See **PROJECT_STRUCTURE.md** for the complete directory tree and file organization.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Supabase account (for database & auth)

### Installation

1. **Navigate to project root:**
   ```bash
   cd d:\CBSE
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   # Edit backend/.env
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_key
   PORT=3000
   NODE_ENV=development
   ```

4. **Start the server:**
   ```bash
   npm start
   # Server runs at: http://localhost:3000
   ```

---

## 📚 Documentation Files

| Document | Purpose |
|----------|---------|
| **PROJECT_STRUCTURE.md** | Complete directory structure & organization |
| **API_REFERENCE.md** | API endpoints, controllers, configuration |
| **DASHBOARD_SYSTEM.md** | Dashboard architecture & database schema |
| **DASHBOARD_SETUP.md** | Testing guide & troubleshooting |
| **MIGRATION_GUIDE.md** | Migration details from old to new structure |
| **IMPLEMENTATION_SUMMARY.md** | Feature checklist & implementation details |

---

## 🔑 Key Features

### 1. Dynamic Dashboard System
- 11 different dashboard variants based on class and stream
- Automatic redirection after login
- Subject-specific content display

### 2. Stream-Based Learning
- **Classes 9-10**: General education without streams
- **Classes 11-12**: Four streams
  - **PCM**: Physics, Chemistry, Mathematics
  - **PCB**: Physics, Chemistry, Biology
  - **Commerce**: Accounts, Business Studies, Economics
  - **Humanities**: English, History, Geography, Political Science

### 3. Premium Subscription System
- User registration & login
- Payment integration (Razorpay)
- Subscription management
- Premium content access

### 4. Admin Panel
- User management
- Content management
- Analytics dashboard
- System settings

---

## 🔐 Authentication

### Backend Authentication
- Supabase Auth integration
- Session management
- Protected routes with middleware
- Password hashing & comparison

### Frontend Authentication
- localStorage-based session storage
- Client-side authentication checks
- Automatic redirect to login if not authenticated
- Token validation on API calls

---

## 📊 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50),        -- 'student', 'admin', 'premium'
  class INTEGER,           -- 9-12
  stream VARCHAR(50),      -- 'pcm', 'pcb', 'commerce', 'humanities'
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

**Required Fields for Dashboard:**
- `class` (integer: 9, 10, 11, or 12)
- `stream` (text: 'pcm', 'pcb', 'commerce', or 'humanities' - only for classes 11-12)

---

## 🛣️ API Routes

### Public Routes
```
GET  /                    Landing page
GET  /login              Login page
GET  /signup             Registration page
```

### Authenticated Routes
```
GET  /dashboard          Redirect to user's dashboard
GET  /dashboard/:class_:stream    Serve specific dashboard
GET  /api/dashboard/data         Dashboard data (JSON)
POST /api/auth/logout    Logout
```

### Admin Routes
```
GET  /admin              Admin dashboard
POST /upload             Upload file
DELETE /file/:filename   Delete file
```

---

## 📋 Dashboard Routes

| Class | Stream | Route | File |
|-------|--------|-------|------|
| 9 | N/A | `/dashboard/9_default` | `class_9_default.html` |
| 10 | N/A | `/dashboard/10_default` | `class_10_default.html` |
| 11 | pcm | `/dashboard/11_pcm` | `class_11_pcm.html` |
| 11 | pcb | `/dashboard/11_pcb` | `class_11_pcb.html` |
| 11 | commerce | `/dashboard/11_commerce` | `class_11_commerce.html` |
| 11 | humanities | `/dashboard/11_humanities` | `class_11_humanities.html` |
| 12 | pcm | `/dashboard/12_pcm` | `class_12_pcm.html` |
| 12 | pcb | `/dashboard/12_pcb` | `class_12_pcb.html` |
| 12 | commerce | `/dashboard/12_commerce` | `class_12_commerce.html` |
| 12 | humanities | `/dashboard/12_humanities` | `class_12_humanities.html` |
| Any | N/A | `/dashboard/default` | `dashboard_default.html` |

---

## 🔧 Configuration

### Environment Variables (backend/.env)
```bash
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key

# Server Configuration
PORT=3000
NODE_ENV=development
```

### CORS Settings (backend/server.js)
```javascript
cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
})
```

---

## 💾 File Organization

### Backend Structure
```
backend/
├── server.js              Entry point, routes, middleware
├── controllers/           Business logic
├── routes/               API routes (expandable)
├── middleware/           Auth, validation, error handling
├── config/               Configuration files
├── package.json          Dependencies
└── .env                  Environment variables
```

### Frontend Structure
```
frontend/
├── pages/                HTML pages & templates
│   ├── dashboards/       11 dashboard variants
│   ├── Classes/          Academic content
│   └── Admin/            Admin panel
├── premium_users/        Premium features
├── public/               Static assets
├── assets/               CSS & JavaScript
├── landing.html          Landing page
├── index.html            Main page
└── styles.css            Global styles
```

---

## 🧪 Testing

### Manual Testing

1. **Login Flow:**
   ```
   → Visit http://localhost:3000/login
   → Enter credentials
   → Should redirect to dashboard
   ```

2. **Dashboard Access:**
   ```
   → Verify correct dashboard loads for user's class/stream
   → Check subject cards display correctly
   → Test logout button
   ```

3. **Subject Display:**
   ```
   Class 11 PCM → Should show: Physics, Chemistry, Mathematics
   Class 11 PCB → Should show: Physics, Chemistry, Biology
   Class 11 Commerce → Should show: Accounts, Business Studies, Economics
   Class 11 Humanities → Should show: English, History, Geography, Political Science
   ```

See **DASHBOARD_SETUP.md** for detailed testing guide.

---

## 🐛 Troubleshooting

### Issue: Server won't start
```bash
# Check port isn't in use
netstat -ano | findstr :3000

# Change port in .env
PORT=3001
```

### Issue: Dashboard not loading
```
✓ Check user has 'class' field in database
✓ Check user has 'stream' field (for classes 11-12)
✓ Verify authentication token is valid
✓ Check /frontend/pages/dashboards/ contains all 11 files
```

### Issue: Styles/scripts not loading
```
✓ Verify express.static() points to ../frontend/public
✓ Check browser console for 404 errors
✓ Restart server after file changes
```

See **DASHBOARD_SETUP.md** for more troubleshooting tips.

---

## 📦 Dependencies

### Backend (Node.js)
- **express** - Web framework
- **@supabase/supabase-js** - Database & Auth
- **cors** - Cross-origin requests
- **dotenv** - Environment variables
- **cookie-parser** - Cookie handling
- **multer** - File uploads
- **nodemon** - Auto-reload development

### Frontend
- Vanilla JavaScript (no frameworks required)
- HTML5 & CSS3
- Fetch API for HTTP requests
- localStorage for client-side storage

---

## 🔄 Workflow

### User Registration & Login
```
Registration Form
  ↓
POST /signup
  ↓
Create Supabase Auth User
  ↓
Store in Users Table (with class & stream)
  ↓
Auto-login & Redirect to Dashboard
```

### Dashboard Access
```
Login with Credentials
  ↓
POST /login (Supabase Auth)
  ↓
Fetch User Profile (class, stream)
  ↓
Store in localStorage
  ↓
Calculate Dashboard Route
  ↓
GET /dashboard/:class_:stream
  ↓
Display Stream-Specific Dashboard
```

---

## 🚀 Deployment

### Backend Deployment Options
1. **Heroku** - Easy deployment with `git push`
2. **AWS** - EC2, Elastic Beanstalk, or Lambda
3. **Azure** - App Service or Container Instances
4. **DigitalOcean** - Droplets or App Platform
5. **Vercel** - Serverless deployment

### Frontend Deployment Options
1. **Same Server** - Serve static files from Express
2. **CDN** - Cloudflare, AWS CloudFront
3. **Static Hosts** - Netlify, Vercel, GitHub Pages
4. **Containerized** - Docker + any container platform

---

## 📈 Future Improvements

1. **Separate Frontend Build**
   - Webpack/Vite for bundling
   - Minification & optimization
   - Separate deployment

2. **Backend Modularization**
   - Separate route files
   - Database models/ORM
   - Service layer

3. **Testing**
   - Unit tests (Jest)
   - Integration tests
   - E2E tests (Cypress)

4. **CI/CD**
   - GitHub Actions
   - Automated testing
   - Automated deployment

5. **Monitoring**
   - Error tracking (Sentry)
   - Performance monitoring
   - Analytics

---

## 📞 Support

### Documentation
- **PROJECT_STRUCTURE.md** - Directory organization
- **API_REFERENCE.md** - API documentation
- **DASHBOARD_SYSTEM.md** - Technical architecture
- **DASHBOARD_SETUP.md** - Setup & testing
- **MIGRATION_GUIDE.md** - Migration information

### Common Issues
See **DASHBOARD_SETUP.md** troubleshooting section for:
- Port already in use
- Module not found
- Dashboard not loading
- Static files not loading

---

## 📝 License

This project is part of the CBSE Educational Platform.

---

## 🎉 Status

✅ **Project Successfully Restructured**

- Frontend & Backend cleanly separated
- All 11 dashboards in correct location
- All asset files properly organized
- Documentation complete
- Ready for development & deployment

---

## 📋 Quick Reference

### Start Application
```bash
cd d:\CBSE
npm install
npm start
# Visit: http://localhost:3000
```

### View Documentation
- Project structure → `PROJECT_STRUCTURE.md`
- API details → `API_REFERENCE.md`
- Testing guide → `DASHBOARD_SETUP.md`
- Migration info → `MIGRATION_GUIDE.md`

### File Locations
- Backend entry → `/backend/server.js`
- Dashboard controller → `/backend/controllers/dashboardController.js`
- Dashboard pages → `/frontend/pages/dashboards/`
- Frontend assets → `/frontend/public/`

---

**Last Updated:** November 13, 2025
**Version:** 2.0 (Post-Restructuring)
