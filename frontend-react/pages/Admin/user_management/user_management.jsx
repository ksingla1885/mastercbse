// User Management - CRUD Operations

// Sample user data (in a real app, this would come from a database)
let users = [
    { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'admin', class: '', stream: '', status: 'active' },
    { id: 2, name: 'Teacher One', email: 'teacher1@example.com', role: 'teacher', class: '', stream: '', status: 'active' },
    { id: 3, name: 'Student One', email: 'student1@example.com', role: 'student', class: '10', stream: '', status: 'active' },
    { id: 4, name: 'Student Two', email: 'student2@example.com', role: 'student', class: '11', stream: 'science', status: 'active' },
];

// DOM Elements
const createUserForm = document.getElementById('create-user-form');
const updateUserForm = document.getElementById('update-user-form');
const deleteUserForm = document.getElementById('delete-user-form');
const userList = document.getElementById('user-list');
const userSelect = document.getElementById('user-select');
const deleteUserSelect = document.getElementById('delete-user');
const notification = document.getElementById('notification');

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    init();
    
    // Show the first section by default
    showSection('create');
    
    // Initialize class and stream fields
    toggleClassField();
    toggleUpdateClassField();
    
    // Add event listener for the back to dashboard button
    const backToDashboard = document.getElementById('back-to-dashboard');
    if (backToDashboard) {
        backToDashboard.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '../index.html'; // Adjust the path as needed
        });
    }
});

// Initialize the application
function init() {
    console.log('Initializing user management...');
    
    // Set up event listeners
    setupEventListeners();
    
    // Render the initial user list
    renderUserList();
    
    // Initialize tooltips
    initializeTooltips();
    
    console.log('User management initialized');
}

// Set up event listeners
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            console.log('Navigating to section:', section);
            showSection(section);
            
            // Update active state
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Create user form
    if (createUserForm) {
        console.log('Adding create user form listener');
        createUserForm.addEventListener('submit', handleCreateUser);
    } else {
        console.error('Create user form not found');
    }
    
    // Update user form
    if (updateUserForm) {
        console.log('Adding update user form listener');
        updateUserForm.addEventListener('submit', handleUpdateUser);
        
        // Populate user select when update section is shown
        document.querySelector('a[data-section="update"]').addEventListener('click', function() {
            populateUserSelect();
        });
    } else {
        console.error('Update user form not found');
    }
    
    // Delete user form
    if (deleteUserForm) {
        console.log('Adding delete user form listener');
        deleteUserForm.addEventListener('submit', handleDeleteUser);
        
        // Populate delete user select when delete section is shown
        document.querySelector('a[data-section="delete"]').addEventListener('click', function() {
            populateDeleteUserSelect();
        });
    } else {
        console.error('Delete user form not found');
    }
    
    // Role change handler for create form
    const roleSelect = document.getElementById('role');
    if (roleSelect) {
        roleSelect.addEventListener('change', toggleClassField);
    } else {
        console.error('Role select not found');
    }
    
    // Role change handler for update form
    const updateRoleSelect = document.getElementById('update-role');
    if (updateRoleSelect) {
        updateRoleSelect.addEventListener('change', toggleUpdateClassField);
    } else {
        console.error('Update role select not found');
    }
    
    // Class change handler for create form
    const classSelect = document.getElementById('class');
    if (classSelect) {
        classSelect.addEventListener('change', updateStreamField);
    } else {
        console.error('Class select not found');
    }
    
    // Class change handler for update form
    const updateClassSelect = document.getElementById('update-class');
    if (updateClassSelect) {
        updateClassSelect.addEventListener('change', updateUpdateStreamField);
    } else {
        console.error('Update class select not found');
    }
    
    // User select change handler for update form
    if (userSelect) {
        userSelect.addEventListener('change', populateUserForm);
    } else {
        console.error('User select not found');
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-users');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    } else {
        console.log('Search input not found (optional)');
    }
    
    console.log('Event listeners set up');
}

// Initialize tooltips
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

// Show tooltip
function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = this.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);
    
    const rect = this.getBoundingClientRect();
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
    tooltip.style.left = `${rect.left + (this.offsetWidth - tooltip.offsetWidth) / 2}px`;
    
    this._tooltip = tooltip;
}

