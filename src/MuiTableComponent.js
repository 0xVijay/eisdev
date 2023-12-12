import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MUITable = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});

  const columns = [
    { label: 'S. No', name: 'sno' },
    { label: 'Name', name: 'name', options: { sort: true } },
    { label: 'Record', name: 'record', options: { sort: true } },
    { label: 'Fix Recommendation', name: 'fixrecommendation' }
  ];

  data = [
    {
      sno: 1,
      name: "SPF Record Missing",
      record: "A",
      fixrecommendation: "Recommendation"
    },
    {
      sno: 2,
      name: "SPF Record Missing",
      record: "SPF",
      fixrecommendation: "Recommendation"
    },
    {
      sno: 3,
      name: "SPF Record Missing",
      record: "SPF",
      fixrecommendation: "Recommendation"
    },
    {
      sno: 4,
      name: "SPF Record Missing",
      record: "MX",
      fixrecommendation: "Recommendation"
    },
    {
      sno: 5,
      name: "SPF Record Missing",
      record: "MX",
      fixrecommendation: "Recommendation"
    },
    {
      sno: 6,
      name: "SPF Record Missing",
      record: "AA",
      fixrecommendation: "Recommendation"
    },
    {
      sno: 7,
      name: "SPF Record Missing",
      record: "MX",
      fixrecommendation: "Recommendation"
    }
  ];

  // Create a custom theme
  const getMuiTheme = () => createTheme({
    components: { // Changed from `overrides` to `components` for MUI v5
      MUIDataTableBodyCell: {
        styleOverrides: {
          root: {
            padding: '16px', // Updated padding here
          },
        },
      },
    },
  });

  const options = {
    filterType: 'checkbox',
    responsive: 'standard',
    selectableRows: 'none',
    customSearch: (searchQuery, currentRow, columns) => {
        const columnIndex = 1; // Index of 'Name' column, assuming it's the second column
        if (currentRow[columnIndex].toString().toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
          return true;
        }
        return false;
      },
      onRowClick: (rowData) => {
        setSelectedRowData({
          sno: rowData[0],
          name: rowData[1],
          record: rowData[2],
          fixrecommendation: rowData[3]
        });
        setDialogOpen(true); // Open the dialog when a row is clicked
      },
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <ThemeProvider theme={getMuiTheme()}>
      <div style={{ maxWidth: '100%', borderRadius: '8px' }}>
        <MUIDataTable
          columns={columns}
          data={data}
          title='DNS Vulnerability'
          options={options}
        />
      </div>
      {/* Dialog component to show selected row data */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Row Details</DialogTitle>
        <DialogContent>
          <Card>
            <CardContent>
              <Typography variant="h6">S. No: {selectedRowData.sno}</Typography>
              <Typography variant="body1">Name: {selectedRowData.name}</Typography>
              <Typography variant="body1">Record: {selectedRowData.record}</Typography>
              <Typography variant="body1">Fix Recommendation: {selectedRowData.fixrecommendation}</Typography>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default MUITable;
