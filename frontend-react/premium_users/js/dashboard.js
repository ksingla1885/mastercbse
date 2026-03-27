import { authService } from './services/authService.js';
import { apiService } from './services/apiService.js';

// Dashboard functionality
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Check if user is authenticated
        if (!authService.isAuthenticated()) {
            window.location.href = 'login.html';
            return;
        }

        // Get fresh user data from the server
        const userData = await authService.getCurrentUser();
        
        if (!userData) {
            // If we can't get user data, redirect to login
            window.location.href = 'login.html';
            return;
        }

        console.log('User data loaded:', userData);

        // Update UI with user data
        updateUserInfo(userData);
        
        // Load user's subjects
        await loadUserSubjects(userData.id);
        
        // Set up event listeners
        setupEventListeners();
        
    } catch (error) {
        console.error('Error initializing dashboard:', error);
        showError('Failed to load dashboard. Please try again.');
    }
});

// Update user information in the UI
function updateUserInfo(userData) {
    console.log('Updating UI with user data:', userData);
    
    // Update welcome message with user's name
    const welcomeName = document.getElementById('welcomeName');
    if (welcomeName) {
        welcomeName.textContent = userData.fullName || userData.name || 'Student';
        console.log('Updated welcome name to:', welcomeName.textContent);
    }
    
    // Update class and stream information
    const classInfo = document.getElementById('classInfo');
    if (classInfo) {
        // Clear any existing content and classes
        classInfo.innerHTML = '';
        classInfo.className = 'class-info';
        
        // Check if user has class or grade information
        const userClass = userData.class || userData.grade;
        const userStream = userData.stream || userData.track;
        
        if (userClass) {
            // Create icon
            const icon = document.createElement('i');
            icon.className = 'fas fa-graduation-cap';
            
            // Create text node with class/grade and stream if available
            const text = document.createTextNode(
                userStream 
                    ? `Class ${userClass} - ${userStream}` 
                    : `Class ${userClass}`
            );
            
            // Add elements to the container
            classInfo.appendChild(icon);
            classInfo.appendChild(document.createTextNode(' ')); // Add space
            classInfo.appendChild(text);
            
            // Add active class for styling
            classInfo.classList.add('active');
            
            console.log('Updated class info to:', classInfo.textContent);
        } else {
            // Add icon for no class selected
            const icon = document.createElement('i');
            icon.className = 'fas fa-exclamation-circle';
            
            // Add text
            const text = document.createTextNode(' No class selected yet');
            
            // Add elements to the container
            classInfo.appendChild(icon);
            classInfo.appendChild(text);
        }
    } else {
        console.error('Could not find classInfo element');
    }
    
    // Update other user-specific UI elements
    updateUserAvatar(userData);
}