// Hide tooltip
function hideTooltip() {
    if (this._tooltip) {
        this._tooltip.remove();
        this._tooltip = null;
    }
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length === 0) {
        renderUserList(users);
        return;
    }
    
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm) || 
        user.email.toLowerCase().includes(searchTerm) ||
        user.role.toLowerCase().includes(searchTerm) ||
        (user.class && user.class.toString().includes(searchTerm)) ||
        (user.stream && user.stream.toLowerCase().includes(searchTerm))
    );
    
    renderUserList(filteredUsers);
}

// Show a specific section and hide others
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
    
    // Add active class to the clicked nav link
    const activeLink = document.querySelector(`.nav-links a[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Special handling for view section
    if (sectionId === 'view') {
        renderUserList();
    }
    
    // Special handling for update section
    if (sectionId === 'update') {
        populateUserSelect();
    }
    
    // Special handling for delete section
    if (sectionId === 'delete') {
        populateDeleteUserSelect();
    }
}

// Toggle class field based on role selection (create form)
function toggleClassField() {
    const role = document.getElementById('role').value;
    const classGroup = document.getElementById('class-group');
    const streamGroup = document.getElementById('stream-group');
    
    if (role === 'student') {
        classGroup.style.display = 'block';
    } else {
        classGroup.style.display = 'none';
        streamGroup.style.display = 'none';
    }
}

// Toggle class field based on role selection (update form)
function toggleUpdateClassField() {
    const role = document.getElementById('update-role').value;
    const classGroup = document.getElementById('update-class-group');
    const streamGroup = document.getElementById('update-stream-group');
    
    if (role === 'student') {
        classGroup.style.display = 'block';
    } else {
        classGroup.style.display = 'none';
        streamGroup.style.display = 'none';
    }
}

// Update stream field based on class selection (create form)
function updateStreamField() {
    const classValue = document.getElementById('class').value;
    const streamGroup = document.getElementById('stream-group');
    
    if (classValue === '11' || classValue === '12') {
        streamGroup.style.display = 'block';
    } else {
        streamGroup.style.display = 'none';
    }
}

// Update stream field based on class selection (update form)
function updateUpdateStreamField() {
    const classValue = document.getElementById('update-class').value;
    const streamGroup = document.getElementById('update-stream-group');
    
    if (classValue === '11' || classValue === '12') {
        streamGroup.style.display = 'block';
    } else {
        streamGroup.style.display = 'none';
    }
}

// Render the user list
function renderUserList(usersToRender = users) {
    if (!userList) return;
    
    if (usersToRender.length === 0) {
        userList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-users"></i>
                <p>No users found</p>
            </div>
        `;
        return;
    }
    
    userList.innerHTML = usersToRender.map(user => `
        <div class="user-item">
            <div class="user-avatar">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="user-info">
                <h3>${user.name} <span class="user-role ${user.role}">${user.role}</span></h3>
                <p class="user-email">${user.email}</p>
                ${user.class ? `<p class="user-class">Class ${user.class} ${user.stream ? `(${user.stream})` : ''}</p>` : ''}
            </div>
            <div class="user-actions">
                <button class="btn btn-edit" onclick="editUser(${user.id})" data-tooltip="Edit User">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-delete" onclick="confirmDeleteUser(${user.id})" data-tooltip="Delete User">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Re-initialize tooltips after rendering
    initializeTooltips();
}

// Populate user select dropdown for update form
function populateUserSelect() {
    if (!userSelect) return;
    
    userSelect.innerHTML = '<option value="">Select a user to edit</option>';
    
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = `${user.name} (${user.email})`;
        userSelect.appendChild(option);
    });
}

// Populate delete user select dropdown
function populateDeleteUserSelect() {
    if (!deleteUserSelect) return;
    
    deleteUserSelect.innerHTML = '<option value="">Select a user to delete</option>';
    
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = `${user.name} (${user.email})`;
        deleteUserSelect.appendChild(option);
    });
}

// Populate update form with user data
function populateUserForm() {
    const userId = parseInt(userSelect.value);
    if (!userId) return;
    
    const user = users.find(u => u.id === userId);
    if (!user) return;
    
    document.getElementById('update-name').value = user.name;
    document.getElementById('update-email').value = user.email;
    document.getElementById('update-role').value = user.role;
    
    // Handle class and stream fields based on role
    const classGroup = document.getElementById('update-class-group');
    const streamGroup = document.getElementById('update-stream-group');
    
    if (user.role === 'student') {
        classGroup.style.display = 'block';
        document.getElementById('update-class').value = user.class || '';
        
        if (user.class === '11' || user.class === '12') {
            streamGroup.style.display = 'block';
            document.getElementById('update-stream').value = user.stream || '';
        } else {
            streamGroup.style.display = 'none';
        }
    } else {
        classGroup.style.display = 'none';
        streamGroup.style.display = 'none';
    }
}

// Handle create user form submission
function handleCreateUser(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const role = document.getElementById('role').value;
    const userClass = document.getElementById('class').value;
    const stream = document.getElementById('stream').value;
    
    // Basic validation
    if (!name || !email || !role) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Check if email already exists
    if (users.some(user => user.email.toLowerCase() === email.toLowerCase())) {
        showNotification('A user with this email already exists', 'error');
        return;
    }
    
    // Create new user object
    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        name,
        email,
        role,
        class: role === 'student' ? userClass : '',
        stream: role === 'student' ? (userClass === '11' || userClass === '12' ? stream : '') : '',
        status: 'active',
        createdAt: new Date().toISOString()
    };
    
    // Add to users array
    users.push(newUser);
    
    // Reset form
    e.target.reset();
    
    // Show success message
    showNotification('User created successfully!', 'success');
    
    // Update user list
    renderUserList();
    
    // Update user select dropdowns
    populateUserSelect();
    populateDeleteUserSelect();
}

// Handle update user form submission
function handleUpdateUser(e) {
    e.preventDefault();
    
    const userId = parseInt(document.getElementById('user-select').value);
    const name = document.getElementById('update-name').value.trim();
    const email = document.getElementById('update-email').value.trim();
    const role = document.getElementById('update-role').value;
    const userClass = document.getElementById('update-class').value;
    const stream = document.getElementById('update-stream').value;
    
    // Basic validation
    if (!userId || !name || !email || !role) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Check if email already exists (excluding current user)
    if (users.some(user => user.email.toLowerCase() === email.toLowerCase() && user.id !== userId)) {
        showNotification('A user with this email already exists', 'error');
        return;
    }
    
    // Find user index
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        showNotification('User not found', 'error');
        return;
    }
    
    // Update user
    users[userIndex] = {
        ...users[userIndex],
        name,
        email,
        role,
        class: role === 'student' ? userClass : '',
        stream: role === 'student' ? (userClass === '11' || userClass === '12' ? stream : '') : ''
    };
    
    // Show success message
    showNotification('User updated successfully!', 'success');
    
    // Update user list
    renderUserList();
    
    // Update user select dropdowns
    populateUserSelect();
    populateDeleteUserSelect();
    
    // Reset form
    e.target.reset();
    document.getElementById('user-select').value = '';
}

// Handle delete user form submission
function handleDeleteUser(e) {
    e.preventDefault();
    
    const userId = parseInt(document.getElementById('delete-user').value);
    
    if (!userId) {
        showNotification('Please select a user to delete', 'error');
        return;
    }
    
    // Find user index
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        showNotification('User not found', 'error');
        return;
    }
    
    // Get user details for confirmation message
    const userName = users[userIndex].name;
    
    // Show confirmation dialog
    if (confirm(`Are you sure you want to delete the user "${userName}"? This action cannot be undone.`)) {
        // Remove user from array
        users.splice(userIndex, 1);
        
        // Show success message
        showNotification('User deleted successfully!', 'success');
        
        // Update user list
        renderUserList();
        
        // Update user select dropdowns
        populateUserSelect();
        populateDeleteUserSelect();
        
        // Reset form
        e.target.reset();
    }
}

// Edit user (redirects to update section)
function editUser(userId) {
    showSection('update');
    document.getElementById('user-select').value = userId;
    populateUserForm();
}

// Confirm delete user
function confirmDeleteUser(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;
    
    if (confirm(`Are you sure you want to delete the user "${user.name}"? This action cannot be undone.`)) {
        // Find user index
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex === -1) return;
        
        // Remove user from array
        users.splice(userIndex, 1);
        
        // Show success message
        showNotification('User deleted successfully!', 'success');
        
        // Update user list
        renderUserList();
        
        // Update user select dropdowns
        populateUserSelect();
        populateDeleteUserSelect();
    }
}

// Show notification
function showNotification(message, type = 'success') {
    if (!notification) return;
    
    notification.textContent = message;
    notification.className = 'notification';
    notification.classList.add(type);
    notification.style.display = 'block';
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Validate email format
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Logout functionality
function logout() {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('adminId');
    window.location.href = '../login.html';
}

// User Profile Management
async function loadUsers(page = 1) {
    const searchTerm = document.getElementById('search-users').value;
    const roleFilter = document.getElementById('filter-role').value;
    const classFilter = document.getElementById('filter-class').value;

    currentPage = page;

    try {
        let query = supabaseClient.from('profiles').select('*', { count: 'exact' });

        // Apply filters
        if (searchTerm) {
            query = query.or(`full_name.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%`);
        }
        if (roleFilter) {
            query = query.eq('role', roleFilter);
        }
        if (classFilter) {
            query = query.eq('class', classFilter);
        }

        // Pagination
        const from = (page - 1) * ITEMS_PER_PAGE;
        const to = from + ITEMS_PER_PAGE - 1;
        query = query.range(from, to).order('created_at', { ascending: false });

        const { data, error, count } = await query;

        if (error) throw error;

        totalUsers = count;
        displayUsers(data);
        updatePagination();
    } catch (err) {
        console.error('Error loading users:', err);
        showError('Error loading users');
    }
}

function displayUsers(users) {
    const usersList = document.getElementById('users-list');
    usersList.innerHTML = '';

    if (users.length === 0) {
        usersList.innerHTML = '<div class="loading">No users found.</div>';
        return;
    }

    const usersGrid = document.createElement('div');
    usersGrid.className = 'users-grid';

    users.forEach((user, index) => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
            <h3>${user.full_name || 'N/A'}</h3>
            <p><strong>Email:</strong> ${user.email || 'N/A'}</p>
            <p><strong>Role:</strong> ${user.role || 'N/A'}</p>
            <p><strong>Class:</strong> ${user.class || 'N/A'}</p>
            <p><strong>Phone:</strong> ${user.phone || 'N/A'}</p>
            <p class="status-active">Active</p>
            <div class="user-actions">
                <button class="btn btn-secondary" onclick="editUser('${user.id}')">Edit</button>
                <button class="btn" onclick="viewUserActivity('${user.id}')">Activity</button>
            </div>
        `;

        usersGrid.appendChild(userCard);
    });

    usersList.appendChild(usersGrid);
}

