import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Alert } from "@mui/material";
import Stack from "@mui/material/Stack";

const CharacterEdit = ({ character, setCharacter }) => {
  const [alert, setAlert] = useState();

  const isParsable = (value) => {
    try {
      JSON.parse(value);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleChange = (event) => {
    const newCharacter = event.target.value;
    if (isParsable(newCharacter)) {
      const parsedCharacter = JSON.parse(newCharacter);
      setCharacter(parsedCharacter);
      localStorage.setItem("char", JSON.stringify(parsedCharacter));
      setAlert("saved");
    } else {
      setAlert("not_parsable");
    }
  };

  return (
    <Stack spacing={3}>
      <Alert severity="info">
        Here you can edit the character data which is shown in the second tab.
        If the format is valid the changes will be automatically saved. The data
        is stored only within the browser! Note that if you change the browser
        or clear the cookies you will loose your character stats. Please create
        regular backups by copying the text below into a file! You can restore
        the backup by pasting the text back into the text field.
      </Alert>
      {alert === "saved" && (
        <Alert severity="success">Character saved successfully!</Alert>
      )}
      {alert === "not_parsable" && (
        <Alert severity="error">Format not correct!</Alert>
      )}
      <TextField
        fullWidth
        multiline
        defaultValue={JSON.stringify(character, null, "\t")}
        onChange={(e) => handleChange(e)}
      />
    </Stack>
  );
};

export default CharacterEdit;
