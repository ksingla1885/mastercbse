const express = require('express');
const router = express.Router();
const prisma = require('../config/prisma');

// Get all content with filters
router.get('/', async (req, res) => {
    try {
        const { subject, chapter, contentType, isPremium, class: className, stream } = req.query;

        const content = await prisma.content.findMany({
            where: {
                ...(subject && { subject }),
                ...(chapter && { chapter }),
                ...(contentType && { contentType }),
                ...(className && { class: parseInt(className) }),
                ...(stream && { stream }),
                ...(isPremium !== undefined && { isPremium: isPremium === 'true' }),
            },
            orderBy: [
                { subject: 'asc' },
                { chapter: 'asc' },
                { order: 'asc' },
            ],
        });

        res.json({ success: true, content });
    } catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get content by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const content = await prisma.content.findUnique({
            where: { id },
        });

        if (!content) {
            return res.status(404).json({
                success: false,
                message: 'Content not found'
            });
        }

        res.json({ success: true, content });
    } catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get subjects list
router.get('/subjects/list', async (req, res) => {
    try {
        const subjects = await prisma.content.findMany({
            distinct: ['subject'],
            select: {
                subject: true,
            },
            orderBy: {
                subject: 'asc',
            },
        });

        res.json({
            success: true,
            subjects: subjects.map(s => s.subject)
        });
    } catch (error) {
        console.error('Error fetching subjects:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get chapters for a subject
router.get('/subjects/:subject/chapters', async (req, res) => {
    try {
        const { subject } = req.params;

        const chapters = await prisma.content.findMany({
            where: { subject },
            distinct: ['chapter'],
            select: {
                chapter: true,
            },
            orderBy: {
                order: 'asc',
            },
        });

        res.json({
            success: true,
            chapters: chapters.map(c => c.chapter)
        });
    } catch (error) {
        console.error('Error fetching chapters:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Create new content (admin only)
router.post('/', async (req, res) => {
    try {
        const {
            subject,
            chapter,
            topic,
            title,
            description,
            contentType,
            contentUrl,
            isPremium,
            order
        } = req.body;

        if (!subject || !chapter || !title || !contentType) {
            return res.status(400).json({
                success: false,
                message: 'Subject, chapter, title, and contentType are required'
            });
        }

        const content = await prisma.content.create({
            data: {
                subject,
                chapter,
                topic,
                title,
                description,
                contentType,
                contentUrl,
                isPremium: isPremium || false,
                order: order || 0,
            },
        });

        res.status(201).json({ success: true, content });
    } catch (error) {
        console.error('Error creating content:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Update content (admin only)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {
            subject,
            chapter,
            topic,
            title,
            description,
            contentType,
            contentUrl,
            isPremium,
            order
        } = req.body;

        const content = await prisma.content.update({
            where: { id },
            data: {
                ...(subject && { subject }),
                ...(chapter && { chapter }),
                ...(topic !== undefined && { topic }),
                ...(title && { title }),
                ...(description !== undefined && { description }),
                ...(contentType && { contentType }),
                ...(contentUrl !== undefined && { contentUrl }),
                ...(isPremium !== undefined && { isPremium }),
                ...(order !== undefined && { order }),
            },
        });

        res.json({ success: true, content });
    } catch (error) {
        console.error('Error updating content:', error);

        if (error.code === 'P2025') {
            return res.status(404).json({
                success: false,
                message: 'Content not found'
            });
        }

        res.status(500).json({ success: false, error: error.message });
    }
});

// Delete content (admin only)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.content.delete({
            where: { id },
        });

        res.json({ success: true, message: 'Content deleted successfully' });
    } catch (error) {
        console.error('Error deleting content:', error);

        if (error.code === 'P2025') {
            return res.status(404).json({
                success: false,
                message: 'Content not found'
            });
        }

        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
