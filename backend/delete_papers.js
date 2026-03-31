
console.log('Script started...');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Environment variables for Supabase are not set properly.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function deleteClass10SamplePapers() {
    try {
        console.log('Fetching sample papers for class 10 for deletion...');
        
        // Find matching entries first to be safe
        const { data: toDelete, error: fetchError } = await supabase
            .from('content')
            .select('*')
            .eq('class', 10)
            .eq('content_type', 'SAMPLE_PAPER')
            .in('subject', ['Mathematics', 'Science', 'Social Science', 'SocialScience']);

        if (fetchError) throw fetchError;

        if (!toDelete || toDelete.length === 0) {
            console.log('No matching sample papers found for class 10 to delete.');
            return;
        }

        console.log(`Found ${toDelete.length} sample papers to delete.`);
        
        // Actually delete them from the database
        const { count, error: deleteError } = await supabase
            .from('content')
            .delete()
            .eq('class', 10)
            .eq('content_type', 'SAMPLE_PAPER')
            .in('subject', ['Mathematics', 'Science', 'Social Science', 'SocialScience']);

        if (deleteError) throw deleteError;

        console.log(`Successfully deleted ${toDelete.length} sample papers from the database.`);

        // Optionally delete files from storage if titles/urls are found
        // But for now, we'll stick to the database records.
        
    } catch (err) {
        console.error('Execution error:', err.message);
    }
}

deleteClass10SamplePapers();
