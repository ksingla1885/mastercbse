// Sidebar functionality module
export class Sidebar {
    constructor() {
        this.sidebar = document.querySelector('.sidebar');
        this.menuToggle = document.getElementById('menuToggle');
        this.sidebarLinks = document.querySelectorAll('.nav-link');
        this.currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
        this.isMobile = window.innerWidth < 992;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.highlightActiveLink();
        this.toggleSidebar(!this.isMobile);
    }

    setupEventListeners() {
        // Toggle sidebar on menu button click
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggleSidebar());
        }

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (this.isMobile && this.sidebar.classList.contains('open') && 
                !this.sidebar.contains(e.target) && 
                e.target !== this.menuToggle && 
                !this.menuToggle.contains(e.target)) {
                this.toggleSidebar(false);
            }
        });

        // Handle window resize
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    toggleSidebar(forceState = null) {
        const shouldOpen = forceState !== null ? forceState : !this.sidebar.classList.contains('open');
        
        if (shouldOpen) {
            this.sidebar.classList.add('open');
            document.body.classList.add('sidebar-open');
            if (this.isMobile) {
                document.body.style.overflow = 'hidden';
            }
        } else {
            this.sidebar.classList.remove('open');
            document.body.classList.remove('sidebar-open');
            document.body.style.overflow = '';
        }
    }

    handleResize() {
        const wasMobile = this.isMobile;
        this.isMobile = window.innerWidth < 992;

        if (wasMobile !== this.isMobile) {
            this.toggleSidebar(!this.isMobile);
        }
    }

    highlightActiveLink() {
        this.sidebarLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && this.currentPage.endsWith(href)) {
                link.classList.add('active');
                // Expand parent menu if it's a dropdown
                const parentMenu = link.closest('.has-submenu');
                if (parentMenu) {
                    parentMenu.classList.add('open');
                }
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Add a method to update the active link when navigating
    updateActiveLink(page) {
        this.currentPage = page;
        this.highlightActiveLink();
    }
}

// Initialize sidebar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if sidebar exists on the page
    if (document.querySelector('.sidebar')) {
        window.sidebar = new Sidebar();
    }
});
