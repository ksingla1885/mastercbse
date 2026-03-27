// Dashboard data - Fetch from API
let dashboardData = {
    stats: {
        totalStudents: 0,
        activeCourses: 0,
        completionRate: 0,
        pendingActions: 0
    },
    recentActivity: []
};

// DOM Elements
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.getElementById('menuToggle');
const sidebarOverlay = document.createElement('div');
sidebarOverlay.className = 'sidebar-overlay';
document.body.appendChild(sidebarOverlay);

// Toggle sidebar on mobile
function toggleSidebar() {
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

// Close sidebar when clicking outside on mobile
function handleOutsideClick(event) {
    if (window.innerWidth <= 1024 && 
        !sidebar.contains(event.target) && 
        event.target !== menuToggle && 
        !menuToggle.contains(event.target)) {
        closeSidebar();
    }
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Load dashboard data from API
async function loadDashboardData() {
    try {
        const response = await fetch('/api/admin/dashboard/stats', {
            credentials: 'include'
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                dashboardData.stats = {
                    totalStudents: data.stats.totalUsers || 0,
                    activeCourses: data.stats.totalContent || 0,
                    completionRate: 0, // Calculate based on actual data if needed
                    pendingActions: 0 // Calculate based on actual data if needed
                };
            }
        }
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }

    // Update stats
    const statElements = {
        'primary': dashboardData.stats.totalStudents,
        'success': dashboardData.stats.activeCourses,
        'warning': dashboardData.stats.completionRate,
        'danger': dashboardData.stats.pendingActions
    };

    Object.entries(statElements).forEach(([key, value]) => {
        const element = document.querySelector(`.stat-card.${key} .stat-value`);
        if (element) {
            element.textContent = key === 'warning' ? `${value}%` : value.toLocaleString();
        }
    });

    // Update recent activity
    const activityList = document.querySelector('.activity-list');
    if (activityList) {
        if (dashboardData.recentActivity.length === 0) {
            activityList.innerHTML = '<div class="activity-item"><div class="activity-details"><div class="activity-text">No recent activity</div></div></div>';
        } else {
            activityList.innerHTML = dashboardData.recentActivity
                .map(activity => `
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="activity-details">
                            <div class="activity-text">
                                <strong>${activity.user}</strong> ${activity.action} 
                                ${activity.course ? `<strong>${activity.course}</strong>` : ''}
                                ${activity.item ? `<strong>${activity.item}</strong>` : ''}
                                ${activity.on ? `on <strong>${activity.on}</strong>` : ''}
                            </div>
                            <div class="activity-time">${activity.time}</div>
                        </div>
                    </div>
                `)
                .join('');
        }
    }
}

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Set up menu toggle
    const menuToggleBtn = document.getElementById('menuToggle');
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', toggleSidebar);
    }
    
    // Close sidebar when clicking on overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', handleOutsideClick);

    // Set active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('/').pop();
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Load dashboard data
    loadDashboardData();

    // Set up event listeners
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleSidebar();
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', handleOutsideClick);

    // Close sidebar when clicking on overlay
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Close sidebar when clicking on a nav link (for mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                closeSidebar();
            }
        });
    });

    // Responsive adjustments
    function handleResize() {
        if (window.innerWidth <= 1024) {
            if (menuToggle) menuToggle.style.display = 'block';
        } else {
            if (menuToggle) menuToggle.style.display = 'none';
            closeSidebar();
        }
    }

    // Initial check
    handleResize();

    // Add resize listener with debounce
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 250);
    });
});

// Remove dummy data function
async function removeDummyData() {
    if (!confirm('Are you sure you want to remove all dummy data? This action cannot be undone.')) {
        return;
    }

    try {
        const response = await fetch('/api/admin/dummy-data', {
            method: 'DELETE',
            credentials: 'include'
        });

        const data = await response.json();

        if (data.success) {
            alert(data.message);
            // Reload dashboard data to reflect changes
            loadDashboardData();
        } else {
            alert('Failed to remove dummy data: ' + data.message);
        }
    } catch (error) {
        console.error('Error removing dummy data:', error);
        alert('An error occurred while removing dummy data');
    }
}

// Logout function
function logout() {
    // Clear admin session
    fetch('/api/auth/admin/logout', {
        method: 'POST',
        credentials: 'include'
    }).then(() => {
        // Clear local auth and redirect to login
        localStorage.clear();
        window.location.href = 'login.html';
    }).catch(error => {
        console.error('Logout error:', error);
        localStorage.clear();
        window.location.href = 'login.html';
    });
}

// Make functions available globally
window.logout = logout;
window.removeDummyData = removeDummyData;
