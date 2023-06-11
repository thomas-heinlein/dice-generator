import React, { useState } from 'react';
import DiceSelector from './DiceSelector';
import DieNumberSelector from './DieNumberSelector';
import ThrowDiceButton from './ThrowDiceButton';
import DieThrowResult from './DieThrowResult';

const App = () => {
  const [selectedDice, setSelectedDice] = useState('d6');
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [result, setResult] = useState(null);

  const handleDiceChange = (e) => {
    setSelectedDice(e.target.value);
  };

  const handleNumberChange = (e) => {
    setSelectedNumber(parseInt(e.target.value, 10));
  };

  const handleThrow = () => {
    const max = parseInt(selectedDice.slice(1), 10);
    const throws = [];

    for (let i = 0; i < selectedNumber; i++) {
      const throwResult = Math.floor(Math.random() * max) + 1;
      throws.push(throwResult);
    }
    setResult(throws);
  };

  return (
      <div>
        <h1>Dice Generator</h1>
        <DiceSelector selectedDice={selectedDice} handleDiceChange={handleDiceChange} />
        <DieNumberSelector selectedNumber={selectedNumber} handleNumberChange={handleNumberChange} />
        <ThrowDiceButton handleThrow={handleThrow} />
        {result !== null && <DieThrowResult result={result} />}
      </div>
  );
};

export default App;
