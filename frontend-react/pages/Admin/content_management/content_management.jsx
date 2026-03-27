// Subject mapping based on class and stream
const subjectsByStream = {
    // Common subjects for classes 6-10
    common: [
        { value: 'math', label: 'Mathematics' },
        { value: 'science', label: 'Science' },
        { value: 'english', label: 'English' },
        { value: 'hindi', label: 'Hindi' },
        { value: 'social', label: 'Social Studies' },
        { value: 'sanskrit', label: 'Sanskrit' },
        { value: 'computer', label: 'Computer Science' }
    ],
    // Science stream subjects
    science: [
        { value: 'physics', label: 'Physics' },
        { value: 'chemistry', label: 'Chemistry' },
        { value: 'biology', label: 'Biology' },
        { value: 'math', label: 'Mathematics' },
        { value: 'computer', label: 'Computer Science' },
        { value: 'english', label: 'English' },
        { value: 'hindi', label: 'Hindi' }
    ],
    // Commerce stream subjects
    commerce: [
        { value: 'accounts', label: 'Accountancy' },
        { value: 'business', label: 'Business Studies' },
        { value: 'economics', label: 'Economics' },
        { value: 'math', label: 'Mathematics' },
        { value: 'english', label: 'English' },
        { value: 'hindi', label: 'Hindi' },
        { value: 'informatics', label: 'Informatics Practices' }
    ],
    // Arts stream subjects
    arts: [
        { value: 'history', label: 'History' },
        { value: 'political', label: 'Political Science' },
        { value: 'geography', label: 'Geography' },
        { value: 'economics', label: 'Economics' },
        { value: 'psychology', label: 'Psychology' },
        { value: 'sociology', label: 'Sociology' },
        { value: 'english', label: 'English' },
        { value: 'hindi', label: 'Hindi' }
    ]
};

// Sample data - in a real app, this would come from a database
let contents = [
    {
        id: 1,
        class: '10',
        stream: '',
        subject: 'math',
        title: 'Introduction to Algebra',
        description: 'Basic concepts of algebra including variables and equations',
        fileName: 'algebra_intro.pdf',
        fileSize: '2.5 MB',
        uploadDate: '2023-10-25'
    },
    {
        id: 2,
        class: '9',
        stream: '',
        subject: 'science',
        title: 'Cell Biology',
        description: 'Understanding the basic unit of life',
        fileName: 'cell_biology.pdf',
        fileSize: '3.1 MB',
        uploadDate: '2023-10-20'
    },
    {
        id: 3,
        class: '12',
        stream: 'science',
        subject: 'physics',
        title: 'Modern Physics',
        description: 'Introduction to quantum mechanics and relativity',
        fileName: 'modern_physics.pdf',
        fileSize: '4.2 MB',
        uploadDate: '2023-10-15'
    }
];

// DOM Elements
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-links a');
const createForm = document.getElementById('create-form');
const updateForm = document.getElementById('update-form');
const contentList = document.getElementById('content-list');
const updateContentList = document.getElementById('update-content-list');
const deleteContentList = document.getElementById('delete-content-list');
const searchInput = document.getElementById('search');
const filterClass = document.getElementById('filter-class');
const filterSubject = document.getElementById('filter-subject');
const confirmDeleteBtn = document.getElementById('confirm-delete');

// Current state
let currentContentId = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Load initial data
    renderContentList(contents, contentList);
    renderContentList(contents, updateContentList, 'update');
    renderContentList(contents, deleteContentList, 'delete');
    
    // Set up event listeners
    setupEventListeners();
    
    // Show create section by default
    showSection('create');
});

