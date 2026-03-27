import { menuItems, menuSections, getMenuItemsByType } from '../config/menu.js';

export class MenuService {
    constructor() {
        this.sidebar = document.querySelector('.sidebar .nav-menu');
        this.init();
    }

    init() {
        if (this.sidebar) {
            this.renderMenu();
            this.setupEventListeners();
        }
    }

    renderMenu() {
        if (!this.sidebar) return;

        // Clear existing menu
        this.sidebar.innerHTML = '';

        // Add menu sections and items
        menuSections.forEach(section => {
            const sectionItems = getMenuItemsByType(section.id);
            
            // Only add section if it has items
            if (sectionItems.length > 0) {
                // Add section title
                const titleElement = document.createElement('div');
                titleElement.className = 'menu-title';
                titleElement.textContent = section.title;
                this.sidebar.appendChild(titleElement);

                // Add menu items
                sectionItems.forEach(item => {
                    this.sidebar.appendChild(this.createMenuItemElement(item));
                });
            }
        });
    }

    createMenuItemElement(item) {
        const link = document.createElement('a');
        link.href = item.path;
        link.className = `nav-link ${this.isActive(item) ? 'active' : ''}`;
        link.dataset.menuId = item.id;
        link.innerHTML = `
            <i class="fas fa-${item.icon}"></i>
            <span>${item.title}</span>
            ${this.createBadgeElement(item.badge)}
        `;
        return link;
    }

    createBadgeElement(badge) {
        if (!badge) return '';
        
        const count = badge.count !== undefined ? badge.count : badge.text || '';
        return `<span class="badge badge-${badge.type}">${count}</span>`;
    }

    isActive(item) {
        const currentPath = window.location.pathname.split('/').pop() || 'dashboard.html';
        return currentPath === item.path.split('/').pop();
    }

    setupEventListeners() {
        // Handle menu item clicks
        this.sidebar.addEventListener('click', (e) => {
            const menuLink = e.target.closest('.nav-link');
            if (!menuLink) return;

            const menuId = menuLink.dataset.menuId;
            const menuItem = menuItems.find(item => item.id === menuId);
            
            if (menuItem && menuItem.isLogout) {
                e.preventDefault();
                this.handleLogout();
            }
            
            // Update active state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            menuLink.classList.add('active');
        });
    }

    handleLogout() {
        // Add your logout logic here
        console.log('Logging out...');
        // Example: Clear user session and redirect to login
        localStorage.removeItem('userToken');
        window.location.href = 'login.html';
    }

    // Update badge count for a menu item
    updateBadge(menuId, count) {
        const menuItem = menuItems.find(item => item.id === menuId);
        if (menuItem) {
            if (!menuItem.badge) menuItem.badge = { type: 'primary' };
            menuItem.badge.count = count;
            this.renderMenu();
        }
    }

    // Update badge text for a menu item
    updateBadgeText(menuId, text, type = 'primary') {
        const menuItem = menuItems.find(item => item.id === menuId);
        if (menuItem) {
            menuItem.badge = { text, type };
            this.renderMenu();
        }
    }
}

// Initialize menu service when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.menuService = new MenuService();
});