function updatePagination() {
    const totalPages = Math.ceil(totalUsers / ITEMS_PER_PAGE);
    const paginationContainer = document.getElementById('pagination-container');

    paginationContainer.innerHTML = '';

    if (totalPages <= 1) return;

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = `btn ${currentPage === 1 ? 'btn-secondary' : ''}`;
    prevBtn.textContent = '← Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => loadUsers(currentPage - 1);
    paginationContainer.appendChild(prevBtn);

    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.className = `btn ${i === currentPage ? 'btn-success' : ''}`;
        button.textContent = i;
        button.onclick = () => loadUsers(i);
        paginationContainer.appendChild(button);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = `btn ${currentPage === totalPages ? 'btn-secondary' : ''}`;
    nextBtn.textContent = 'Next →';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => loadUsers(currentPage + 1);
    paginationContainer.appendChild(nextBtn);

    // Info
    const info = document.createElement('div');
    info.className = 'pagination-info';
    info.textContent = `Showing ${((currentPage - 1) * ITEMS_PER_PAGE) + 1}-${Math.min(currentPage * ITEMS_PER_PAGE, totalUsers)} of ${totalUsers} users`;
    paginationContainer.appendChild(info);
}

// Account Actions
function showEditUserForm() {
    document.getElementById('action-form-title').textContent = 'Edit User';
    document.getElementById('action-specific-fields').innerHTML = `
        <div class="form-group">
            <label for="edit-name">Full Name</label>
            <input type="text" id="edit-name" required>
        </div>
        <div class="form-group">
            <label for="edit-email">Email</label>
            <input type="email" id="edit-email" required>
        </div>
        <div class="form-group">
            <label for="edit-phone">Phone</label>
            <input type="tel" id="edit-phone">
        </div>
        <div class="form-group">
            <label for="edit-class">Class</label>
            <select id="edit-class">
                <option value="">Select Class</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
            </select>
        </div>
    `;
    showModal('action-form');
    document.getElementById('action-submit-btn').onclick = submitEditUser;
}

