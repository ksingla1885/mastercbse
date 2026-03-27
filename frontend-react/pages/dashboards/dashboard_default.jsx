<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Default Dashboard - mastercbse</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            padding: 40px;
            max-width: 700px;
            width: 100%;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
        }

        .logo {
            font-size: 48px;
            margin-bottom: 20px;
            color: #667eea;
        }

        h1 {
            color: #333;
            margin-bottom: 10px;
            font-size: 28px;
        }

        .subtitle {
            color: #999;
            font-size: 14px;
        }

        .message {
            padding: 15px 20px;
            border-radius: 8px;
            margin: 20px 0;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .message.warning {
            background: #fff3cd;
            color: #856404;
            border: 1px solid #ffeaa7;
        }

        .message.error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        .message.success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .user-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 30px;
            text-align: center;
        }

        .user-name {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .user-meta {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .meta-item {
            text-align: center;
        }

        .meta-label {
            font-size: 12px;
            opacity: 0.8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .meta-value {
            font-size: 18px;
            font-weight: 600;
            margin-top: 5px;
        }

        .subjects-section {
            margin: 30px 0;
        }

        .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #333;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .subjects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
        }

        .subject-card {
            background: #f8f9fa;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .subject-card:hover {
            border-color: #667eea;
            background: #f0f3ff;
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.1);
        }

        .subject-icon {
            font-size: 32px;
            color: #667eea;
            margin-bottom: 10px;
        }

        .subject-name {
            font-size: 14px;
            font-weight: 600;
            color: #333;
        }

        .btn-group {
            display: flex;
            gap: 10px;
            margin-top: 40px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .btn {
            padding: 12px 30px;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background: #e9ecef;
            color: #333;
            border: 1px solid #dee2e6;
        }

        .btn-secondary:hover {
            background: #dee2e6;
            transform: translateY(-2px);
        }

        .loading-spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .user-email {
            opacity: 0.9;
            font-size: 14px;
        }

        .subjects-section-hidden {
            display: none;
        }

        @media (max-width: 600px) {
            .container {
                padding: 20px;
            }

            .user-meta {
                grid-template-columns: 1fr;
            }

            .btn-group {
                flex-direction: column;
            }

            .btn {
                width: 100%;
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <h1>Welcome to Your Dashboard</h1>
            <p class="subtitle">mastercbse - Educational Excellence</p>
        </div>

        <div id="messageContainer"></div>

        <div class="user-card">
            <div class="user-name" id="userName">Student</div>
            <div id="userEmail" class="user-email">user@example.com</div>
            <div class="user-meta">
                <div class="meta-item">
                    <div class="meta-label">Class</div>
                    <div class="meta-value" id="userClass">-</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Stream</div>
                    <div class="meta-value" id="userStream">-</div>
                </div>
            </div>
        </div>

        <div class="subjects-section subjects-section-hidden" id="subjectsSection">
            <h2 class="section-title">
                <i class="fas fa-book"></i>
                Your Subjects
            </h2>
            <div class="subjects-grid" id="subjectsGrid"></div>
        </div>

        <div class="btn-group">
            <a href="/" class="btn btn-primary">
                <i class="fas fa-home"></i> Go to Home
            </a>
            <button onclick="logout()" class="btn btn-secondary">
                <i class="fas fa-sign-out-alt"></i> Logout
            </button>
        </div>
    </div>

    <script>
        // Load user data from localStorage
        function loadUserData() {
            const userDataStr = localStorage.getItem('sb-user-data');
            if (!userDataStr) {
                window.location.href = '/premium_users/login.html?message=Please log in first&type=warning';
                return null;
            }

            try {
                const userData = JSON.parse(userDataStr);
                return userData;
            } catch (error) {
                console.error('Error parsing user data:', error);
                window.location.href = '/premium_users/login.html?message=Invalid session&type=error';
                return null;
            }
        }

        // Display user information
        function displayUserInfo(userData) {
            document.getElementById('userName').textContent = userData.name || 'Student';
            document.getElementById('userEmail').textContent = userData.email || 'user@example.com';
            document.getElementById('userClass').textContent = userData.class || 'N/A';
            document.getElementById('userStream').textContent = userData.stream || 'N/A';
        }

        // Display subjects
        function displaySubjects(subjects) {
            if (!subjects || subjects.length === 0) return;

            const subjectsSection = document.getElementById('subjectsSection');
            const subjectsGrid = document.getElementById('subjectsGrid');
            
            subjectsGrid.innerHTML = '';
            
            const subjectIcons = {
                'Physics': 'fa-flask',
                'Chemistry': 'fa-atom',
                'Mathematics': 'fa-calculator',
                'Biology': 'fa-dna',
                'Accounts': 'fa-calculator',
                'Business Studies': 'fa-briefcase',
                'Economics': 'fa-chart-line',
                'English': 'fa-book',
                'History': 'fa-clock',
                'Geography': 'fa-globe',
                'Political Science': 'fa-landmark'
            };

            subjects.forEach(subject => {
                const icon = subjectIcons[subject] || 'fa-book';
                const card = document.createElement('div');
                card.className = 'subject-card';
                card.innerHTML = `
                    <div class="subject-icon">
                        <i class="fas ${icon}"></i>
                    </div>
                    <div class="subject-name">${subject}</div>
                `;
                subjectsGrid.appendChild(card);
            });

            subjectsSection.classList.remove('subjects-section-hidden');
        }

        // Logout function
        function logout() {
            fetch('/api/auth/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }).then(() => {
                localStorage.removeItem('sb-access-token');
                localStorage.removeItem('sb-user-data');
                window.location.href = '/premium_users/login.html';
            });
        }

        // Initialize dashboard
        function initDashboard() {
            const userData = loadUserData();
            if (!userData) return;

            displayUserInfo(userData);

            // Fetch dashboard data from server
            fetch('/api/dashboard/data')
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        displaySubjects(data.dashboard.subjects);
                    }
                })
                .catch(err => {
                    console.error('Error fetching dashboard data:', err);
                    // Still display basic info even if dashboard data fails
                    // Get subjects from localStorage fallback
                    const subjectMap = {
                        'pcm': ['Physics', 'Chemistry', 'Mathematics'],
                        'pcb': ['Physics', 'Chemistry', 'Biology'],
                        'commerce': ['Accounts', 'Business Studies', 'Economics'],
                        'humanities': ['English', 'History', 'Geography', 'Political Science']
                    };
                    const stream = (userData.stream || '').toLowerCase();
                    const subjects = subjectMap[stream] || [];
                    displaySubjects(subjects);
                });
        }

        // Initialize when DOM is ready
        document.addEventListener('DOMContentLoaded', initDashboard);
    </script>
</body>
</html>
