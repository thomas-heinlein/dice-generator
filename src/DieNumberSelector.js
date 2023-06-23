import React from 'react';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

const DieNumberSelector = ({selectedNumber, handleNumberChange}) => {
    const maxNumberOfDice = 9;
    return (
        <div>
            <FormControl>
                <Grid container spacing={2} columns={18}>
                    {[...Array(maxNumberOfDice)].map((_, index) => {
                        const number = index + 1;
                        return (
                            <Grid item xs={3}>
                                <Chip
                                    sx={{
                                        height: '4.5em',
                                        width: '4.5em',
                                        '& .MuiChip-label': {
                                            display: 'block',
                                            whiteSpace: 'normal',
                                        },
                                    }}
                                    key={number}
                                    label={<>{number}x</>}
                                    onClick={() => handleNumberChange(number)}
                                    variant={selectedNumber === number ? undefined : "outlined"}
                                    color={selectedNumber === number ? "primary" : undefined}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </FormControl>
        </div>
    );
};

export default DieNumberSelector;