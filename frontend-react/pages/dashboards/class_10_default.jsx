<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class 10 Dashboard - mastercbse</title>
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
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .header {
            background: white;
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-left h1 {
            color: #333;
            margin-bottom: 10px;
        }

        .header-left p {
            color: #999;
            font-size: 14px;
        }

        .user-info {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            text-align: right;
        }

        .user-info div {
            margin: 5px 0;
        }

        .user-name {
            font-size: 16px;
            font-weight: 600;
        }

        .user-class {
            font-size: 12px;
            opacity: 0.9;
        }

        .subjects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .subject-card {
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .subject-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .subject-icon {
            font-size: 48px;
            margin-bottom: 15px;
            color: #667eea;
        }

        .subject-name {
            font-size: 20px;
            font-weight: 600;
            color: #333;
            margin-bottom: 10px;
        }

        .subject-chapters {
            color: #999;
            font-size: 12px;
        }

        .subjects-title {
            color: white;
            font-size: 24px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .btn-group {
            display: flex;
            gap: 10px;
            margin-top: 40px;
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
            background: white;
            color: #667eea;
        }

        .btn-primary:hover {
            background: #f8f9fa;
            transform: translateY(-2px);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid white;
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }

        @media (max-width: 768px) {
            .header {
                flex-direction: column;
                text-align: center;
                gap: 20px;
            }

            .user-info {
                text-align: center;
            }

            .subjects-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-left">
                <h1>Class 10 Dashboard</h1>
                <p id="welcomeMsg">Welcome to your learning center</p>
            </div>
            <div class="user-info">
                <div class="user-name" id="userName">Student</div>
                <div class="user-class" id="userEmail">Email</div>
            </div>
        </div>

        <div class="subjects-title">
            <i class="fas fa-books"></i>
            Core Subjects
        </div>

        <div class="subjects-grid" id="subjectsContainer"></div>

        <div class="btn-group">
            <a href="/" class="btn btn-primary">
                <i class="fas fa-home"></i> Home
            </a>
            <button onclick="logout()" class="btn btn-secondary">
                <i class="fas fa-sign-out-alt"></i> Logout
            </button>
        </div>
    </div>

    <script>
        const SUBJECTS = [
            { name: 'Mathematics', icon: 'fa-calculator', chapters: '16 Chapters' },
            { name: 'English', icon: 'fa-book', chapters: '14 Chapters' },
            { name: 'Science', icon: 'fa-flask', chapters: '20 Chapters' },
            { name: 'Social Science', icon: 'fa-globe', chapters: '16 Chapters' },
            { name: 'Hindi', icon: 'fa-language', chapters: '12 Chapters' },
            { name: 'Computer Applications', icon: 'fa-laptop', chapters: '10 Chapters' }
        ];

        function loadUserData() {
            const userDataStr = localStorage.getItem('sb-user-data');
            if (!userDataStr) {
                window.location.href = '/premium_users/login.html?message=Please log in first&type=warning';
                return null;
            }

            try {
                return JSON.parse(userDataStr);
            } catch (error) {
                console.error('Error parsing user data:', error);
                window.location.href = '/premium_users/login.html?message=Invalid session&type=error';
                return null;
            }
        }

        function displayUserInfo(userData) {
            document.getElementById('userName').textContent = userData.name || 'Student';
            document.getElementById('userEmail').textContent = userData.email || 'user@example.com';
            document.getElementById('welcomeMsg').textContent = `Welcome, ${userData.name || 'Student'}!`;
        }

        function displaySubjects() {
            const container = document.getElementById('subjectsContainer');
            container.innerHTML = '';

            SUBJECTS.forEach(subject => {
                const card = document.createElement('div');
                card.className = 'subject-card';
                card.innerHTML = `
                    <div class="subject-icon">
                        <i class="fas ${subject.icon}"></i>
                    </div>
                    <div class="subject-name">${subject.name}</div>
                    <div class="subject-chapters">${subject.chapters}</div>
                `;
                container.appendChild(card);
            });
        }

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

        document.addEventListener('DOMContentLoaded', () => {
            const userData = loadUserData();
            if (userData) {
                displayUserInfo(userData);
                displaySubjects();
            }
        });
    </script>
</body>
</html>
