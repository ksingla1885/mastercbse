
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: './backend/.env' });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
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
            console.log('Sample record subjects:', [...new Set(data.map(i => i.subject))]);
            console.log('Sample record classes:', [...new Set(data.map(i => i.class))]);
        }
    } catch (err) {
        console.error('Execution error:', err.message);
    }
}

checkContent();
