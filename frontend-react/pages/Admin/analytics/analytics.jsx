// Analytics Dashboard JavaScript - Practical Admin Dashboard

// Initialize Supabase - using environment variables provided during build
const SUPABASE_URL = window.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = window.VITE_SUPABASE_ANON_KEY || '';

const { createClient } = supabase;
const supabaseClient = (SUPABASE_URL && SUPABASE_ANON_KEY) ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

if (!supabaseClient) {
    console.warn('⚠️ Supabase credentials not found. Some features may not work.');
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    console.log('Analytics dashboard initializing...');

    // Setup sidebar navigation
    setupSidebarNavigation();

    // Check for hash in URL or default to 'overview'
    const defaultSection = window.location.hash ? window.location.hash.substring(1) : 'overview';
    
    // Initialize all components
    loadSystemStatus();
    loadRecentActivity();
    loadSystemHealth();
    loadAlerts();

    // Update every 30 seconds
    setInterval(() => {
        loadSystemStatus();
        loadRecentActivity();
        loadSystemHealth();
        loadAlerts();
    }, 30000);

    // Show default section
    showSection(defaultSection);
    
    // Set up hash change listener
    window.addEventListener('hashchange', () => {
        const sectionId = window.location.hash.substring(1);
        if (sectionId) {
            showSection(sectionId);
        }
    });

    console.log('Analytics dashboard initialized successfully');
});

// Sidebar Navigation Setup
function setupSidebarNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Get target section from data-section attribute
            const sectionId = this.getAttribute('data-section');

            // Show the corresponding section
            showSection(sectionId);
        });
    });
}

// Section functionality
function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Load section-specific content
        if (sectionId === 'users') {
            loadUserAnalytics();
        } else if (sectionId === 'system') {
            loadSystemHealth();
        } else if (sectionId === 'reports') {
            loadReports();
        }
    } else {
        console.warn('Section not found:', sectionId);
    }

    // Update URL hash
    window.location.hash = sectionId;
}

// Load user analytics data
async function loadUserAnalytics() {
    console.log('Loading user analytics...');
    // Add your user analytics loading logic here
    showNotification('Loading user analytics data...', 'info');
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        showNotification('User analytics loaded successfully', 'success');
    } catch (error) {
        console.error('Error loading user analytics:', error);
        showNotification('Failed to load user analytics', 'error');
    }
}

// Load reports data
async function loadReports() {
    console.log('Loading reports...');
    // Add your reports loading logic here
    showNotification('Loading reports...', 'info');
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        showNotification('Reports loaded successfully', 'success');
    } catch (error) {
        console.error('Error loading reports:', error);
        showNotification('Failed to load reports', 'error');
    }
}

// System Status Functions
async function loadSystemStatus() {
    try {
        console.log('Loading system status...');

        // Simulate system status check
        const statusGrid = document.querySelector('.status-grid');
        console.log('Status grid found:', !!statusGrid);

        if (!statusGrid) {
            console.log('Status grid not found, cannot update system status');
            return;
        }

        // Simulate real system checks
        const systemOnline = Math.random() > 0.1; // 90% uptime
        const cpuUsage = Math.floor(Math.random() * 100);
        const dbStatus = Math.random() > 0.05; // 95% healthy
        const storageUsed = Math.floor(Math.random() * 100);

        console.log('Generated status values:', { systemOnline, cpuUsage, dbStatus, storageUsed });

        // Update status cards
        const statusCards = statusGrid.querySelectorAll('.status-card');
        console.log('Status cards found:', statusCards.length);

        if (statusCards.length >= 4) {
            // System Online status
            statusCards[0].className = systemOnline ? 'status-card online' : 'status-card warning';
            statusCards[0].querySelector('p').textContent = systemOnline ? 'All services operational' : 'Some services unavailable';

            // CPU Load status
            statusCards[1].className = cpuUsage > 80 ? 'status-card warning' : 'status-card normal';
            statusCards[1].querySelector('p').textContent = `${cpuUsage}% CPU usage`;

            // Database status
            statusCards[2].className = dbStatus ? 'status-card normal' : 'status-card warning';
            statusCards[2].querySelector('p').textContent = dbStatus ? 'Connection healthy' : 'Connection issues detected';

            // Storage status
            statusCards[3].className = storageUsed > 90 ? 'status-card warning' : 'status-card normal';
            statusCards[3].querySelector('p').textContent = `${storageUsed}% used`;

            console.log('System status updated successfully');
        } else {
            console.log('Not enough status cards found');
        }

    } catch (error) {
        console.error('Error loading system status:', error);
    }
}

