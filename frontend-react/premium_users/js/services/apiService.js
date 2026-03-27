import { authService } from './authService.js';

class ApiService {
    constructor() {
        this.baseUrl = 'https://your-api-endpoint.com/api'; // Replace with your actual API endpoint
    }

    async request(endpoint, options = {}) {
        const token = authService.getToken();
        
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                ...options,
                headers
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || 'Something went wrong');
            }

            // For DELETE requests that might not return content
            if (response.status === 204) {
                return null;
            }

            return await response.json();
            
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    // User endpoints
    async getUserProfile(userId) {
        return this.request(`/users/${userId}`);
    }

    async updateUserProfile(userId, data) {
        return this.request(`/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    // Subjects endpoints
    async getUserSubjects(userId) {
        return this.request(`/users/${userId}/subjects`);
    }

    // Add more API methods as needed
}

// Export a singleton instance
export const apiService = new ApiService();
