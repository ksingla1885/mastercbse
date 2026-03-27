// System Settings - Admin Panel

document.addEventListener('DOMContentLoaded', () => {
    console.log('System settings initializing...');

    // Initialize components
    setupSidebarNavigation();
    setupFormSubmissions();
    setupBackupRestore();
    loadInitialData();

    // Show default section based on URL hash
    const defaultSection = window.location.hash ? window.location.hash.substring(1) : 'general';
    showSection(defaultSection);

    // Set up hash change listener
    window.addEventListener('hashchange', () => {
        const sectionId = window.location.hash.substring(1);
        if (sectionId) {
            showSection(sectionId);
        }
    });

    console.log('System settings initialized successfully');
});

// Sidebar Navigation
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
            
            // Update URL hash
            window.location.hash = sectionId;
        });
    });
}

// Show section function
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
        
        // Update active state in navigation
        document.querySelectorAll('.nav-links a').forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    } else {
        console.warn('Section not found:', sectionId);
        // Fallback to general settings if section not found
        showSection('general');
    }
}

// Form Submissions
function setupFormSubmissions() {
    // General Settings Form
    const generalForm = document.getElementById('general-settings-form');
    if (generalForm) {
        generalForm.addEventListener('submit', handleGeneralSettingsSubmit);
    }

    // Notification Settings Form
    const notificationForm = document.getElementById('notification-settings-form');
    if (notificationForm) {
        notificationForm.addEventListener('submit', handleNotificationSettingsSubmit);
    }
}

// Handle General Settings Form Submission
function handleGeneralSettingsSubmit(e) {
    e.preventDefault();
    
    const formData = {
        siteTitle: document.getElementById('site-title').value,
        timezone: document.getElementById('timezone').value,
        dateFormat: document.getElementById('date-format').value
    };
    
    console.log('Saving general settings:', formData);
    
    // Simulate API call
    showNotification('Saving general settings...', 'info');
    
    setTimeout(() => {
        // In a real app, you would make an API call here
        showNotification('General settings saved successfully', 'success');
    }, 1000);
}

// Handle Notification Settings Form Submission
function handleNotificationSettingsSubmit(e) {
    e.preventDefault();
    
    const formData = {
        emailNotifications: document.querySelector('input[name="email-notifications"]').checked,
        browserNotifications: document.querySelector('input[name="browser-notifications"]').checked
    };
    
    console.log('Saving notification settings:', formData);
    
    // Simulate API call
    showNotification('Saving notification settings...', 'info');
    
    setTimeout(() => {
        // In a real app, you would make an API call here
        showNotification('Notification settings saved successfully', 'success');
    }, 1000);
}

// Backup & Restore
function setupBackupRestore() {
    const createBackupBtn = document.getElementById('create-backup');
    const selectBackupBtn = document.getElementById('select-backup');
    const restoreBackupBtn = document.getElementById('restore-backup');
    const restoreFileInput = document.getElementById('restore-file');
    const selectedFileSpan = document.getElementById('selected-file');
    
    // Create Backup
    if (createBackupBtn) {
        createBackupBtn.addEventListener('click', createBackup);
    }
    
    // Select Backup File
    if (selectBackupBtn) {
        selectBackupBtn.addEventListener('click', () => {
            restoreFileInput.click();
        });
    }
    
    // File Selection Changed
    if (restoreFileInput) {
        restoreFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                selectedFileSpan.textContent = file.name;
                restoreBackupBtn.disabled = false;
            } else {
                selectedFileSpan.textContent = 'No file selected';
                restoreBackupBtn.disabled = true;
            }
        });
    }
    
    // Restore Backup
    if (restoreBackupBtn) {
        restoreBackupBtn.addEventListener('click', restoreBackup);
    }
}