// Update user avatar in the UI
function updateUserAvatar(userData) {
    const avatarElement = document.querySelector('.user-avatar');
    if (!avatarElement) return;
    
    if (userData.avatarUrl) {
        avatarElement.style.backgroundImage = `url('${userData.avatarUrl}')`;
    } else if (userData.initials) {
        avatarElement.textContent = userData.initials;
    } else if (userData.fullName || userData.name) {
        // Generate initials from name
        const name = userData.fullName || userData.name;
        const initials = name.split(' ')
            .map(part => part[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
        
        avatarElement.textContent = initials;
    }
}

// Load user's subjects
async function loadUserSubjects(userId) {
    try {
        const subjectsContainer = document.querySelector('.subjects-grid');
        if (!subjectsContainer) return;

        // Show loading state
        subjectsContainer.innerHTML = `
            <div class="loading-state">
                <div class="spinner"></div>
                <p>Loading your subjects...</p>
            </div>
        `;

        try {
            // Fetch subjects from the API
            const subjects = await apiService.getUserSubjects(userId);
            
            if (!subjects || subjects.length === 0) {
                subjectsContainer.innerHTML = `
                    <div class="no-subjects">
                        <i class="fas fa-book-open"></i>
                        <p>No subjects chosen yet</p>
                        <button class="btn btn-outline" onclick="window.location.href='subjects.html'">
                            <i class="fas fa-plus"></i> Add Subjects
                        </button>
                    </div>
                `;
            } else {
                // Render subjects
                const subjectsHtml = subjects.map(subject => `
                    <div class="subject-card">
                        <div class="subject-icon" style="background-color: ${subject.color || '#4a6cf7'};">
                            <i class="fas fa-${subject.icon || 'book'}"></i>
                        </div>
                        <h4>${subject.name}</h4>
                        <p>${subject.teacher || 'No teacher assigned'}</p>
                        <div class="subject-progress">
                            <div class="progress-bar" style="width: ${subject.progress || 0}%;"></div>
                        </div>
                        <span class="progress-text">${subject.progress || 0}% Complete</span>
                    </div>
                `).join('');
                
                subjectsContainer.innerHTML = subjectsHtml;
            }
        } catch (error) {
            console.error('Error loading subjects:', error);
            subjectsContainer.innerHTML = `
                <div class="error-state">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Failed to load subjects. Please try again later.</p>
                    <button class="btn btn-outline" onclick="loadUserSubjects('${userId}')">
                        <i class="fas fa-sync"></i> Retry
                    </button>
                </div>
            `;
        }
        
    } catch (error) {
        console.error('Error loading subjects:', error);
        const subjectsContainer = document.querySelector('.subjects-grid');
        if (subjectsContainer) {
            subjectsContainer.innerHTML = `
                <div class="error-state">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Failed to load subjects. Please try again later.</p>
                    <button class="btn btn-outline" onclick="loadUserSubjects('${userId}')">
                        <i class="fas fa-sync"></i> Retry
                    </button>
                </div>
            `;
        }
    }
}

async function loadUserData(userId) {
    try {
        // Load user profile
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();

        if (userError) throw userError;

        // Update UI with user data
        document.getElementById('userName').textContent = user.fullName;
        document.getElementById('userClass').textContent = `Class ${user.class}${user.stream ? ' - ' + user.stream : ''}`;

        // Load user's subscriptions
        await loadSubscriptions(userId, user.class, user.stream);
        
        // Load recent activity
        await loadRecentActivity(userId);
        
    } catch (error) {
        console.error('Error loading user data:', error);
        showError('Failed to load dashboard data. Please refresh the page.');
    }
}

async function loadSubscriptions(userId, userClass, userStream) {
    try {
        const { data: subscriptions, error } = await supabase
            .from('subscriptions')
            .select(`
                *,
                subjects (*)
            `)
            .eq('user_id', userId)
            .order('expiry_date', { ascending: true });

        if (error) throw error;

        const subscriptionsContainer = document.getElementById('subscriptionsContainer');
        
        if (subscriptions.length === 0) {
            subscriptionsContainer.innerHTML = `
                <div class="no-subscriptions">
                    <p>You don't have any active subscriptions yet.</p>
                    <button class="btn-premium" onclick="window.location.href='subscription.html'">
                        Browse Plans
                    </button>
                </div>
            `;
            return;
        }

        // Group subscriptions by status
        const activeSubs = subscriptions.filter(sub => new Date(sub.expiry_date) >= new Date());
        const expiredSubs = subscriptions.filter(sub => new Date(sub.expiry_date) < new Date());

        // Display active subscriptions
        if (activeSubs.length > 0) {
            const activeHtml = `
                <h3>Active Subscriptions</h3>
                <div class="subscriptions-grid">
                    ${activeSubs.map(sub => createSubscriptionCard(sub)).join('')}
                </div>
            `;
            subscriptionsContainer.innerHTML += activeHtml;
        }

        // Display expired subscriptions
        if (expiredSubs.length > 0) {
            const expiredHtml = `
                <h3>Expired Subscriptions</h3>
                <div class="subscriptions-grid">
                    ${expiredSubs.map(sub => createSubscriptionCard(sub, true)).join('')}
                </div>
            `;
            subscriptionsContainer.innerHTML += expiredHtml;
        }

        // Initialize tooltips
        initializeTooltips();

    } catch (error) {
        console.error('Error loading subscriptions:', error);
        showError('Failed to load subscriptions. Please try again.');
    }
}

function createSubscriptionCard(subscription, isExpired = false) {
    const expiryDate = new Date(subscription.expiry_date);
    const daysRemaining = Math.ceil((expiryDate - new Date()) / (1000 * 60 * 60 * 24));
    
    return `
        <div class="subscription-card ${isExpired ? 'expired' : ''}">
            <div class="subscription-header">
                <h4>${subscription.subjects?.name || 'Subject'}</h4>
                <span class="status-badge ${isExpired ? 'expired' : 'active'}">
                    ${isExpired ? 'Expired' : 'Active'}
                </span>
            </div>
            
            <div class="subscription-details">
                <div class="detail">
                    <span class="label">Start Date:</span>
                    <span class="value">${new Date(subscription.start_date).toLocaleDateString()}</span>
                </div>
                <div class="detail">
                    <span class="label">Expiry:</span>
                    <span class="value">${expiryDate.toLocaleDateString()}</span>
                </div>
                ${!isExpired ? `
                    <div class="detail">
                        <span class="label">Time Remaining:</span>
                        <span class="value">${daysRemaining} days</span>
                    </div>
                ` : ''}
            </div>
            
            <div class="subscription-actions">
                <button class="btn-outline" onclick="viewSubject('${subscription.subject_id}')">
                    View Content
                </button>
                ${isExpired ? `
                    <button class="btn-premium" onclick="renewSubscription('${subscription.id}')">
                        Renew Now
                    </button>
                ` : ''}
            </div>
        </div>
    `;
}

async function loadRecentActivity(userId) {
    try {
        const { data: activities, error } = await supabase
            .from('user_activity')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false })
            .limit(5);

        if (error) throw error;

        const activityList = document.getElementById('recentActivity');
        if (activityList) {
            activityList.innerHTML = activities.length > 0 
                ? activities.map(activity => `
                    <div class="activity-item">
                        <div class="activity-icon">${getActivityIcon(activity.type)}</div>
                        <div class="activity-details">
                            <p class="activity-text">${formatActivityText(activity)}</p>
                            <span class="activity-time">${formatTimeAgo(activity.created_at)}</span>
                        </div>
                    </div>
                `).join('')
                : '<p>No recent activity</p>';
        }
    } catch (error) {
        console.error('Error loading recent activity:', error);
    }
}

