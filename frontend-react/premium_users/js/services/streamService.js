class StreamService {
    static getDashboardPath(user) {
        if (!user || !user.class) {
            return '/premium/login';
        }

        const classNum = parseInt(user.class);
        const stream = (user.stream || '').toLowerCase();

        // For classes 11 and 12, include stream in the path
        if (classNum >= 11 && stream) {
            return `/premium/dashboard/${classNum}_${stream}`;
        }

        // For classes 9 and 10, use a default route or specific if implemented
        if (classNum === 9 || classNum === 10) {
            return `/premium/dashboard/${classNum}_default`;
        }

        return '/premium/dashboard';
    }

    static redirectToDashboard(user) {
        const dashboardPath = this.getDashboardPath(user);
        window.location.href = dashboardPath;
    }

    static saveStreamPreference(stream) {
        const user = JSON.parse(localStorage.getItem('sb-user-data') || '{}');
        if (user) {
            user.stream = stream;
            localStorage.setItem('sb-user-data', JSON.stringify(user));

            // Here you would typically update the user's stream in your backend
            // Example:
            // await apiService.updateUser(user.id, { stream });
        }
        return user;
    }
}

export default StreamService;