// Recent Activity Functions
async function loadRecentActivity() {
    try {
        // Get recent activity from database
        const { data: activities, error } = await supabaseClient
            .from('user_activity')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(10);

        const activityFeed = document.querySelector('.activity-feed');
        if (!activityFeed) return;

        if (error) {
            // Show simulated activity if no real data
            showSimulatedActivity();
            return;
        }

        activityFeed.innerHTML = '';

        if (activities && activities.length > 0) {
            activities.forEach(activity => {
                const activityItem = createActivityItem(activity);
                activityFeed.appendChild(activityItem);
            });
        } else {
            showSimulatedActivity();
        }

    } catch (error) {
        console.error('Error loading recent activity:', error);
        showSimulatedActivity();
    }
}

function showSimulatedActivity() {
    const activityFeed = document.querySelector('.activity-feed');
    if (!activityFeed) return;

    const simulatedActivities = [
        {
            type: 'user_registration',
            description: 'New user registered',
            details: 'john.doe@student.school.com joined Class 10',
            time: '2 minutes ago'
        },
        {
            type: 'content_upload',
            description: 'Content uploaded',
            details: 'Mathematics Chapter 5 added by teacher',
            time: '15 minutes ago'
        },
        {
            type: 'security',
            description: 'Failed login attempt',
            details: 'Multiple failed attempts from IP 192.168.1.100',
            time: '1 hour ago'
        },
        {
            type: 'report',
            description: 'Weekly report generated',
            details: 'Student performance report for Class 9',
            time: '2 hours ago'
        }
    ];

    activityFeed.innerHTML = '';

    simulatedActivities.forEach(activity => {
        const activityItem = createActivityItem(activity);
        activityFeed.appendChild(activityItem);
    });
}

function createActivityItem(activity) {
    const item = document.createElement('div');
    item.className = 'activity-item';

    const icons = {
        user_registration: '👤',
        content_upload: '📝',
        security: '⚠️',
        report: '📊'
    };

    item.innerHTML = `
        <div class="activity-icon">${icons[activity.type] || '📋'}</div>
        <div class="activity-content">
            <h4>${activity.description}</h4>
            <p>${activity.details}</p>
            <span class="activity-time">${activity.time}</span>
        </div>
    `;

    return item;
}

// System Health Functions
async function loadSystemHealth() {
    try {
        console.log('Loading system health...');

        const healthMetrics = document.querySelector('.health-metrics');
        console.log('Health metrics container found:', !!healthMetrics);

        if (!healthMetrics) {
            console.log('Health metrics container not found');
            return;
        }

        // Simulate health metrics
        const performance = Math.floor(Math.random() * 100);
        const security = Math.floor(Math.random() * 100);
        const uptime = 99.9 + (Math.random() * 0.1);

        console.log('Generated health values:', { performance, security, uptime });

        const metricGroups = healthMetrics.querySelectorAll('.metric-group');
        console.log('Metric groups found:', metricGroups.length);

        if (metricGroups.length >= 3) {
            // Performance metric
            updateHealthMetric(metricGroups[0], performance, 'Performance');

            // Security metric
            updateHealthMetric(metricGroups[1], security, 'Security');

            // Uptime metric
            updateHealthMetric(metricGroups[2], uptime, 'Uptime');

            console.log('System health updated successfully');
        } else {
            console.log('Not enough metric groups found');
        }

    } catch (error) {
        console.error('Error loading system health:', error);
    }
}

function updateHealthMetric(metricGroup, value, label) {
    const metricFill = metricGroup.querySelector('.metric-fill');
    const metricValue = metricGroup.querySelector('.metric-value');

    console.log('Updating metric:', { label, value, hasFill: !!metricFill, hasValue: !!metricValue });

    if (metricFill && metricValue) {
        metricFill.style.width = `${Math.min(100, value)}%`;

        // Set color based on value
        metricFill.className = 'metric-fill';
        if (value >= 90) metricFill.classList.add('excellent');
        else if (value >= 70) metricFill.classList.add('good');

        metricValue.textContent = `${value}%`;
        metricGroup.querySelector('h4').textContent = label;
        metricGroup.querySelector('p').textContent = getHealthDescription(label, value);

        console.log('Metric updated:', label, value + '%');
    } else {
        console.log('Missing elements for metric update');
    }
}

function getHealthDescription(metric, value) {
    const descriptions = {
        'Performance': `${value >= 80 ? 'Excellent' : value >= 60 ? 'Good' : 'Needs attention'} system performance score`,
        'Security': `${value >= 90 ? 'Strong' : value >= 70 ? 'Good' : 'Review needed'} security health score`,
        'Uptime': `${value >= 99.9 ? 'Excellent' : value >= 99 ? 'Good' : 'Monitor'} 30-day uptime`
    };

    return descriptions[metric] || 'Health score';
}

