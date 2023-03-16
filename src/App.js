import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

import Topbar from "./pages/global/Topbar";
import History from "./pages/History";

import Dashboard from "./pages/dashboard";
// import Team from "./pages/team";
 import Contacts from "./pages/contacts";
import Form from "./pages/form";
// import Calendar from "./pages/calendar";
// import Bar from "./pages/bar";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from "./pages/faq";
// import Geography from "./pages/geography";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />
              <Routes>
              <Route path="/form" element={<Form />}/>
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/" element={<Dashboard />} /> 
              <Route path="/History" element={<History />} />

              </Routes> 
              {/* // <Routes>
              //   <Route path="/" element={<Dashboard />} /> 
              //   <Route path="/team" element={<Team />} />
              //   <Route path="/contacts" element={<Contacts />} />
              //   <Route path="/form" element={<Form />}
              //   <Route path="/bar" element={<Bar />} />
              //   <Route path="/pie" element={<Pie />} />
              //   <Route path="/line" element={<Line />} />
              //   <Route path="/faq" element={<FAQ />} />
              //   <Route path="/calendar" element={<Calendar />} />
              //   <Route path="/geography" element={<Geography />} />
              // </Routes> */}
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
