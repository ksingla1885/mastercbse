class AdminAuthService {
    async adminLogin(credentials) {
        try {
            const response = await fetch('http://localhost:3000/api/auth/admin/login', {
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
            await fetch('http://localhost:3000/api/auth/admin/logout', {
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
