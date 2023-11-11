import React from "react";
import Chip from "@mui/material/Chip";

const Die = ({ key, label, selected, onClick, icon }) => {
  return (
    <Chip
      sx={{
        height: "4.5em",
        width: icon ? "5.5em" : "4.5em",
        "& .MuiChip-label": {
          display: "block",
          whiteSpace: "normal",
        },
      }}
      icon={icon}
      key={key}
      label={label}
      onClick={onClick ? () => onClick(label) : undefined}
      variant={selected ? undefined : "outlined"}
      color={selected ? "primary" : undefined}
    />
  );
};

export default Die;
