import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Helmet } from "react-helmet-async";
import 'primeflex/primeflex.css';
import  { useState} from 'react';
import { MdMemory } from 'react-icons/md';
import {

  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { GiTeePipe } from 'react-icons/gi';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
const Geography = () => {
  const [PipeDialog, setPipetDialog] = useState(false);

  const AddPipe = (product) => {
    setPipetDialog(true);
  };

  const hideDialog = () => {
    setPipetDialog(false);
  };
  const productDialogFooter = (
    <React.Fragment>
        <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
        <Button label="Save" icon="pi pi-check"   />
    </React.Fragment>
);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const toast = useRef(null);
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
              AddPipe();
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-plus',
            command: () => {
              AddPipe();
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
              AddPipe();
                // toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
    
    ];
  return (

<>
<Helmet>
        <title> Geography </title>
</Helmet>

<Box m="20px" height="80vh" p="2px">

<Header title="Geography" subtitle="welcome to you Geography" />
<div>
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="space-between" >
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            height="60px"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="space-around"

          >
            
           <div >
                <GiTeePipe
                style={{
                    color: colors.greenAccent[600]

                  }}
                  size="30px"
                /> 
            </div>
            <div >
                <Typography
                variant="h4"
                 fontWeight="bold"
                sx={{ color: colors.grey[100] }}
                    >
                Pipe
               </Typography>
            </div>  
            <div  style={{ marginBottom: '39px' ,marginRight: '40px'}}>
                <Toast ref={toast} />

                <SpeedDial model={items}  radius={120} type="quarter-circle" direction="up-right" buttonClassName="p-button" buttonStyle={{ width: '40px', height: '40px' }} />
            </div>    
            
            
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            height="60px"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <div  style={{ marginBottom: '39px', marginRight:'23px'  }}>
                <Toast ref={toast} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" buttonClassName="p-button" buttonStyle={{ width: '40px', height: '40px' }} />
            </div>    
               
            <div >
                <Typography
                variant="h4"
                 fontWeight="bold"
                sx={{ color: colors.grey[100] }}
                    >
                Noeud
               </Typography>
            </div>  
            
            <div >
                <MdMemory
                style={{
                    color: colors.greenAccent[600]

                  }}
                  size="40px"
                /> 
            </div>
          </Box>
        </Grid>
    </Grid>
    </div> <br/>


  

          <GeographyChart />

        
      </Box>


      <Dialog visible={PipeDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header=" Add Pipe " modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                  {/* <img className="product-image block m-auto pb-3" /> */}
                  <div className="field">
                      <label htmlFor="name" className="font-bold">
                          Latitude 
                      </label>
                      <InputText id="  First Name "  required autoFocus  />
                      
                  </div>
                  <div className="field">
                      <label htmlFor="description" className="font-bold">
                        Longitude
                      </label>
                      <InputText id="Last Name"  required rows={3} cols={20} />
                  </div>
              
              </Dialog>


        
</>

  );
};

export default Geography;





