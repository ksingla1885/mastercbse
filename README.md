# CBSE Educational Platform

## 🚀 Quick Start

```bash
# Navigate to project
cd d:\CBSE

# Install dependencies
npm install

# Start server
npm start

# Visit: http://localhost:3000
```

---

## 📁 Project Structure

```
CBSE/
├── backend/                 # Express.js Server
│   ├── server.js           # Main application
│   ├── controllers/        # Business logic
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── config/            # Configuration
│   ├── package.json       # Dependencies
│   └── .env               # Environment variables
│
├── frontend/              # Client Interface
│   ├── pages/            # HTML pages
│   │   ├── dashboards/   # 11 dashboard variants
│   │   ├── Classes/      # Class 1-12 content
│   │   └── Admin/        # Admin panel
│   ├── premium_users/    # Premium features
│   ├── public/           # Static assets
│   ├── assets/           # CSS & JavaScript
│   └── [HTML/CSS/JS files]
│
├── docs/                 # Documentation
│   ├── README.md         # Detailed guide
│   ├── PROJECT_STRUCTURE.md
│   └── [Other guides]
│
├── node_modules/        # Dependencies
├── package.json         # Root configuration
└── README.md           # This file
```

---

## 📚 Documentation

All documentation files are in `/docs/` folder:

- **README.md** - Complete project guide
- **PROJECT_STRUCTURE.md** - Directory structure details
- **MIGRATION_GUIDE.md** - Migration information
- **API_REFERENCE.md** - API documentation
- **DASHBOARD_SYSTEM.md** - Technical architecture
- **DASHBOARD_SETUP.md** - Setup & testing
- **IMPLEMENTATION_SUMMARY.md** - Implementation details
- **REORGANIZATION_CHECKLIST.md** - Checklist
- **RESTRUCTURING_SUMMARY.md** - Before/after
- **FINAL_SUMMARY.md** - Final summary

**Start with: `/docs/README.md`**

---

## 🎯 Key Features

### Dashboard System
- ✅ 11 dashboard variants (classes 9-12 with streams)
- ✅ Class-specific content
- ✅ Stream-based subject display (PCM, PCB, Commerce, Humanities)

### Architecture
- ✅ Clean frontend/backend separation
- ✅ Express.js backend
- ✅ Vanilla JavaScript frontend
- ✅ Supabase authentication & database

### Admin Features
- ✅ Content management
- ✅ User management
- ✅ Analytics dashboard
- ✅ System settings

### Premium Features
- ✅ User subscriptions
- ✅ Payment integration (Razorpay)
- ✅ Premium dashboards
- ✅ Exclusive content

---

## 🛠️ Tech Stack

### Backend
- Node.js & Express.js
- Supabase (Auth & Database)
- Multer (File uploads)
- CORS support

### Frontend
- HTML5 & CSS3
- Vanilla JavaScript
- Fetch API
- localStorage storage

### Database
- PostgreSQL (via Supabase)
- Users table with class & stream

---

## 📊 Dashboard Routes

| Class | Stream | Route |
|-------|--------|-------|
| 9 | N/A | `/dashboard/9_default` |
| 10 | N/A | `/dashboard/10_default` |
| 11 | PCM | `/dashboard/11_pcm` |
| 11 | PCB | `/dashboard/11_pcb` |
| 11 | Commerce | `/dashboard/11_commerce` |
| 11 | Humanities | `/dashboard/11_humanities` |
| 12 | PCM | `/dashboard/12_pcm` |
| 12 | PCB | `/dashboard/12_pcb` |
| 12 | Commerce | `/dashboard/12_commerce` |
| 12 | Humanities | `/dashboard/12_humanities` |
| Any | N/A | `/dashboard/default` |

---

## 🔐 Authentication

### User Login
- Email & password authentication via Supabase
- Automatic dashboard redirect based on class/stream
- localStorage session management

### User Registration
- New user creation
- Class & stream selection
- Supabase Auth integration

### Protected Routes
- Dashboard access requires authentication
- Admin routes require admin role
- Premium routes require active subscription

---

## 🚀 Deployment

### Backend Deployment
- Heroku, AWS, Azure, DigitalOcean, etc.
- Environment variables configured in `.env`
- Node.js compatible servers

### Frontend Deployment
- Served from Express backend
- Can be deployed to CDN (Cloudflare, CloudFront)
- Can be deployed separately (Vercel, Netlify)

---

## 📝 Environment Variables

**File: `backend/.env`**

```bash
# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key

# Server Configuration
PORT=3000
NODE_ENV=development
```

---

## 🧪 Testing

### Manual Testing
1. Visit `http://localhost:3000`
2. Login with credentials
3. Verify correct dashboard loads
4. Check subject display
5. Test logout functionality

See `/docs/DASHBOARD_SETUP.md` for complete testing guide.

---

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Windows: Kill process
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in backend/.env
PORT=3001
```

**Module not found:**
```bash
cd backend
npm install
```

**Dashboard not loading:**
- Check user has `class` field in database
- Check user has `stream` field (for classes 11-12)
- Verify authentication token is valid
- Check browser console for errors

See `/docs/DASHBOARD_SETUP.md` for more troubleshooting.

---

## 📞 Support

### Documentation
- Read `/docs/README.md` for complete guide
- Check `/docs/PROJECT_STRUCTURE.md` for structure details
- See `/docs/API_REFERENCE.md` for API documentation
- Review `/docs/DASHBOARD_SETUP.md` for setup & testing

### Common Issues
All troubleshooting in `/docs/DASHBOARD_SETUP.md`:
- Port conflicts
- Missing modules
- Database connection
- Dashboard routing
- Authentication errors

---

## 📈 Project Stats

- **Backend Files**: 1 server + controllers
- **Frontend Files**: 200+
- **Dashboard Variants**: 11
- **Class Folders**: 12
- **Documentation**: 10+ files
- **Lines of Documentation**: 2700+

---

## ✅ Project Status

```
✅ Frontend & Backend Separated
✅ All 11 Dashboards Working
✅ All Files Organized
✅ Complete Documentation
✅ Ready for Development
✅ Ready for Deployment
```

---

## 🎯 Next Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   - Update `backend/.env` with Supabase credentials
   - Ensure database table has `class` & `stream` fields

3. **Start Server**
   ```bash
   npm start
   ```

4. **Test Application**
   - Visit http://localhost:3000
   - Login with test credentials
   - Verify dashboards work

5. **Deploy**
   - Choose hosting platform
   - Set environment variables
   - Deploy backend and frontend

---

## 📖 Read Documentation

**Start here:** `/docs/README.md`

All documentation is organized in the `/docs/` folder for easy access.

---

**Last Updated:** November 13, 2025
**Version:** 2.0 (Clean Organization)
**Status:** ✅ Production Ready
