import React, {useState} from 'react';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

const DiceSelector = ({selectedDice, handleDiceChange, showAllOptionsInitially}) => {
    const [showingAllOptions, setShowingAllOptions] = useState(showAllOptionsInitially);
    const allDiceOptions = ['D2', 'D3', 'D4', 'D6', 'D8', 'D10', 'D12', 'D20', 'D100'];
    const limitedDiceOptions = ['D6', 'D20'];

    const getDiceOptions = () => showingAllOptions ? allDiceOptions : limitedDiceOptions;

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
                {getDiceOptions().map((option) => (
                    <Grid item xs={8} md={3}>
                        <Chip
                            sx={sx}
                            key={option}
                            label={option}
                            onClick={() => handleDiceChange(option)}
                            variant={selectedDice === option ? undefined : "outlined"}
                            color={selectedDice === option ? "primary" : undefined}
                        />
                    </Grid>
                ))}
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

export default DiceSelector;
