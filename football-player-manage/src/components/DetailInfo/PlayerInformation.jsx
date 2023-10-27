import '../../css/PlayerInformation.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Box } from '@mui/system';

import PlayerCard from './PlayerCard';



export default function PlayerInformation() {
    const selectedPlayer = useSelector((state) => state.selectedPlayer);    // 선택된 선수 정보

    return (
        <>
            { selectedPlayer.id === "" ? ( 
                <div>
                    <h2>Not Selected Player</h2>
                </div> ) : ( 
                <div>
                    <Container 
                        sx={{ 
                            backgroundColor: "#f8f8f8", 
                            display: "flex", 
                            justifyContent: 'center', 
                            paddingTop: "50px",
                            paddingBottom: "50px" }} 
                    >
                        <PlayerCard/>
                    </Container>
                </div> 
            )}
        </>
    )
};