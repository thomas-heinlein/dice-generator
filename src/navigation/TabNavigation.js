import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CasinoIcon from "@mui/icons-material/Casino";
import PersonIcon from "@mui/icons-material/Person";
import TabPanel from "./TabPanel";
import DiceComponent from "../dice/DiceComponent";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import CharacterOverview from "../character/CharacterOverview";
import EditIcon from "@mui/icons-material/Edit";
import CharacterEdit from "../character/CharacterEdit";
import DefaultCharacter from "../character/DefaultCharacter";

const TabNavigation = () => {
  const charFromLocalStorage = localStorage.getItem("char");
  const [currentTab, setCurrentTab] = useState(0);
  const [character, setCharacter] = useState(
    charFromLocalStorage ? JSON.parse(charFromLocalStorage) : DefaultCharacter,
  );

  const handleTabChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Stack spacing={3}>
      <Tabs value={currentTab} onChange={handleTabChange}>
        <Tab icon={<CasinoIcon />} />
        <Tab icon={<PersonIcon />} />
        <Tab icon={<EditIcon />} />
      </Tabs>
      <TabPanel currentTab={currentTab} index={0}>
        <DiceComponent />
      </TabPanel>
      <TabPanel currentTab={currentTab} index={1}>
        <CharacterOverview character={character} />
      </TabPanel>
      <TabPanel currentTab={currentTab} index={2}>
        <CharacterEdit character={character} setCharacter={setCharacter} />
      </TabPanel>
    </Stack>
  );
};

export default TabNavigation;