// Create Backup Function
function createBackup() {
    console.log('Creating backup...');
    showNotification('Creating backup...', 'info');
    
    // In a real app, you would make an API call to generate a backup
    // For demo purposes, we'll simulate a delay and create a dummy backup
    setTimeout(() => {
        // Create a dummy backup file
        const backupData = {
            timestamp: new Date().toISOString(),
            system: 'mastercbse Admin Panel',
            version: '1.0.0',
            data: 'This is a sample backup file.'
        };
        
        // Create a download link
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupData, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute('href', dataStr);
        downloadAnchorNode.setAttribute('download', `backup-${new Date().toISOString().split('T')[0]}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        
        showNotification('Backup created and downloaded successfully', 'success');
    }, 1500);
}

// Restore Backup Function
function restoreBackup() {
    const fileInput = document.getElementById('restore-file');
    const file = fileInput.files[0];
    
    if (!file) {
        showNotification('Please select a backup file first', 'error');
        return;
    }
    
    // Show confirmation dialog
    showConfirmation(
        'Restore Backup',
        'Are you sure you want to restore from this backup? This action cannot be undone.',
        () => {
            console.log('Restoring backup:', file.name);
            showNotification('Restoring backup...', 'info');
            
            const reader = new FileReader();
            
            reader.onload = function(e) {
                try {
                    const backupData = JSON.parse(e.target.result);
                    console.log('Backup data:', backupData);
                    
                    // In a real app, you would send this to your backend for processing
                    setTimeout(() => {
                        showNotification('Backup restored successfully!', 'success');
                        // Reset file input
                        fileInput.value = '';
                        document.getElementById('selected-file').textContent = 'No file selected';
                        document.getElementById('restore-backup').disabled = true;
                    }, 1500);
                } catch (error) {
                    console.error('Error parsing backup file:', error);
                    showNotification('Invalid backup file format', 'error');
                }
            };
            
            reader.onerror = function() {
                showNotification('Error reading backup file', 'error');
            };
            
            reader.readAsText(file);
        }
    );
}

// Load Initial Data
function loadInitialData() {
    // Load users for the user management section
    loadUsers();
    
    // Load timezones for the general settings
    loadTimezones();
}

// Load Users for User Management
async function loadUsers() {
    const usersTableBody = document.getElementById('users-table-body');
    if (!usersTableBody) return;
    
    try {
        // Simulate API call to get users
        // In a real app, you would fetch this from your backend
        const users = [
            { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Administrator', status: 'Active' },
            { id: 2, name: 'Teacher One', email: 'teacher1@example.com', role: 'Teacher', status: 'Active' },
            { id: 3, name: 'Student One', email: 'student1@example.com', role: 'Student', status: 'Active' },
            { id: 4, name: 'Teacher Two', email: 'teacher2@example.com', role: 'Teacher', status: 'Inactive' },
            { id: 5, name: 'Student Two', email: 'student2@example.com', role: 'Student', status: 'Active' }
        ];
        
        // Clear existing rows
        usersTableBody.innerHTML = '';
        
        // Add users to the table
        users.forEach(user => {
            const row = document.createElement('tr');
            
            // Status badge
            const statusClass = user.status === 'Active' ? 'status-badge online' : 'status-badge offline';
            const statusText = user.status === 'Active' ? 'Active' : 'Inactive';
            
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><span class="${statusClass}">${statusText}</span></td>
                <td class="actions">
                    <button class="btn btn-sm btn-secondary" onclick="editUser(${user.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteUser(${user.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            `;
            
            usersTableBody.appendChild(row);
        });
        
    } catch (error) {
        console.error('Error loading users:', error);
        showNotification('Failed to load users', 'error');
    }
}

