import "./App.css";
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from "./Components/Navbar";
import PieChart from "./Components/PieChart";
import ScatterPlot from "./Components/ScatterCharts";
import BarChart from "./Components/BarChart";
import DataTablePageOne from "./Components/DataTable";
import DataTablePageTwo from "./Components/DataTable2";
import DataTablePageThree from "./Components/DataTable3";
import LineChart from "./Components/LineChart";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  const styles = {
    textColor: darkMode ? '#fff' : '#000',
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <DataTablePageOne textColor={styles.textColor} />
   
      
    </ThemeProvider>
  );
}

export default App;
