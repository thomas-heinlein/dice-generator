import React from 'react';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const DiceSelector = ({selectedDice, handleDiceChange}) => {
    const diceOptions = ['D2', 'D3', 'D4', 'D6', 'D8', 'D10', 'D12', 'D20', 'D100'];

    return (
        <div>
            <FormControl>
                <Stack direction="row" spacing={2}>
                    {diceOptions.map((option) => (
                        <Chip
                            sx={{
                                height: '4.5em',
                                width: '4.5em',
                                '& .MuiChip-label': {
                                    display: 'block',
                                    whiteSpace: 'normal',
                                },
                            }}
                            key={option}
                            label={option}
                            onClick={() => handleDiceChange(option)}
                            variant={selectedDice === option ? undefined : "outlined"}
                            color={selectedDice === option ? "primary" : undefined}
                        />
                    ))}
                </Stack>
            </FormControl>
        </div>
    );
};

export default DiceSelector;
