import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import { Helmet } from "react-helmet-async";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import  { useState} from 'react';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import 'primeflex/primeflex.css';
import { Email } from "@mui/icons-material";
const Contacts = () => {
  const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);

    const toast = useRef(null);

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'User updated', life: 2000});
        setProductDialog(false);
        setDeleteProductDialog(false);

    }
    
    const showSuccessDelete = () => {
      toast.current.show({severity:'success', summary: 'Success', detail:'User Deleted', life: 2000});
      setDeleteProductDialog(false);

  }
  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const confirmDeleteProduct = (product) => {
    setDeleteProductDialog(true);
  };


  
  const editProduct = (product) => {
    setProductDialog(true);
  };

  const hideDialog = () => {
    setProductDialog(false);
  };
  const productDialogFooter = (
    <React.Fragment>
        <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
        <Button label="Save" icon="pi pi-check"  onClick={showSuccess} />
    </React.Fragment>
);

// tayeb
const deleteProductDialogFooter = (
    <React.Fragment>
        <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
        <Button label="Yes" icon="pi pi-check" severity="danger" onClick={showSuccessDelete} />
    </React.Fragment>
);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "Id", width: 150 },
    { field: "FirstName", headerName: "FirstName", width: 150 },
    {field: "LastName",headerName: "LastName",width: 200,},
    { field: "phone", headerName: "Phone Number", width: 250 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "action", headerName: "Action", width: 200,    
    renderCell: (params) => (
      <React.Fragment>
            <Button icon="pi pi-pencil" size="sm" rounded outlined className="mr-2" onClick={() => editProduct()} />
            <Button icon="pi pi-trash" size="sm" rounded outlined severity="danger" onClick={() => confirmDeleteProduct()} />
      </React.Fragment>
    ),
     },

  ];
  const rows = [
    {
      id: 1,
      FirstName: "Anya Stark",
      LastName:"Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
  
    },
    {
      id: 2,
      FirstName: "Anya Stark",
      LastName:"Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    
    },
    {
      id: 3,
      FirstName: "Anya Stark",
      LastName:"Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
  
    },
    {
      id: 4,
      FirstName: "Anya Stark",
      LastName:"Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
  
    }
  ];
  return (
    



  <>
      <Helmet>
        <title> Form </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
</Helmet>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Users Informations" subtitle="welcome to you users informations" />
        </Box>
        <Box
          m="7px 0 0 0"
          width="100%"
          height="70vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              // borderBottom: "none",
            },
    
            // "& .name-column--cell": {
            //   color: colors.redAccent[600],
            // },
            //header color
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              // borderBottom: "none",
            },
            //color body
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
    
            //color footer 
            "& .MuiDataGrid-footerContainer": {
              //  borderTop: "none",
              fontSize:'15px',
              backgroundColor: colors.blueAccent[700],
            },
    
    
            // "& .MuiCheckbox-root": {
            //   color: `${colors.greenAccent[200]} !important`,
            // },
    
            
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
    
            },
    
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            components={{ Toolbar: GridToolbar}}
            componentsProps={{
              panel: {
                sx: {
                  '& .MuiButtonBase-root': {
                    color: colors.grey[100],
                  },
            
              
                },
    
              
              },
            }}
          />
        </Box>
        <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                  <div className="confirmation-content">
                      <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    
                          <span>
                              Are you sure you want to delete 
                          </span>
                      
                  </div>
              </Dialog>
              
              <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="User Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                  {/* <img className="product-image block m-auto pb-3" /> */}
                  <div className="field">
                      <label htmlFor="name" className="font-bold">
                          First Name 
                      </label>
                      <InputText id="  First Name "  required autoFocus  />
                      
                  </div>
                  <div className="field">
                      <label htmlFor="description" className="font-bold">
                          Last Name
                      </label>
                      <InputText id="Last Name"  required rows={3} cols={20} />
                  </div>
                  <div className="field">
                      <label htmlFor="description" className="font-bold" >
                        Email
                      </label>
                      <InputText id="Last Name" type={Email} required rows={3} cols={20} />
                  </div>
    
                  <div className="formgrid grid">
                      <div className="field col">
                          <label htmlFor="price" className="font-bold">
                              Phone
                          </label>
                          <InputNumber id="price"   mode="currency" currency="USD" locale="en-US" />
                      </div>
                      <div className="field col">
                          <label htmlFor="quantity" className="font-bold">
                              Adress
                          </label>
                          <InputNumber id="quantity"   />
                      </div>
                  </div>
              </Dialog>
              <Toast ref={toast} />
    
      </Box>
  </>
  );
};

export default Contacts;

