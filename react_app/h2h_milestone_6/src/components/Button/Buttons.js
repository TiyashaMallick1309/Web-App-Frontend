import React, { useState } from 'react';
import './Buttons.css';

const Buttons = ({
    isEditEnabled,
    isDeleteEnabled,
    isPredictEnabled,
    handleEditClick,
    handleDeleteClick,
    handlePredictClick,
    handleRefreshClick,
}) => {
    const [refreshMessage, setRefreshMessage] = useState('');

    const handleRefreshData = () => {
        handleRefreshClick();
        setRefreshMessage('Data has been refreshed.');
        setTimeout(() => {
            setRefreshMessage('');
        }, 2000);
    };

    return (
        <div className="buttons-section">
            <button className="refresh-button" onClick={handleRefreshData}>
                Refresh Data
            </button>
            <button
                className={`edit-button ${isEditEnabled ? '' : 'disabled'}`}
                onClick={handleEditClick}
                disabled={!isEditEnabled}
            >
                Edit
            </button>
            <button
                className={`delete-button ${isDeleteEnabled ? '' : 'disabled'}`}
                onClick={handleDeleteClick}
                disabled={!isDeleteEnabled}
            >
                Delete
            </button>
            <button
                className={`predict-button ${isPredictEnabled ? '' : 'disabled'}`}
                onClick={handlePredictClick}
                disabled={!isPredictEnabled}
            >
                Predict
            </button>
            {refreshMessage && <div className="refresh-message">{refreshMessage}</div>}
        </div>
    );
};

export default Buttons;
