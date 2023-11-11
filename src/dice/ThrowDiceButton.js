import React from 'react';
import Button from '@mui/material/Button';

const ThrowDiceButton = ({handleThrow}) => {
    return (
            <Button
                variant="outlined"
                onClick={handleThrow}
                size="large"
            >
                Throw Dice
            </Button>
    );
};

export default ThrowDiceButton;