// Load Timezones
function loadTimezones() {
    const timezoneSelect = document.getElementById('timezone');
    if (!timezoneSelect) return;
    
    // In a real app, you might want to use a proper timezone library
    const timezones = [
        { value: 'UTC-12:00', label: '(UTC-12:00) International Date Line West' },
        { value: 'UTC-11:00', label: '(UTC-11:00) Midway Island, Samoa' },
        { value: 'UTC-10:00', label: '(UTC-10:00) Hawaii' },
        { value: 'UTC-09:00', label: '(UTC-09:00) Alaska' },
        { value: 'UTC-08:00', label: '(UTC-08:00) Pacific Time (US & Canada)' },
        { value: 'UTC-07:00', label: '(UTC-07:00) Arizona' },
        { value: 'UTC-07:00', label: '(UTC-07:00) Mountain Time (US & Canada)' },
        { value: 'UTC-06:00', label: '(UTC-06:00) Central Time (US & Canada)' },
        { value: 'UTC-05:00', label: '(UTC-05:00) Eastern Time (US & Canada)' },
        { value: 'UTC-04:30', label: '(UTC-04:30) Caracas' },
        { value: 'UTC-04:00', label: '(UTC-04:00) Atlantic Time (Canada)' },
        { value: 'UTC-03:30', label: '(UTC-03:30) Newfoundland' },
        { value: 'UTC-03:00', label: '(UTC-03:00) Brasilia' },
        { value: 'UTC-02:00', label: '(UTC-02:00) Mid-Atlantic' },
        { value: 'UTC-01:00', label: '(UTC-01:00) Azores' },
        { value: 'UTC+00:00', label: '(UTC+00:00) Dublin, Edinburgh, Lisbon, London' },
        { value: 'UTC+01:00', label: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna' },
        { value: 'UTC+02:00', label: '(UTC+02:00) Amman, Athens, Bucharest, Istanbul' },
        { value: 'UTC+03:00', label: '(UTC+03:00) Baghdad, Kuwait, Riyadh, Moscow' },
        { value: 'UTC+03:30', label: '(UTC+03:30) Tehran' },
        { value: 'UTC+04:00', label: '(UTC+04:00) Abu Dhabi, Muscat' },
        { value: 'UTC+04:30', label: '(UTC+04:30) Kabul' },
        { value: 'UTC+05:00', label: '(UTC+05:00) Islamabad, Karachi, Tashkent' },
        { value: 'UTC+05:30', label: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi' },
        { value: 'UTC+05:45', label: '(UTC+05:45) Kathmandu' },
        { value: 'UTC+06:00', label: '(UTC+06:00) Astana, Dhaka' },
        { value: 'UTC+06:30', label: '(UTC+06:30) Yangon (Rangoon)' },
        { value: 'UTC+07:00', label: '(UTC+07:00) Bangkok, Hanoi, Jakarta' },
        { value: 'UTC+08:00', label: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi' },
        { value: 'UTC+09:00', label: '(UTC+09:00) Osaka, Sapporo, Tokyo' },
        { value: 'UTC+09:30', label: '(UTC+09:30) Adelaide' },
        { value: 'UTC+10:00', label: '(UTC+10:00) Brisbane, Canberra, Melbourne, Sydney' },
        { value: 'UTC+11:00', label: '(UTC+11:00) Magadan, Solomon Is., New Caledonia' },
        { value: 'UTC+12:00', label: '(UTC+12:00) Auckland, Wellington' },
        { value: 'UTC+13:00', label: "(UTC+13:00) Nuku'alofa" }
    ];
    
    // Clear existing options
    timezoneSelect.innerHTML = '';
    
    // Add timezone options
    timezones.forEach(tz => {
        const option = document.createElement('option');
        option.value = tz.value;
        option.textContent = tz.label;
        timezoneSelect.appendChild(option);
    });
    
    // Set default to India timezone
    timezoneSelect.value = 'UTC+05:30';
}

// User Management Functions
function editUser(userId) {
    console.log('Edit user:', userId);
    showNotification(`Editing user with ID: ${userId}`, 'info');
    // In a real app, you would open a modal or navigate to an edit page
}

function deleteUser(userId) {
    showConfirmation(
        'Delete User',
        `Are you sure you want to delete this user (ID: ${userId})? This action cannot be undone.`,
        () => {
            console.log('Deleting user:', userId);
            // In a real app, you would make an API call to delete the user
            setTimeout(() => {
                showNotification('User deleted successfully', 'success');
                // Refresh the users list
                loadUsers();
            }, 1000);
        }
    );
}

// Confirmation Dialog
function showConfirmation(title, message, onConfirm) {
    const modal = document.getElementById('confirm-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const confirmBtn = document.getElementById('confirm-ok');
    const cancelBtn = document.getElementById('confirm-cancel');
    
    if (!modal || !modalTitle || !modalMessage || !confirmBtn || !cancelBtn) {
        console.error('Confirmation modal elements not found');
        return;
    }
    
    // Set modal content
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    
    // Show modal
    modal.style.display = 'flex';
    
    // Set up event listeners
    const handleConfirm = () => {
        modal.style.display = 'none';
        if (typeof onConfirm === 'function') {
            onConfirm();
        }
        // Clean up event listeners
        confirmBtn.removeEventListener('click', handleConfirm);
        cancelBtn.removeEventListener('click', handleCancel);
    };
    
    const handleCancel = () => {
        modal.style.display = 'none';
        // Clean up event listeners
        confirmBtn.removeEventListener('click', handleConfirm);
        cancelBtn.removeEventListener('click', handleCancel);
    };
    
    confirmBtn.addEventListener('click', handleConfirm);
    cancelBtn.addEventListener('click', handleCancel);
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    const timer = setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        clearTimeout(timer);
        notification.classList.add('hide');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
}

// Logout Function
function logout() {
    showConfirmation(
        'Logout',
        'Are you sure you want to log out?',
        () => {
            // In a real app, you would clear the session and redirect to login
            console.log('User logged out');
            // Redirect to login page
            window.location.href = '../login.html';
        }
    );
}
