import React, { useEffect, useState } from 'react';
import { authService } from '../../../js/services/authService';
import StreamService from '../../../js/services/streamService';
import '../../../../src/styles/PremiumDashboard.css';

const ScienceDashboard = () => {
    const [user, setUser] = useState(null);
    const [stream, setStream] = useState('pcm');
    const [subjects, setSubjects] = useState([]);

    const STREAM_SUBJECTS = {
        'pcm': [
            {
                id: 'physics',
                name: 'Physics',
                icon: 'atom',
                description: 'Master the fundamentals of matter and energy'
            },
            {
                id: 'chemistry',
                name: 'Chemistry',
                icon: 'flask',
                description: 'Explore the composition of matter and its properties'
            },
            {
                id: 'maths',
                name: 'Mathematics',
                icon: 'square-root-alt',
                description: 'Develop problem-solving and analytical skills'
            }
        ],
        'pcb': [
            {
                id: 'physics',
                name: 'Physics',
                icon: 'atom',
                description: 'Master the fundamentals of matter and energy'
            },
            {
                id: 'chemistry',
                name: 'Chemistry',
                icon: 'flask',
                description: 'Explore the composition of matter and its properties'
            },
            {
                id: 'biology',
                name: 'Biology',
                icon: 'dna',
                description: 'Study of living organisms and life processes'
            }
        ]
    };

    useEffect(() => {
        const currentUser = authService.getCurrentUser();

        if (!currentUser) {
            window.location.href = '../../../../premium_users/login.html';
            return;
        }

        setUser(currentUser);

        // Verify the user is in the correct stream
        if (currentUser.stream?.toLowerCase() !== 'science') {
            StreamService.redirectToDashboard(currentUser);
            return;
        }

        // Get user's stream preference (PCM/PCB) from URL or default to 'pcm'
        // Note: Logic adapted from original script where stream param or user stream determines sub-stream (PCM/PCB)
        // Since user.stream is 'Science', we look for specific sub-stream params or default to PCM.
        const urlParams = new URLSearchParams(window.location.search);
        const streamParam = urlParams.get('stream');
        const activeStream = streamParam ? streamParam.toLowerCase() : 'pcm';

        setStream(activeStream);
        setSubjects(STREAM_SUBJECTS[activeStream] || STREAM_SUBJECTS.pcm);

    }, []);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await authService.logout();
            window.location.href = '../../../../premium_users/login.html';
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleSubjectClick = (subjectId) => {
        // Navigate to subject page
        // window.location.href = `subject/${subjectId}.html`;
        console.log(`Navigate to ${subjectId}`);
    };

    if (!user) {
        return <div className="dashboard-container">Loading...</div>;
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <h2>mastercbse</h2>
                    <p>Class 12 Science</p>
                </div>
                <nav className="nav-menu">
                    <a href="#" className="nav-item active"><i className="fas fa-home"></i> Home</a>
                    <a href="#" className="nav-item"><i className="fas fa-book"></i> Study Material</a>
                    <a href="#" className="nav-item"><i className="fas fa-tasks"></i> Assignments</a>
                    <a href="#" className="nav-item"><i className="fas fa-chart-line"></i> Progress</a>
                    <a href="#" className="nav-item"><i className="fas fa-question-circle"></i> Doubts</a>
                    <a href="#" id="logoutBtn" className="nav-item" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i> Logout
                    </a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <header className="header top-bar">
                    <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: '#f1f5f9', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
                        <i className="fas fa-search" style={{ color: '#64748b', marginRight: '0.5rem' }}></i>
                        <input type="text" placeholder="Search..." style={{ border: 'none', background: 'transparent', outline: 'none' }} />
                    </div>
                    <div className="user-info">
                        <span id="userName">{user.name || user.email}</span>
                        <div className="user-avatar">
                            <i className="fas fa-user-circle"></i>
                        </div>
                    </div>
                </header>

                <div className="dashboard-content">
                    <div className="stream-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h1 id="streamTitle">Science Stream ({stream.toUpperCase()}) - Class 12</h1>
                        <a href="../dashboard.html" className="change-stream" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '0.9rem' }}>Change Stream</a>
                    </div>

                    {/* Stream Selection Notice */}
                    <div id="streamNotice" className="alert alert-info" style={{ marginBottom: '20px', padding: '10px', borderRadius: '4px', background: '#e6f7ff', borderLeft: '4px solid #1890ff' }}>
                        <i className="fas fa-info-circle"></i> You're viewing the <strong id="currentStream">{stream.toUpperCase()}</strong> stream dashboard
                    </div>

                    <div className="welcome-banner">
                        <h2>Welcome, <span id="welcomeName">{user.name || 'Student'}</span>!</h2>
                        <p>Access your Class 12 Science resources and prepare for board exams.</p>
                    </div>

                    {/* Board Exam Notice */}
                    <div className="board-exam-section" style={{ background: '#f0f9ff', borderLeft: '4px solid #0ea5e9', padding: '15px', borderRadius: '4px', margin: '20px 0' }}>
                        <h3><i className="fas fa-exclamation-circle"></i> Board Exam Preparation</h3>
                        <p>Access board exam resources, sample papers, and previous year questions to excel in your CBSE Class 12 Board Exams.</p>
                        <a href="#board-resources" className="btn btn-sm btn-primary" style={{ marginTop: '10px', display: 'inline-block' }}>View Resources</a>
                    </div>

                    {/* Core Subjects */}
                    <div className="section">
                        <h2>Core Subjects</h2>
                        <div id="subjectContainer" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {subjects.map(subject => (
                                <div key={subject.id} className="subject-option" onClick={() => handleSubjectClick(subject.id)}
                                    style={{ display: 'flex', alignItems: 'center', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', background: 'white' }}>
                                    <i className={`fas fa-${subject.icon}`} style={{ marginRight: '15px', fontSize: '1.5rem', color: '#2563eb' }}></i>
                                    <div className="subject-info" style={{ flex: 1 }}>
                                        <h3 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>{subject.name}</h3>
                                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>{subject.description}</p>
                                    </div>
                                    <i className="fas fa-chevron-right" style={{ color: '#cbd5e1' }}></i>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Resources */}
                    <div className="section">
                        <h2>Additional Resources</h2>
                        <div className="dashboard-grid">
                            <div className="card">
                                <i className="fas fa-book-reader"></i>
                                <h3>Sample Papers</h3>
                                <p>Latest CBSE sample papers with solutions</p>
                                <a href="#" className="btn btn-primary">View Papers</a>
                            </div>
                            <div className="card">
                                <i className="fas fa-graduation-cap"></i>
                                <h3>JEE/NEET Prep</h3>
                                <p>Engineering and Medical entrance preparation</p>
                                <a href="#" className="btn btn-primary">Start Preparing</a>
                            </div>
                            <div className="card">
                                <i className="fas fa-chalkboard-teacher"></i>
                                <h3>Doubt Solving</h3>
                                <p>Get your doubts solved by experts</p>
                                <a href="#" className="btn btn-primary">Ask Now</a>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Tests */}
                    <div className="section">
                        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', marginBottom: '15px' }}>
                            <h2>Upcoming Tests</h2>
                            <a href="#" className="view-all" style={{ color: '#2563eb', textDecoration: 'none' }}>View All</a>
                        </div>
                        <div className="upcoming-tests" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                            <div className="test-card" style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                <div className="test-subject" style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '5px' }}>Physics</div>
                                <div className="test-topic" style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px', color: '#1e293b' }}>Electrostatics</div>
                                <div className="test-date" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#64748b', fontSize: '0.9rem', marginBottom: '15px' }}>
                                    <i className="far fa-clock"></i> Tomorrow, 10:00 AM
                                </div>
                                <a href="#" className="btn btn-sm btn-outline" style={{ display: 'block', textAlign: 'center' }}>Start Test</a>
                            </div>
                            <div className="test-card" style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                <div className="test-subject" style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '5px' }}>Chemistry</div>
                                <div className="test-topic" style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px', color: '#1e293b' }}>Solutions</div>
                                <div className="test-date" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#64748b', fontSize: '0.9rem', marginBottom: '15px' }}>
                                    <i className="far fa-clock"></i> In 2 days, 11:30 AM
                                </div>
                                <a href="#" className="btn btn-sm btn-outline" style={{ display: 'block', textAlign: 'center' }}>Start Test</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScienceDashboard;
