import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Die from "./Die";

const DiceSelector = ({
  selectedDice,
  handleDiceChange,
  showAllOptionsInitially,
}) => {
  const [showingAllOptions, setShowingAllOptions] = useState(
    showAllOptionsInitially,
  );
  const allDiceOptions = [
    "D2",
    "D3",
    "D4",
    "D6",
    "D8",
    "D10",
    "D12",
    "D20",
    "D100",
  ];
  const getDiceOptions = () => {
    if (showingAllOptions) {
      return allDiceOptions;
    }
    if (selectedDice === "D2") {
      return ["D2", "D20"];
    }
    return ["D2", selectedDice];
  };

  return (
    <div>
      <Grid container spacing={2} columns={36}>
        {getDiceOptions().map((option) => (
          <Grid item xs={8} md={3}>
            <Die
              key={option}
              label={option}
              onClick={(o) => handleDiceChange(o)}
              selected={selectedDice === option}
            />
          </Grid>
        ))}
        <Grid item xs={8} md={3}>
          <Die
            key={"show-all"}
            label={showingAllOptions ? "<<" : ">>"}
            onClick={() => setShowingAllOptions(!showingAllOptions)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default DiceSelector;
