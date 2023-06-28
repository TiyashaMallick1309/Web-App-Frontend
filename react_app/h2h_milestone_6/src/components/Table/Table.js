import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Table.css';
import abcLogo from '../Header/abclogo.svg';
import hrcLogo from '../Header/hrclogo.svg';
import AddData from '../AddData/AddData';
import EditDialog from '../EditDialog/EditDialog';
import Buttons from '../Button/Buttons';
import axios from 'axios';
import DeleteConfirmation from '../Delete/DeleteConfirmation';

const Table = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
  const [editDialogData, setEditDialogData] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [refreshMessage, setRefreshMessage] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);



  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  // Enable/disable state for buttons based on selected rows
  const isEditEnabled = selectedRows.length == 1;
  const isDeleteEnabled = selectedRows.length > 0;
  const isPredictEnabled = selectedRows.length > 0;

  const handleRowSelection = (newSelection) => {
    setSelectedRows(newSelection);

    const isSingleRowSelected = newSelection.length == 1;

    if (isSingleRowSelected) {
      const selectedRowData = data.find((row) => row.id == newSelection[0]);
      setEditDialogData(selectedRowData);
    } else {
      setEditDialogData(null);
    }
  };

  const handleEditClick = () => {
    if (editDialogData) {
      console.log('Edit button clicked');
      setOpenEditDialog(true);
    }
  };

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
  };

  const handleEditDialogSave = (updatedData) => {
    // Update the row data with the edited values
    const updatedRows = data.map((row) => (row.id == updatedData.id ? updatedData : row));
    setData(updatedRows);
    setOpenEditDialog(false);
  };

  const handleDeleteClick = () => {
    if (selectedRows.length > 0) {
      setOpenDeleteConfirmation(true);
    }
  };

  const handleDeleteConfirmationClose = () => {
    setOpenDeleteConfirmation(false);
  };

  const handleDeleteConfirmationDelete = () => {
    // Perform the delete action here
    const updatedData = data.filter((row) => !selectedRows.includes(row.id));
    setData(updatedData);
    setSelectedRows([]);
    setOpenDeleteConfirmation(false);
  };

  const handlePredictClick = () => {
    const selectedRowData = data.find((row) => row.id == selectedRows[0]);
    console.log(selectedRowData);
  };

  const handleRefreshClick = () => {
    setData([]); // Clear the existing data
    setRefreshMessage('Refreshing data...');
    fetchData();
  };

  const handleRefreshData = async () => {
    handleRefreshClick();
    setRefreshMessage('Data has been refreshed.');
    setTimeout(() => {
      setRefreshMessage('');
    }, 2000);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setSearchPerformed(false);
  };

  const handleSearchClick = () => {
    // Perform search based on the searchValue
    const result = data.find((row) => row.customerOrderId == searchValue);
    setSearchResult(result ? [result] : []); // Set the search result as an array with the result or an empty array if not found
    setSearchPerformed(true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:13055/h2h_milestone_3/DataLoadingServlet');
      const formattedData = response.data.map((row, index) => ({
        id: index + 1,
        slNo: row.slNo,
        customerOrderId: row.customerOrderId,
        salesOrg: row.salesOrg,
        distributionChannel: row.distributionChannel,
        companyCode: row.companyCode,
        orderCreationDate: row.orderCreationDate,
        amountInUSD: row.amountInUSD,
        orderCurrency: row.orderCurrency,
        customerNumber: row.customerNumber,
        orderAmount: row.orderAmount,
      }));
      setData(formattedData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const columns = [
    { field: 'slNo', headerName: 'Sl No', width: 100 },
    { field: 'customerOrderId', headerName: 'CUSTOMER ORDER ID', width: 200 },
    { field: 'salesOrg', headerName: 'SALES ORG', width: 150 },
    { field: 'distributionChannel', headerName: 'DISTRIBUTION CHANNEL', width: 250 },
    { field: 'companyCode', headerName: 'COMPANY CODE', width: 150 },
    { field: 'orderCreationDate', headerName: 'ORDER CREATION DATE', width: 200 },
    { field: 'amountInUSD', headerName: 'AMOUNT IN USD', width: 150 },
    { field: 'orderCurrency', headerName: 'ORDER CURRENCY', width: 150 },
    { field: 'customerNumber', headerName: 'CUSTOMER NUMBER', width: 200 },
    { field: 'orderAmount', headerName: 'ORDER AMOUNT', width: 200 },
  ];

  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="table-container">
      <div className="header">
        <div className="logo-container">
          <img className="abc-logo" src={abcLogo} alt="ABC Product Logo" />
        </div>
        <div className="logo-container">
          <img className="hrc-logo" src={hrcLogo} alt="Highradius Logo" />
        </div>
      </div>
      <div className="invoice-list">Invoice List</div>
      <div className="body">
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleTabChange('home')}
          >
            HOME PAGE
          </button>
          <button
            className={`tab-button ${activeTab === 'add-data' ? 'active' : ''}`}
            onClick={() => handleTabChange('add-data')}
          >
            ADD DATA
          </button>
          <button
            className={`tab-button ${activeTab === 'analytics-view' ? 'active' : ''}`}
            onClick={() => handleTabChange('analytics-view')}
          >
            ANALYTICS VIEW
          </button>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search Customer Order ID"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <button className="advanced-search-button" onClick={handleSearchClick}>
              ADVANCED SEARCH
            </button>
          </div>
        </div>
        {activeTab === 'home' ? (
          <div style={{ height: 'calc(100% - 40px)', width: '100%' }}>
            {searchPerformed ? (
              searchResult.length > 0 ? (
                <DataGrid
                  className="data-table"
                  rows={searchResult}
                  columns={columns}
                  checkboxSelection
                  disableSelectionOnClick
                  autoHeight
                  disableExtendRowFullWidth
                  onSelectionModelChange={handleRowSelection}
                  selectionModel={selectedRows}
                />
              ) : (
                <div>No customer found with this ID.</div>
              )
            ) : (
              <DataGrid
                className="data-table"
                rows={data}
                columns={columns}
                checkboxSelection
                disableSelectionOnClick
                autoHeight
                disableExtendRowFullWidth
                onSelectionModelChange={handleRowSelection}
                selectionModel={selectedRows}
              />
            )}
          </div>
        ) : activeTab === 'add-data' ? (
          <AddData />
        ) : (
          <div className="analytics-view">Analytics View</div>
        )}
        <Buttons
          isEditEnabled={isEditEnabled}
          isDeleteEnabled={isDeleteEnabled}
          isPredictEnabled={isPredictEnabled}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          handlePredictClick={handlePredictClick}
          handleRefreshClick={handleRefreshClick}
        /> {/* Render the Buttons component */}
      </div>
      {openEditDialog && (
        <div className="overlay">
          <EditDialog rowData={editDialogData} onClose={handleEditDialogClose} onSave={handleEditDialogSave} />
        </div>
      )}
      {openDeleteConfirmation && (
        <DeleteConfirmation onClose={handleDeleteConfirmationClose} onDelete={handleDeleteConfirmationDelete} />
      )}
      <div className="footer">
        <div className="privacy-policy">
          Privacy Policy | © 2023 HighRadius Corporation. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Table;