// Set up event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });
    
    // Create form submission
    if (createForm) {
        createForm.addEventListener('submit', handleCreateSubmit);
    }
    
    // Update form submission
    if (updateForm) {
        updateForm.addEventListener('submit', handleUpdateSubmit);
    }
    
    // Search and filter
    if (searchInput) {
        searchInput.addEventListener('input', filterContent);
    }
    
    if (filterClass) {
        filterClass.addEventListener('change', filterContent);
    }
    
    if (filterSubject) {
        filterSubject.addEventListener('change', filterContent);
    }
    
    // Confirm delete
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', handleDelete);
    }
    
    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.onclick = () => document.querySelector('.sidebar').classList.toggle('active');
    document.body.appendChild(menuToggle);
}

// Show a specific section
function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
    
    // Update active nav link
    navLinks.forEach(link => {
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Refresh the content list if needed
    if (sectionId === 'read') {
        renderContentList(contents, contentList);
    } else if (sectionId === 'update') {
        renderContentList(contents, updateContentList, 'update');
    } else if (sectionId === 'delete') {
        renderContentList(contents, deleteContentList, 'delete');
    }
}

// Render content list
function renderContentList(items, container, action = 'view') {
    if (!container) return;
    
    if (!items || items.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <p>No content found</p>
            </div>
        `;
        return;
    }
    
    const listItems = items.map(item => {
        const classText = getClassText(item.class);
        const streamText = item.stream ? ` (${getStreamText(item.stream)})` : '';
        const subjectText = getSubjectText(item.subject);
        
        if (action === 'update') {
            return `
                <div class="content-item">
                    <div class="content-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <div class="content-meta">
                            <span><i class="fas fa-graduation-cap"></i> ${classText}${streamText}</span>
                            <span><i class="fas fa-book"></i> ${subjectText}</span>
                            <span><i class="far fa-file"></i> ${item.fileName}</span>
                            <span><i class="far fa-calendar"></i> ${formatDate(item.uploadDate)}</span>
                        </div>
                    </div>
                    <div class="content-actions">
                        <button class="btn btn-primary" onclick="prepareUpdate(${item.id})">
                            <i class="fas fa-edit"></i> Update
                        </button>
                    </div>
                </div>
            `;
        } else if (action === 'delete') {
            return `
                <div class="content-item">
                    <div class="content-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <div class="content-meta">
                            <span><i class="fas fa-graduation-cap"></i> ${classText}${streamText}</span>
                            <span><i class="fas fa-book"></i> ${subjectText}</span>
                            <span><i class="far fa-file"></i> ${item.fileName}</span>
                            <span><i class="far fa-calendar"></i> ${formatDate(item.uploadDate)}</span>
                        </div>
                    </div>
                    <div class="content-actions">
                        <button class="btn btn-danger" onclick="confirmDelete(${item.id}, '${item.title}')">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="content-item">
                    <div class="content-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <div class="content-meta">
                            <span><i class="fas fa-graduation-cap"></i> ${classText}${streamText}</span>
                            <span><i class="fas fa-book"></i> ${subjectText}</span>
                            <span><i class="far fa-file"></i> ${item.fileName}</span>
                            <span><i class="fas fa-database"></i> ${item.fileSize}</span>
                            <span><i class="far fa-calendar"></i> ${formatDate(item.uploadDate)}</span>
                        </div>
                    </div>
                    <div class="content-actions">
                        <a href="#" class="btn btn-primary" onclick="downloadFile('${item.fileName}')">
                            <i class="fas fa-download"></i> Download
                        </a>
                    </div>
                </div>
            `;
        }
    }).join('');
    
    container.innerHTML = listItems;
}

// Handle create form submission
function handleCreateSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(createForm);
    const title = formData.get('title');
    const description = formData.get('description');
    const classValue = formData.get('class');
    const stream = classValue === '11' || classValue === '12' ? formData.get('stream') : '';
    const subject = formData.get('subject');
    const fileInput = document.getElementById('file');
    
    if (!title || !description || !classValue || !subject || !fileInput.files[0]) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    const file = fileInput.files[0];
    const fileSize = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
    
    // Create new content
    const newContent = {
        id: Date.now(), // Use timestamp as ID for demo
        title,
        description,
        class: classValue,
        subject,
        fileName: file.name,
        fileSize,
        uploadDate: new Date().toISOString().split('T')[0]
    };
    
    // Add to the beginning of the array
    contents.unshift(newContent);
    
    // Reset form
    createForm.reset();
    
    // Show success message
    showNotification('Content created successfully!', 'success');
    
    // Update all lists
    renderContentList(contents, contentList);
    renderContentList(contents, updateContentList, 'update');
    renderContentList(contents, deleteContentList, 'delete');
    
    // Switch to view section
    showSection('read');
}

// Prepare update form with content data
function prepareUpdate(id) {
    const content = contents.find(item => item.id === id);
    if (!content) return;
    
    // Fill the form
    document.getElementById('update-id').value = content.id;
    document.getElementById('update-title').value = content.title;
    document.getElementById('update-description').value = content.description;
    
    // Set class and trigger change to update stream and subject
    const classSelect = document.getElementById('update-class');
    classSelect.value = content.class;
    
    // Show stream field if class is 11 or 12
    const streamGroup = document.getElementById('update-stream-group');
    if (content.class === '11' || content.class === '12') {
        streamGroup.style.display = 'block';
        const streamSelect = document.getElementById('update-stream');
        streamSelect.value = content.stream || '';
        streamSelect.required = true;
        
        // Update subjects based on stream
        const subjects = subjectsByStream[content.stream] || [];
        updateSubjectDropdown(document.getElementById('update-subject'), subjects);
    } else {
        streamGroup.style.display = 'none';
        // Update with common subjects
        updateSubjectDropdown(document.getElementById('update-subject'), subjectsByStream.common);
    }
    
    // Set subject after a small delay to ensure the dropdown is updated
    setTimeout(() => {
        document.getElementById('update-subject').value = content.subject;
    }, 100);
    
    // Show the update form
    document.getElementById('update-content-list').style.display = 'none';
    document.getElementById('update-form-container').style.display = 'block';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle update form submission
function handleUpdateSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(updateForm);
    const id = parseInt(formData.get('id'));
    const title = formData.get('title');
    const description = formData.get('description');
    const classValue = formData.get('class');
    const stream = classValue === '11' || classValue === '12' ? formData.get('stream') : '';
    const subject = formData.get('subject');
    const fileInput = document.getElementById('update-file');
    
    if (!title || !description || !classValue || !subject) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Find and update the content
    const contentIndex = contents.findIndex(item => item.id === id);
    if (contentIndex === -1) {
        showNotification('Content not found', 'error');
        return;
    }
    
    // Update content
    contents[contentIndex] = {
        ...contents[contentIndex],
        title,
        description,
        class: classValue,
        subject,
        // Update file if a new one was uploaded
        ...(fileInput.files[0] && {
            fileName: fileInput.files[0].name,
            fileSize: (fileInput.files[0].size / (1024 * 1024)).toFixed(1) + ' MB'
        })
    };
    
    // Reset form
    updateForm.reset();
    
    // Show success message
    showNotification('Content updated successfully!', 'success');
    
    // Update all lists
    renderContentList(contents, contentList);
    renderContentList(contents, updateContentList, 'update');
    renderContentList(contents, deleteContentList, 'delete');
    
    // Go back to update list
    document.getElementById('update-content-list').style.display = 'block';
    document.getElementById('update-form-container').style.display = 'none';
    
    // Switch to view section
    showSection('read');
}

// Cancel update
function cancelUpdate() {
    document.getElementById('update-content-list').style.display = 'block';
    document.getElementById('update-form-container').style.display = 'none';
    updateForm.reset();
}

// Confirm delete
function confirmDelete(id, title) {
    currentContentId = id;
    const modal = document.getElementById('confirm-modal');
    const message = modal.querySelector('p');
    message.textContent = `Are you sure you want to delete "${title}"? This action cannot be undone.`;
    showModal('confirm-modal');
}

// Handle delete
function handleDelete() {
    if (!currentContentId) return;
    
    // Remove the content
    contents = contents.filter(item => item.id !== currentContentId);
    
    // Update all lists
    renderContentList(contents, contentList);
    renderContentList(contents, updateContentList, 'update');
    renderContentList(contents, deleteContentList, 'delete');
    
    // Show success message
    showNotification('Content deleted successfully!', 'success');
    
    // Hide modal
    hideModal('confirm-modal');
    
    // Reset current content ID
    currentContentId = null;
}

// Filter content
function filterContent() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedClass = filterClass ? filterClass.value : '';
    const selectedSubject = filterSubject ? filterSubject.value : '';
    
    const filtered = contents.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm) || 
                            item.description.toLowerCase().includes(searchTerm);
        const matchesClass = !selectedClass || item.class === selectedClass;
        const matchesSubject = !selectedSubject || item.subject === selectedSubject;
        
        return matchesSearch && matchesClass && matchesSubject;
    });
    
    renderContentList(filtered, contentList);
}

// Show modal
function showModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Hide modal
function hideModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    notification.textContent = message;
    notification.className = `show ${type}`;
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Download file (simulated)
function downloadFile(filename) {
    showNotification(`Downloading ${filename}...`, 'success');
    // In a real app, this would trigger a file download
    return false;
}

// Logout
function logout() {
    // In a real app, you would clear the session here
    window.location.href = 'login.html';
}

// Update subject options based on class and stream selection
function updateSubjectOptions(formType = 'create') {
    const classSelect = document.getElementById(formType === 'update' ? 'update-class' : 'class');
    const streamGroup = document.getElementById(formType === 'update' ? 'update-stream-group' : 'stream-group');
    const streamSelect = document.getElementById(formType === 'update' ? 'update-stream' : 'stream');
    const subjectSelect = document.getElementById(formType === 'update' ? 'update-subject' : 'subject');
    
    const selectedClass = classSelect.value;
    
    // Show/hide stream selection for classes 11 and 12
    if (selectedClass === '11' || selectedClass === '12') {
        streamGroup.style.display = 'block';
        streamSelect.required = true;
        
        // If stream is not selected yet, clear subjects and return
        if (!streamSelect.value) {
            subjectSelect.innerHTML = '<option value="">Select Stream first</option>';
            return;
        }
        
        // Get subjects based on selected stream
        const subjects = subjectsByStream[streamSelect.value] || [];
        updateSubjectDropdown(subjectSelect, subjects);
    } else {
        // For classes 6-10, use common subjects
        streamGroup.style.display = 'none';
        streamSelect.required = false;
        updateSubjectDropdown(subjectSelect, subjectsByStream.common);
    }
}

// Update subject dropdown options
function updateSubjectDropdown(selectElement, subjects) {
    selectElement.innerHTML = '<option value="">Select Subject</option>';
    
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject.value;
        option.textContent = subject.label;
        selectElement.appendChild(option);
    });
}

// Helper functions
function getClassText(classValue) {
    const classes = {
        '6': 'Class 6',
        '7': 'Class 7',
        '8': 'Class 8',
        '9': 'Class 9',
        '10': 'Class 10',
        '11': 'Class 11',
        '12': 'Class 12'
    };
    return classes[classValue] || `Class ${classValue}`;
}

function getSubjectText(subject) {
    // Search through all subjects to find a match
    for (const stream in subjectsByStream) {
        const found = subjectsByStream[stream].find(s => s.value === subject);
        if (found) return found.label;
    }
    return subject.charAt(0).toUpperCase() + subject.slice(1);
}

function getStreamText(stream) {
    const streams = {
        'science': 'Science',
        'commerce': 'Commerce',
        'arts': 'Arts'
    };
    return streams[stream] || '';
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
