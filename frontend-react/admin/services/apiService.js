class AdminApiService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/admin';
    }

    async request(endpoint, options = {}) {
        try {
            const headers = { ...options.headers };
            
            // Don't set Content-Type header if body is FormData (let browser set it with boundary)
            if (options.body && !(options.body instanceof FormData)) {
                headers['Content-Type'] = 'application/json';
            }

            const method = options.method || 'GET';
            const url = `${this.baseUrl}${endpoint}`;

            const response = await fetch(url, {
                headers,
                credentials: 'include',
                ...options
            });

            const result = await response.json();
            
            if (!response.ok) {
                let errorMessage = result.message || `Failed to ${method} ${endpoint}`;
                if (result.error) errorMessage += `: ${result.error}`;
                if (result.details) errorMessage += ` (${result.details})`;
                throw new Error(errorMessage);
            }

            return result;
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }

    // ============================================
    // USER MANAGEMENT
    // ============================================

    async getUsers(params = {}) {
        const queryString = new URLSearchParams(params).toString();
        return this.request(`/users?${queryString}`);
    }

    async getUserById(id) {
        return this.request(`/users/${id}`);
    }

    async updateUser(id, userData) {
        return this.request(`/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(userData)
        });
    }

    async deleteUser(id) {
        return this.request(`/users/${id}`, {
            method: 'DELETE'
        });
    }

    // ============================================
    // CONTENT MANAGEMENT
    // ============================================

    async getContent(params = {}) {
        const queryString = new URLSearchParams(params).toString();
        return this.request(`/content?${queryString}`);
    }

    async createContent(contentData) {
        return this.request('/content', {
            method: 'POST',
            body: contentData instanceof FormData ? contentData : JSON.stringify(contentData)
        });
    }

    async updateContent(id, contentData) {
        return this.request(`/content/${id}`, {
            method: 'PUT',
            body: contentData instanceof FormData ? contentData : JSON.stringify(contentData)
        });
    }

    async deleteContent(id) {
        return this.request(`/content/${id}`, {
            method: 'DELETE'
        });
    }

    // ============================================
    // SUBSCRIPTION MANAGEMENT
    // ============================================

    async getSubscriptions(params = {}) {
        const queryString = new URLSearchParams(params).toString();
        return this.request(`/subscriptions?${queryString}`);
    }

    async updateSubscription(id, subscriptionData) {
        return this.request(`/subscriptions/${id}`, {
            method: 'PUT',
            body: JSON.stringify(subscriptionData)
        });
    }

    // ============================================
    // ANALYTICS
    // ============================================

    async getAnalytics(params = {}) {
        const queryString = new URLSearchParams(params).toString();
        return this.request(`/analytics?${queryString}`);
    }

    async getDashboardStats() {
        return this.request('/dashboard/stats');
    }

    // ============================================
    // SETTINGS
    // ============================================

    async getSettings() {
        return this.request('/settings');
    }

    async updateSettings(settingsData) {
        return this.request('/settings', {
            method: 'PUT',
            body: JSON.stringify(settingsData)
        });
    }

    // ============================================
    // SYSTEM MAINTENANCE
    // ============================================

    async createBackup() {
        return this.request('/backup', {
            method: 'POST'
        });
    }

    async clearCache() {
        return this.request('/cache/clear', {
            method: 'POST'
        });
    }

    // ============================================
    // SETTINGS MANAGEMENT
    // ============================================

    async getSettings() {
        return this.request('/settings');
    }

    async updateSettings(settingsData) {
        return this.request('/settings', {
            method: 'PUT',
            body: JSON.stringify(settingsData)
        });
    }

    async createBackup() {
        return this.request('/backup', {
            method: 'POST'
        });
    }

    async clearCache() {
        return this.request('/cache/clear', {
            method: 'POST'
        });
    }

    // ============================================
    // ANALYTICS MANAGEMENT
    // ============================================

    async getAnalytics(params = {}) {
        const queryString = new URLSearchParams(params).toString();
        return this.request(`/analytics${queryString ? '?' + queryString : ''}`);
    }
}

export const apiService = new AdminApiService();
