import React from 'react';
import './DeleteConfirmation.css';

const DeleteConfirmation = ({ onClose, onDelete }) => {
    const handleDelete = () => {
        onDelete();
        onClose();
    };

    return (
        <div className="delete-confirmation">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete the selected row(s)?</p>
            <div className="delete-confirmation-buttons">
                <button onClick={handleDelete}>Delete</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default DeleteConfirmation;
