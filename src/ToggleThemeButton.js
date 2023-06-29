import IconButton from "@mui/material/IconButton";
import React from "react";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness3Icon from '@mui/icons-material/Brightness3';


const ToggleThemeButton = ({darkModelEnabled, setDarkModelEnabled}) => {

    const icon = !darkModelEnabled ? <Brightness7Icon/> : <Brightness3Icon/>
    return (
        <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setDarkModelEnabled(!darkModelEnabled)}
        >
            {icon}
        </IconButton>
    );
}

export default ToggleThemeButton;