function showResetPasswordForm() {
    document.getElementById('action-form-title').textContent = 'Reset Password';
    document.getElementById('action-specific-fields').innerHTML = `
        <div class="form-group">
            <label for="reset-email">User Email</label>
            <input type="email" id="reset-email" required>
        </div>
        <p style="color: #e53e3e; font-size: 12px; margin: 8px 0;">Password reset link will be sent to the user's email.</p>
    `;
    showModal('action-form');
    document.getElementById('action-submit-btn').onclick = submitResetPassword;
}

function showSuspendUserForm() {
    document.getElementById('action-form-title').textContent = 'Suspend/Activate User';
    document.getElementById('action-specific-fields').innerHTML = `
        <div class="form-group">
            <label for="suspend-user-id">User ID</label>
            <input type="text" id="suspend-user-id" required>
        </div>
        <div class="form-group">
            <label for="suspend-action">Action</label>
            <select id="suspend-action">
                <option value="suspend">Suspend</option>
                <option value="activate">Activate</option>
            </select>
        </div>
    `;
    showModal('action-form');
    document.getElementById('action-submit-btn').onclick = submitSuspendUser;
}

function showDeleteUserForm() {
    document.getElementById('action-form-title').textContent = 'Delete User';
    document.getElementById('action-specific-fields').innerHTML = `
        <div class="form-group">
            <label for="delete-user-id">User ID</label>
            <input type="text" id="delete-user-id" required>
        </div>
        <p style="color: #e53e3e; font-size: 12px; margin: 8px 0;">Warning: This action cannot be undone!</p>
    `;
    showModal('action-form');
    document.getElementById('action-submit-btn').onclick = submitDeleteUser;
}

