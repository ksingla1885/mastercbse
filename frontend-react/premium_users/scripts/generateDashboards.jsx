const fs = require('fs');
const path = require('path');

// Dashboard template with placeholders
const dashboardTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class {{classNumber}} Dashboard - mastercbse</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="../../../css/dashboard.css">
</head>
<body>
    <div class="dashboard-container">
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="logo">
                <h2>mastercbse</h2>
                <p>Class {{classNumber}} Dashboard</p>
            </div>
            <nav class="nav-menu">
                <a href="#" class="active"><i class="fas fa-home"></i> Home</a>
                <a href="#"><i class="fas fa-book"></i> Study Material</a>
                <a href="#"><i class="fas fa-tasks"></i> Assignments</a>
                <a href="#"><i class="fas fa-chart-line"></i> Progress</a>
                <a href="#"><i class="fas fa-question-circle"></i> Doubts</a>
                <a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Logout</a>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <header class="top-bar">
                <div class="search-bar">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search...">
                </div>
                <div class="user-info">
                    <span id="userName">Loading...</span>
                    <div class="user-avatar">
                        <i class="fas fa-user-circle"></i>
                    </div>
                </div>
            </header>

            <div class="dashboard-content">
                <h1>Welcome to Class {{classNumber}} Dashboard</h1>
                <div class="welcome-banner">
                    <h2>Hello, <span id="welcomeName">Student</span>!</h2>
                    <p>Access your study materials, assignments, and track your progress.</p>
                </div>

                <!-- Class Specific Content -->
                <div class="dashboard-grid">
                    {{#if isScienceClass}}
                    <div class="card">
                        <i class="fas fa-atom"></i>
                        <h3>Physics</h3>
                        <p>Access chapter-wise study materials and practice problems</p>
                        <a href="#" class="btn">Open</a>
                    </div>
                    <div class="card">
                        <i class="fas fa-flask"></i>
                        <h3>Chemistry</h3>
                        <p>Study materials and practical experiments</p>
                        <a href="#" class="btn">Open</a>
                    </div>
                    <div class="card">
                        <i class="fas fa-dna"></i>
                        <h3>Biology</h3>
                        <p>Explore biological concepts and diagrams</p>
                        <a href="#" class="btn">Open</a>
                    </div>
                    {{/if}}
                    
                    <div class="card">
                        <i class="fas fa-calculator"></i>
                        <h3>Mathematics</h3>
                        <p>Practice problems and solutions</p>
                        <a href="#" class="btn">Open</a>
                    </div>
                    
                    {{#if isCommerceClass}}
                    <div class="card">
                        <i class="fas fa-chart-line"></i>
                        <h3>Accountancy</h3>
                        <p>Financial statements and accounting principles</p>
                        <a href="#" class="btn">Open</a>
                    </div>
                    <div class="card">
                        <i class="fas fa-money-bill-wave"></i>
                        <h3>Business Studies</h3>
                        <p>Business concepts and case studies</p>
                        <a href="#" class="btn">Open</a>
                    </div>
                    {{/if}}
                    
                    {{#if isArtsClass}}
                    <div class="card">
                        <i class="fas fa-landmark"></i>
                        <h3>History</h3>
                        <p>Historical events and timelines</p>
                        <a href="#" class="btn">Open</a>
                    </div>
                    <div class="card">
                        <i class="fas fa-globe-asia"></i>
                        <h3>Geography</h3>
                        <p>Maps and geographical concepts</p>
                        <a href="#" class="btn">Open</a>
                    </div>
                    <div class="card">
                        <i class="fas fa-balance-scale"></i>
                        <h3>Political Science</h3>
                        <p>Government and politics</p>
                        <a href="#" class="btn">Open</a>
                    </div>
                    {{/if}}
                    
                    <div class="card">
                        <i class="fas fa-language"></i>
                        <h3>English</h3>
                        <p>Literature and language skills</p>
                        <a href="#" class="btn">Open</a>
                    </div>
                    
                    <div class="card">
                        <i class="fas fa-plus-circle"></i>
                        <h3>More Subjects</h3>
                        <p>Explore additional study materials</p>
                        <a href="#" class="btn">Browse</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="module">
        import { authService } from '../../../js/services/authService.js';

        document.addEventListener('DOMContentLoaded', () => {
            const user = authService.getCurrentUser();
            
            if (!user) {
                window.location.href = '../../login.html';
                return;
            }

            // Update UI with user info
            document.getElementById('userName').textContent = user.name || user.email;
            document.getElementById('welcomeName').textContent = user.name || 'Student';

            // Logout functionality
            document.getElementById('logoutBtn').addEventListener('click', async (e) => {
                e.preventDefault();
                try {
                    await authService.logout();
                    window.location.href = '../../login.html';
                } catch (error) {
                    console.error('Logout error:', error);
                }
            });
        });
    </script>
</body>
</html>`;

// Dashboard configurations
const dashboards = [
    { classNumber: 9, isScienceClass: false },
    { classNumber: 10, isScienceClass: false },
    { 
        classNumber: 11, 
        isScienceClass: true,
        isCommerceClass: true,
        isArtsClass: true
    },
    { 
        classNumber: 12, 
        isScienceClass: true,
        isCommerceClass: true,
        isArtsClass: true
    }
];

// Function to compile template with data
function compileTemplate(template, data) {
    let result = template;
    
    // Replace simple placeholders
    for (const [key, value] of Object.entries(data)) {
        const regex = new RegExp(`{{${key}}}`, 'g');
        result = result.replace(regex, value);
    }
    
    // Handle conditional blocks
    const conditionalRegex = /\{\{#if (\w+)\}\}([\s\S]*?)\{\{\/if\}\}/g;
    result = result.replace(conditionalRegex, (match, condition, content) => {
        return data[condition] ? content : '';
    });
    
    return result;
}

// Create dashboard files
function generateDashboards() {
    const baseDir = path.join(__dirname, '..', 'dashboards');
    
    dashboards.forEach(config => {
        const className = `class${config.classNumber}`;
        const classDir = path.join(baseDir, className);
        
        // Create class directory if it doesn't exist
        if (!fs.existsSync(classDir)) {
            fs.mkdirSync(classDir, { recursive: true });
        }
        
        // Generate dashboard file
        const dashboardContent = compileTemplate(dashboardTemplate, config);
        const dashboardPath = path.join(classDir, 'dashboard.html');
        
        fs.writeFileSync(dashboardPath, dashboardContent);
        console.log(`Generated dashboard for ${className}`);
    });
    
    console.log('Dashboard generation completed!');
}

// Run the generator
generateDashboards();
