import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { apiService } from '../services/apiService';
import Sidebar from '../components/Sidebar';
import ConfirmationModal from '../components/ConfirmationModal';
import '../styles/dashboard.css';
import '../styles/sidebar.css';
import '../styles/content-management.css';
import '../styles/confirmation-modal.css';

const ContentManagement = () => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);
    const [selectedClass, setSelectedClass] = useState('all');
    const [selectedSubject, setSelectedSubject] = useState('all');
    const [selectedStream, setSelectedStream] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingContent, setEditingContent] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: 'SAMPLE_PAPER',
        class: '10',
        stream: '',
        subject: '',
        contentUrl: '',
        isPremium: false
    });
    const [uploadType, setUploadType] = useState('url'); // 'url' or 'file'
    const [selectedFile, setSelectedFile] = useState(null);
    const [subjects, setSubjects] = useState([]);
    const [deleteModal, setDeleteModal] = useState({ isOpen: false, contentId: null });
    const [notification, setNotification] = useState({ isOpen: false, title: '', message: '', type: 'info' });
    const [stagedContent, setStagedContent] = useState([]);
    const [pagination, setPagination] = useState({ page: 1, limit: 9, total: 0, pages: 0 });
    const [stats, setStats] = useState({ totalContent: 0, totalViews: 0, published: 0, drafts: 0 });
    const navigate = useNavigate();

    useEffect(() => {
        const initializePage = async () => {
            try {
                // Auto-login for testing
                try {
                    const loginResponse = await authService.adminLogin({
                        email: import.meta.env.VITE_ADMIN_EMAIL,
                        password: import.meta.env.VITE_ADMIN_PASSWORD
                    });

                    if (loginResponse.success) {
                        // Auto-login successful
                    }
                } catch (loginError) {
                    console.log('ContentManagement auto-login failed, using test admin:', loginError.message);
                }

                // Set admin user
                const currentAdmin = {
                    name: 'Ketan Singla',
                    email: import.meta.env.VITE_ADMIN_EMAIL,
                    role: 'admin'
                };
                setAdmin(currentAdmin);
                localStorage.setItem('adminUser', JSON.stringify(currentAdmin));

                // Fetch content data will be handled by the useEffect on filter dependencies
                // await fetchContent();
            } catch (error) {
                console.error('Page initialization error:', error);
                setLoading(false); // Fail-safe if initialization fails
            }
        };

        initializePage();
    }, []);

    const fetchContent = async (page = 1) => {
        try {
            // Include filter parameters in the API call
            const response = await apiService.getContent({
                page,
                limit: 9,
                search: searchTerm,
                class: selectedClass === 'all' ? '' : selectedClass,
                subject: selectedSubject === 'all' ? '' : selectedSubject,
                stream: selectedStream === 'all' ? '' : mapStreamToEnum(selectedStream)
            });

            if (response.success) {
                setContent(response.content || []);
                if (response.pagination) {
                    setPagination(response.pagination);
                }
                if (response.stats) {
                    setStats(response.stats);
                }
            }
        } catch (error) {
            console.error('Error fetching content:', error);
            setContent([]);
        } finally {
            setLoading(false);
        }
    };

    // Global fetch trigger when filters change
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchContent(1); // Always reset to page 1 on filter/search change
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, selectedClass, selectedSubject, selectedStream]);

    const handleLogout = async () => {
        try {
            await authService.logout();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleClearFilters = () => {
        setSearchTerm('');
        setSelectedClass('all');
        setSelectedStream('all');
        setSelectedSubject('all');
    };

    const STREAMS = ['Common (All Streams)', 'Arts', 'Commerce', 'Science', 'Science (Medical)', 'Science (Non-Medical)'];

    const SUBJECTS_BY_STREAM = {
        'Common (All Streams)': ['English', 'Physical Education'],
        'Arts': ['History', 'Geography', 'Political Science', 'Psychology', 'English', 'Physical Education'],
        'Commerce': ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English', 'Physical Education'],
        'Science': ['Physics', 'Chemistry'],
        'Science (Medical)': ['Physics', 'Chemistry', 'Biology', 'English', 'Physical Education'],
        'Science (Non-Medical)': ['Physics', 'Chemistry', 'Mathematics', 'English', 'Computer Science', 'Physical Education'],
        'General': ['Mathematics', 'Science', 'Social Science', 'English', 'Computer Applications']
    };

    const mapStreamToEnum = (displayStream) => {
        const mapping = {
            'Arts': 'HUMANITIES',
            'Commerce': 'COMMERCE',
            'Science': 'SCIENCE',
            'Science (Medical)': 'PCB',
            'Science (Non-Medical)': 'PCM',
            'Common (All Streams)': ''
        };
        return mapping[displayStream] || displayStream;
    };

    const mapEnumToStream = (enumValue) => {
        const mapping = {
            'HUMANITIES': 'Arts',
            'COMMERCE': 'Commerce',
            'SCIENCE': 'Science',
            'PCB': 'Science (Medical)',
            'PCM': 'Science (Non-Medical)'
        };
        return mapping[enumValue] || enumValue || '';
    };

    useEffect(() => {
        const classNum = parseInt(formData.class);
        if (classNum >= 11) {
            if (formData.stream && SUBJECTS_BY_STREAM[formData.stream]) {
                setSubjects(SUBJECTS_BY_STREAM[formData.stream]);
            } else {
                setSubjects([]);
            }
        } else {
            setSubjects(SUBJECTS_BY_STREAM['General']);
        }
    }, [formData.class, formData.stream]);

    const [filterSubjects, setFilterSubjects] = useState([]);

    useEffect(() => {
        setSelectedStream('all');
        setSelectedSubject('all');
    }, [selectedClass]);

    useEffect(() => {
        setSelectedSubject('all');
    }, [selectedStream]);

    useEffect(() => {
        const classNum = parseInt(selectedClass);
        if (selectedClass === 'all') {
            const allSubs = [...new Set(Object.values(SUBJECTS_BY_STREAM).flat())].sort();
            setFilterSubjects(allSubs);
        } else if (classNum < 11) {
            setFilterSubjects(SUBJECTS_BY_STREAM['General']);
        } else {
            // Class 11 or 12
            if (selectedStream !== 'all' && SUBJECTS_BY_STREAM[selectedStream]) {
                setFilterSubjects(SUBJECTS_BY_STREAM[selectedStream]);
            } else {
                const upperSubs = [...new Set([
                    ...SUBJECTS_BY_STREAM['Arts'],
                    ...SUBJECTS_BY_STREAM['Commerce'],
                    ...SUBJECTS_BY_STREAM['Science'],
                    ...SUBJECTS_BY_STREAM['Science (Medical)'],
                    ...SUBJECTS_BY_STREAM['Science (Non-Medical)']
                ])].sort();
                setFilterSubjects(upperSubs);
            }
        }
    }, [selectedClass, selectedStream]);

    // Content is now filtered globally on the backend
    const displayContent = content;

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        if (!formData.title) return { valid: false, message: 'Please enter a title' };
        if (!formData.subject) return { valid: false, message: 'Please select a subject' };

        const classNum = parseInt(formData.class);
        if (classNum >= 11 && !formData.stream) {
            return { valid: false, message: 'Please select a stream or "Common (All Streams)" for class 11 or 12' };
        }

        if (uploadType === 'file' && !selectedFile && !editingContent) {
            return { valid: false, message: 'Please select a file to upload' };
        }

        if (uploadType === 'url' && !formData.contentUrl) {
            return { valid: false, message: 'Please enter a content URL' };
        }

        return { valid: true };
    };

    const handleAddToQueue = (e) => {
        if (e) e.preventDefault();

        const validation = validateForm();
        if (!validation.valid) {
            setNotification({
                isOpen: true,
                title: 'Validation Failed',
                message: validation.message,
                type: 'warning'
            });
            return;
        }

        // Add to staged
        const newItem = {
            ...formData,
            tempId: Date.now() + Math.random(),
            file: selectedFile,
            uploadType: uploadType,
            subjects: subjects // include subjects for display if needed
        };

        setStagedContent(prev => [...prev, newItem]);

        // Reset form for next entry
        setFormData({
            title: '',
            description: '',
            type: 'SAMPLE_PAPER',
            class: '10',
            stream: '',
            subject: '',
            contentUrl: '',
            isPremium: false
        });
        setSelectedFile(null);
        setUploadType('url');

        setNotification({
            isOpen: true,
            title: 'Added to Queue',
            message: 'Content added to upload queue successfully!',
            type: 'info'
        });
    };

    const handleRemoveStaged = (tempId) => {
        setStagedContent(prev => prev.filter(item => item.tempId !== tempId));
    };

    const handleBatchUpload = async () => {
        if (stagedContent.length === 0) return;

        setLoading(true);
        let successCount = 0;
        let failCount = 0;

        for (const item of stagedContent) {
            try {
                // Safety check for staged items added before validation fix
                if (!item.subject) {
                    console.error('Skipping item with missing subject:', item.title);
                    failCount++;
                    continue;
                }

                const data = new FormData();

                // Append all fields
                Object.keys(item).forEach(key => {
                    if (!['tempId', 'file', 'uploadType', 'subjects'].includes(key)) {
                        let value = item[key];
                        // Map "Common" to empty string for backend null conversion
                        if (key === 'stream') {
                            value = mapStreamToEnum(value);
                        }
                        data.append(key, value || '');
                    }
                });

                // Handle file/url
                if (item.uploadType === 'file' && item.file) {
                    data.append('file', item.file);
                    data.set('contentUrl', '');
                }

                const response = await apiService.createContent(data);
                if (response.success) {
                    successCount++;
                } else {
                    failCount++;
                }
            } catch (error) {
                console.error('Batch upload error for item:', item.title, error);
                failCount++;
            }
        }

        setNotification({
            isOpen: true,
            title: 'Upload Complete',
            message: `Successfully uploaded ${successCount} items. ${failCount > 0 ? `Failed: ${failCount}` : ''}`,
            type: successCount > 0 ? 'info' : 'danger'
        });

        if (successCount > 0) {
            setStagedContent([]);
            setShowAddModal(false);
            await fetchContent();
        }
        setLoading(false);
    };

    const handleSaveContent = async (e) => {
        e.preventDefault();

        // If we have staged content, maybe user wants to upload all?
        // But usually this is for editing or single direct save
        if (!editingContent && stagedContent.length > 0) {
            // If form is empty, just upload staged
            if (!formData.title) {
                await handleBatchUpload();
                return;
            }
            // If form has data, add it first then upload?
            // Let's keep it simple: Save button in footer handles editing OR single save
            // We'll add a separate footer action for batch
        }

        try {
            setLoading(true);

            // Validate
            const validation = validateForm();
            if (!validation.valid) {
                setNotification({
                    isOpen: true,
                    title: 'Validation Failed',
                    message: validation.message,
                    type: 'warning'
                });
                setLoading(false);
                return;
            }

            // Create FormData object
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                let value = formData[key];
                if (key === 'stream') {
                    value = mapStreamToEnum(value);
                }
                data.append(key, value || '');
            });

            if (uploadType === 'file' && selectedFile) {
                data.append('file', selectedFile);
                data.set('contentUrl', '');
            }

            let response;
            if (editingContent) {
                response = await apiService.updateContent(editingContent.id, data);
            } else {
                response = await apiService.createContent(data);
            }

            if (response.success) {
                setNotification({
                    isOpen: true,
                    title: editingContent ? 'Content Updated' : 'Content Created',
                    message: editingContent ? 'Content updated successfullly!' : 'Content created successfully!',
                    type: 'info'
                });
                setShowAddModal(false);
                setEditingContent(null);
                setFormData({
                    title: '',
                    description: '',
                    type: 'SAMPLE_PAPER',
                    class: '10',
                    stream: '',
                    subject: '',
                    contentUrl: '',
                    isPremium: false
                });
                setSelectedFile(null);
                setUploadType('url');
                await fetchContent();
            }
        } catch (error) {
            console.error('Save error:', error);
            setNotification({
                isOpen: true,
                title: 'Process Failed',
                message: 'Failed to save content: ' + error.message,
                type: 'danger'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleEditContent = (contentItem) => {
        setEditingContent(contentItem);
        setFormData({
            title: contentItem.title || '',
            description: contentItem.description || '',
            class: String(contentItem.class) || '10',
            stream: mapEnumToStream(contentItem.stream),
            subject: contentItem.subject || '',
            contentUrl: contentItem.contentUrl || '',
            isPremium: contentItem.isPremium || false
        });
        setShowAddModal(true);
    };

    const getTypeIcon = (type) => {
        const icons = {
            video: 'fas fa-video',
            document: 'fas fa-file-alt',
            pdf: 'fas fa-file-pdf',
            presentation: 'fas fa-file-powerpoint',
            image: 'fas fa-image',
            SAMPLE_PAPER: 'fas fa-file-contract'
        };
        return icons[type] || 'fas fa-file';
    };

    const getStatusClass = (status) => {
        return status === 'published' ? 'status-published' : 'status-draft';
    };

    const handleDeleteContent = (contentId) => {
        setDeleteModal({ isOpen: true, contentId });
    };

    const handleConfirmDelete = async () => {
        const contentId = deleteModal.contentId;
        try {
            const response = await apiService.deleteContent(contentId);
            if (response.success) {
                setDeleteModal({ isOpen: false, contentId: null });
                // Re-fetch current page to pull items from next page into view
                await fetchContent(pagination.page);
            }
        } catch (error) {
            console.error('Delete error:', error);
            setNotification({
                isOpen: true,
                title: 'Delete Failed',
                message: 'Failed to delete content: ' + error.message,
                type: 'danger'
            });
        }
    };

    const handleToggleStatus = (contentId, currentStatus) => {
        const newStatus = currentStatus === 'published' ? 'draft' : 'published';
        setContent(content.map(item =>
            item.id === contentId ? { ...item, status: newStatus } : item
        ));
    };

    if (loading) {
        return <div className="admin-loading">Loading content...</div>;
    }

    return (
        <div className="admin-dashboard">
            <Sidebar admin={admin} onLogout={handleLogout} />

            <div className="admin-main-content">
                <header className="admin-header">
                    <h1>Content Management</h1>
                    <p>Manage educational content across all classes and subjects</p>
                </header>

                <section className="content-stats">
                    <div className="stat-card">
                        <div className="stat-icon">
                            <i className="fas fa-file"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Total Content</h3>
                            <p>{stats.totalContent}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            <i className="fas fa-eye"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Total Views</h3>
                            <p>{stats.totalViews.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Published</h3>
                            <p>{stats.published}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            <i className="fas fa-edit"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Drafts</h3>
                            <p>{stats.drafts}</p>
                        </div>
                    </div>
                </section>

                <section className="admin-content-section">
                    <div className="section-header">
                        <h2>Content Library ({pagination.total})</h2>
                        <div className="header-actions">
                            {(searchTerm || selectedClass !== 'all' || selectedStream !== 'all' || selectedSubject !== 'all') && (
                                <button
                                    className="btn-clear-filters btn-sm"
                                    onClick={handleClearFilters}
                                    style={{ marginRight: '10px', color: '#718096', border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', cursor: 'pointer' }}
                                >
                                    <i className="fas fa-filter-circle-xmark"></i> Clear Filters
                                </button>
                            )}
                            <button
                                className="btn-secondary btn-sm"
                                onClick={() => setShowAddModal(true)}
                            >
                                <i className="fas fa-plus"></i> Add Content
                            </button>
                        </div>
                    </div>

                    <div className="content-filters">
                        <div className="filter-group">
                            <input
                                type="text"
                                placeholder="Search content..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>
                        <div className="filter-group">
                            <select
                                value={selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">All Classes</option>
                                {[10, 12].map((num) => (
                                    <option key={num} value={String(num)}>Class {num}</option>
                                ))}
                            </select>
                        </div>
                        {parseInt(selectedClass) >= 11 && (
                            <div className="filter-group">
                                <select
                                    value={selectedStream}
                                    onChange={(e) => setSelectedStream(e.target.value)}
                                    className="filter-select"
                                >
                                    <option value="all">All Streams</option>
                                    {STREAMS.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                        )}
                        <div className="filter-group">
                            <select
                                value={selectedSubject}
                                onChange={(e) => setSelectedSubject(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">All Subjects</option>
                                {filterSubjects.map(sub => (
                                    <option key={sub} value={sub}>{sub}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="content-grid">
                        {displayContent.map((item) => (
                            <div key={item.id} className="content-card">
                                <div className="content-header">
                                    <div className="content-type">
                                        <i className={getTypeIcon(item.type)}></i>
                                        <span>{item.type}</span>
                                    </div>
                                    <span className={`status-badge ${getStatusClass(item.status)}`}>
                                        {item.status}
                                    </span>
                                </div>

                                <div className="content-body">
                                    <h3>{item.title}</h3>
                                    <div className="content-meta">
                                        <span><i className="fas fa-graduation-cap"></i> Class {item.class}</span>
                                        <span><i className="fas fa-book"></i> {item.subject}</span>
                                        <span><i className="fas fa-layer-group"></i> {mapEnumToStream(item.stream)}</span>
                                    </div>
                                    <div className="content-details">
                                        <span><i className="fas fa-clock"></i> {item.duration}</span>
                                        <span><i className="fas fa-database"></i> {item.size}</span>
                                        <span><i className="fas fa-eye"></i> {item.views} views</span>
                                    </div>
                                </div>

                                <div className="content-footer">
                                    <small>Uploaded: {new Date(item.uploadDate).toLocaleDateString()}</small>
                                    <div className="content-actions">
                                        <button
                                            className="action-btn-small"
                                            title="Edit"
                                            onClick={() => handleEditContent(item)}
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            className="action-btn-small"
                                            title="Toggle Status"
                                            onClick={() => handleToggleStatus(item.id, item.status)}
                                        >
                                            <i className="fas fa-exchange-alt"></i>
                                        </button>
                                        <button
                                            className="action-btn-small delete-btn"
                                            title="Delete"
                                            onClick={() => handleDeleteContent(item.id)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {displayContent.length === 0 && (
                        <div className="no-content">
                            <i className="fas fa-folder-open"></i>
                            <h3>No content found</h3>
                            <p>Try adjusting your search or filters</p>
                        </div>
                    )}

                    {pagination.pages > 1 && (
                        <div className="pagination-controls">
                            <button
                                className="pagination-btn"
                                onClick={() => fetchContent(pagination.page - 1)}
                                disabled={pagination.page <= 1}
                            >
                                <i className="fas fa-chevron-left"></i> Previous
                            </button>
                            <span className="pagination-info">
                                Page {pagination.page} of {pagination.pages} ({pagination.total} items)
                            </span>
                            <button
                                className="pagination-btn"
                                onClick={() => fetchContent(pagination.page + 1)}
                                disabled={pagination.page >= pagination.pages}
                            >
                                Next <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    )}
                </section>
            </div>

            {showAddModal && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="modal-header">
                            <h2>{editingContent ? 'Edit Content' : 'Add New Content'}</h2>
                            <button className="close-btn" onClick={() => setShowAddModal(false)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSaveContent}>
                            <div className="form-grid">
                                <div className="form-group full-width">
                                    <label>Content Title*</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-input"
                                        value={formData.title}
                                        onChange={handleFormChange}
                                        placeholder="e.g. Sample Paper Set 1"
                                        required
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Description</label>
                                    <textarea
                                        name="description"
                                        className="form-textarea"
                                        value={formData.description}
                                        onChange={handleFormChange}
                                        placeholder="Enter content description..."
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Content Type*</label>
                                    <select
                                        name="type"
                                        className="form-select"
                                        value={formData.type}
                                        onChange={handleFormChange}
                                        required
                                    >
                                        <option value="pdf">PDF Document</option>
                                        <option value="SAMPLE_PAPER">Sample Paper</option>
                                        <option value="video">Video Lesson</option>
                                        <option value="presentation">Presentation</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Class*</label>
                                    <select
                                        name="class"
                                        className="form-select"
                                        value={formData.class}
                                        onChange={handleFormChange}
                                        required
                                    >
                                        {[10, 12].map((num) => (
                                            <option key={num} value={num}>Class {num}</option>
                                        ))}
                                    </select>
                                </div>

                                {parseInt(formData.class) >= 11 && (
                                    <div className="form-group">
                                        <label>Stream*</label>
                                        <select
                                            name="stream"
                                            className="form-select"
                                            value={formData.stream}
                                            onChange={handleFormChange}
                                            required
                                        >
                                            <option value="">Select Stream</option>
                                            {STREAMS.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                )}

                                <div className="form-group">
                                    <label>Subject*</label>
                                    <select
                                        name="subject"
                                        className="form-select"
                                        value={formData.subject}
                                        onChange={handleFormChange}
                                        required
                                    >
                                        <option value="">Select Subject</option>
                                        {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>

                                <div className="form-group full-width">
                                    <label>Content Source*</label>
                                    {(formData.type === 'pdf' || formData.type === 'SAMPLE_PAPER') ? (
                                        <div className="upload-type-toggle">
                                            <label className={`toggle-option ${uploadType === 'url' ? 'active' : ''}`}>
                                                <input
                                                    type="radio"
                                                    name="uploadType"
                                                    value="url"
                                                    checked={uploadType === 'url'}
                                                    onChange={() => setUploadType('url')}
                                                />
                                                URL Link
                                            </label>
                                            <label className={`toggle-option ${uploadType === 'file' ? 'active' : ''}`}>
                                                <input
                                                    type="radio"
                                                    name="uploadType"
                                                    value="file"
                                                    checked={uploadType === 'file'}
                                                    onChange={() => setUploadType('file')}
                                                />
                                                Upload File
                                            </label>
                                        </div>
                                    ) : (
                                        <div className="source-info">Using URL for {formData.type} content</div>
                                    )}

                                    {(uploadType === 'url' || (formData.type !== 'pdf' && formData.type !== 'SAMPLE_PAPER')) ? (
                                        <input
                                            type="url"
                                            name="contentUrl"
                                            className="form-input"
                                            value={formData.contentUrl}
                                            onChange={handleFormChange}
                                            placeholder={formData.type === 'video' ? "https://youtube.com/..." : "https://drive.google.com/..."}
                                            required={uploadType === 'url'}
                                        />
                                    ) : (
                                        <div className="file-upload-container">
                                            <input
                                                type="file"
                                                name="file"
                                                className="file-input"
                                                onChange={(e) => setSelectedFile(e.target.files[0])}
                                                accept=".pdf,.doc,.docx,.ppt,.pptx"
                                                required={!editingContent}
                                            />
                                            {selectedFile && <div className="file-name">Selected: {selectedFile.name}</div>}
                                            {editingContent && editingContent.contentUrl && !selectedFile &&
                                                <div className="current-file">Current: {editingContent.contentUrl}</div>
                                            }
                                        </div>
                                    )}
                                </div>

                                <div className="form-group checkbox-group">
                                    <input
                                        type="checkbox"
                                        name="isPremium"
                                        id="isPremium"
                                        checked={formData.isPremium}
                                        onChange={handleFormChange}
                                    />
                                    <label htmlFor="isPremium">Premium Content</label>
                                </div>
                            </div>

                            {!editingContent && (
                                <div className="staged-content-section">
                                    <div className="queue-actions">
                                        <button
                                            type="button"
                                            className="btn-add-queue"
                                            onClick={handleAddToQueue}
                                        >
                                            <i className="fas fa-plus"></i> Save & Add Another
                                        </button>
                                    </div>

                                    {stagedContent.length > 0 && (
                                        <div className="staged-content-list">
                                            <h3>
                                                Upload Queue ({stagedContent.length})
                                                <small>Items waiting to be uploaded</small>
                                            </h3>
                                            <div className="staged-items-container">
                                                {stagedContent.map((item) => (
                                                    <div key={item.tempId} className="staged-item">
                                                        <div className="staged-item-info">
                                                            <span className="staged-item-title">{item.title}</span>
                                                            <span className="staged-item-meta">
                                                                Class {item.class} • {item.subject} • {item.uploadType === 'file' ? 'File' : 'URL'}
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="remove-staged-btn"
                                                            onClick={() => handleRemoveStaged(item.tempId)}
                                                            title="Remove from queue"
                                                        >
                                                            <i className="fas fa-times"></i>
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn-cancel"
                                    onClick={() => {
                                        setShowAddModal(false);
                                        setEditingContent(null);
                                        setStagedContent([]);
                                    }}
                                >
                                    Cancel
                                </button>

                                {!editingContent && stagedContent.length > 0 && (
                                    <button
                                        type="button"
                                        className="btn-save batch-upload-btn"
                                        onClick={handleBatchUpload}
                                    >
                                        <i className="fas fa-upload"></i> Upload All ({stagedContent.length})
                                    </button>
                                )}

                                <button type="submit" className="btn-save">
                                    {editingContent ? 'Update Content' : 'Upload Now'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <ConfirmationModal
                isOpen={deleteModal.isOpen}
                title="Delete Content"
                message="Are you sure you want to delete this content? This action cannot be undone."
                confirmText="Delete"
                cancelText="Cancel"
                type="danger"
                onConfirm={handleConfirmDelete}
                onCancel={() => setDeleteModal({ isOpen: false, contentId: null })}
            />
            <ConfirmationModal
                isOpen={notification.isOpen}
                title={notification.title}
                message={notification.message}
                confirmText="OK"
                showCancel={false}
                type={notification.type}
                onConfirm={() => setNotification(prev => ({ ...prev, isOpen: false }))}
                onCancel={() => setNotification(prev => ({ ...prev, isOpen: false }))}
            />
        </div>
    );
};

export default ContentManagement;
