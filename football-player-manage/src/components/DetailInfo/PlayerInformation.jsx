import '../../css/PlayerInformation.css';
import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Box, ThemeProvider } from '@mui/system';



export default function PlayerInformation() {
    const selectedPlayer = useSelector((state) => state.selectedPlayer);    // 선택된 선수 정보

    return (
        <div>
            { selectedPlayer.id === "" ? ( 
                <div>
                    <h2>Not Selected Player</h2>
                </div> ) : ( 
                <div>
                    <ThemeProvider
                        theme={{
                            palette: {
                            primary: {
                                main: '#007FFF',
                                dark: '#0066CC',
                            },
                            },
                        }}
                        >
                        <Box
                            sx={{
                            width: 100,
                            height: 100,
                            borderRadius: 1,
                            bgcolor: 'primary.main',
                            '&:hover': {
                                bgcolor: 'primary.dark',
                            },
                            }}
                        />
                    </ThemeProvider>
                </div> 
            )}
        </div>
    )
}
