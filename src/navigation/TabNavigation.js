import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CasinoIcon from "@mui/icons-material/Casino";
import PersonIcon from "@mui/icons-material/Person";
import TabPanel from "./TabPanel";
import DiceComponent from "../dice/DiceComponent";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import CharacterEdit from "../character/CharacterEdit";
import DefaultDnDCharacter from "../character/templates/DefaultDnDCharacter";
import CharacterValues from "../character/CharacterValues";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import HelpPage from "../help/HelpPage";

const TabNavigation = ({ setPageTitle }) => {
  const charFromLocalStorage = localStorage.getItem("char");
  const [currentTab, setCurrentTab] = useState(0);
  const [character, setCharacter] = useState(
    charFromLocalStorage
      ? JSON.parse(charFromLocalStorage)
      : DefaultDnDCharacter,
  );

  const handleTabChange = (_, newValue) => {
    switch (newValue) {
      case 0:
        setPageTitle("Throw dice");
        break;
      case 1:
        setPageTitle("Character sheet");
        break;
      case 2:
        setPageTitle("Edit character sheet");
        break;
      case 3:
        setPageTitle("Help");
        break;
      default:
        console.error("Page title name not defined for tab");
    }
    setCurrentTab(newValue);
  };

  return (
    <Stack spacing={3}>
      <Tabs value={currentTab} onChange={handleTabChange}>
        <Tab icon={<CasinoIcon />} />
        <Tab icon={<PersonIcon />} />
        <Tab icon={<EditIcon />} />
        <Tab icon={<QuestionMarkIcon />} />
      </Tabs>
      <TabPanel currentTab={currentTab} index={0}>
        <DiceComponent />
      </TabPanel>
      <TabPanel currentTab={currentTab} index={1}>
        <CharacterValues character={character} />
      </TabPanel>
      <TabPanel currentTab={currentTab} index={2}>
        <CharacterEdit character={character} setCharacter={setCharacter} />
      </TabPanel>
      <TabPanel currentTab={currentTab} index={3}>
        <HelpPage setCharacter={setCharacter} />
      </TabPanel>
    </Stack>
  );
};

export default TabNavigation;
