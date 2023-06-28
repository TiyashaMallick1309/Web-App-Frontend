import React, { useState } from 'react';
import './EditDialog.css';

const EditDialog = ({ rowData, onClose, onSave }) => {
    const [orderCurrency, setOrderCurrency] = useState(rowData.orderCurrency);
    const [companyCode, setCompanyCode] = useState(rowData.companyCode);
    const [distributionChannel, setDistributionChannel] = useState(rowData.distributionChannel);

    const handleSave = () => {
        const updatedData = {
            ...rowData,
            orderCurrency,
            companyCode,
            distributionChannel,
        };
        onSave(updatedData);
    };

    return (
        <div className="edit-dialog">
            <h2>Edit Row</h2>
            <div>
                <label htmlFor="orderCurrency">Order Currency:</label>
                <input
                    type="text"
                    id="orderCurrency"
                    value={orderCurrency}
                    onChange={(e) => setOrderCurrency(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="companyCode">Company Code:</label>
                <input
                    type="text"
                    id="companyCode"
                    value={companyCode}
                    onChange={(e) => setCompanyCode(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="distributionChannel">Distribution Channel:</label>
                <input
                    type="text"
                    id="distributionChannel"
                    value={distributionChannel}
                    onChange={(e) => setDistributionChannel(e.target.value)}
                />
            </div>
            <div className="edit-dialog-buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default EditDialog;
