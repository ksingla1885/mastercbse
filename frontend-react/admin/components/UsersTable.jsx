import React from 'react';

const UsersTable = ({ users }) => {
    const getStatusClass = (status) => {
        return status === 'Premium' ? 'status-premium' : 'status-free';
    };

    return (
        <div className="users-table-container">
            <table className="users-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Stream</th>
                        <th>Status</th>
                        <th>Join Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.stream}</td>
                            <td>
                                <span className={`status-badge ${getStatusClass(user.status)}`}>
                                    {user.status}
                                </span>
                            </td>
                            <td>{new Date(user.joinDate).toLocaleDateString()}</td>
                            <td>
                                <div className="table-actions">
                                    <button className="action-btn-small" title="View">
                                        <i className="fas fa-eye"></i>
                                    </button>
                                    <button className="action-btn-small" title="Edit">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="action-btn-small" title="Delete">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
