import React from "react";
import Grid from "@mui/material/Grid";
import CharacterValueBox from "./CharacterValueBox";

const CharacterValues = ({ values }) => {
  return (
    <>
      {values && typeof values.map === "function" ? (
        <Grid container spacing={2}>
          {values.map((value, index) => (
            <Grid key={index} item xs={12} md={4}>
              <CharacterValueBox boxItems={value} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <>not parsable</>
      )}
    </>
  );
};

export default CharacterValues;
