import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";
import Topbar from "./pages/global/Topbar";

import History from "./pages/History";
import InterfaceDashboard from "./interfaces/interfaceDashboard";
import InterfaceLogin from "./interfaces/interfaceLogin";
import Dashboard from "./pages/dashboard";
// import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Form from "./pages/form";
// import Calendar from "./pages/calendar";
// import Bar from "./pages/bar";
import Line from "./pages/line";
//import Pie from "./pages/pie";
// import FAQ from "./pages/faq";
import Geography from "./pages/geography";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (

  
  <HelmetProvider>


<Routes>

        <Route path="/" element={<InterfaceDashboard />} >
              <Route index element={<Dashboard />} /> 
              <Route path="form" element={<Form />}/>
              <Route path="contacts" element={<Contacts />} />
              <Route path="History" element={<History />} />
              <Route path="line" element={<Line />} />
              <Route path="geography" element={<Geography />} />
              
        </Route>

          <Route path="/login" element={<InterfaceLogin />} >
      
          </Route>
          
</Routes>
</HelmetProvider>

    
  );
};

export default App;
