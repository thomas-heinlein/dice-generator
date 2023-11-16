import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Alert } from "@mui/material";
import Stack from "@mui/material/Stack";
import yaml from "js-yaml";
import isParsableCharacter from "./CharacterParsableChecker";

const CharacterEdit = ({ character, setCharacter }) => {
  const [alert, setAlert] = useState(
    isParsableCharacter(character) ? "parsable" : "not_parsable",
  );

  const convertYmlToJson = (yml) => yaml.load(yml);
  const isParsable = (value) => {
    try {
      convertYmlToJson(value);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleChange = (event) => {
    const newCharacterAsYml = event.target.value;
    if (
      isParsable(newCharacterAsYml) &&
      isParsableCharacter(convertYmlToJson(newCharacterAsYml))
    ) {
      const newCharacterAsJson = convertYmlToJson(newCharacterAsYml);
      setCharacter(newCharacterAsJson);
      localStorage.setItem("char", JSON.stringify(newCharacterAsJson));
      setAlert("parsable");
    } else {
      setAlert("not_parsable");
    }
  };

  return (
    <Stack spacing={3}>
      <Alert severity="info">
        Here you can edit the character data, which is shown in the second tab.
        If the format is valid, the changes will be automatically saved. Please
        note that the data is stored only within your browser! If you change the
        browser or clear the cookies you will loose your character stats. Please
        create a backup by copying the text below into a file! You can restore
        the backup by pasting the text back into the text field.
      </Alert>
      <Alert severity="info">
        The text is shown in YAML format. Note that spaces and indent matter! If
        you have problems you can always ask ChatGPT to reformat your character
        values into a valid YAML format. Each Element in your character sheet
        must contain of a title followed by items. Each item can be a value (for
        a single item) or a description and a value (for a key value pair).
      </Alert>
      {alert === "parsable" && (
        <Alert severity="success">Character sheet valid!</Alert>
      )}
      {alert === "not_parsable" && (
        <Alert severity="error">Character sheet not valid!</Alert>
      )}

      <TextField
        fullWidth
        error={alert === "not_parsable"}
        multiline
        defaultValue={yaml.dump(character)}
        onChange={(e) => handleChange(e)}
      />
    </Stack>
  );
};

export default CharacterEdit;
