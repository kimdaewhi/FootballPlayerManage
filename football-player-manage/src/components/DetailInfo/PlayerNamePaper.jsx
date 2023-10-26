import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function PlayerNamePaper() {
    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            '& > :not(style)': {
                m: 1,
                width: 850,
                height: 400,
            },
        }}>
            <Paper elevation={0} sx={{borderRadius: 3}}>
                
            </Paper>
        </Box>
    );
}