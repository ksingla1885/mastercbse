class AdminAuthService {
    async adminLogin(credentials) {
        try {
            let baseUrl = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api', '/api/auth') : (import.meta.env.MODE === 'production' ? '/api/auth' : 'http://localhost:3000/api/auth');
            if (import.meta.env.VITE_API_URL && !import.meta.env.VITE_API_URL.endsWith('/auth')) {
                baseUrl = import.meta.env.VITE_API_URL.replace(/\/$/, '') + '/auth';
            }
            const response = await fetch(`${baseUrl}/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
                credentials: 'include'
            });

            const data = await response.json();

            if (!response.ok) {
                return {
                    success: false,
                    message: data.message || 'Login failed'
                };
            }

            // Store admin user data
            localStorage.setItem('adminUser', JSON.stringify(data.user));

            return {
                success: true,
                user: data.user,
                token: data.token
            };

        } catch (error) {
            console.error('Admin login error:', error);
            return {
                success: false,
                message: 'An error occurred during login'
            };
        }
    }

    async logout() {
        try {
            let baseUrl = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api', '/api/auth') : (import.meta.env.MODE === 'production' ? '/api/auth' : 'http://localhost:3000/api/auth');
            if (import.meta.env.VITE_API_URL && !import.meta.env.VITE_API_URL.endsWith('/auth')) {
                baseUrl = import.meta.env.VITE_API_URL.replace(/\/$/, '') + '/auth';
            }
            await fetch(`${baseUrl}/admin/logout`, {
                method: 'POST',
                credentials: 'include'
            });
            // Clear local storage
            localStorage.removeItem('adminUser');
            return { success: true };
        } catch (error) {
            console.error('Admin logout error:', error);
            return { success: false, message: 'Logout failed' };
        }
    }

    getCurrentAdmin() {
        const adminUser = localStorage.getItem('adminUser');
        return adminUser ? JSON.parse(adminUser) : null;
    }

    isAuthenticated() {
        return !!this.getCurrentAdmin();
    }

    async checkAuthStatus() {
        try {
            const adminUser = this.getCurrentAdmin();
            if (!adminUser) {
                return false;
            }
            
            // For now, just check local storage without backend verification
            return adminUser.role === 'admin';
        } catch (error) {
            console.error('Auth status check error:', error);
            return false;
        }
    }
}

export const authService = new AdminAuthService();
