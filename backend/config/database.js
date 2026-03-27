/**
 * Database Configuration
 * Handles Supabase connection and initialization
 */

const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;

// Use Service Role Key for backend access (bypasses RLS)
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.warn('⚠️  Warning: Supabase credentials not found in .env');
    console.warn('   Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env file');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = {
    supabase,
    supabaseUrl,
    supabaseKey
};
