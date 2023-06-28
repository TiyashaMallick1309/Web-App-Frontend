import React, { useState } from 'react';
import './AddData.css';
import axios from 'axios';

const AddData = () => {
    const [customerOrderId, setCustomerOrderId] = useState('');
    const [salesOrg, setSalesOrg] = useState('');
    const [distributionChannel, setDistributionChannel] = useState('');
    const [customerNumber, setCustomerNumber] = useState('');
    const [companyCode, setCompanyCode] = useState('');
    const [orderCurrency, setOrderCurrency] = useState('');
    const [amountInUSD, setAmountInUSD] = useState('');
    const [orderCreationDate, setOrderCreationDate] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Create a payload object with the form data
        const payload = {
            customerOrderId,
            salesOrg,
            distributionChannel,
            customerNumber,
            companyCode,
            orderCurrency,
            amountInUSD,
            orderCreationDate
        };

        try {
            // Send a POST request to the backend API
            await axios.post('/api/addData', payload);

            // Reset the form fields
            setCustomerOrderId('');
            setSalesOrg('');
            setDistributionChannel('');
            setCustomerNumber('');
            setCompanyCode('');
            setOrderCurrency('');
            setAmountInUSD('');
            setOrderCreationDate('');

            // Display a success message or perform any other necessary actions
            console.log('Data added successfully!');
        } catch (error) {
            // Handle error response from the server
            console.log('Error adding data:', error);
        }
    };

    const handleClearData = () => {
        setCustomerOrderId('');
        setSalesOrg('');
        setDistributionChannel('');
        setCustomerNumber('');
        setCompanyCode('');
        setOrderCurrency('');
        setAmountInUSD('');
        setOrderCreationDate('');
    };

    return (
        <div className="add-data-container">
            <form className="add-data-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                    <div className="form-field">
                        <input
                            type="text"
                            placeholder="CUSTOMER ORDER ID"
                            value={customerOrderId}
                            onChange={(event) => setCustomerOrderId(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <input
                            type="text"
                            placeholder="SALES ORG"
                            value={salesOrg}
                            onChange={(event) => setSalesOrg(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <input
                            type="text"
                            placeholder="DISTRIBUTION CHANNEL"
                            value={distributionChannel}
                            onChange={(event) => setDistributionChannel(event.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-field">
                        <input
                            type="text"
                            placeholder="CUSTOMER NUMBER"
                            value={customerNumber}
                            onChange={(event) => setCustomerNumber(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <input
                            type="text"
                            placeholder="COMPANY CODE"
                            value={companyCode}
                            onChange={(event) => setCompanyCode(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <input
                            type="text"
                            placeholder="ORDER CURRENCY"
                            value={orderCurrency}
                            onChange={(event) => setOrderCurrency(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <input
                            type="number"
                            placeholder="AMOUNT IN USD"
                            value={amountInUSD}
                            onChange={(event) => setAmountInUSD(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <input
                            type="date"
                            placeholder="ORDER CREATION DATE"
                            value={orderCreationDate}
                            onChange={(event) => setOrderCreationDate(event.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <button type="submit" className="submit-button">ADD</button>
                    <button type="button" className="clear-button" onClick={handleClearData}>CLEAR DATA</button>
                </div>
            </form>
        </div>
    );
};

export default AddData;
