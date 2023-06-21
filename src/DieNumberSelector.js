import React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

const DieNumberSelector = ({selectedNumber, handleNumberChange}) => {
    const maxNumberOfDice = 10;

    return (
        <div>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >

                    {[...Array(maxNumberOfDice)].map((_, index) => {
                        const number = index + 1;
                        return (
                            <div key={number}>
                                <input
                                    type="radio"
                                    id={`number-selector-${number}`}
                                    name="number-selector"
                                    value={number}
                                    checked={selectedNumber === number}
                                    onChange={handleNumberChange}
                                />
                                <label htmlFor={`number-selector-${number}`}>{number}x</label>
                            </div>
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default DieNumberSelector;