import { Typography } from "@mui/material";
import DefaultMinimalCharacter from "../character/DefaultMinimalCharacter";
import yaml from "js-yaml";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import DefaultDnDCharacter from "../character/DefaultDnDCharacter";
import Stack from "@mui/material/Stack";

const HelpPage = () => {
  return (
    <Stack spacing={3}>
      <Typography variant={"h5"}>1. Tab: Throw dice</Typography>
      <Typography variant={"span"}>
        A simple dice generator. You can select a dice type (D2, D3, D4, D6, D8,
        D10, D12, D20, D100) and the number of times you want to roll the dice.
      </Typography>
      <Typography variant={"h5"}>2. Tab: Character sheet</Typography>
      <Typography variant={"span"}>
        On this tab you can see your character sheet with all stats and items
        which you have defined on the third tab.
      </Typography>
      <Typography variant={"h5"}>3. Tab: Edit character sheet</Typography>
      <Typography variant={"span"}>
        Here you can edit the character data, which is shown in the second tab.
        If the format is valid, the changes will be automatically saved. Please
        note that the data is stored only within your browser! If you change the
        browser or clear the cookies you will loose your character stats. Please
        create a backup by clicking the download button and store the file on
        your device. You can restore the backup by pasting the text back into
        the text field.
      </Typography>
      <Typography variant={"span"}>
        The text is shown in YAML format. Note that spaces and indent matter! If
        you have problems you can always ask ChatGPT to reformat your character
        values into a valid YAML format. Here is a valid example:
      </Typography>
      <Typography variant={"span"} sx={{ whiteSpace: "pre-line" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="min-char">
            <Typography>Minimum example</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Paper elevation={0}>
                <Typography sx={{ whiteSpace: "break-spaces" }}>
                  {yaml.dump(DefaultMinimalCharacter)}
                </Typography>
              </Paper>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="default-dnd-char"
          >
            <Typography>DnD Character</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Paper elevation={0}>
                <Typography sx={{ whiteSpace: "break-spaces" }}>
                  {yaml.dump(DefaultDnDCharacter)}
                </Typography>
              </Paper>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Typography>
      <Typography variant={"span"}>
        Note that you can specify key value pairs (like Hit Points and 20) and
        simple list items (like Leather Helmet).
      </Typography>
    </Stack>
  );
};

export default HelpPage;
