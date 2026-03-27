// Initialize Supabase client
export const supabase = supabase.createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_ANON_KEY'
);

// Auth state change listener
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth state changed:', event);
  
  if (event === 'SIGNED_IN') {
    console.log('User signed in:', session.user);
    // Update UI or redirect as needed
    if (!window.location.pathname.includes('dashboard')) {
      window.location.href = 'dashboard.html';
    }
  } else if (event === 'SIGNED_OUT') {
    console.log('User signed out');
    // Clear session and redirect to login
    sessionStorage.removeItem('premiumUserId');
    window.location.href = 'index.html';
  }
});

// User authentication functions
export const auth = {
  // Sign up new user
  async signUp(email, password, userData) {
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: userData.fullName,
            class: userData.class,
            stream: userData.stream || null,
            phone: userData.contact
          }
        }
      });

      if (authError) throw authError;

      // Save additional user data to profiles table
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: authData.user.id,
            email: userData.email,
            full_name: userData.fullName,
            class: userData.class,
            stream: userData.stream || null,
            phone: userData.contact,
            role: 'student',
            created_at: new Date().toISOString()
          }
        ]);

      if (profileError) throw profileError;

      return { data: authData.user, error: null };
    } catch (error) {
      console.error('Sign up error:', error);
      return { data: null, error };
    }
  },

  // Sign in user
  async signIn(email, password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      
      // Store user ID in session
      sessionStorage.setItem('premiumUserId', data.user.id);
      
      return { data, error: null };
    } catch (error) {
      console.error('Sign in error:', error);
      return { data: null, error };
    }
  },

  // Sign out user
  async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      // Clear session
      sessionStorage.removeItem('premiumUserId');
      return { error: null };
    } catch (error) {
      console.error('Sign out error:', error);
      return { error };
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      return { user, error: null };
    } catch (error) {
      console.error('Get user error:', error);
      return { user: null, error };
    }
  },

  // Update user profile
  async updateProfile(userId, updates) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId)
        .select();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Update profile error:', error);
      return { data: null, error };
    }
  },

  // Check if user has active subscription
  async checkSubscription(userId) {
    try {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', userId)
        .gt('expiry_date', new Date().toISOString())
        .single();

      if (error && error.code !== 'PGRST116') throw error; // Ignore no rows error
      
      return { subscription: data, error: null };
    } catch (error) {
      console.error('Check subscription error:', error);
      return { subscription: null, error };
    }
  }
};

// Database operations
export const db = {
  // Subscription operations
  subscriptions: {
    async create(subscriptionData) {
      try {
        const { data, error } = await supabase
          .from('subscriptions')
          .insert([subscriptionData])
          .select();

        if (error) throw error;
        return { data, error: null };
      } catch (error) {
        console.error('Create subscription error:', error);
        return { data: null, error };
      }
    },

    async getUserSubscriptions(userId) {
      try {
        const { data, error } = await supabase
          .from('subscriptions')
          .select(`
            *,
            subject:subject_id (*)
          `)
          .eq('user_id', userId)
          .order('created_at', { ascending: false });

        if (error) throw error;
        return { data, error: null };
      } catch (error) {
        console.error('Get subscriptions error:', error);
        return { data: null, error };
      }
    },

    async updateStatus(subscriptionId, status) {
      try {
        const { data, error } = await supabase
          .from('subscriptions')
          .update({ status })
          .eq('id', subscriptionId)
          .select();

        if (error) throw error;
        return { data, error: null };
      } catch (error) {
        console.error('Update subscription status error:', error);
        return { data: null, error };
      }
    }
  },

  // Payment operations
  payments: {
    async create(paymentData) {
      try {
        const { data, error } = await supabase
          .from('payments')
          .insert([paymentData])
          .select();

        if (error) throw error;
        return { data, error: null };
      } catch (error) {
        console.error('Create payment error:', error);
        return { data: null, error };
      }
    },

    async getUserPayments(userId) {
      try {
        const { data, error } = await supabase
          .from('payments')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false });

        if (error) throw error;
        return { data, error: null };
      } catch (error) {
        console.error('Get payments error:', error);
        return { data: null, error };
      }
    }
  },

  // Subject operations
  subjects: {
    async getAll() {
      try {
        const { data, error } = await supabase
          .from('subjects')
          .select('*')
          .order('class')
          .order('name');

        if (error) throw error;
        return { data, error: null };
      } catch (error) {
        console.error('Get subjects error:', error);
        return { data: null, error };
      }
    },

    async getByClass(className) {
      try {
        const { data, error } = await supabase
          .from('subjects')
          .select('*')
          .eq('class', className)
          .order('name');

        if (error) throw error;
        return { data, error: null };
      } catch (error) {
        console.error('Get subjects by class error:', error);
        return { data: null, error };
      }
    },

    async getSubjectContent(subjectId) {
      try {
        const { data, error } = await supabase
          .from('subject_content')
          .select('*')
          .eq('subject_id', subjectId)
          .order('order');

        if (error) throw error;
        return { data, error: null };
      } catch (error) {
        console.error('Get subject content error:', error);
        return { data: null, error };
      }
    }
  },

  // User progress tracking
  progress: {
    async getUserProgress(userId, subjectId) {
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', userId)
          .eq('subject_id', subjectId)
          .single();

        if (error && error.code !== 'PGRST116') throw error; // Ignore no rows error
        
        return { progress: data, error: null };
      } catch (error) {
        console.error('Get user progress error:', error);
        return { progress: null, error };
      }
    },

    async updateProgress(progressData) {
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .upsert([progressData], { onConflict: 'user_id,subject_id' })
          .select();

        if (error) throw error;
        return { data, error: null };
      } catch (error) {
        console.error('Update progress error:', error);
        return { data: null, error };
      }
    },

    async getCompletedLessons(userId, subjectId) {
      try {
        const { data, error } = await supabase
          .from('completed_lessons')
          .select('lesson_id')
          .eq('user_id', userId)
          .eq('subject_id', subjectId);

        if (error) throw error;
        return { data, error: null };
      } catch (error) {
        console.error('Get completed lessons error:', error);
        return { data: null, error };
      }
    }
  }
};

// Helper functions
export const helpers = {
  // Format currency
  formatCurrency(amount, currency = 'INR') {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  },

  // Format date
  formatDate(dateString) {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  },

  // Calculate time remaining until expiry
  getTimeRemaining(expiryDate) {
    const now = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - now;
    
    if (diffTime <= 0) return { expired: true };
    
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.ceil((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return {
      expired: false,
      days,
      hours,
      formatted: `${days} day${days !== 1 ? 's' : ''} ${hours} hour${hours !== 1 ? 's' : ''}`
    };
  },

  // Validate email format
  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  },

  // Validate phone number (Indian format)
  isValidPhone(phone) {
    const re = /^[6-9]\d{9}$/;
    return re.test(phone);
  }
};

// Export default for easier imports
export default {
  supabase,
  auth,
  db,
  helpers
};
