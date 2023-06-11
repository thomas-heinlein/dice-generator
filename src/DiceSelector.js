import React from 'react';

const DiceSelector = ({ selectedDice, handleDiceChange }) => {
    return (
        <div>
            <label htmlFor="dice-selector">Select a dice:</label>
            <select id="dice-selector" value={selectedDice} onChange={handleDiceChange}>
                <option value="d3">d3</option>
                <option value="d4">d4</option>
                <option value="d6">d6</option>
                <option value="d8">d8</option>
                <option value="d10">d10</option>
                <option value="d12">d12</option>
                <option value="d20">d20</option>
            </select>
        </div>
    );
};

export default DiceSelector;