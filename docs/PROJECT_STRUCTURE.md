# Project Structure - CBSE Educational Platform

## Overview

The CBSE Educational Platform is now organized with a clear separation between frontend and backend, following a modular architecture pattern for better scalability and maintainability.

---

## Directory Structure

```
CBSE/
├── backend/                          # Backend Application (Express.js Server)
│   ├── server.js                     # Main Express application entry point
│   ├── package.json                  # Backend dependencies & scripts
│   ├── package-lock.json             # Locked dependency versions
│   ├── .env                          # Environment variables (Supabase config)
│   │
│   ├── controllers/                  # Business Logic Controllers
│   │   └── dashboardController.js    # Dashboard routing & data logic
│   │
│   ├── routes/                       # API Routes (for future expansion)
│   │   └── [routes will be added]
│   │
│   ├── middleware/                   # Custom Middleware Functions
│   │   └── [middleware will be added]
│   │
│   └── config/                       # Configuration Files
│       └── [config will be added]
│
├── frontend/                         # Frontend Application (HTML/CSS/JS)
│   ├── landing.html                  # Landing page (home)
│   ├── landing.css                   # Landing page styles
│   ├── index.html                    # Main index page
│   ├── script.js                     # Main JavaScript file
│   ├── styles.css                    # Global styles
│   ├── create_classes_structure.bat  # Batch script for creating folders
│   │
│   ├── public/                       # Static Public Assets
│   │   └── favicon.ico               # Website favicon
│   │
│   ├── pages/                        # Page Templates & Components
│   │   ├── dashboards/               # Dashboard Pages (11 variants)
│   │   │   ├── dashboard_default.html
│   │   │   ├── class_9_default.html
│   │   │   ├── class_10_default.html
│   │   │   ├── class_11_pcm.html
│   │   │   ├── class_11_pcb.html
│   │   │   ├── class_11_commerce.html
│   │   │   ├── class_11_humanities.html
│   │   │   ├── class_12_pcm.html
│   │   │   ├── class_12_pcb.html
│   │   │   ├── class_12_commerce.html
│   │   │   └── class_12_humanities.html
│   │   │
│   │   ├── Classes/                  # Academic Content by Class
│   │   │   ├── Class 1/ - Class 12/  # Each class with subjects
│   │   │   └── [Content organized by class & subject]
│   │   │
│   │   ├── Admin/                    # Admin Panel Pages
│   │   │   ├── index.html
│   │   │   ├── login.html
│   │   │   ├── analytics/            # Analytics Dashboard
│   │   │   ├── content_management/   # Content Management System
│   │   │   ├── user_management/      # User Management
│   │   │   ├── system_settings/      # System Settings
│   │   │   ├── css/                  # Admin styles
│   │   │   └── js/                   # Admin JavaScript
│   │   │
│   │   └── [Other pages as needed]
│   │
│   ├── premium_users/                # Premium User Features
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── dashboard.html
│   │   ├── subscription.html
│   │   ├── forgot-password.html
│   │   ├── reset-password.html
│   │   ├── .env
│   │   ├── README.md
│   │   │
│   │   ├── css/                      # Premium User Styles
│   │   │   └── [CSS files for each page]
│   │   │
│   │   ├── js/                       # Premium User Scripts
│   │   │   ├── app.js
│   │   │   ├── config.js
│   │   │   ├── dashboard.js
│   │   │   ├── loader.js
│   │   │   ├── payment.js
│   │   │   ├── premium.js
│   │   │   ├── supabase.js
│   │   │   ├── config/               # Configuration
│   │   │   ├── features/             # Feature Implementations
│   │   │   ├── services/             # Service Utilities
│   │   │   │   ├── authService.js
│   │   │   │   ├── authMiddleware.js
│   │   │   │   ├── apiService.js
│   │   │   │   ├── menuService.js
│   │   │   │   └── streamService.js
│   │   │   └── utils/                # Utility Functions
│   │   │
│   │   ├── dashboards/               # Pre-built Dashboards
│   │   │   ├── class9/
│   │   │   ├── class10/
│   │   │   ├── class11/
│   │   │   └── class12/
│   │   │
│   │   ├── pages/                    # Additional Pages
│   │   ├── scripts/                  # Helper Scripts
│   │   └── sql/                      # Database Schema
│   │
│   ├── assets/                       # Asset Organization
│   │   ├── css/                      # Shared CSS Files
│   │   └── js/                       # Shared JavaScript Files
│   │
│   └── razorpay/                     # Payment Integration (Razorpay)
│       ├── config.js
│       ├── paymentController.js
│       ├── routes.js
│       └── README.md
│
├── node_modules/                     # Installed Dependencies
├── .env                              # Root Environment Variables
├── package.json                      # Root Package Configuration
├── package-lock.json                 # Root Lock File
│
├── API_REFERENCE.md                  # API Documentation
├── DASHBOARD_SYSTEM.md               # Dashboard System Documentation
├── DASHBOARD_SETUP.md                # Dashboard Setup & Testing Guide
├── IMPLEMENTATION_SUMMARY.md         # Implementation Details
├── PROJECT_STRUCTURE.md              # This File

```

