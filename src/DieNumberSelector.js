import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Die from "./Die";

const DieNumberSelector = ({
  selectedNumber,
  handleNumberChange,
  showAllOptionsInitially,
}) => {
  const getMaxNumberOfDice = () => (showingAllOptions ? 9 : 2);

  const [showingAllOptions, setShowingAllOptions] = useState(
    showAllOptionsInitially,
  );

  const sx = {
    height: "4.5em",
    width: "4.5em",
    "& .MuiChip-label": {
      display: "block",
      whiteSpace: "normal",
    },
  };

  return (
    <div>
      <Grid container spacing={2} columns={36}>
        {[...Array(getMaxNumberOfDice())].map((_, index) => {
          const number = index + 1;
          return (
            <Grid item xs={8} md={3}>
              <Die
                key={number}
                label={number + "x"}
                onClick={(n) => handleNumberChange(n)}
                selected={selectedNumber === number}
              />
            </Grid>
          );
        })}
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

export default DieNumberSelector;
