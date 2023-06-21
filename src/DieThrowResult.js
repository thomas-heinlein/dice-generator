import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FunctionsIcon from '@mui/icons-material/Functions';
import Box from "@mui/material/Box";

const DieThrowResult = ({result}) => {
    return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
            <Stack
                direction="row"
                spacing={1}
            >
                {result.map((singleDie, index) => (
                    <Chip key={index} variant="outlined" label={singleDie}/>
                ))}
                <>
                    {
                        result.length > 1 &&
                        <Chip icon={<FunctionsIcon/>} variant="outlined"
                              label={result.reduce((sum, result) => sum + result, 0)}/>
                    }
                </>
            </Stack>
        </Box>
    );
};

export default DieThrowResult;