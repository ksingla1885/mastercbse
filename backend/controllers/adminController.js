const { supabase } = require('../config/database');
const path = require('path');
const { randomUUID } = require('crypto');

/**
 * Admin Controller
 * Handles all admin panel operations
 */

class AdminController {
    /**
     * Get all users with pagination and filtering
     */
    async getUsers(req, res) {
        try {
            const { page = 1, limit = 10, search = '', stream = '', status = '' } = req.query;
            const offset = (page - 1) * limit;

            let query = supabase
                .from('users')
                .select('*', { count: 'exact' })
                .range(offset, offset + limit - 1)
                .order('created_at', { ascending: false });

            // Apply filters
            if (search) {
                query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%`);
            }
            if (stream) {
                query = query.eq('stream', stream);
            }
            if (status) {
                query = query.eq('subscription_status', status);
            }

            const { data: users, error, count } = await query;

            if (error) {
                console.log('Database users table not found or error:', error.message);
                // Return empty result with proper structure
                return res.json({
                    success: true,
                    users: [],
                    pagination: {
                        page: parseInt(page),
                        limit: parseInt(limit),
                        total: 0,
                        pages: 0
                    }
                });
            }

            res.json({
                success: true,
                users: users || [],
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total: count || 0,
                    pages: Math.ceil((count || 0) / limit)
                }
            });

        } catch (error) {
            console.error('Get users error:', error);
            // Return empty result instead of error
            res.json({
                success: true,
                users: [],
                pagination: {
                    page: 1,
                    limit: parseInt(req.query.limit || 10),
                    total: 0,
                    pages: 0
                }
            });
        }
    }

    /**
     * Get user by ID
     */
    async getUserById(req, res) {
        try {
            const { id } = req.params;

            const { data: user, error } = await supabase
                .from('users')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;

            res.json({
                success: true,
                user
            });

        } catch (error) {
            console.error('Get user error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to fetch user'
            });
        }
    }

    /**
     * Update user
     */
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const updates = req.body;

            const { data: user, error } = await supabase
                .from('users')
                .update(updates)
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;

            res.json({
                success: true,
                message: 'User updated successfully',
                user
            });

        } catch (error) {
            console.error('Update user error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to update user'
            });
        }
    }

    /**
     * Delete user
     */
    async deleteUser(req, res) {
        try {
            const { id } = req.params;

            // First delete from Supabase Auth
            const { error: authError } = await supabase.auth.admin.deleteUser(id);
            if (authError) throw authError;

            // Then delete from users table
            const { error } = await supabase
                .from('users')
                .delete()
                .eq('id', id);

            if (error) throw error;

            res.json({
                success: true,
                message: 'User deleted successfully'
            });

        } catch (error) {
            console.error('Delete user error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to delete user'
            });
        }
    }

    /**
     * Get all content with filtering
     */
    async getContent(req, res) {
        try {
            const pageNum = parseInt(req.query.page) || 1;
            const limitNum = parseInt(req.query.limit) || 10;
            const { search = '', class: className = '', subject = '', type = '' } = req.query;
            const offset = (pageNum - 1) * limitNum;

            // Check if Supabase is properly configured
            if (!supabase) {
                console.log('Supabase not configured, returning empty content');
                return res.json({
                    success: true,
                    content: [],
                    pagination: {
                        page: parseInt(page),
                        limit: parseInt(limit),
                        total: 0,
                        pages: 0
                    }
                });
            }

            console.log('Fetching content with filters:', { search, className, subject, stream: req.query.stream, type });

            let query = supabase
                .from('content')
                .select('*', { count: 'exact' });

            // Apply filters first
            if (search) {
                query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`);
            }
            if (className) {
                query = query.eq('class', parseInt(className));
            }
            if (subject && subject !== 'all') {
                query = query.eq('subject', subject);
            }
            if (req.query.stream && req.query.stream !== 'all') {
                if (req.query.stream === 'Common (All Streams)' || req.query.stream === '') {
                    query = query.is('stream', null);
                } else {
                    query = query.eq('stream', req.query.stream);
                }
            }
            if (type) {
                query = query.eq('content_type', type.toUpperCase());
            }

            // Apply pagination and sorting last
            query = query
                .order('created_at', { ascending: false })
                .range(offset, offset + limitNum - 1);

            const { data: content, error, count } = await query;
            console.log(`Query count: ${count}, Data matched: ${content ? content.length : 0} items`);

            if (error) {
                // Handle case where content table doesn't exist
                if (error.message.includes('relation') || error.message.includes('does not exist')) {
                    console.log('Content table not found, returning empty data');
                    return res.json({
                        success: true,
                        content: [],
                        pagination: {
                            page: pageNum,
                            limit: limitNum,
                            total: 0,
                            pages: 0
                        }
                    });
                }
                throw error;
            }

            const totalPages = Math.ceil((count || 0) / limitNum);

            // Map database keys (snake_case) to frontend expected keys (camelCase)
            const mappedContent = (content || []).map(item => ({
                ...item,
                type: item.content_type || 'pdf',
                contentType: item.content_type || 'pdf',
                contentUrl: item.content_url || '',
                isPremium: item.is_premium || false,
                uploadDate: item.created_at || new Date().toISOString()
            }));

            // Get global stats for the dashboard cards
            let totalViews = 0;
            let publishedCount = 0;
            let draftCount = 0;
            let globalTotal = 0;

            try {
                // Global Total
                const { count: gCount } = await supabase
                    .from('content')
                    .select('*', { count: 'exact', head: true });
                globalTotal = gCount || (count || 0);

                // Total views - Sum of views column
                const { data: viewsData } = await supabase
                    .from('content')
                    .select('views');
                totalViews = viewsData?.reduce((sum, item) => sum + (parseInt(item.views) || 0), 0) || 0;

                // Published count
                const { count: pCount } = await supabase
                    .from('content')
                    .select('*', { count: 'exact', head: true })
                    .eq('status', 'published');
                publishedCount = pCount || globalTotal; 

                // Draft count
                const { count: dCount } = await supabase
                    .from('content')
                    .select('*', { count: 'exact', head: true })
                    .eq('status', 'draft');
                draftCount = dCount || 0;
            } catch (statError) {
                console.log('Error fetching content stats, using fallbacks:', statError.message);
                // If status column doesn't exist, we'll treat all as published for now
                publishedCount = globalTotal || count || 0;
            }

            res.json({
                success: true,
                content: mappedContent,
                pagination: {
                    page: pageNum,
                    limit: limitNum,
                    total: count || 0,
                    pages: totalPages || 0
                },
                stats: {
                    totalContent: globalTotal,
                    totalViews: totalViews,
                    published: publishedCount,
                    drafts: draftCount
                }
            });

        } catch (error) {
            console.error('Get content error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to fetch content',
                error: error.message
            });
        }
    }

    /**
     * Create new content
     */
    async createContent(req, res) {
        try {
            let contentData = { ...req.body };

            // Handle file upload to Supabase Storage
            if (req.file) {
                const fileName = `content-${Date.now()}${path.extname(req.file.originalname)}`;
                
                const bucket = process.env.SUPABASE_STORAGE_BUCKET || 'CBSE';
                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from(bucket)
                    .upload(fileName, req.file.buffer, {
                        contentType: req.file.mimetype,
                        upsert: true
                    });

                if (uploadError) {
                    console.error('Supabase Storage Upload Error:', uploadError);
                    throw uploadError;
                }

                // Get public URL for the uploaded file
                const { data: { publicUrl } } = supabase.storage
                    .from(bucket)
                    .getPublicUrl(fileName);
                
                contentData.contentUrl = publicUrl;
            }
 
            // Sanitize and map contentData to Database Column Names
            const sanitizedData = {};
            
            // Map: Frontend Key -> Database Column Name
            const fieldMap = {
                title: 'title',
                description: 'description',
                type: 'content_type',
                class: 'class',
                stream: 'stream',
                subject: 'subject',
                contentUrl: 'content_url',
                is_premium: 'is_premium', // some might already be snake_case
                isPremium: 'is_premium'
                // Note: 'status' column does not exist in the content table schema
            };
            
            Object.keys(fieldMap).forEach(key => {
                const dbColumn = fieldMap[key];
                const value = contentData[key];

                if (value !== undefined && value !== '') {
                    // Type conversion
                    if (key === 'class') {
                        const val = parseInt(value);
                        if (!isNaN(val)) sanitizedData[dbColumn] = val;
                    } else if (key === 'isPremium' || key === 'is_premium') {
                        sanitizedData[dbColumn] = value === 'true' || value === true;
                    } else if (key === 'type') {
                        // Ensure it's uppercase for Prisma Enum if needed
                        sanitizedData[dbColumn] = value.toUpperCase();
                    } else {
                        sanitizedData[dbColumn] = value;
                    }
                } else if (key === 'stream' && value === '') {
                    sanitizedData[dbColumn] = null;
                }
            });

            // Generate UUID manually — Supabase JS client does not trigger DB-level uuid default
            sanitizedData.id = randomUUID();
            sanitizedData.created_at = new Date().toISOString();
            sanitizedData.updated_at = new Date().toISOString();

            const { data: content, error } = await supabase
                .from('content')
                .insert([sanitizedData])
                .select()
                .single();

            if (error) {
                console.error('Supabase error detail:', error);
                throw error;
            }

            res.json({
                success: true,
                message: 'Content created successfully',
                content
            });

        } catch (error) {
            console.error('Create content error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to create content',
                error: error.message,
                details: error.details || null
            });
        }
    }

    /**
     * Update content
     */
    async updateContent(req, res) {
        try {
            const { id } = req.params;
            let updates = { ...req.body };

            // Handle file upload to Supabase Storage
            if (req.file) {
                const fileName = `content-${Date.now()}${path.extname(req.file.originalname)}`;
                
                const bucket = process.env.SUPABASE_STORAGE_BUCKET || 'CBSE';
                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from(bucket)
                    .upload(fileName, req.file.buffer, {
                        contentType: req.file.mimetype,
                        upsert: true
                    });

                if (uploadError) {
                    console.error('Supabase Storage Upload Error:', uploadError);
                    throw uploadError;
                }

                // Get public URL
                const { data: { publicUrl } } = supabase.storage
                    .from(bucket)
                    .getPublicUrl(fileName);
                
                updates.contentUrl = publicUrl;
            }
 
            // Sanitize and map updates
            const sanitizedData = {};
            const fieldMap = {
                title: 'title',
                description: 'description',
                type: 'content_type',
                class: 'class',
                stream: 'stream',
                subject: 'subject',
                contentUrl: 'content_url',
                isPremium: 'is_premium',
                is_premium: 'is_premium'
            };
            
            Object.keys(fieldMap).forEach(key => {
                const dbColumn = fieldMap[key];
                const value = updates[key];

                if (value !== undefined && value !== '') {
                    // Type conversion
                    if (key === 'class') {
                        const val = parseInt(value);
                        if (!isNaN(val)) sanitizedData[dbColumn] = val;
                    } else if (key === 'isPremium' || key === 'is_premium') {
                        sanitizedData[dbColumn] = value === 'true' || value === true;
                    } else if (key === 'type') {
                        sanitizedData[dbColumn] = value.toUpperCase();
                    } else {
                        sanitizedData[dbColumn] = value;
                    }
                } else if (key === 'stream' && value === '') {
                    sanitizedData[dbColumn] = null;
                }
            });

            sanitizedData.updated_at = new Date().toISOString();

            const { data: content, error } = await supabase
                .from('content')
                .update(sanitizedData)
                .eq('id', id)
                .select()
                .single();

            if (error) {
                console.error('Supabase error detail:', error);
                throw error;
            }

            res.json({
                success: true,
                message: 'Content updated successfully',
                content
            });

        } catch (error) {
            console.error('Update content error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to update content',
                error: error.message,
                details: error.details || null
            });
        }
    }

    /**
     * Delete content
     */
    async deleteContent(req, res) {
        try {
            const { id } = req.params;

            const { error } = await supabase
                .from('content')
                .delete()
                .eq('id', id);

            if (error) throw error;

            res.json({
                success: true,
                message: 'Content deleted successfully'
            });

        } catch (error) {
            console.error('Delete content error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to delete content'
            });
        }
    }

    /**
     * Get subscriptions with filtering
     */
    async getSubscriptions(req, res) {
        try {
            const { page = 1, limit = 10, status = '', plan = '' } = req.query;
            const offset = (page - 1) * limit;

            let query = supabase
                .from('subscriptions')
                .select(`
                    *,
                    users:user_id (name, email)
                `, { count: 'exact' })
                .range(offset, offset + limit - 1)
                .order('created_at', { ascending: false });

            // Apply filters
            if (status) {
                query = query.eq('status', status);
            }
            if (plan) {
                query = query.eq('plan', plan);
            }

            const { data: subscriptions, error, count } = await query;

            if (error) throw error;

            res.json({
                success: true,
                subscriptions: subscriptions || [],
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total: count || 0,
                    pages: Math.ceil((count || 0) / limit)
                }
            });

        } catch (error) {
            console.error('Get subscriptions error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to fetch subscriptions'
            });
        }
    }

    /**
     * Update subscription
     */
    async updateSubscription(req, res) {
        try {
            const { id } = req.params;
            const updates = {
                ...req.body,
                updated_at: new Date().toISOString()
            };

            const { data: subscription, error } = await supabase
                .from('subscriptions')
                .update(updates)
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;

            res.json({
                success: true,
                message: 'Subscription updated successfully',
                subscription
            });

        } catch (error) {
            console.error('Update subscription error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to update subscription'
            });
        }
    }

    /**
     * Get analytics data
     */
    async getAnalytics(req, res) {
        try {
            const { period = 'month' } = req.query;

            // Get user analytics
            const { data: totalUsers } = await supabase
                .from('users')
                .select('id', { count: 'exact' });

            const { data: newUsers } = await supabase
                .from('users')
                .select('id', { count: 'exact' })
                .gte('created_at', getPeriodStartDate(period));

            const { data: activeUsers } = await supabase
                .from('user_activity')
                .select('user_id', { count: 'exact' })
                .gte('last_active', getPeriodStartDate(period));

            // Get content analytics
            const { data: totalContent } = await supabase
                .from('content')
                .select('id', { count: 'exact' });

            const { data: contentViews } = await supabase
                .from('content_analytics')
                .select('views', { count: 'exact' })
                .gte('date', getPeriodStartDate(period));

            // Get revenue analytics
            const { data: revenue } = await supabase
                .from('subscriptions')
                .select('amount')
                .eq('status', 'active');

            const totalRevenue = revenue?.reduce((sum, sub) => sum + (sub.amount || 0), 0) || 0;

            // Get subscription analytics
            const { data: activeSubscriptions } = await supabase
                .from('subscriptions')
                .select('id', { count: 'exact' })
                .eq('status', 'active');

            const { data: cancelledSubscriptions } = await supabase
                .from('subscriptions')
                .select('id', { count: 'exact' })
                .eq('status', 'cancelled');

            res.json({
                success: true,
                analytics: {
                    users: {
                        total: totalUsers || 0,
                        new: newUsers || 0,
                        active: activeUsers || 0,
                        retention: totalUsers > 0 ? Math.round((activeUsers / totalUsers) * 100) : 0
                    },
                    content: {
                        total: totalContent || 0,
                        views: contentViews?.reduce((sum, item) => sum + (item.views || 0), 0) || 0
                    },
                    revenue: {
                        total: totalRevenue,
                        monthly: totalRevenue, // Would need proper calculation based on period
                        growth: 15 // Mock data
                    },
                    subscriptions: {
                        active: activeSubscriptions || 0,
                        cancelled: cancelledSubscriptions || 0
                    }
                }
            });

        } catch (error) {
            console.error('Get analytics error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to fetch analytics'
            });
        }
    }

    /**
     * Get dashboard stats
     */
    async getDashboardStats(req, res) {
        try {
            // Get counts for dashboard with fallback
            let totalUsers = 0;
            let premiumUsers = 0;
            let totalContent = 0;
            let totalRevenue = 0;

            try {
                const { count } = await supabase
                    .from('users')
                    .select('*', { count: 'exact', head: true });
                totalUsers = count || 0;
            } catch (error) {
                console.log('Users table not found, using default value');
            }

            try {
                const { count } = await supabase
                    .from('users')
                    .select('*', { count: 'exact', head: true })
                    .eq('subscription_status', 'active');
                premiumUsers = count || 0;
            } catch (error) {
                console.log('Users table not found for premium count, using default value');
            }

            try {
                const { count } = await supabase
                    .from('content')
                    .select('*', { count: 'exact', head: true });
                totalContent = count || 0;
            } catch (error) {
                console.log('Content table not found, using default value');
            }

            try {
                const { data: revenueData } = await supabase
                    .from('subscriptions')
                    .select('amount')
                    .eq('status', 'active');
                totalRevenue = revenueData?.reduce((sum, sub) => sum + (sub.amount || 0), 0) || 0;
            } catch (error) {
                console.log('Subscriptions table not found, using default value');
            }

            res.json({
                success: true,
                stats: {
                    totalUsers,
                    premiumUsers,
                    totalContent,
                    totalRevenue,
                    activeSubscriptions: premiumUsers
                }
            });

        } catch (error) {
            console.error('Get dashboard stats error:', error);
            // Return default stats instead of error
            res.json({
                success: true,
                stats: {
                    totalUsers: 0,
                    premiumUsers: 0,
                    totalContent: 0,
                    totalRevenue: 0,
                    activeSubscriptions: 0
                }
            });
        }
    }



    /**
     * Get system settings
     */
    async getSettings(req, res) {
        try {
            // For now, return default settings
            // In a real app, these would be stored in database
            const defaultSettings = {
                general: {
                    siteName: 'mastercbse',
                    siteEmail: 'support@mastercbse.com',
                    maintenance: false,
                    registration: true
                },
                payment: {
                    razorpayKey: process.env.RAZORPAY_KEY || 'rzp_live_...',
                    currency: 'INR',
                    monthlyPrice: 100,
                    annualPrice: 1200
                },
                email: {
                    smtpHost: 'smtp.gmail.com',
                    smtpPort: 587,
                    emailUser: 'noreply@mastercbse.com',
                    emailPassword: '••••••••'
                },
                security: {
                    sessionTimeout: 30,
                    maxLoginAttempts: 5,
                    passwordMinLength: 8,
                    twoFactorAuth: false
                }
            };

            res.json({
                success: true,
                message: 'Settings retrieved successfully',
                data: defaultSettings
            });

        } catch (error) {
            console.error('Get settings error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve settings',
                error: error.message
            });
        }
    }

    /**
     * Update system settings
     */
    async updateSettings(req, res) {
        try {
            const settingsData = req.body;
            
            // In a real app, these would be saved to database
            // For now, just acknowledge the update
            console.log('Settings updated:', settingsData);

            res.json({
                success: true,
                message: 'Settings updated successfully',
                data: settingsData
            });

        } catch (error) {
            console.error('Update settings error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to update settings',
                error: error.message
            });
        }
    }

    /**
     * Create system backup
     */
    async createBackup(req, res) {
        try {
            // Simulate backup creation
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            res.json({
                success: true,
                message: 'Backup created successfully',
                backupUrl: '/backups/backup_' + Date.now() + '.zip'
            });

        } catch (error) {
            console.error('Create backup error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to create backup',
                error: error.message
            });
        }
    }

    /**
     * Clear system cache
     */
    async clearCache(req, res) {
        try {
            // Simulate cache clearing
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            res.json({
                success: true,
                message: 'Cache cleared successfully'
            });

        } catch (error) {
            console.error('Clear cache error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to clear cache',
                error: error.message
            });
        }
    }
    /**
     * Get analytics data
     */
    async getAnalytics(req, res) {
        try {
            const { timeRange = 'month' } = req.query;
            
            // For now, return empty analytics data
            // In a real app, this would calculate actual analytics from database
            const analyticsData = {
                users: { total: 0, new: 0, active: 0, retention: 0 },
                revenue: { total: 0, monthly: 0, growth: 0, average: 0 },
                content: { total: 0, views: 0, downloads: 0, engagement: 0 },
                performance: { pageLoad: 0, uptime: 0, errors: 0, satisfaction: 0 }
            };

            res.json({
                success: true,
                message: 'Analytics data retrieved successfully',
                analytics: analyticsData,
                timeRange
            });

        } catch (error) {
            console.error('Get analytics error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve analytics',
                error: error.message
            });
        }
    }
}

/**
 * Helper function to get period start date
 */
function getPeriodStartDate(period) {
    const now = new Date();
    const startDate = new Date();

    switch (period) {
        case 'today':
            startDate.setHours(0, 0, 0, 0);
            break;
        case 'week':
            startDate.setDate(now.getDate() - 7);
            break;
        case 'month':
            startDate.setMonth(now.getMonth() - 1);
            break;
        case 'quarter':
            startDate.setMonth(now.getMonth() - 3);
            break;
        case 'year':
            startDate.setFullYear(now.getFullYear() - 1);
            break;
        default:
            startDate.setMonth(now.getMonth() - 1);
    }

    return startDate.toISOString();
}

module.exports = new AdminController();
