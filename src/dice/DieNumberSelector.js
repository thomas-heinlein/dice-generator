import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Die from "./Die";

const DieNumberSelector = ({
  selectedNumber,
  handleNumberChange,
  showAllOptionsInitially,
}) => {
  const getDiceOptions = () => {
    if (showingAllOptions) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    if (selectedNumber === 1) {
      return [1, 2];
    }
    return [1, selectedNumber];
  };

  const [showingAllOptions, setShowingAllOptions] = useState(
    showAllOptionsInitially,
  );

  return (
    <div>
      <Grid container spacing={2} columns={36}>
        {getDiceOptions().map((number) => {
          return (
            <Grid key={number} item xs={8} md={3}>
              <Die
                label={number + "x"}
                onClick={(n) => handleNumberChange(n)}
                selected={selectedNumber === number}
              />
            </Grid>
          );
        })}
        <Grid key={"show-all"} item xs={8} md={3}>
          <Die
            label={showingAllOptions ? "<<" : ">>"}
            onClick={() => setShowingAllOptions(!showingAllOptions)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default DieNumberSelector;
