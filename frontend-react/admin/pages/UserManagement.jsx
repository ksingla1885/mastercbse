import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { apiService } from '../services/apiService';
import Sidebar from '../components/Sidebar';
import ConfirmationModal from '../components/ConfirmationModal';
import '../styles/dashboard.css';
import '../styles/sidebar.css';
import '../styles/user-management.css';
import '../styles/confirmation-modal.css';

const UserManagement = () => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStream, setFilterStream] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');
    const [deleteModal, setDeleteModal] = useState({ isOpen: false, userId: null });
    const [notification, setNotification] = useState({ isOpen: false, title: '', message: '', type: 'info' });
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
                    console.log('UserManagement auto-login failed, using test admin:', loginError.message);
                }

                // Set admin user
                const currentAdmin = { 
                    name: 'Ketan Singla', 
                    email: import.meta.env.VITE_ADMIN_EMAIL, 
                    role: 'admin' 
                };
                setAdmin(currentAdmin);
                localStorage.setItem('adminUser', JSON.stringify(currentAdmin));

                // Fetch users data
                await fetchUsers();
            } catch (error) {
                console.error('Page initialization error:', error);
            } finally {
                setLoading(false);
            }
        };

        initializePage();
    }, []);

    useEffect(() => {
        if (!loading) {
            fetchUsers();
        }
    }, [searchTerm, filterStream, filterStatus]);

    const fetchUsers = async () => {
        try {
            const params = {
                search: searchTerm,
                stream: filterStream !== 'all' ? filterStream : '',
                status: filterStatus !== 'all' ? filterStatus : ''
            };

            const response = await apiService.getUsers(params);

            if (response.success) {
                setUsers(response.users);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            // Set empty users array if API fails
            setUsers([]);
        }
    };

    const handleLogout = async () => {
        try {
            await authService.logout();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStream = filterStream === 'all' || user.stream === filterStream;
        const matchesStatus = filterStatus === 'all' || user.status === filterStatus;

        return matchesSearch && matchesStream && matchesStatus;
    });

    const getStatusClass = (status) => {
        return status === 'Premium' ? 'status-premium' : 'status-free';
    };

    const handleViewUser = (userId) => {
        console.log('View user:', userId);
        // Navigate to user details page
    };

    const handleEditUser = (userId) => {
        console.log('Edit user:', userId);
        // Open edit modal or navigate to edit page
    };

    const handleDeleteUser = (userId) => {
        setDeleteModal({ isOpen: true, userId });
    };

    const handleConfirmDelete = async () => {
        const userId = deleteModal.userId;
        try {
            const response = await apiService.deleteUser(userId);
            if (response.success) {
                setUsers(users.filter(user => user.id !== userId));
                setDeleteModal({ isOpen: false, userId: null });
            }
        } catch (error) {
            console.error('Delete error:', error);
            setNotification({
                isOpen: true,
                title: 'Operation Failed',
                message: 'Failed to delete user: ' + error.message,
                type: 'danger'
            });
        }
    };

    const handleToggleStatus = (userId, currentStatus) => {
        const newStatus = currentStatus === 'Premium' ? 'Free' : 'Premium';
        console.log('Toggle status:', userId, newStatus);
        // Update user status and refresh list
    };

    if (loading) {
        return <div className="admin-loading">Loading users...</div>;
    }

    return (
        <div className="admin-dashboard">
            <Sidebar admin={admin} onLogout={handleLogout} />

            <div className="admin-main-content">
                <header className="admin-header">
                    <h1>User Management</h1>
                    <p>Manage and monitor all registered users</p>
                </header>

                <section className="admin-content-section">
                    <div className="section-header">
                        <h2>Users ({filteredUsers.length})</h2>
                        <div className="user-actions">
                            <button className="btn-primary">
                                <i className="fas fa-user-plus"></i> Add User
                            </button>
                            <button className="btn-secondary">
                                <i className="fas fa-download"></i> Export
                            </button>
                        </div>
                    </div>

                    <div className="filters-section">
                        <div className="filter-group">
                            <input
                                type="text"
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>
                        <div className="filter-group">
                            <select
                                value={filterStream}
                                onChange={(e) => setFilterStream(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">All Streams</option>
                                <option value="Science">Science</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Arts">Arts</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">All Status</option>
                                <option value="Premium">Premium</option>
                                <option value="Free">Free</option>
                            </select>
                        </div>
                    </div>

                    <div className="users-table-container">
                        <table className="users-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Class</th>
                                    <th>Stream</th>
                                    <th>Status</th>
                                    <th>Join Date</th>
                                    <th>Last Active</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>
                                            <div className="user-info">
                                                <div className="user-avatar">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                                <span>{user.name}</span>
                                            </div>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.class}</td>
                                        <td>{user.stream}</td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(user.status)}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td>{new Date(user.joinDate).toLocaleDateString()}</td>
                                        <td>{new Date(user.lastActive).toLocaleDateString()}</td>
                                        <td>
                                            <div className="table-actions">
                                                <button
                                                    className="action-btn-small"
                                                    title="View"
                                                    onClick={() => handleViewUser(user.id)}
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </button>
                                                <button
                                                    className="action-btn-small"
                                                    title="Edit"
                                                    onClick={() => handleEditUser(user.id)}
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button
                                                    className="action-btn-small"
                                                    title="Toggle Status"
                                                    onClick={() => handleToggleStatus(user.id, user.status)}
                                                >
                                                    <i className="fas fa-exchange-alt"></i>
                                                </button>
                                                <button
                                                    className="action-btn-small delete-btn"
                                                    title="Delete"
                                                    onClick={() => handleDeleteUser(user.id)}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredUsers.length === 0 && (
                        <div className="no-users">
                            <i className="fas fa-users-slash"></i>
                            <h3>No users found</h3>
                            <p>Try adjusting your search or filters</p>
                        </div>
                    )}
                </section>
            </div>

            <ConfirmationModal
                isOpen={deleteModal.isOpen}
                title="Delete User"
                message="Are you sure you want to delete this user? This action will permanently remove their access."
                confirmText="Delete"
                cancelText="Cancel"
                type="danger"
                onConfirm={handleConfirmDelete}
                onCancel={() => setDeleteModal({ isOpen: false, userId: null })}
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

export default UserManagement;
