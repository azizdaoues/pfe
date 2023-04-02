import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import {
    Box,
    useTheme,
    Typography,
  } from "@mui/material";
  import Grid from "@mui/material/Unstable_Grid2";
  import { tokens } from "../theme";

 
  //import React, { useRef } from 'react';
  //import { SpeedDial } from 'primereact/speeddial';
  //import { Toast } from 'primereact/toast';
  import { GiTeePipe } from 'react-icons/gi';
  import { SpeedDial } from 'primereact/speeddial';
  import { Toast } from 'primereact/toast';
  
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";                                         
        

const GeographyChart = () => {
    

    const toast = useRef(null);
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        }
    ];



  


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const mapRef = useRef(null);
  const tunisiaCoord = fromLonLat([10.755864432602777,
    34.83940902683895]);
  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      view: new View({
        center: tunisiaCoord,
        zoom: 16.5,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
    });

    return () => {
      map.dispose();
    };
  }, []);

  return (
<>

    
    <div ref={mapRef} style={{ width: '100%', height: '400px' }}>
      <div id="popup"></div>
      


    </div>
    </>  
  );
};


export default GeographyChart;