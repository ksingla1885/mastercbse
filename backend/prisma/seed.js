const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seeding...');

    // Create sample users
    const student = await prisma.user.upsert({
        where: { email: 'student@example.com' },
        update: {},
        create: {
            email: 'student@example.com',
            name: 'Test Student',
            role: 'STUDENT',
            class: 10,
            stream: 'PCM',
        },
    });

    const premiumUser = await prisma.user.upsert({
        where: { email: 'premium@example.com' },
        update: {},
        create: {
            email: 'premium@example.com',
            name: 'Premium Student',
            role: 'PREMIUM',
            class: 12,
            stream: 'PCB',
        },
    });

    const admin = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            name: 'Admin User',
            role: 'ADMIN',
        },
    });

    console.log('✅ Created users:', { student, premiumUser, admin });

    // Create sample content
    const mathContent = await prisma.content.create({
        data: {
            subject: 'Mathematics',
            chapter: 'Real Numbers',
            title: 'Introduction to Real Numbers',
            description: 'Learn about real numbers and their properties',
            contentType: 'CHAPTER',
            isPremium: false,
            order: 1,
        },
    });

    const physicsContent = await prisma.content.create({
        data: {
            subject: 'Physics',
            chapter: 'Light - Reflection and Refraction',
            title: 'Laws of Reflection',
            description: 'Understanding the laws of reflection',
            contentType: 'TOPIC',
            isPremium: true,
            order: 1,
        },
    });

    console.log('✅ Created content:', { mathContent, physicsContent });

    // Create sample progress
    const progress = await prisma.progress.create({
        data: {
            userId: student.id,
            subject: 'Mathematics',
            chapter: 'Real Numbers',
            topic: 'Introduction',
            completed: true,
            percentage: 100,
        },
    });

    console.log('✅ Created progress:', progress);

    // Create sample bookmark
    const bookmark = await prisma.bookmark.create({
        data: {
            userId: student.id,
            subject: 'Mathematics',
            chapter: 'Real Numbers',
            contentType: 'chapter',
            title: 'Real Numbers - Important Chapter',
            description: 'Bookmark for revision',
        },
    });

    console.log('✅ Created bookmark:', bookmark);

    console.log('🎉 Database seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
