import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Alert } from "@mui/material";
import Stack from "@mui/material/Stack";
import yaml from "js-yaml";
import isParsableCharacter from "./CharacterParsableChecker";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

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

  const downloadTextFile = () => {
    const fileContent = yaml.dump(character);
    const blob = new Blob([fileContent], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "Character.yml";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleChange = (event) => {
    const newCharacterAsYml = event.target.value;
    const newCharacterAsJson = convertYmlToJson(newCharacterAsYml);

    if (
      isParsable(newCharacterAsYml) &&
      isParsableCharacter(convertYmlToJson(newCharacterAsYml))
    ) {
      setCharacter(newCharacterAsJson);
      localStorage.setItem("char", JSON.stringify(newCharacterAsJson));
      setAlert("parsable");
    } else {
      setCharacter(newCharacterAsJson);
      setAlert("not_parsable");
    }
  };

  return (
    <Stack spacing={3}>
      {alert === "parsable" && (
        <Alert severity="success">Character sheet valid!</Alert>
      )}
      {alert === "not_parsable" && (
        <Alert severity="error">Character sheet not valid!</Alert>
      )}
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={downloadTextFile}
        >
          Download
        </Button>
      </Stack>
      {/* can not use a controlled component here, because the cursor state would
      be lost after every rerender */}
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
