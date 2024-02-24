import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Die from "../dice/Die";
import AddIcon from "@mui/icons-material/Add";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import React from "react";

const SkillDialog = ({ title, modifier, open, handleClose }) => {
  const dieResult = Math.floor(Math.random() * 20) + 1;

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <DialogContent>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Die label={dieResult} />
          <AddIcon />
          <Die label={modifier} />
          <DragHandleIcon />
          <Die label={dieResult + modifier} />
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default SkillDialog;
