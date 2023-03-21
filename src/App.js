import "./App.css";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./Components/Navbar";
import DataTablePageOne from "./Components/DataTable";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const styles = {
    textColor: darkMode ? "#fff" : "#000",
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
