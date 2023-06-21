import React, {useState} from 'react';
import DiceSelector from './DiceSelector';
import DieNumberSelector from './DieNumberSelector';
import ThrowDiceButton from './ThrowDiceButton';
import DieThrowResult from './DieThrowResult';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    const [selectedDice, setSelectedDice] = useState('d6');
    const [selectedNumber, setSelectedNumber] = useState(1);
    const [result, setResult] = useState(null);

    const handleDiceChange = (e) => {
        setSelectedDice(e.target.value);
    };

    const handleNumberChange = (e) => {
        setSelectedNumber(parseInt(e.target.value));
    };

    const handleThrow = () => {
        const max = parseInt(selectedDice.slice(1));
        const throws = [];

        for (let i = 0; i < selectedNumber; i++) {
            const throwResult = Math.floor(Math.random() * max) + 1;
            throws.push(throwResult);
        }
        setResult(throws);
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Container maxWidth="sm">
                    <h1>Dice Generator</h1>
                    <Stack spacing={3}>
                        <DiceSelector selectedDice={selectedDice} handleDiceChange={handleDiceChange}/>
                        <DieNumberSelector selectedNumber={selectedNumber} handleNumberChange={handleNumberChange}/>
                        <ThrowDiceButton handleThrow={handleThrow}/>
                        {result !== null && <DieThrowResult result={result}/>}
                    </Stack>
                </Container>
            </ThemeProvider>
        </React.Fragment>
    );
};

export default App;
