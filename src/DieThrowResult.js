import React from "react";
import FunctionsIcon from "@mui/icons-material/Functions";
import Grid from "@mui/material/Grid";
import Die from "./Die";

const DieThrowResult = ({ result }) => {
  return (
    <div id="dice-result">
      <Grid container spacing={2} columns={18}>
        {result.map((singleDie, index) => (
          <Grid item xs={3}>
            <Die key={index} label={singleDie} />
          </Grid>
        ))}
        <>
          {result.length > 1 && (
            <Grid item xs={5}>
              <Die
                icon={<FunctionsIcon />}
                key={"sum"}
                label={result.reduce((sum, result) => sum + result, 0)}
              />
            </Grid>
          )}
        </>
      </Grid>
    </div>
  );
};

export default DieThrowResult;
