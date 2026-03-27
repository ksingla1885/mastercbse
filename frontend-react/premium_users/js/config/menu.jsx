// Menu configuration
export const menuItems = [
    // Main Section
    {
        id: 'dashboard',
        title: 'Dashboard',
        icon: 'home',
        path: 'dashboard.html',
        type: 'main',
        badge: null
    },
    {
        id: 'courses',
        title: 'My Courses',
        icon: 'book',
        path: 'pages/courses/index.html',
        type: 'main',
        badge: null
    },
    {
        id: 'assignments',
        title: 'Assignments',
        icon: 'tasks',
        path: 'pages/assignments/index.html',
        type: 'main',
        badge: { count: 3, type: 'danger' }
    },
    {
        id: 'performance',
        title: 'Performance',
        icon: 'chart-line',
        path: 'pages/performance/index.html',
        type: 'main',
        badge: null
    },
    
    // Resources Section
    {
        id: 'materials',
        title: 'Study Materials',
        icon: 'book-open',
        path: 'pages/materials/index.html',
        type: 'resources',
        badge: null
    },
    {
        id: 'tests',
        title: 'Practice Tests',
        icon: 'question-circle',
        path: 'pages/tests/index.html',
        type: 'resources',
        badge: { count: 5, type: 'success' }
    },
    {
        id: 'lectures',
        title: 'Video Lectures',
        icon: 'video',
        path: 'pages/lectures/index.html',
        type: 'resources',
        badge: null
    },
    
    // Account Section
    {
        id: 'profile',
        title: 'Profile',
        icon: 'user',
        path: 'pages/profile/index.html',
        type: 'account',
        badge: null
    },
    {
        id: 'subscription',
        title: 'Subscription',
        icon: 'credit-card',
        path: 'pages/subscription/index.html',
        type: 'account',
        badge: { text: 'Active', type: 'success' }
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: 'cog',
        path: 'pages/settings/index.html',
        type: 'account',
        badge: null
    },
    {
        id: 'logout',
        title: 'Logout',
        icon: 'sign-out-alt',
        path: 'logout.html',
        type: 'account',
        badge: null,
        isLogout: true
    }
];

// Menu sections
export const menuSections = [
    { id: 'main', title: 'Main' },
    { id: 'resources', title: 'Resources' },
    { id: 'account', title: 'Account' }
];

// Get menu items by type
export function getMenuItemsByType(type) {
    return menuItems.filter(item => item.type === type);
}

// Find menu item by ID
export function getMenuItemById(id) {
    return menuItems.find(item => item.id === id);
}
