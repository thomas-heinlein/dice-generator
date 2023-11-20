import React from "react";
import FunctionsIcon from "@mui/icons-material/Functions";
import Grid from "@mui/material/Grid";
import Die from "./Die";

const DieThrowResult = ({ result }) => {
  return (
    <div id="dice-result">
      <Grid container spacing={2} columns={18}>
        {result.map((singleDie, index) => (
          <Grid key={index} aria-labelledby={"result-die"} item xs={3}>
            <Die label={singleDie} />
          </Grid>
        ))}
        <>
          {result.length > 1 && (
            <Grid key={"sum"} item xs={5}>
              <Die
                icon={<FunctionsIcon />}
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