function hideActionForm() {
    hideModal('action-form');
}

function showModal(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.classList.add('show');
    }
}

function hideModal(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.classList.remove('show');
    }
}

// Form Submissions
async function submitEditUser() {
    const userId = document.getElementById('action-user-id').value;
    const name = document.getElementById('edit-name').value;
    const email = document.getElementById('edit-email').value;
    const phone = document.getElementById('edit-phone').value;
    const userClass = document.getElementById('edit-class').value;

    try {
        const { error } = await supabaseClient
            .from('profiles')
            .update({ full_name: name, email, phone, class: userClass })
            .eq('id', userId);

        if (error) throw error;
        alert('User updated successfully!');
        hideActionForm();
        loadUsers(currentPage);
    } catch (err) {
        console.error('Error updating user:', err);
        showError('Error updating user');
    }
}

async function submitResetPassword() {
    const email = document.getElementById('reset-email').value;

    try {
        const { error } = await supabaseClient.auth.resetPasswordForEmail(email);
        if (error) throw error;
        alert('Password reset email sent!');
        hideActionForm();
    } catch (err) {
        console.error('Error sending reset email:', err);
        showError('Error sending reset email');
    }
}

async function submitSuspendUser() {
    const userId = document.getElementById('suspend-user-id').value;
    const action = document.getElementById('suspend-action').value;

    try {
        const { error } = await supabaseClient
            .from('profiles')
            .update({ status: action === 'suspend' ? 'suspended' : 'active' })
            .eq('id', userId);

        if (error) throw error;
        alert(`User ${action}ed successfully!`);
        hideActionForm();
        loadUsers(currentPage);
    } catch (err) {
        console.error('Error updating user status:', err);
        showError('Error updating user status');
    }
}

async function submitDeleteUser() {
    const userId = document.getElementById('delete-user-id').value;

    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;

    try {
        const { error } = await supabaseClient
            .from('profiles')
            .delete()
            .eq('id', userId);

        if (error) throw error;
        alert('User deleted successfully!');
        hideActionForm();
        loadUsers(currentPage);
    } catch (err) {
        console.error('Error deleting user:', err);
        showError('Error deleting user');
    }
}

// Role Management
function showRoleAssignmentForm() {
    document.getElementById('role-form').style.display = 'block';
}

function hideRoleForm() {
    document.getElementById('role-form').style.display = 'none';
}

function showPermissionForm() {
    alert('Permission management feature - Coming soon!');
}

document.getElementById('role-form-element').addEventListener('submit', async (e) => {
    e.preventDefault();
    const userId = document.getElementById('role-user-id').value;
    const newRole = document.getElementById('new-role').value;

    try {
        const { error } = await supabaseClient
            .from('profiles')
            .update({ role: newRole })
            .eq('id', userId);

        if (error) throw error;
        alert('User role updated successfully!');
        hideRoleForm();
        loadUsers(currentPage);
    } catch (err) {
        console.error('Error updating role:', err);
        showError('Error updating role');
    }
});

