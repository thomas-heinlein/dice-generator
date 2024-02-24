import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Die from "../dice/Die";
import AddIcon from "@mui/icons-material/Add";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import React from "react";

const WeaponDialog = ({ title, dice, open, handleClose }) => {
  const parseDice = () => {
    const regex = /^(\d+)d(\d+)([+-]\d+)?$/;
    const match = dice.match(regex);

    if (match) {
      const numberOfDie = parseInt(match[1], 10);
      const typeOfDie = parseInt(match[2], 10);
      const attackBonus = parseInt(match[3]) || 0;
      const attackValues = [];

      for (let i = 0; i < numberOfDie; i++) {
        const roll = Math.floor(Math.random() * typeOfDie) + 1;
        attackValues.push(roll);
      }

      const result =
        attackValues.reduce((sum, current) => sum + current, 0) + attackBonus;

      return {
        attackBonus,
        attackValues,
        result,
      };
    } else {
      throw new Error("Invalid dice notation");
    }
  };

  const parsedDice = parseDice();

  const printDie = () => {
    return parsedDice.attackValues
      ? parsedDice.attackValues.map((attackValue, index) => (
          <React.Fragment key={index}>
            <Die label={attackValue} />
            <AddIcon />
          </React.Fragment>
        ))
      : undefined;
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <DialogContent>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          {printDie()}
          <Die label={parsedDice.attackBonus} />
          <DragHandleIcon />
          <Die label={parsedDice.result} />
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default WeaponDialog;