---

## Key Directories Explained

### Backend Structure

The backend directory contains all server-side logic:

- **server.js**: Express application with all route definitions
- **controllers/**: Handles business logic
  - `dashboardController.js`: Manages dashboard routing and data
- **routes/**: API route definitions (currently in server.js, can be separated)
- **middleware/**: Custom middleware for authentication, validation, etc.
- **config/**: Configuration files for database, environment, etc.

### Frontend Structure

The frontend directory contains all client-side assets:

- **Root Level Files**: Landing page and main application files
- **public/**: Static assets (favicon, images, etc.)
- **pages/**: All HTML pages and templates
  - **dashboards/**: Dynamic dashboards for different classes/streams
  - **Classes/**: Academic content organized by class and subject
  - **Admin/**: Admin panel interface
- **premium_users/**: Premium subscription features and user dashboards
- **assets/**: CSS and JavaScript files shared across pages

### Special Directories

#### Pages/Dashboards
Contains 11 dashboard variants:
- Classes 9-10: Single dashboard per class
- Classes 11-12: 4 dashboards per class (PCM, PCB, Commerce, Humanities)

#### Pages/Classes
Hierarchical structure:
```
Class X/
├── index.html
├── styles.css
└── Subject/
    ├── index.html
    ├── styles.css
    └── chapters/
        └── Chapter files
```

#### Premium Users
Complete premium subscription system with:
- Authentication (login/register)
- Payment integration (Razorpay)
- Dashboard for each class/stream
- User management

---

## Configuration Files

### Backend Configuration

**backend/.env**
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
NODE_ENV=development
PORT=3000
```

**backend/package.json**
```json
{
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  }
}
```

### Frontend Configuration

**frontend/premium_users/.env**
- Supabase configuration for frontend auth

---

## File Organization Best Practices

### Backend (Node.js/Express)
- **server.js**: Entry point, middleware setup, route definitions
- **controllers/**: Pure business logic, no HTTP details
- **routes/**: HTTP endpoint definitions
- **middleware/**: Auth, validation, error handling
- **config/**: Environment-specific settings

### Frontend (HTML/CSS/JS)
- **Pages**: HTML templates for different routes
- **CSS**: Styles organized by feature/page
- **JS**: Client-side logic, API calls, DOM manipulation
- **Assets**: Images, icons, fonts
- **Public**: Anything served as static files

---

## Running the Application

### From Root Directory

```bash
# Install all dependencies (root)
npm install

# Start the server
npm start
# Server runs at: http://localhost:3000

# Development mode
npm run dev
```

### From Backend Directory

```bash
cd backend

# Install dependencies
npm install

# Start server
npm start
```

---

## Routes Overview

### Public Routes
- `GET /` → Landing page
- `GET /login` → Login page
- `GET /signup` → Registration page

### Authenticated Routes
- `GET /dashboard` → Redirect to user's dashboard
- `GET /dashboard/:classAndStream` → Specific dashboard (e.g., `/dashboard/11_pcm`)
- `GET /api/dashboard/data` → Dashboard data as JSON
- `POST /api/auth/logout` → Logout endpoint

### Admin Routes
- `GET /admin` → Admin dashboard
- `POST /upload` → File upload
- `DELETE /file/:filename` → Delete file
- `PUT /file/:oldName/:newName` → Rename file

---

## Database Schema

The application uses Supabase PostgreSQL with the `users` table:

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50),
  class INTEGER,
  stream VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Important Fields:**
- `class`: 9-12 (user's academic class)
- `stream`: 'pcm', 'pcb', 'commerce', 'humanities' (for classes 11-12)

---

## Authentication Flow

```
Login Form
    ↓
POST /login (Supabase)
    ↓
Authenticate Email & Password
    ↓
Fetch User Profile (class, stream)
    ↓
Store in localStorage
    ↓
Calculate Dashboard Route
    ↓
Redirect to Dashboard
```

---

## Dashboard Route Mapping

| User Class | Stream | Route | File |
|-----------|--------|-------|------|
| 9 | N/A | `/dashboard/9_default` | `class_9_default.html` |
| 10 | N/A | `/dashboard/10_default` | `class_10_default.html` |
| 11 | PCM | `/dashboard/11_pcm` | `class_11_pcm.html` |
| 11 | PCB | `/dashboard/11_pcb` | `class_11_pcb.html` |
| 11 | Commerce | `/dashboard/11_commerce` | `class_11_commerce.html` |
| 11 | Humanities | `/dashboard/11_humanities` | `class_11_humanities.html` |
| 12 | PCM | `/dashboard/12_pcm` | `class_12_pcm.html` |
| 12 | PCB | `/dashboard/12_pcb` | `class_12_pcb.html` |
| 12 | Commerce | `/dashboard/12_commerce` | `class_12_commerce.html` |
| 12 | Humanities | `/dashboard/12_humanities` | `class_12_humanities.html` |
| Any | N/A | `/dashboard/default` | `dashboard_default.html` |

---

## Subject Mapping by Stream

### PCM (Physics, Chemistry & Mathematics)
- Physics
- Chemistry
- Mathematics

### PCB (Physics, Chemistry & Biology)
- Physics
- Chemistry
- Biology

### Commerce
- Accounts
- Business Studies
- Economics

### Humanities
- English
- History
- Geography
- Political Science

---

## Dependencies

### Backend Dependencies
- **express**: Web framework
- **cors**: Cross-origin requests
- **dotenv**: Environment variables
- **@supabase/supabase-js**: Database & auth
- **cookie-parser**: Cookie handling
- **multer**: File uploads
- **ejs**: Template engine (for future use)
- **nodemon**: Auto-restart during development
- **razorpay**: Payment processing

---

## Environment Variables

### Backend (.env)
```
SUPABASE_URL=<your_supabase_url>
SUPABASE_ANON_KEY=<your_supabase_key>
NODE_ENV=development
PORT=3000
```

---

## Security Considerations

1. **Authentication**: All dashboard routes require authentication
2. **CORS**: Configured for localhost (update for production)
3. **Cookies**: HTTPOnly, Secure in production, SameSite: lax
4. **Environment Variables**: Stored in .env, not committed to git
5. **Database**: Supabase provides built-in security

---

## Future Expansion

### Recommended Additions

1. **Route Files**: Separate route definitions into `routes/` directory
2. **Middleware Separation**: Move middleware to `middleware/` directory
3. **Database Models**: Add ORM/query builders for database operations
4. **Validation**: Add input validation layer
5. **Error Handling**: Centralized error handling middleware
6. **Testing**: Unit and integration tests
7. **API Documentation**: Swagger/OpenAPI documentation
8. **Frontend Build**: Consider using Webpack/Vite for asset bundling

---

## Troubleshooting

### Issue: Port Already in Use
```bash
# Windows: Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change PORT in .env
PORT=3001
```

### Issue: Module Not Found
```bash
# Install dependencies
cd backend
npm install
```

### Issue: Dashboard Not Loading
- Check user has `class` and `stream` fields in database
- Verify authentication token is valid
- Check browser console for errors

---

## Contact & Support

For issues or improvements, refer to:
- `DASHBOARD_SETUP.md` - Testing guide
- `API_REFERENCE.md` - API documentation
- `DASHBOARD_SYSTEM.md` - Technical details
