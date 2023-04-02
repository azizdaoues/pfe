import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useRef } from 'react';
import { tokens } from "../../theme";
import Grid from "@mui/material/Unstable_Grid2";
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { Helmet} from "react-helmet-async";
import GeographyChart  from "../../components/GeographyChart";


const Dashboard = () => {

  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  const toast = useRef(null);

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
    {
      id: 4,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
    {
      id: 5,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
    {
      id: 6,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
    {
      id: 7,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
    {
      id: 8,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
    {
      id: 9,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
    {
      id: 10,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
    {
      id: 11,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
    {
      id: 12,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
    {
      id: 13,
      FirstName: "Anya Stark",
      LastName: "Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
    },
  
  
  ];
  return (
    
  <>
      <Helmet>
        <title> Dashboard </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
</Helmet>
      <Box m="20px">
        {/* HEADER */}
    
        <Box
          display={smScreen ? "flex" : "block"}
          flexDirection={smScreen ? "row" : "column"}
          justifyContent={smScreen ? "space-between" : "start"}
          alignItems={smScreen ? "center" : "start"}
          m="10px 0"
        >
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
    
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="18°C"
                subtitle="Emails Sent"
                progress="0.75"
                increase="+14%"
                icon={
                  <DeviceThermostatIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
                  />
                }
              />
            </Box>
          </Grid>
    
    
    
    
    
    
    
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="431,225"
                subtitle="Sales Obtained"
                progress="0.50"
                increase="+21%"
                icon={
                  <InvertColorsIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="32,441"
                subtitle="New Clients"
                progress="0.30"
                increase="+5%"
                icon={
                  <PersonAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="1,325,134"
                subtitle="Traffic Received"
                progress="0.80"
                increase="+43%"
                icon={
                  <TrafficIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
                  />
                }
              />
            </Box>
          </Grid>
    
    
    
    
          <Grid
            xs={12}
            sm={12}
            md={8}
            lg={8}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={12}>
              <Box backgroundColor={colors.primary[400]}>
                <Box
                  mt="25px"
                  p="0 30px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      color={colors.grey[100]}
                    >
                      Revenue Generated
                    </Typography>
                    {/* <Typography
                      variant="h5"
                      fontWeight="600"
                      color={colors.greenAccent[500]}
                    >
                      $58,373,698
                    </Typography> */}
                  </Box>
                  <Box>
                
                  </Box>
                </Box>
                <Box height="250px" m="-20px 0 0 0">
                  {/* <LineChart isDashboard={true} /> */}
                </Box>
              </Box>
            </Grid>
            
            {/* <Grid xs={12} sm={12} md={6}>
              <Box backgroundColor={colors.primary[400]} p="30px">
                <Typography variant="h5" fontWeight="600">
                  Campaign
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mt="25px"
                >
                  {/* <ProgressCircle size="125" /> */}
                  {/* <Typography
                    variant="h5"
                    color={colors.greenAccent[500]}
                    sx={{ mt: "15px" }}
                  >
                    $48,352 revenue generated
                  </Typography>
                  <Typography>
                    Includes extra misc expenditures and costs
                  </Typography> */}
                {/* </Box> */}
              {/* </Box> */}
            {/* </Grid>  */}
    
    
    
            <Grid xs={12} sm={12} md={12}>
              <Box backgroundColor={colors.primary[400]}>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ padding: "30px 30px 0 30px" }}
                >
                  Geography
                </Typography>
                <Box height="250px" mt="-20px">
                 
                  
                </Box>
              </Box>
          
            </Grid>
    
    
    
    
    
    
    
    
          </Grid>
    
    
    
    
    
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box
              backgroundColor={colors.primary[400]}
              maxHeight="34vh"
              overflow="auto"
              m="25px 0 0 0"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                color={colors.grey[100]}
                p="15px"
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                   Lists Users
                </Typography>
              </Box>
               {rows.map((rows, i) => {
                return ( 
                  <Box
                     key={`${rows}-${i}`}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="600"
                        color={colors.greenAccent[100]}
                      >
                         {rows.id} 
                      </Typography>
                      {/* <Typography color={colors.grey[100]}>
                         {rows.FirstName} 
                      </Typography> */}
                    </Box>
                     <Box color={colors.grey[100]}>{rows.FirstName}</Box> 
                    <Box
                      color={colors.greenAccent[500]}
                      p="5px 10px"
                      borderRadius="4px"
                    >
                       {rows.email} 
                    </Box>
                  </Box>
                 ); 
             })} 
            </Box>
    
            <Box
              backgroundColor={colors.primary[400]}
              maxHeight="34vh"
              overflow="auto"
              m="25px 0 0 0"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                color={colors.grey[100]}
                p="15px"
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                   Lists history
                </Typography>
              </Box>
               {rows.map((rows, i) => {
                return ( 
                  <Box
                     key={`${rows}-${i}`}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="600"
                        color={colors.greenAccent[100]}
                      >
                         {rows.id} 
                      </Typography>
                      {/* <Typography color={colors.grey[100]}>
                         {rows.FirstName} 
                      </Typography> */}
                    </Box>
                     <Box color={colors.grey[100]}>{rows.FirstName}</Box> 
                    <Box
                      color={colors.greenAccent[500]}
                      p="5px 10px"
                      borderRadius="4px"
                    >
                       {rows.email} 
                    </Box>
                  </Box>
                 ); 
             })} 
            </Box>
    
          </Grid>
    
          <Grid xs={12} sm={12} md={12}>
              <Box backgroundColor={colors.primary[400]}>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ padding: "30px 30px 0 30px" }}
                >
                Geography
                </Typography>
                <Box height="400px" mt="20px">
                 <GeographyChart /> 
                </Box>
              </Box>
          
            </Grid>
        {/* GRID & CHARTS */}
      </Grid>
      </Box>
  </>






  );
};

export default Dashboard;
