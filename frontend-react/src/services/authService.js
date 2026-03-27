import { createClient } from '@supabase/supabase-js';

// Default Supabase configuration using environment variables
const DEFAULT_CONFIG = {
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
    supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY
};

if (!DEFAULT_CONFIG.supabaseUrl || !DEFAULT_CONFIG.supabaseKey) {
    console.warn('⚠️ Supply VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file');
}

class AuthService {
    constructor() {
        // Initialize Supabase client
        this.supabase = createClient(
            DEFAULT_CONFIG.supabaseUrl,
            DEFAULT_CONFIG.supabaseKey
        );

        // Storage keys
        this.tokenKey = 'sb-access-token';
        this.userKey = 'sb-user-data';

        // Initialize auth state listener
        this._initAuthListener();
    }

    /**
     * Initialize auth state listener
     * @private
     */
    _initAuthListener() {
        // Listen for auth state changes
        this.supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session) {
                // Store the session
                localStorage.setItem(this.tokenKey, session.access_token);

                // Store user data
                if (session.user) {
                    // Get additional user data from your users table
                    this.supabase
                        .from('users')
                        .select('*')
                        .eq('id', session.user.id)
                        .single()
                        .then(({ data: userData, error }) => {
                            if (!error && userData) {
                                const userInfo = {
                                    id: session.user.id,
                                    email: session.user.email,
                                    name: session.user.user_metadata?.name || '',
                                    role: userData.role || 'student',
                                    class: userData.class,
                                    stream: userData.stream || null
                                };
                                localStorage.setItem(this.userKey, JSON.stringify(userInfo));
                            }
                        });
                }
            } else if (event === 'SIGNED_OUT') {
                this._clearAuthData();
            }
        });
    }

    /**
     * Clear auth data from storage
     * @private
     */
    _clearAuthData() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.userKey);
    }

    /**
     * Get current user data
     * @returns {Object|null} User data or null if not logged in
     */
    getCurrentUser() {
        const userData = localStorage.getItem(this.userKey);
        return userData ? JSON.parse(userData) : null;
    }

    /**
     * Login user with email and password
     * @param {string} email - User's email
     * @param {string} password - User's password
     * @returns {Promise<Object>} User data
     */
    async login(email, password) {
        try {
            if (!email || !password) {
                throw new Error('Email and password are required');
            }

            const trimmedEmail = email.trim();

            const { data: signInData, error: signInError } = await this.supabase.auth.signInWithPassword({
                email: trimmedEmail,
                password: password
            });

            if (signInError) throw signInError;

            const { user } = signInData;

            // Get additional user data from the users table
            const { data: userData, error: userError } = await this.supabase
                .from('users')
                .select('*')
                .eq('id', user.id)
                .single();

            // If user exists in auth but not in users table, create a record
            if (userError || !userData) {
                const userDataToInsert = {
                    id: user.id,
                    email: user.email,
                    name: user.user_metadata?.name || user.email.split('@')[0],
                    role: 'student',
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                };

                await this.supabase
                    .from('users')
                    .insert(userDataToInsert);

                const userInfo = {
                    id: user.id,
                    email: user.email,
                    name: userDataToInsert.name,
                    role: userDataToInsert.role,
                    class: null,
                    stream: null
                };
                localStorage.setItem(this.userKey, JSON.stringify(userInfo));
                return userInfo;
            } else {
                const existingUserInfo = {
                    id: user.id,
                    email: user.email,
                    name: userData.name || user.user_metadata?.name || user.email.split('@')[0],
                    role: userData.role || 'student',
                    class: userData.class || null,
                    stream: userData.stream || null
                };
                localStorage.setItem(this.userKey, JSON.stringify(existingUserInfo));
                return existingUserInfo;
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async logout() {
        try {
            await this.supabase.auth.signOut();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            this._clearAuthData();
        }
    }

    isAuthenticated() {
        return !!localStorage.getItem(this.tokenKey);
    }
}

export const authService = new AuthService();
