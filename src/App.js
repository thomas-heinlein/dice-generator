import React, { useMemo, useState } from "react";
import DiceSelector from "./DiceSelector";
import DieNumberSelector from "./DieNumberSelector";
import ThrowDiceButton from "./ThrowDiceButton";
import DieThrowResult from "./DieThrowResult";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ToggleThemeButton from "./ToggleThemeButton";

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
  const [selectedDice, setSelectedDice] = useState("D20");
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [result, setResult] = useState(null);
  const [darkModelEnabled, setDarkModelEnabled] = useState(true);
  const [throwing, setThrowing] = useState(false);
  const appliedTheme = useMemo(
    () => createTheme(darkModelEnabled ? darkTheme : lightTheme),
    [darkModelEnabled],
  );
  const showAllOptionsInitially = window.innerWidth > 900;

  const handleDiceChange = (value) => {
    setSelectedDice(value);
  };

  const handleNumberChange = (value) => {
    setSelectedNumber(parseInt(value));
  };

  const handleThrow = () => {
    setThrowing(true);
    const max = parseInt(selectedDice.slice(1));
    const throws = [];

    for (let i = 0; i < selectedNumber; i++) {
      const throwResult = Math.floor(Math.random() * max) + 1;
      throws.push(throwResult);
    }
    setResult(throws);

    setTimeout(() => {
      setThrowing(false);
    }, 250);
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
            Dice Generator
            <ToggleThemeButton
              darkModelEnabled={darkModelEnabled}
              setDarkModelEnabled={setDarkModelEnabled}
            />
          </h1>
          <Stack spacing={5}>
            <DiceSelector
              selectedDice={selectedDice}
              handleDiceChange={handleDiceChange}
              showAllOptionsInitially={showAllOptionsInitially}
            />
            <DieNumberSelector
              selectedNumber={selectedNumber}
              handleNumberChange={handleNumberChange}
              showAllOptionsInitially={showAllOptionsInitially}
            />
            <ThrowDiceButton handleThrow={handleThrow} />
            {result !== null && !throwing && <DieThrowResult result={result} />}
          </Stack>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
