const express = require('express');
const router = express.Router();
const prisma = require('../config/prisma');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                class: true,
                stream: true,
                createdAt: true,
            },
        });
        res.json({ success: true, users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get user by ID with relations
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: { id },
            include: {
                progress: {
                    orderBy: { updatedAt: 'desc' },
                    take: 10,
                },
                bookmarks: {
                    orderBy: { createdAt: 'desc' },
                    take: 10,
                },
                notes: {
                    orderBy: { updatedAt: 'desc' },
                    take: 10,
                },
            },
        });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({ success: true, user });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Create new user
router.post('/', async (req, res) => {
    try {
        const { email, name, role, class: userClass, stream } = req.body;

        // Validate required fields
        if (!email || !name) {
            return res.status(400).json({
                success: false,
                message: 'Email and name are required'
            });
        }

        const user = await prisma.user.create({
            data: {
                email,
                name,
                role: role || 'STUDENT',
                class: userClass,
                stream,
            },
        });

        res.status(201).json({ success: true, user });
    } catch (error) {
        console.error('Error creating user:', error);

        // Handle unique constraint violation
        if (error.code === 'P2002') {
            return res.status(409).json({
                success: false,
                message: 'User with this email already exists'
            });
        }

        res.status(500).json({ success: false, error: error.message });
    }
});

// Update user
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, role, class: userClass, stream } = req.body;

        const user = await prisma.user.update({
            where: { id },
            data: {
                ...(name && { name }),
                ...(role && { role }),
                ...(userClass && { class: userClass }),
                ...(stream && { stream }),
            },
        });

        res.json({ success: true, user });
    } catch (error) {
        console.error('Error updating user:', error);

        if (error.code === 'P2025') {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(500).json({ success: false, error: error.message });
    }
});

// Delete user
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.user.delete({
            where: { id },
        });

        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);

        if (error.code === 'P2025') {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(500).json({ success: false, error: error.message });
    }
});

// Get user progress
router.get('/:id/progress', async (req, res) => {
    try {
        const { id } = req.params;
        const { subject, completed } = req.query;

        const progress = await prisma.progress.findMany({
            where: {
                userId: id,
                ...(subject && { subject }),
                ...(completed !== undefined && { completed: completed === 'true' }),
            },
            orderBy: { updatedAt: 'desc' },
        });

        res.json({ success: true, progress });
    } catch (error) {
        console.error('Error fetching progress:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Update user progress
router.post('/:id/progress', async (req, res) => {
    try {
        const { id } = req.params;
        const { subject, chapter, topic, completed, percentage } = req.body;

        if (!subject || !chapter) {
            return res.status(400).json({
                success: false,
                message: 'Subject and chapter are required'
            });
        }

        const progress = await prisma.progress.upsert({
            where: {
                userId_subject_chapter_topic: {
                    userId: id,
                    subject,
                    chapter,
                    topic: topic || '',
                },
            },
            update: {
                completed: completed !== undefined ? completed : undefined,
                percentage: percentage !== undefined ? percentage : undefined,
            },
            create: {
                userId: id,
                subject,
                chapter,
                topic,
                completed: completed || false,
                percentage: percentage || 0,
            },
        });

        res.json({ success: true, progress });
    } catch (error) {
        console.error('Error updating progress:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get user bookmarks
router.get('/:id/bookmarks', async (req, res) => {
    try {
        const { id } = req.params;

        const bookmarks = await prisma.bookmark.findMany({
            where: { userId: id },
            orderBy: { createdAt: 'desc' },
        });

        res.json({ success: true, bookmarks });
    } catch (error) {
        console.error('Error fetching bookmarks:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Create bookmark
router.post('/:id/bookmarks', async (req, res) => {
    try {
        const { id } = req.params;
        const { subject, chapter, topic, contentType, title, description } = req.body;

        if (!subject || !chapter || !title) {
            return res.status(400).json({
                success: false,
                message: 'Subject, chapter, and title are required'
            });
        }

        const bookmark = await prisma.bookmark.create({
            data: {
                userId: id,
                subject,
                chapter,
                topic,
                contentType: contentType || 'chapter',
                title,
                description,
            },
        });

        res.status(201).json({ success: true, bookmark });
    } catch (error) {
        console.error('Error creating bookmark:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Delete bookmark
router.delete('/:userId/bookmarks/:bookmarkId', async (req, res) => {
    try {
        const { bookmarkId } = req.params;

        await prisma.bookmark.delete({
            where: { id: bookmarkId },
        });

        res.json({ success: true, message: 'Bookmark deleted successfully' });
    } catch (error) {
        console.error('Error deleting bookmark:', error);

        if (error.code === 'P2025') {
            return res.status(404).json({
                success: false,
                message: 'Bookmark not found'
            });
        }

        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
