<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Courses - mastercbse</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../css/dashboard.css">
    <link rel="stylesheet" href="courses.css">
</head>
<body class="sidebar-open courses-page">
    <!-- Mobile Menu Toggle -->
    <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
        <i class="fas fa-bars"></i>
    </button>

    <!-- Sidebar Overlay -->
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
        <!-- Will be populated by JavaScript -->
    </aside>

    <main class="main-content">
        <!-- Top Navigation -->
        <header class="top-nav">
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search courses...">
            </div>
            
            <div class="user-menu">
                <div class="notification-icon">
                    <i class="far fa-bell"></i>
                    <span class="notification-badge">3</span>
                </div>
                
                <div class="user-avatar">
                    <img src="https://ui-avatars.com/api/?name=John+Doe&background=4a6cf7&color=fff" alt="User">
                </div>
            </div>
        </header>

        <div class="page-content">
            <div class="page-header">
                <h1 class="page-title">My Courses</h1>
                <div class="page-actions">
                    <button class="btn btn-outline">
                        <i class="fas fa-download"></i> Export
                    </button>
                    <button class="btn btn-primary">
                        <i class="fas fa-plus"></i> New Course
                    </button>
                </div>
            </div>
            
            <div class="page-body">
                <div class="courses-grid">
                    <!-- Course Card 1 -->
                    <div class="course-card">
                        <div class="course-image" style="background-image: url('https://source.unsplash.com/random/600x400/?mathematics')">
                            <span class="course-badge">In Progress</span>
                        </div>
                        <div class="course-content">
                            <h3 class="course-title">Mathematics for Class 10</h3>
                            <p class="course-instructor">By Prof. Rajesh Kumar</p>
                            
                            <div class="progress-container">
                                <div class="progress-label">
                                    <span>Course Progress</span>
                                    <span>65%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 65%"></div>
                                </div>
                            </div>
                            
                            <div class="course-meta">
                                <span><i class="far fa-bookmark"></i> 12 Modules</span>
                                <span><i class="far fa-clock"></i> 24 Hours</span>
                            </div>
                            
                            <div class="course-actions">
                                <button class="btn btn-primary" style="flex: 1;">
                                    <i class="fas fa-play"></i> Continue
                                </button>
                                <button class="btn btn-outline">
                                    <i class="far fa-bookmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Course Card 2 -->
                    <div class="course-card">
                        <div class="course-image" style="background-image: url('https://source.unsplash.com/random/600x400/?science')">
                            <span class="course-badge">New</span>
                        </div>
                        <div class="course-content">
                            <h3 class="course-title">Science for Class 10</h3>
                            <p class="course-instructor">By Dr. Priya Sharma</p>
                            
                            <div class="progress-container">
                                <div class="progress-label">
                                    <span>Course Progress</span>
                                    <span>15%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 15%"></div>
                                </div>
                            </div>
                            
                            <div class="course-meta">
                                <span><i class="far fa-bookmark"></i> 15 Modules</span>
                                <span><i class="far fa-clock"></i> 30 Hours</span>
                            </div>
                            
                            <div class="course-actions">
                                <button class="btn btn-primary" style="flex: 1;">
                                    <i class="fas fa-play"></i> Start Learning
                                </button>
                                <button class="btn btn-outline">
                                    <i class="far fa-bookmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Course Card 3 -->
                    <div class="course-card">
                        <div class="course-image" style="background-image: url('https://source.unsplash.com/random/600x400/?computer')">
                            <span class="course-badge">Completed</span>
                        </div>
                        <div class="course-content">
                            <h3 class="course-title">Computer Science Basics</h3>
                            <p class="course-instructor">By Sanjay Verma</p>
                            
                            <div class="progress-container">
                                <div class="progress-label">
                                    <span>Course Progress</span>
                                    <span>100%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 100%; background-color: #10b981;"></div>
                                </div>
                            </div>
                            
                            <div class="course-meta">
                                <span><i class="far fa-bookmark"></i> 10 Modules</span>
                                <span><i class="far fa-clock"></i> 20 Hours</span>
                            </div>
                            
                            <div class="course-actions">
                                <button class="btn btn-outline" style="flex: 1;">
                                    <i class="fas fa-redo"></i> Retake Course
                                </button>
                                <button class="btn btn-outline">
                                    <i class="fas fa-certificate"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Include app.js -->
    <script type="module" src="../../js/app.js"></script>
    
    <script>
        // Initialize any page-specific JavaScript here
        document.addEventListener('DOMContentLoaded', () => {
            // Add any course page specific initialization here
        });
    </script>
</body>
</html>
