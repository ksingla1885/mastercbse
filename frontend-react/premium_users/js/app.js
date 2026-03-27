// Main application entry point
import { NavigationHandler } from './features/navigation.jsx';
import { MenuService } from './services/menuService.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        // Initialize services
        this.menuService = new MenuService();
        this.navigation = new NavigationHandler();

        // Initialize features
        this.setupEventListeners();
        this.checkAuth();

        console.log('App initialized');
    }

    setupEventListeners() {
        // Global event listeners
        document.addEventListener('pageChanged', (e) => {
            console.log('Page changed to:', e.detail.url);
            this.updatePageTitle();
        });

        // Handle logout
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-action="logout"]')) {
                e.preventDefault();
                this.handleLogout();
            }
        });
    }

    checkAuth() {
        // In a real app, check if user is authenticated
        // For now, just check if we're on the login page
        if (window.location.pathname.endsWith('login.html')) {
            // Redirect to dashboard if already logged in
            if (localStorage.getItem('userToken')) {
                window.location.href = 'dashboard.html';
            }
            return;
        }

        // Redirect to login if not authenticated
        if (!localStorage.getItem('userToken') && !window.location.pathname.endsWith('login.html')) {
            window.location.href = 'login.html';
        }
    }

    updatePageTitle() {
        const pageTitle = document.querySelector('.page-title');
        if (pageTitle) {
            document.title = `${pageTitle.textContent} | mastercbse`;
        }
    }

    handleLogout() {
        // Clear user session
        localStorage.removeItem('userToken');
        // Redirect to login page
        window.location.href = 'login.html';
    }

    // Show notification
    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">&times;</button>
        `;

        document.body.appendChild(notification);

        // Auto remove notification
        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 300);
        }, duration);

        // Close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 300);
        });
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }
}

// Initialize the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
