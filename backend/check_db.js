
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Environment variables for Supabase are not set properly.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkContent() {
    try {
        console.log('Checking database content...');
        const { data, count, error } = await supabase
            .from('content')
            .select('*', { count: 'exact' });

        if (error) {
            console.error('Error fetching content:', error.message);
            if (error.message.includes('relation "content" does not exist')) {
                console.log('The "content" table does not exist in the database.');
            }
            return;
        }

        console.log(`Total records in "content" table: ${count}`);
        if (data && data.length > 0) {
            const subjects = [...new Set(data.map(i => i.subject))];
            const classes = [...new Set(data.map(i => i.class))];
            const types = [...new Set(data.map(i => i.content_type))];
            console.log('Unique Subjects:', subjects);
            console.log('Unique Classes:', classes);
            console.log('Unique Content Types:', types);
            
            const mathScienceClass10 = data.filter(i => 
                i.class === 10 && 
                ['Mathematics', 'Science', 'SocialScience'].includes(i.subject) &&
                i.content_type === 'SAMPLE_PAPER'
            );
            console.log(`Matching sample papers for class 10 (Math/Sci/SSci): ${mathScienceClass10.length}`);
        } else {
            console.log('No content records found.');
        }
    } catch (err) {
        console.error('Execution error:', err.message);
    }
}

checkContent();
