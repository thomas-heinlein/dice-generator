import React from "react";
import CharacterValues from "./CharacterValues";

const CharacterOverview = ({ character }) => {
  return (
    <>
      <CharacterValues values={character} />
    </>
  );
};

export default CharacterOverview;
