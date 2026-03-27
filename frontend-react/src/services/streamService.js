class StreamService {
    static getDashboardPath(user) {
        if (!user || !user.class) {
            return '/premium/login';
        }

        const classNum = parseInt(user.class);
        const stream = (user.stream || '').toLowerCase();

        // For classes 11 and 12, include stream in the path
        if (classNum >= 11 && stream) {
            // Map streams to standardize if necessary
            const streamMap = {
                'pcm': 'science',
                'pcb': 'science',
                'science': 'science',
                'commerce': 'commerce',
                'arts': 'arts',
                'humanities': 'arts'
            };
            const mappedStream = streamMap[stream] || stream;
            return `/premium/dashboard/${classNum}_${mappedStream}`;
        }

        // For classes 9 and 10
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
        }
        return user;
    }
}

export default StreamService;
