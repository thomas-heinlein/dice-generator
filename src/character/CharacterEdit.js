import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Alert } from "@mui/material";
import Stack from "@mui/material/Stack";
import yaml from "js-yaml";
import isParsableCharacter from "./CharacterParsableChecker";
import Button from "@mui/material/Button";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import DownloadIcon from "@mui/icons-material/Download";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CharacterEdit = ({ character, setCharacter }) => {
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 350,
      minWidth: 150,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

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
        <HtmlTooltip
          placement="left-start"
          title={
            <React.Fragment>
              <p>{`Here you can edit the character data, which is shown in the second
              tab. If the format is valid, the changes will be automatically
              saved. Please note that the data is stored only within your
              browser! If you change the browser or clear the cookies you will
              loose your character stats. Please create a backup by clicking the download
              button and store the file on your device. You can restore the backup by pasting 
              the text back into the text field.`}</p>
              <p>{`The text is shown in YAML format. Note that spaces and indent
              matter! If you have problems you can always ask ChatGPT to
              reformat your character values into a valid YAML format. Here is a 
              valid example:`}</p>
              <pre>{`
- title: General
  items:
    - description: Hit Points
      value: 20
    - description: Armor Class
      value: 15
- title: Equipment
  items:
    - value: Leather Armor
    - value: Leather Helmet
`}</pre>
              <p>{`Note that you can specify key value pairs (like Hit Points and 20) 
              and simple list items (like Leather Helmet).`}</p>
            </React.Fragment>
          }
        >
          <Button variant="outlined" startIcon={<QuestionMarkIcon />}>
            Help
          </Button>
        </HtmlTooltip>
      </Stack>
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