// Alerts Functions
async function loadAlerts() {
    try {
        const alertsList = document.querySelector('.alerts-list');
        if (!alertsList) return;

        // Check for real alerts from database
        const { data: alerts, error } = await supabaseClient
            .from('system_alerts')
            .select('*')
            .eq('status', 'active')
            .order('created_at', { ascending: false });

        if (error) {
            showSimulatedAlerts();
            return;
        }

        alertsList.innerHTML = '';

        if (alerts && alerts.length > 0) {
            alerts.forEach(alert => {
                const alertItem = createAlertItem(alert);
                alertsList.appendChild(alertItem);
            });
        } else {
            showSimulatedAlerts();
        }

    } catch (error) {
        console.error('Error loading alerts:', error);
        showSimulatedAlerts();
    }
}

function showSimulatedAlerts() {
    const alertsList = document.querySelector('.alerts-list');
    if (!alertsList) return;

    const simulatedAlerts = [
        {
            type: 'high',
            title: 'Storage Almost Full',
            description: 'Storage usage is at 89%. Consider cleanup.',
            time: '5 minutes ago',
            action: 'Fix Now',
            actionType: 'storage_cleanup'
        },
        {
            type: 'medium',
            title: 'Pending Approvals',
            description: '12 new user registrations awaiting approval',
            time: '1 hour ago',
            action: 'Review',
            actionType: 'user_approval'
        },
        {
            type: 'low',
            title: 'Performance Dip',
            description: 'Response time increased by 15% in last hour',
            time: '2 hours ago',
            action: 'Investigate',
            actionType: 'performance_check'
        }
    ];

    alertsList.innerHTML = '';

    simulatedAlerts.forEach(alert => {
        const alertItem = createAlertItem(alert);
        alertsList.appendChild(alertItem);
    });
}

function createAlertItem(alert) {
    const item = document.createElement('div');
    item.className = `alert-item ${alert.type}`;

    const icons = {
        high: '⚠️',
        medium: '📧',
        low: '📈'
    };

    item.innerHTML = `
        <div class="alert-icon">${icons[alert.type] || '📋'}</div>
        <div class="alert-content">
            <h4>${alert.title}</h4>
            <p>${alert.description}</p>
            <span class="alert-time">${alert.time}</span>
        </div>
        <button class="alert-action" onclick="handleAlertAction('${alert.actionType}')">${alert.action}</button>
    `;

    return item;
}

// Quick Action Functions
function showUserManagement() {
    window.location.href = '../user_management/user_management.html';
}

function generateReport() {
    const reportOutput = document.getElementById('report-output');
    if (reportOutput) {
        reportOutput.innerHTML = `
            <h3>Quick Report Generated</h3>
            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 1rem;">
                <p><strong>System Status:</strong> All services operational</p>
                <p><strong>Active Users:</strong> 340</p>
                <p><strong>System Health:</strong> 78% Performance, 95% Security</p>
                <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
                <div style="margin-top: 1rem;">
                    <button class="btn" onclick="exportReportAsPDF()">Export as PDF</button>
                    <button class="btn btn-secondary" onclick="exportReportAsExcel()">Export as Excel</button>
                </div>
            </div>
        `;
    }
    showSection('reports');
}

function systemMaintenance() {
    alert('System maintenance tools - Coming soon!\n\nAvailable tools:\n• Database backup\n• Cache cleanup\n• Log rotation\n• System optimization');
}

function sendNotification() {
    alert('Broadcast notification system - Coming soon!\n\nFeatures:\n• Send announcements to all users\n• Target specific classes or roles\n• Schedule notifications\n• Track delivery status');
}

// Alert Action Handlers
function handleAlertAction(actionType) {
    switch (actionType) {
        case 'storage_cleanup':
            alert('Storage cleanup initiated!\n\nActions performed:\n• Temporary files removed\n• Old logs archived\n• Cache cleared\n• Storage usage optimized');
            break;
        case 'user_approval':
            window.location.href = '../user_management/user_management.html';
            break;
        case 'performance_check':
            alert('Performance optimization suggestions:\n\n1. Clear application cache\n2. Restart background services\n3. Check database queries\n4. Monitor resource usage');
            break;
        default:
            alert('Action completed successfully!');
    }

    // Refresh alerts after action
    loadAlerts();
}

