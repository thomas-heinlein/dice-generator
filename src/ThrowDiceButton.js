import React from 'react';
import Button from '@mui/material/Button';

const ThrowDiceButton = ({ handleThrow }) => {
    return <Button variant="outlined" onClick={handleThrow}>Throw Dice</Button>;
};

export default ThrowDiceButton;