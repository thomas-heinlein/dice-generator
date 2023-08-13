import React, {useState} from 'react';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

const DieNumberSelector = ({selectedNumber, handleNumberChange, showAllOptionsInitially}) => {
    const getMaxNumberOfDice = () => showingAllOptions ? 9 : 2;

    const [showingAllOptions, setShowingAllOptions] = useState(showAllOptionsInitially);

    const sx = {
        height: '4.5em',
        width: '4.5em',
        '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
        },
    };

    return (
        <div>
            <Grid container spacing={2} columns={36}>
                {[...Array(getMaxNumberOfDice())].map((_, index) => {
                    const number = index + 1;
                    return (
                        <Grid item xs={8} md={3}>
                            <Chip
                                sx={sx}
                                key={number}
                                label={<>{number}x</>}
                                onClick={() => handleNumberChange(number)}
                                variant={selectedNumber === number ? undefined : "outlined"}
                                color={selectedNumber === number ? "primary" : undefined}
                            />
                        </Grid>
                    );
                })}
                <Grid item xs={8} md={3}>
                    <Chip
                        sx={sx}
                        key={'show-all'}
                        label={showingAllOptions ? '<<' : '>>'}
                        onClick={() => setShowingAllOptions(!showingAllOptions)}
                        variant={"outlined"}
                        color={undefined}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default DieNumberSelector;