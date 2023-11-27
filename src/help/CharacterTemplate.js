import { Typography } from "@mui/material";
import yaml from "js-yaml";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import React from "react";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CharacterTemplate = ({ id, summary, character }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(yaml.dump(character));
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
        <Typography>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
              <Button
                variant="contained"
                startIcon={<ContentCopyIcon />}
                onClick={copyToClipboard}
              >
                Copy
              </Button>
            </Stack>
            <Paper elevation={0}>
              <Typography sx={{ whiteSpace: "break-spaces" }}>
                {yaml.dump(character)}
              </Typography>
            </Paper>
          </Stack>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
export default CharacterTemplate;
