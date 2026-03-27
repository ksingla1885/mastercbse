# Prisma Setup Guide

## 📚 Overview
This backend uses Prisma ORM to interact with a PostgreSQL database hosted on Supabase.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate Prisma Client
```bash
npm run prisma:generate
```

### 3. Push Schema to Database
```bash
npm run prisma:push
```

### 4. (Optional) Seed Database
```bash
npm run prisma:seed
```

## 📋 Available Scripts

- **`npm run prisma:generate`** - Generate Prisma Client
- **`npm run prisma:push`** - Push schema to database (no migrations)
- **`npm run prisma:migrate`** - Create and apply migrations
- **`npm run prisma:studio`** - Open Prisma Studio (database GUI)
- **`npm run prisma:seed`** - Seed database with sample data

## 🗄️ Database Schema

### Models

#### User
- Stores user information (students, premium users, admins)
- Fields: email, name, role, class, stream
- Relations: progress, bookmarks, notes

#### Progress
- Tracks student progress through chapters/topics
- Fields: subject, chapter, topic, completed, percentage
- Unique constraint on user + subject + chapter + topic

#### Bookmark
- Saves important content for quick access
- Fields: subject, chapter, topic, contentType, title

#### Note
- Student notes for chapters/topics
- Fields: subject, chapter, topic, title, content

#### Content
- Manages educational content
- Fields: subject, chapter, topic, title, contentType, isPremium

#### Analytics
- Tracks user events and interactions
- Fields: eventType, eventData, ipAddress, userAgent

#### Subscription
- Manages premium subscriptions
- Fields: planType, status, startDate, endDate, amount

## 🔧 Using Prisma in Your Code

### Import Prisma Client
```javascript
const prisma = require('./config/prisma');
```

### Example Queries

#### Create a User
```javascript
const user = await prisma.user.create({
  data: {
    email: 'student@example.com',
    name: 'John Doe',
    role: 'STUDENT',
    class: 10,
    stream: 'PCM',
  },
});
```

#### Find Users
```javascript
const users = await prisma.user.findMany({
  where: {
    role: 'STUDENT',
    class: 10,
  },
});
```

#### Update User
```javascript
const updatedUser = await prisma.user.update({
  where: { id: userId },
  data: { role: 'PREMIUM' },
});
```

#### Delete User
```javascript
await prisma.user.delete({
  where: { id: userId },
});
```

#### Complex Queries with Relations
```javascript
const userWithProgress = await prisma.user.findUnique({
  where: { id: userId },
  include: {
    progress: true,
    bookmarks: true,
    notes: true,
  },
});
```

## 🔄 Migrations vs Push

### `prisma db push`
- Quick prototyping
- No migration history
- Directly syncs schema with database
- **Use for development**

### `prisma migrate dev`
- Creates migration files
- Maintains migration history
- Better for production
- **Use for production deployments**

## 🎨 Prisma Studio

Open a visual database editor:
```bash
npm run prisma:studio
```

Access at: `http://localhost:5555`

## 🔐 Environment Variables

Required in `.env`:
```env
DATABASE_URL="postgresql://..."  # Connection pooling URL
DIRECT_URL="postgresql://..."    # Direct connection URL
```

## 📊 Database Enums

### Role
- `STUDENT` - Regular student
- `PREMIUM` - Premium subscriber
- `ADMIN` - Administrator

### Stream
- `PCM` - Physics, Chemistry, Mathematics
- `PCB` - Physics, Chemistry, Biology
- `COMMERCE` - Commerce stream
- `HUMANITIES` - Humanities stream

### ContentType
- `CHAPTER` - Chapter content
- `TOPIC` - Topic content
- `VIDEO` - Video content
- `PDF` - PDF document
- `QUIZ` - Quiz/assessment
- `EXERCISE` - Practice exercise

### PlanType
- `MONTHLY` - Monthly subscription
- `QUARTERLY` - Quarterly subscription
- `YEARLY` - Yearly subscription

### SubscriptionStatus
- `ACTIVE` - Active subscription
- `EXPIRED` - Expired subscription
- `CANCELLED` - Cancelled subscription
- `PENDING` - Pending payment

## 🐛 Troubleshooting

### Schema Changes Not Reflecting
```bash
npm run prisma:generate
npm run prisma:push
```

### Connection Issues
- Check `.env` has correct `DATABASE_URL` and `DIRECT_URL`
- Verify Supabase database is accessible
- Check firewall/network settings

### Migration Conflicts
```bash
# Reset database (WARNING: Deletes all data)
npx prisma migrate reset
```

## 📚 Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma Client API](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)
- [Supabase + Prisma Guide](https://supabase.com/docs/guides/integrations/prisma)

---

**Ready to use Prisma! 🚀**
