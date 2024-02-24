import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import SkillDialog from "./SkillDialog";
import WeaponDialog from "./WeaponDialog";

const CharacterValueBox = ({ boxItems }) => {
  const [skillDialogOpen, setSkillDialogOpen] = useState(false);
  const [weaponDialogOpen, setWeaponDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const handleWeaponClose = () => {
    setWeaponDialogOpen(false);
  };

  const handleWeaponOpen = () => {
    setWeaponDialogOpen(true);
  };
  const handleSkillClose = () => {
    setSkillDialogOpen(false);
  };

  const handleSkillOpen = () => {
    setSkillDialogOpen(true);
  };

  const mapItem = (item, index) => (
    <Box key={boxItems.title + "-" + index}>
      <Typography>{mapItemAccordingToType(item)}</Typography>
    </Box>
  );

  const mapItemAccordingToType = (item) => {
    if (item.description) {
      return printItemWithDescription(item);
    }
    if (item.skill) {
      return printSkill(item);
    }
    if (item.weapon) {
      return printWeapon(item);
    }
    return printOnlyValue(item);
  };

  const printItemWithDescription = (item) => (
    <>
      {item.description}: {item.value}
    </>
  );

  const printWeapon = (item) => (
    <Typography onClick={() => openWeaponDialog(item)}>
      {item.weapon}: {item.value}
    </Typography>
  );

  const openWeaponDialog = (item) => {
    setSelectedItem(item);
    handleWeaponOpen();
  };
  const printSkill = (item) => (
    <Typography onClick={() => openSkillDialog(item)}>
      {item.skill}: {item.value}
    </Typography>
  );

  const openSkillDialog = (item) => {
    setSelectedItem(item);
    handleSkillOpen();
  };

  const printOnlyValue = (item) => <>{item.value}</>;

  const printItems = () => {
    return boxItems.items.map((item, index) => mapItem(item, index));
  };

  return (
    <>
      <Box justifyContent="space-between" p={2}>
        <Typography variant="h5">{boxItems.title}</Typography>
        <Divider />
        {printItems()}
      </Box>
      {selectedItem && selectedItem.skill && (
        <SkillDialog
          title={`${boxItems.title} - ${selectedItem.skill}`}
          modifier={selectedItem.value}
          open={skillDialogOpen}
          handleClose={handleSkillClose}
        />
      )}
      {selectedItem && selectedItem.weapon && (
        <WeaponDialog
          title={`${selectedItem.weapon} - ${selectedItem.value}`}
          dice={selectedItem.value}
          open={weaponDialogOpen}
          handleClose={handleWeaponClose}
        />
      )}
    </>
  );
};
export default CharacterValueBox;