// Activity Monitoring
async function loadActivityData() {
    const filter = document.getElementById('activity-filter').value;
    const startDate = document.getElementById('activity-start-date').value;
    const endDate = document.getElementById('activity-end-date').value;

    const activityData = document.getElementById('activity-data');
    activityData.innerHTML = `
        <h3 style="margin: 0 0 12px 0; color: #2d3748; font-size: 16px; font-weight: 600;">${filter.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Data</h3>
        <p style="margin: 0 0 12px 0; color: #718096; font-size: 13px;">Activity data for ${startDate || 'all time'} to ${endDate || 'now'}</p>
        <div style="background: white; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #718096; font-size: 13px;">📊 Chart placeholder - Integration with charting library needed</p>
        </div>
    `;
}
function showEmailForm() {
    showModal('comm-form');
}

function showAnnouncementForm() {
    document.getElementById('comm-form-title').textContent = 'Create Announcement';
    showModal('comm-form');
}

function hideCommForm() {
    hideModal('comm-form');
}

document.getElementById('comm-form-element').addEventListener('submit', async (e) => {
    e.preventDefault();
    const recipients = document.getElementById('comm-recipients').value;
    const subject = document.getElementById('comm-subject').value;
    const message = document.getElementById('comm-message').value;

    alert(`Message sent to ${recipients} with subject: ${subject}`);
    hideCommForm();
});

// Analytics & Reporting
function generateUserReport() {
    const analyticsData = document.getElementById('analytics-data');
    analyticsData.innerHTML = `
        <h3 style="margin: 0 0 12px 0; color: #2d3748; font-size: 16px; font-weight: 600;">User Demographics Report</h3>
        <div style="background: white; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px 0; color: #2d3748; font-size: 13px;"><strong>Total Users:</strong> 150</p>
            <p style="margin: 0 0 8px 0; color: #2d3748; font-size: 13px;"><strong>Students:</strong> 120</p>
            <p style="margin: 0 0 8px 0; color: #2d3748; font-size: 13px;"><strong>Teachers:</strong> 25</p>
            <p style="margin: 0; color: #2d3748; font-size: 13px;"><strong>Admins:</strong> 5</p>
        </div>
    `;
}

function generateEngagementReport() {
    const analyticsData = document.getElementById('analytics-data');
    analyticsData.innerHTML = `
        <h3 style="margin: 0 0 12px 0; color: #2d3748; font-size: 16px; font-weight: 600;">User Engagement Report</h3>
        <div style="background: white; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px 0; color: #2d3748; font-size: 13px;"><strong>Average Session Time:</strong> 25 minutes</p>
            <p style="margin: 0 0 8px 0; color: #2d3748; font-size: 13px;"><strong>Most Active Class:</strong> Class 10</p>
            <p style="margin: 0 0 8px 0; color: #2d3748; font-size: 13px;"><strong>Top Subject:</strong> Mathematics</p>
            <p style="margin: 0; color: #2d3748; font-size: 13px;"><strong>Daily Active Users:</strong> 340</p>
        </div>
    `;
}

// Content Moderation
function loadPendingContent() {
    const moderationList = document.getElementById('moderation-list');
    moderationList.innerHTML = `
        <h3 style="margin: 0 0 12px 0; color: #2d3748; font-size: 16px; font-weight: 600;">Pending Content</h3>
        <div style="background: white; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #718096; font-size: 13px;">No pending content at this time.</p>
        </div>
    `;
}

function loadReportedContent() {
    const moderationList = document.getElementById('moderation-list');
    moderationList.innerHTML = `
        <h3 style="margin: 0 0 12px 0; color: #2d3748; font-size: 16px; font-weight: 600;">Reported Content</h3>
        <div style="background: white; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #718096; font-size: 13px;">No reported content at this time.</p>
        </div>
    `;
}

// Helper Functions
function editUser(userId) {
    document.getElementById('action-user-id').value = userId;
    showEditUserForm();
}

function viewUserActivity(userId) {
    alert(`Viewing activity for user ${userId} - Feature implementation needed`);
}

function showError(message) {
    alert(`Error: ${message}`);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load initial users
    loadUsers(1);

    // Add search functionality
    const searchInput = document.getElementById('search-users');
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => loadUsers(1), 300);
    });

    // Form submissions
    document.getElementById('user-action-form').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('action-submit-btn').click();
    });
});
