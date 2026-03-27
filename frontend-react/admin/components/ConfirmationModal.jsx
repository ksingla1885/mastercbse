import React from 'react';
import '../styles/confirmation-modal.css';

const ConfirmationModal = ({ 
    isOpen, 
    title = "Confirm Action", 
    message = "Are you sure you want to proceed?", 
    confirmText = "OK", 
    cancelText = "Cancel", 
    onConfirm, 
    onCancel,
    type = "danger", // danger, warning, info
    showCancel = true
}) => {
    if (!isOpen) return null;

    const getIcon = () => {
        switch (type) {
            case 'danger': return <i className="fas fa-exclamation-triangle"></i>;
            case 'warning': return <i className="fas fa-exclamation-circle"></i>;
            case 'info': return <i className="fas fa-info-circle"></i>;
            default: return <i className="fas fa-question-circle"></i>;
        }
    };

    return (
        <div className="modal-overlay confirmation-modal-overlay">
            <div className="modal-container confirmation-modal-container">
                <div className="confirmation-modal-content">
                    <div className={`confirmation-icon ${type}`}>
                        {getIcon()}
                    </div>
                    <div className="confirmation-text">
                        <h3>{title}</h3>
                        <p>{message}</p>
                    </div>
                </div>
                <div className="modal-footer confirmation-modal-footer">
                    {showCancel && (
                        <button 
                            type="button" 
                            className="btn-cancel" 
                            onClick={onCancel}
                        >
                            {cancelText}
                        </button>
                    )}
                    <button 
                        type="button" 
                        className={`btn-confirm ${type}`} 
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
