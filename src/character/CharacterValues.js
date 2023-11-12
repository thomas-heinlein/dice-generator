import React from "react";
import Grid from "@mui/material/Grid";
import CharacterValueBox from "./CharacterValueBox";
import isParsableCharacter from "./CharacterParsableChecker";

const CharacterValues = ({ character }) => {
  const parseCharacterValues = () => {
    if (!isParsableCharacter(character)) {
      return <>Not parsable - please edit YML</>;
    }

    return (
      <Grid container spacing={2}>
        {character.map((value, index) => (
          <Grid key={index} item xs={12} md={4}>
            <CharacterValueBox boxItems={value} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return <>{parseCharacterValues()}</>;
};

export default CharacterValues;
