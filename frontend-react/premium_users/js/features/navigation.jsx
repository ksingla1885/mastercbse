// Navigation handler for SPA-like experience
export class NavigationHandler {
    constructor() {
        this.contentContainer = document.querySelector('.page-content');
        this.loadingIndicator = this.createLoadingIndicator();
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupPopstate();
    }

    createLoadingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'loading-indicator';
        indicator.innerHTML = `
            <div class="spinner">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `;
        document.body.appendChild(indicator);
        return indicator;
    }

    showLoading() {
        this.loadingIndicator.style.display = 'flex';
    }

    hideLoading() {
        this.loadingIndicator.style.display = 'none';
    }

    async loadPage(url) {
        // Don't try to load login page if already authenticated
        if (url.includes('login.html') && localStorage.getItem('userToken')) {
            url = 'dashboard.html';
        }
        
        try {
            this.showLoading();
            
            // Handle root path for courses
            if (url.endsWith('courses/')) {
                url = 'pages/courses/index.html';
            }
            
            const response = await fetch(url);
            if (!response.ok) throw new Error('Page not found');
            
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Update the content
            const newContent = doc.querySelector('.page-content');
            if (newContent) {
                this.contentContainer.innerHTML = newContent.innerHTML;
                this.updatePageTitle(doc);
                
                // Update active state in navigation
                this.updateActiveLink(url);
                this.setupNavigation(); // Re-bind event listeners
                
                // Update URL without reloading the page
                window.history.pushState({}, '', url);
                
                // Update active link in sidebar
                if (window.sidebar) {
                    window.sidebar.updateActiveLink(url.split('/').pop());
                }
                
                // Dispatch custom event for page change
                document.dispatchEvent(new CustomEvent('pageChanged', { detail: { url } }));
            }
        } catch (error) {
            console.error('Error loading page:', error);
            // Redirect to 404 or show error message
            window.location.href = '/404.html';
        } finally {
            this.hideLoading();
        }
    }

    updatePageTitle(doc) {
        const newTitle = doc.querySelector('title')?.textContent || document.title;
        document.title = newTitle;
    }

    setupNavigation() {
        // Handle internal navigation links
        document.querySelectorAll('a[href^="/"], a[href^="./"]').forEach(link => {
            // Skip if it's a hash link or has a special class
            if (link.hash || link.classList.contains('no-ajax')) return;
            
            link.addEventListener('click', async (e) => {
                const href = link.getAttribute('href');
                
                // Handle external links
                if (href.startsWith('http') || href.startsWith('//')) {
                    return; // Let the browser handle it normally
                }
                
                // Handle mailto and tel links
                if (href.startsWith('mailto:') || href.startsWith('tel:')) {
                    return; // Let the browser handle it normally
                }
                
                // Handle download links
                if (link.hasAttribute('download')) {
                    return; // Let the browser handle it normally
                }
                
                // Handle target="_blank"
                if (link.target === '_blank') {
                    return; // Let the browser handle it normally
                }
                
                e.preventDefault();
                await this.loadPage(href);
                
                // Scroll to top after navigation
                window.scrollTo(0, 0);
            });
        });
    }

    setupPopstate() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', async () => {
            await this.loadPage(window.location.pathname);
        });
    }
}

// Initialize navigation handler when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.page-content')) {
        window.navigationHandler = new NavigationHandler();
    }
});
