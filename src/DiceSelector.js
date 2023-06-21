import React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

const DiceSelector = ({selectedDice, handleDiceChange}) => {
    const diceOptions = [
        {label: 'D2', value: 'd2'},
        {label: 'D3', value: 'd3'},
        {label: 'D4', value: 'd4'},
        {label: 'D6', value: 'd6'},
        {label: 'D8', value: 'd8'},
        {label: 'D10', value: 'd10'},
        {label: 'D12', value: 'd12'},
        {label: 'D20', value: 'd20'},
        {label: 'D100', value: 'd100'},
    ];

    return (
        <div>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    {diceOptions.map((option) => (
                        <div key={option.value}>
                            <input
                                type="radio"
                                id={option.value}
                                name="dice-selector"
                                value={option.value}
                                checked={selectedDice === option.value}
                                onChange={handleDiceChange}
                            />
                            <label htmlFor={option.value}>{option.label}</label>
                        </div>
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default DiceSelector;
