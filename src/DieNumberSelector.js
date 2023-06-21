import React from 'react';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const DieNumberSelector = ({selectedNumber, handleNumberChange}) => {
    const maxNumberOfDice = 9;
    return (
        <div>
            <FormControl>
                <Stack direction="row" spacing={2}>
                    {[...Array(maxNumberOfDice)].map((_, index) => {
                        const number = index + 1;
                        return (
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
                        );
                    })}
                </Stack>
            </FormControl>
        </div>
    );
};

export default DieNumberSelector;