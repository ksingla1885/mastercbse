
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteClass10SamplePapers() {
    try {
        console.log('Using Prisma to fetch sample papers for class 10...');
        
        const subjects = ['Mathematics', 'Science', 'Social Science', 'SocialScience'];
        
        // Count how many we have
        const count = await prisma.content.count({
            where: {
                class: 10,
                contentType: 'SAMPLE_PAPER',
                subject: { in: subjects }
            }
        });

        console.log(`Prisma found ${count} matching sample papers for class 10.`);

        if (count > 0) {
            const deleted = await prisma.content.deleteMany({
                where: {
                    class: 10,
                    contentType: 'SAMPLE_PAPER',
                    subject: { in: subjects }
                }
            });
            console.log(`Successfully deleted ${deleted.count} sample papers via Prisma.`);
        } else {
            console.log('No matching sample papers found for class 10 to delete.');
        }

    } catch (err) {
        console.error('Prisma Error:', err.message);
    } finally {
        await prisma.$disconnect();
    }
}

deleteClass10SamplePapers();