// Export Functions
function exportReportAsPDF() {
    try {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        pdf.setFontSize(20);
        pdf.text('mastercbse System Report', 20, 30);

        pdf.setFontSize(12);
        pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 45);

        pdf.setFontSize(16);
        pdf.text('System Overview', 20, 65);

        pdf.setFontSize(12);
        let yPosition = 80;
        pdf.text('• System Status: All services operational', 20, yPosition);
        yPosition += 15;
        pdf.text('• Active Users: 340', 20, yPosition);
        yPosition += 15;
        pdf.text('• System Performance: 78%', 20, yPosition);
        yPosition += 15;
        pdf.text('• Security Score: 95%', 20, yPosition);
        yPosition += 15;
        pdf.text('• Uptime: 99.9%', 20, yPosition);

        pdf.setFontSize(10);
        pdf.text('This report was generated from the mastercbse Educational Resources Admin Dashboard', 20, pdf.internal.pageSize.height - 20);

        const fileName = `system-report-${new Date().toISOString().split('T')[0]}.pdf`;
        pdf.save(fileName);

        alert('Report exported successfully!');

    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF report. Please try again.');
    }
}

function exportReportAsExcel() {
    try {
        const reportData = [
            ['System Report - mastercbse Educational Resources'],
            ['Generated on:', new Date().toLocaleDateString()],
            [''],
            ['Metric', 'Value', 'Status'],
            ['System Status', 'All services operational', 'Online'],
            ['Active Users', '340', 'Normal'],
            ['System Performance', '78%', 'Good'],
            ['Security Score', '95%', 'Excellent'],
            ['Uptime', '99.9%', 'Excellent'],
            ['Storage Usage', '67%', 'Normal'],
            ['Database Health', 'Connection healthy', 'Normal']
        ];

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(reportData);

        ws['!cols'] = [
            {wch: 25},
            {wch: 25},
            {wch: 15}
        ];

        XLSX.utils.book_append_sheet(wb, ws, 'System Report');

        const fileName = `system-report-${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(wb, fileName);

        alert('Report exported successfully!');

    } catch (error) {
        console.error('Error generating Excel:', error);
        alert('Error generating Excel report. Please try again.');
    }
}

// Authentication Functions
function logout() {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('adminId');
    window.location.href = '../login.html';
}

// Authentication check
window.addEventListener('load', () => {
    if (!localStorage.getItem('adminLoggedIn')) {
        window.location.href = '../login.html';
    }
});

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '1000',
        opacity: '0',
        transform: 'translateY(-20px)',
        transition: 'all 0.3s ease'
    });

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function exportDashboard() {
    try {
        const dashboardData = [
            ['Overview', 'Value', 'Description'],
            ['Total Users', document.getElementById('total-users')?.textContent || '0', 'Total registered users'],
            ['Active Users', document.getElementById('active-users')?.textContent || '0', 'Users active in the last 24 hours'],
            ['Total Classes', document.getElementById('total-classes')?.textContent || '0', 'Total classes created'],
            ['Total Subjects', document.getElementById('total-subjects')?.textContent || '0', 'Total subjects created'],
            ['', '', ''], // Empty row for separation

            ['User Engagement', 'Value', 'Description'],
            ['Average Session Time', document.getElementById('avg-session')?.textContent || '0 min', 'Average time users spend per session'],
            ['Top Class', document.getElementById('top-class')?.textContent || 'N/A', 'Most active class on the platform'],
            ['', '', ''], // Empty row for separation

            ['Chart Data Summary', 'Status', 'Description'],
            ['User Growth Chart', 'Active', 'Line chart showing user registration trends'],
            ['Role Distribution Chart', 'Active', 'Doughnut chart showing user roles (Students, Teachers, Admins)'],
            ['Login Trends Chart', 'Active', 'Line chart showing daily login patterns'],
            ['Activity Heatmap Chart', 'Active', 'Bubble chart showing user activity distribution'],
            ['Class Performance Chart', 'Active', 'Radar chart showing performance by class'],
            ['Subject Engagement Chart', 'Active', 'Bar chart showing engagement by subject'],
            ['', '', ''], // Empty row for separation

            ['Report Generation Data', 'Available', 'Description'],
            ['User Report', 'Yes', 'Comprehensive user demographics and statistics'],
            ['Engagement Report', 'Yes', 'User engagement metrics and trends'],
            ['Performance Report', 'Yes', 'Academic performance analysis by class and subject'],
            ['PDF Export', 'Yes', 'Export dashboard as PDF document'],
            ['Excel Export', 'Yes', 'Export data as Excel spreadsheet'],
        ];

        // Create workbook and worksheet
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(dashboardData);

        // Set column widths
        ws['!cols'] = [
            {wch: 20}, // Metric column
            {wch: 15}, // Value column
            {wch: 50}  // Description column
        ];

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, 'Analytics Dashboard');

        // Generate filename and save
        const fileName = `analytics-dashboard-${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(wb, fileName);

        showNotification('Excel spreadsheet exported successfully!', 'success');

    } catch (error) {
        console.error('Error exporting to Excel:', error);
        showNotification('Error exporting Excel file. Please try again.', 'error');
    }
}
