import DiceSelector from "./DiceSelector";
import DieNumberSelector from "./DieNumberSelector";
import ThrowDiceButton from "./ThrowDiceButton";
import DieThrowResult from "./DieThrowResult";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";

const DiceComponent = () => {
  const [selectedDice, setSelectedDice] = useState("D20");
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [result, setResult] = useState(null);
  const [throwing, setThrowing] = useState(false);
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
    }, 150);
  };

  return (
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
  );
};

export default DiceComponent;
