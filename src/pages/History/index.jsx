import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { GridToolbar } from "@mui/x-data-grid";
import { Button } from "primereact/button";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import Header from "../../components/Header";
import { Toast } from 'primereact/toast';
import { useRef } from 'react';


const History = () => {

  const toast = useRef(null);


  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const showSuccessDelete = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'History Deleted', life: 1500});
    setDeleteProductDialog(false);

}

  const rows = [
    {
      id: 1,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
    {
      id: 2,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
    {
      id: 3,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
  
  ];
  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const confirmDeleteProduct = (product) => {
    setDeleteProductDialog(true);
  };






  // tayeb
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
    
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button label="Yes" onClick={showSuccessDelete} icon="pi pi-check" severity="danger" />
    </React.Fragment>
  );

  const columns = [
    { field: "id", headerName: "Id" },

    { field: "adress de noeud", headerName: "Adress de noeud", width: 200 },

    {
      field: "zone",
      headerName: "Zone",
      width: 200,
    },
    { field: "date", headerName: "Date", width: 150 },
    { field: "Heure", headerName: "Heure", width: 150 },
    { field: "Durée", headerName: "Durée", width: 150 },
    {
      field: "coùt de réparation",
      headerName: "coùt de réparation",
      width: 250,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: () => (
        <React.Fragment >
    
          <Button
            className="p-button-sm d-flex ml-6"
            icon="pi pi-trash"
            outlined
            severity="danger"
            onClick={() => confirmDeleteProduct()}
          />
        </React.Fragment>
      ),
    },
  ];


  
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="History" subtitle="welcome to you History" />
      </Box>
      <Box
        m="7px 0 0 0"
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiChackbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            panel: {
              sx: {
                "& .MuiButtonBase-root": {
                  color: colors.grey[100],
                },
              },
            },
          }}
        />
      </Box>
      <Dialog
        visible={deleteProductDialog}
        style={{ width: "32rem"}}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteProductDialogFooter}
        onHide={hideDeleteProductDialog}
        
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />

          <span>Are you sure you want to delete</span>
        </div>
      </Dialog>

      <Toast ref={toast} />

    </Box>
  );
};

export default History;
