import React from 'react';

const DieNumberSelector = ({ selectedNumber, handleNumberChange }) => {
    return (
        <div>
            <label htmlFor="number-selector">Number of dice:</label>
            <input
                id="number-selector"
                type="number"
                min="1"
                value={selectedNumber}
                onChange={handleNumberChange}
            />
        </div>
    );
};

export default DieNumberSelector;