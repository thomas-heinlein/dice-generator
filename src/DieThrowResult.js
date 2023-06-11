import React from 'react';

const DieThrowResult = ({ result }) => {
    return (
        <div>

            <div>Individual Results:</div>
            <ul>
                {result.map((singleDie, index) => (
                    <li key={index}>Throw {index + 1}: {singleDie}</li>
                ))}
            </ul>
            <div>Total Result: {result.reduce((sum, result) => sum + result, 0)}</div>
        </div>
    );
};

export default DieThrowResult;