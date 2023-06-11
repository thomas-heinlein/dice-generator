import React from 'react';

const ThrowDiceButton = ({ handleThrow }) => {
    return <button onClick={handleThrow}>Throw Dice</button>;
};

export default ThrowDiceButton;