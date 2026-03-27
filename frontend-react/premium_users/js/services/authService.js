import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Default Supabase configuration
const DEFAULT_CONFIG = {
    supabaseUrl: window.VITE_SUPABASE_URL || '',
    supabaseKey: window.VITE_SUPABASE_ANON_KEY || ''
};

class AuthService {
    constructor() {
        // Get configuration from window object (set by config.js) or use defaults
        const config = window.appConfig || DEFAULT_CONFIG;
        
        // Initialize Supabase client
        this.supabase = createClient(
            config.supabaseUrl,
            config.supabaseKey
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
     * Get the dashboard URL based on user's class and stream
     * @param {number} userClass - User's class (9-12)
     * @param {string} [stream] - User's stream (for classes 11-12)
     * @returns {string} Dashboard URL
     */
    getDashboardUrl(userClass, stream = '') {
        const basePath = '/premium_users/dashboards';
        const normalizedStream = (stream || '').toLowerCase().trim();
        
        // For classes 9-10, use the general dashboard
        if (userClass == 9) return `${basePath}/class9/dashboard.html`;
        if (userClass == 10) return `${basePath}/class10/dashboard.html`;
        
        // For classes 11-12, use stream-specific dashboards
        if (userClass == 11 || userClass == 12) {
            // Map stream names to their corresponding dashboard paths
            const streamMap = {
                'pcm': 'science',
                'pcb': 'science',  // Both PCM and PCB will go to science dashboard
                'commerce': 'commerce',
                'arts': 'arts',
                'humanities': 'arts',
                'medical': 'science',
                'science': 'science'
            };
            
            // Default to science if stream is not recognized
            const streamFolder = streamMap[normalizedStream] || 'science';
            return `${basePath}/class${userClass}/${streamFolder}/dashboard.html`;
        }
        
        // Fallback for any other class
        return `${basePath}/class10/dashboard.html`;
    }

    /**
     * Redirect user to their respective dashboard
     */
    redirectToDashboard() {
        const user = this.getCurrentUser();
        if (user && user.class) {
            const dashboardUrl = this.getDashboardUrl(user.class, user.stream);
            window.location.href = dashboardUrl;
        } else {
            // If no class info, redirect to login
            window.location.href = '/premium_users/login.html';
        }
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
            console.log('Attempting login with email:', trimmedEmail);
            
            // 1. First, try to sign in with email and password
            console.log('Calling Supabase signInWithPassword...');
            const { data: signInData, error: signInError } = await this.supabase.auth.signInWithPassword({
                email: trimmedEmail,
                password: password
            });

            if (signInError) {
                console.error('Supabase sign in error:', {
                    status: signInError.status,
                    message: signInError.message,
                    name: signInError.name,
                    stack: signInError.stack
                });

                // More specific error messages based on the error code
                if (signInError.status === 400) {
                    // Check if this is an email not confirmed error
                    if (signInError.message && signInError.message.includes('email not confirmed')) {
                        throw new Error('Please check your email and confirm your account before logging in.');
                    }
                    throw new Error('Invalid email or password. Please check your credentials and try again.');
                } else if (signInError.status === 429) {
                    throw new Error('Too many login attempts. Please try again later.');
                } else {
                    throw new Error(signInError.message || 'An error occurred during login. Please try again.');
                }
            }

            const { user } = signInData || {};
            if (!user) {
                console.error('No user data in signInData:', signInData);
                throw new Error('Authentication failed. Please try again.');
            }
            
            console.log('User authenticated successfully:', { 
                userId: user.id, 
                email: user.email,
                emailConfirmed: user.email_confirmed_at ? true : false
            });

            console.log('User authenticated:', { userId: user.id, email: user.email });

            // 2. Get additional user data from the users table
            const { data: userData, error: userError } = await this.supabase
                .from('users')
                .select('*')
                .eq('id', user.id)
                .single();

            // If user exists in auth but not in users table, create a record
            if (userError || !userData) {
                console.log('User not found in users table, creating new record...');
                const userDataToInsert = {
                    id: user.id,
                    email: user.email,
                    name: user.user_metadata?.name || user.email.split('@')[0],
                    role: 'student',
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                };

                console.log('Creating user record with data:', userDataToInsert);
                
                const { data: newUser, error: createError } = await this.supabase
                    .from('users')
                    .insert(userDataToInsert)
                    .select()
                    .single();

                if (createError) {
                    console.error('Error creating user record:', createError);
                    // If there's an error creating the user record, still allow login
                    console.warn('Proceeding with limited user data due to profile creation error');
                    
                    const fallbackUserInfo = {
                        id: user.id,
                        email: user.email,
                        name: user.user_metadata?.name || user.email.split('@')[0],
                        role: 'student',
                        class: null,
                        stream: null
                    };
                    
                    localStorage.setItem(this.userKey, JSON.stringify(fallbackUserInfo));
                    return fallbackUserInfo;
                }

                // Store user data in localStorage
                const userInfo = {
                    id: user.id,
                    email: user.email,
                    name: newUser?.name || user.user_metadata?.name || user.email.split('@')[0],
                    role: newUser?.role || 'student',
                    class: newUser?.class || null,
                    stream: newUser?.stream || null
                };
                
                localStorage.setItem(this.tokenKey, this.supabase.auth.session()?.access_token || '');
                localStorage.setItem(this.userKey, JSON.stringify(userInfo));

                return userInfo;
                
            } else {
                // User exists in users table - store and return their data
                const existingUserInfo = {
                    id: user.id,
                    email: user.email,
                    name: userData?.name || user.user_metadata?.name || user.email.split('@')[0],
                    role: userData?.role || 'student',
                    class: userData?.class || null,
                    stream: userData?.stream || null
                };
                
                localStorage.setItem(this.tokenKey, this.supabase.auth.session()?.access_token || '');
                localStorage.setItem(this.userKey, JSON.stringify(existingUserInfo));

                return existingUserInfo;
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    /**
     * Register a new user
     * @param {string} name - User's full name
     * @param {string} email - User's email
     * @param {string} password - User's password
     * @returns {Promise<Object>} Registered user data
     */
    async register(name, email, password) {
        try {
            // Sign up with Supabase Auth
            const { data: authData, error: signUpError } = await this.supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        name,
                        role: 'premium'
                    }
                }
            });

            if (signUpError) throw signUpError;

            // Create user in your users table
            const { data: user, error: dbError } = await this.supabase
                .from('users')
                .insert([
                    { 
                        id: authData.user.id,
                        email,
                        name,
                        role: 'premium'
                    }
                ])
                .select()
                .single();

            if (dbError) throw dbError;

            // Sign in the user
            const { data: signInData, error: signInError } = await this.supabase.auth.signInWithPassword({
                email,
                password
            });

            if (signInError) throw signInError;

            // Store user data
            const userData = {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            };
            
            localStorage.setItem(this.userKey, JSON.stringify(userData));
            return userData;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }

    /**
     * Get current authenticated user
     * @returns {Promise<Object|null>} Current user data or null if not authenticated
     */
    async getCurrentUser() {
        // First check if we have user data in localStorage
        const userData = localStorage.getItem(this.userKey);
        if (userData) {
            return JSON.parse(userData);
        }

        // If no user data in localStorage, check with Supabase
        try {
            const { data: { user }, error } = await this.supabase.auth.getUser();
            
            if (error || !user) {
                this.logout();
                return null;
            }

            // Get user data from your users table
            const { data: userData, error: userError } = await this.supabase
                .from('users')
                .select('*')
                .eq('id', user.id)
                .single();

            if (userError) {
                console.error('Error fetching user data:', userError);
                return null;
            }

            // Cache the user data in localStorage
            localStorage.setItem(this.userKey, JSON.stringify(userData));
            return userData;
        } catch (error) {
            console.error('Error in getCurrentUser:', error);
            return null;
        }
    }

    /**
     * Logout the current user
     * @returns {Promise<void>}
     */
    async logout() {
        try {
            // Sign out from Supabase
            await this.supabase.auth.signOut();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            // Clear local storage
            this._clearAuthData();
        }
    }

    /**
     * Check if user is authenticated
     * @returns {boolean} True if user is authenticated
     */
    isAuthenticated() {
        return !!this.getToken();
    }

    /**
     * Get authentication token
     * @returns {string|null} Authentication token or null if not authenticated
     */
    getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    /**
     * Get user data from local storage
     * @returns {Object|null} User data or null if not available
     */
    getUserData() {
        const userData = localStorage.getItem(this.userKey);
        return userData ? JSON.parse(userData) : null;
    }

    /**
     * Check if current user has admin role
     * @returns {boolean} True if user is admin
     */
    isAdmin() {
        const user = this.getUserData();
        return user && user.role === 'admin';
    }

    /**
     * Check if current user has premium role
     * @returns {boolean} True if user is premium
     */
    isPremium() {
        const user = this.getUserData();
        return user && (user.role === 'premium' || user.role === 'admin');
    }

    /**
     * Test the Supabase connection
     * @returns {Promise<Object>} Connection test result
     */
    async testConnection() {
        try {
            console.log('Testing Supabase connection...');
            
            // Test authentication endpoint
            const { data: authData, error: authError } = await this.supabase.auth.getSession();
            
            if (authError) {
                console.error('Supabase auth test failed:', authError);
                return { 
                    success: false, 
                    error: 'Authentication test failed',
                    details: authError 
                };
            }

            // Test database connection
            const { data: dbData, error: dbError } = await this.supabase
                .from('users')
                .select('*')
                .limit(1);

            if (dbError) {
                console.error('Supabase database test failed:', dbError);
                return { 
                    success: false, 
                    error: 'Database test failed',
                    details: dbError 
                };
            }

            console.log('Supabase connection test successful');
            return { 
                success: true, 
                message: 'Successfully connected to Supabase',
                auth: !!authData.session,
                dbAccess: !!dbData
            };

        } catch (error) {
            console.error('Error testing Supabase connection:', error);
            return { 
                success: false, 
                error: 'Connection test failed',
                details: error.message 
            };
        }
    }

    /**
     * Create a test user (for debugging purposes)
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<Object>} User data
     */
    async createTestUser(email, password) {
        try {
            console.log('Creating test user with email:', email);
            
            // 1. Sign up the user
            const { data: signUpData, error: signUpError } = await this.supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        name: email.split('@')[0],
                        role: 'student'
                    }
                }
            });

            if (signUpError) {
                console.error('Error creating test user:', signUpError);
                throw signUpError;
            }

            if (!signUpData.user) {
                throw new Error('No user data returned from sign up');
            }

            console.log('Test user created successfully:', signUpData.user);
            return signUpData.user;

        } catch (error) {
            console.error('Error in createTestUser:', error);
            throw error;
        }
    }
}

// Create and export a singleton instance
const authService = new AuthService();

// Make it globally available for debugging in browser console
if (typeof window !== 'undefined') {
    window.authService = authService;
}

export { authService };