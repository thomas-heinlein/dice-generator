import React from 'react';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

const DiceSelector = ({selectedDice, handleDiceChange}) => {
    const diceOptions = ['D2', 'D3', 'D4', 'D6', 'D8', 'D10', 'D12', 'D20', 'D100'];

    return (
        <div>
            <FormControl>
                <Grid container spacing={2} columns={18}>
                    {diceOptions.map((option) => (
                        <Grid item xs={3} md={2}>
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
                        </Grid>
                    ))}
                </Grid>
            </FormControl>
        </div>
    );
};

export default DiceSelector;
