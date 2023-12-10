import IconButton from "@mui/material/IconButton";
import React from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness3Icon from "@mui/icons-material/Brightness3";

const ToggleThemeButton = ({ darkModeEnabled, toggleTheme }) => {
  const icon = !darkModeEnabled ? <Brightness7Icon /> : <Brightness3Icon />;
  return (
    <IconButton
      edge="end"
      color="inherit"
      aria-label="mode"
      onClick={() => toggleTheme()}
    >
      {icon}
    </IconButton>
  );
};

export default ToggleThemeButton;