// Helper functions
function setupEventListeners() {
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('premiumUserId');
            window.location.href = 'index.html';
        });
    }

    // Responsive menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
}

function getActivityIcon(activityType) {
    const icons = {
        'login': '🔑',
        'content_view': '📚',
        'quiz_completed': '✅',
        'subscription_started': '⭐',
        'payment_success': '💳',
        'default': '🔔'
    };
    return icons[activityType] || icons['default'];
}

function formatActivityText(activity) {
    const { type, details } = activity;
    const subjectName = details?.subject_name ? `"${details.subject_name}"` : '';
    
    const messages = {
        'login': 'You logged in to your account',
        'content_view': `You viewed ${subjectName} content`,
        'quiz_completed': `You completed a quiz in ${subjectName}`,
        'subscription_started': `You started a subscription for ${subjectName}`,
        'payment_success': `Payment successful for ${subjectName} subscription`,
        'default': 'New activity recorded'
    };
    
    return messages[type] || messages['default'];
}

function formatTimeAgo(timestamp) {
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
    
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };
    
    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return interval === 1 ? `${interval} ${unit} ago` : `${interval} ${unit}s ago`;
        }
    }
    
    return 'Just now';
}

// Global functions
window.viewSubject = function(subjectId) {
    // Store subject ID in session
    sessionStorage.setItem('selectedSubjectId', subjectId);
    // Redirect to subject content page
    window.location.href = `subject.html?id=${subjectId}`;
};

window.renewSubscription = function(subscriptionId) {
    // Store subscription ID for renewal
    sessionStorage.setItem('subscriptionToRenew', subscriptionId);
    // Redirect to subscription page
    window.location.href = 'subscription.html';
};

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-error';
    errorDiv.textContent = message;
    
    const container = document.querySelector('.dashboard-container') || document.body;
    container.insertBefore(errorDiv, container.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

function initializeTooltips() {
    // Initialize any tooltips if using a library like Tippy.js
    if (typeof tippy === 'function') {
        tippy('[data-tippy-content]');
    }
}
