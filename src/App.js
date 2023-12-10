import React, { useMemo, useState } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ToggleThemeButton from "./ToggleThemeButton";
import TabNavigation from "./navigation/TabNavigation";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  const getDefaultTheme = () => {
    const lastSelectedTheme = localStorage.getItem("darkModeEnabled");
    return lastSelectedTheme ? lastSelectedTheme === "true" : false;
  };

  const [darkModeEnabled, setDarkModeEnabled] = useState(getDefaultTheme());
  const [pageTitle, setPageTitle] = useState("Throw dice");
  const appliedTheme = useMemo(
    () => createTheme(darkModeEnabled ? darkTheme : lightTheme),
    [darkModeEnabled],
  );

  const toggleTheme = () => {
    localStorage.setItem("darkModeEnabled", (!darkModeEnabled).toString());
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <h1
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {pageTitle}
            <ToggleThemeButton
              toggleTheme={toggleTheme}
              darkModeEnabled={darkModeEnabled}
            />
          </h1>
          <TabNavigation setPageTitle={setPageTitle} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
