import React from 'react';
import Chip from '@mui/material/Chip';
import FunctionsIcon from '@mui/icons-material/Functions';
import Grid from '@mui/material/Grid';

const DieThrowResult = ({result}) => {
    return (
        <div id="dice-result">
            <Grid container spacing={2} columns={18}>
                {result.map((singleDie, index) => (
                    <Grid item xs={3}>
                        <Chip key={index} variant="outlined" label={singleDie}/>
                    </Grid>
                ))}
                <>
                    {
                        result.length > 1 &&
                        <Grid item xs={5}>
                            <Chip icon={<FunctionsIcon/>} variant="outlined"
                                  label={result.reduce((sum, result) => sum + result, 0)}/>
                        </Grid>
                    }
                </>
            </Grid>
        </div>
    );
};

export default DieThrowResult;