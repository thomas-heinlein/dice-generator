import { Typography } from "@mui/material";
import DefaultMinimalCharacter from "../character/templates/DefaultMinimalCharacter";
import DefaultDnDCharacter from "../character/templates/DefaultDnDCharacter";
import Stack from "@mui/material/Stack";
import DefaultGMNotes from "../character/templates/DefaultGMNotes";
import React from "react";
import CharacterTemplate from "./CharacterTemplate";

const HelpPage = ({ setCharacter }) => {
  return (
    <Stack spacing={3}>
      <Typography variant={"h5"}>1. Tab: Throw dice</Typography>
      <Typography variant={"span"}>
        An easy-to-use dice roller application that allows you to choose from
        various dice types (D2, D3, D4, D6, D8, D10, D12, D20, D100) and specify
        the number of rolls you'd like to perform.
      </Typography>
      <Typography variant={"h5"}>2. Tab: Character sheet</Typography>
      <Typography variant={"span"}>
        On this section, view your character sheet containing all the statistics
        and items you've specified in the third tab.
      </Typography>
      <Typography variant={"h5"}>3. Tab: Edit character sheet</Typography>
      <Typography variant={"span"}>
        In this section, you can modify the character data displayed in the
        second tab. Valid changes are automatically saved. However, it's
        important to be aware that the data is exclusively stored within your
        browser. Switching browsers or clearing cookies will result in the loss
        of your character stats. To safeguard your information, create a backup
        by clicking the download button and store the file on your device. You
        can restore the backup by pasting the text back into the text field from
        the text file.
      </Typography>
      <Typography variant={"span"}>
        The text is presented in YAML format, and it's crucial to be mindful of
        spaces and indentation. If you encounter difficulties, feel free to
        request ChatGPT to reformat your character values into a valid YAML
        structure. Here are examples in the correct format:
      </Typography>
      <Typography variant={"span"}>
        Note that you can specify key value pairs (like Hit Points and 20) and
        simple list items (like Leather Helmet). Also, with a size attribute of
        "medium" or "large", you can specify the size of the box.
      </Typography>
      <Typography variant={"span"} sx={{ whiteSpace: "pre-line" }}>
        <CharacterTemplate
          id={"min-char"}
          summary={"Minimum example"}
          character={DefaultMinimalCharacter}
          setCharacter={setCharacter}
        />
        <CharacterTemplate
          id={"dnd-char"}
          summary={"DnD Character"}
          character={DefaultDnDCharacter}
        />
        <CharacterTemplate
          id={"gm-notes"}
          summary={"DnD GM Notes"}
          character={DefaultGMNotes}
        />
      </Typography>
    </Stack>
  );
};

export default HelpPage;
