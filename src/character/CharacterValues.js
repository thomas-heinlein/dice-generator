import React from "react";
import Grid from "@mui/material/Grid";
import CharacterValueBox from "./CharacterValueBox";
import isParsableCharacter from "./CharacterParsableChecker";

const CharacterValues = ({ character }) => {
  const getMd = (value) => {
    if (value.size === "large") {
      return 12;
    }
    if (value.size === "medium") {
      return 6;
    }

    return 4;
  };

  const parseCharacterValues = () => {
    if (!isParsableCharacter(character)) {
      return <>Not parsable - please edit YML</>;
    }

    return (
      <Grid container spacing={2}>
        {character.map((value, index) => (
          <Grid key={index} item xs={12} md={getMd(value)}>
            <CharacterValueBox boxItems={value} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return <>{parseCharacterValues()}</>;
};

export default CharacterValues;
