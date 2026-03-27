# Prisma Setup - Step by Step Guide

## ✅ What Has Been Created

I've set up the following files for your Prisma integration:

1. **`prisma/schema.prisma`** - Complete database schema with all models
2. **`config/prisma.js`** - Prisma client initialization
3. **`prisma/seed.js`** - Sample data seeding script
4. **`prisma/README.md`** - Comprehensive documentation
5. **`package.json`** - Updated with Prisma dependencies and scripts
6. **`.gitignore`** - Added Prisma-related ignores

## 🚀 Next Steps - Run These Commands

Open your terminal in the `backend` directory and run these commands in order:

### Step 1: Install Dependencies
```bash
npm install
```
This will install Prisma and @prisma/client.

### Step 2: Generate Prisma Client
```bash
npm run prisma:generate
```
This generates the Prisma Client based on your schema.

### Step 3: Push Schema to Database
```bash
npm run prisma:push
```
This will create all the tables in your Supabase database.

**IMPORTANT**: When prompted, confirm that you want to push the schema.

### Step 4: (Optional) Seed Database with Sample Data
```bash
npm run prisma:seed
```
This will populate your database with sample users, content, and progress data for testing.

### Step 5: (Optional) Open Prisma Studio
```bash
npm run prisma:studio
```
This opens a visual database browser at `http://localhost:5555`.

## 📊 What Will Be Created in Your Database

The following tables will be created:

1. **users** - User accounts (students, premium, admin)
2. **progress** - Student progress tracking
3. **bookmarks** - Saved content
4. **notes** - Student notes
5. **content** - Educational content management
6. **analytics** - Usage analytics
7. **subscriptions** - Premium subscriptions

Plus several enum types:
- Role (STUDENT, PREMIUM, ADMIN)
- Stream (PCM, PCB, COMMERCE, HUMANITIES)
- ContentType (CHAPTER, TOPIC, VIDEO, PDF, QUIZ, EXERCISE)
- PlanType (MONTHLY, QUARTERLY, YEARLY)
- SubscriptionStatus (ACTIVE, EXPIRED, CANCELLED, PENDING)

## 🔧 Using Prisma in Your Code

### Example: Create a User
```javascript
const prisma = require('./config/prisma');

// In your route handler
app.post('/api/users', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        role: 'STUDENT',
        class: req.body.class,
        stream: req.body.stream,
      },
    });
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
```

### Example: Get User with Progress
```javascript
const userWithProgress = await prisma.user.findUnique({
  where: { id: userId },
  include: {
    progress: {
      where: { completed: true },
    },
    bookmarks: true,
  },
});
```

### Example: Track Progress
```javascript
const progress = await prisma.progress.upsert({
  where: {
    userId_subject_chapter_topic: {
      userId: userId,
      subject: 'Mathematics',
      chapter: 'Real Numbers',
      topic: 'Introduction',
    },
  },
  update: {
    percentage: 75,
    completed: false,
  },
  create: {
    userId: userId,
    subject: 'Mathematics',
    chapter: 'Real Numbers',
    topic: 'Introduction',
    percentage: 75,
    completed: false,
  },
});
```

## 🎯 Quick Reference

### Common Prisma Commands
```bash
# Generate client after schema changes
npm run prisma:generate

# Push schema changes to database
npm run prisma:push

# Create a migration (for production)
npm run prisma:migrate

# Open database GUI
npm run prisma:studio

# Seed database
npm run prisma:seed
```

## ⚠️ Important Notes

1. **Database URLs**: Your `.env` file already has the correct database URLs configured.

2. **Schema Changes**: Whenever you modify `prisma/schema.prisma`, run:
   ```bash
   npm run prisma:generate
   npm run prisma:push
   ```

3. **Production**: For production, use migrations instead of push:
   ```bash
   npm run prisma:migrate
   ```

4. **Supabase Integration**: Prisma works alongside Supabase. You can use:
   - Prisma for database operations
   - Supabase for authentication and storage

## 🐛 Troubleshooting

### If you get connection errors:
1. Check your `.env` file has correct DATABASE_URL and DIRECT_URL
2. Verify your Supabase database is running
3. Check your internet connection

### If schema push fails:
1. Make sure no other connections to the database are active
2. Try running `npm run prisma:generate` first
3. Check for syntax errors in `prisma/schema.prisma`

## 📚 Next Steps After Setup

1. Update your routes to use Prisma instead of direct Supabase queries
2. Implement authentication with Prisma user model
3. Add progress tracking endpoints
4. Create bookmark and note management APIs
5. Implement analytics tracking

---

**You're all set! Run the commands above to get started. 🚀**
