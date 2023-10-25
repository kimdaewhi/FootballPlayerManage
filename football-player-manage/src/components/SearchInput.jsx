import React, { useState, useEffect } from 'react'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

import { useSelector, useDispatch } from 'react-redux';
import { updatePlayer } from '../store/reducers/playersReducer';

export default function SearchInput() {
    const players = useSelector((state) => state.players);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("useEffect");
        // 데이터 엔드포인트로 GET 요청
        fetch('/players').then((response) => response.json()).then((data) => {
            data.forEach((player) => {
                dispatch(updatePlayer(player));
            });
        }).catch((error) => {
            console.error("Error fetching data : ", error);
        });
    }, []);

    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const handlePlayerSelected = (event, value) => {
        setSelectedPlayer(value);
    };

    return (
        <>
            <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete freeSolo id="free-solo-2-demo" disableClearable
                    options={players}
                    getOptionLabel={(player) => player.name}        // 표시할 텍스트
                    onChange={handlePlayerSelected}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search"
                        InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        }}
                    />
                    )}
                />

                <hr/>

                <div>
                    {selectedPlayer && (
                        <div>
                            <h2>{selectedPlayer.name}</h2>
                            <p><b>ID :</b> {selectedPlayer.id}</p>
                            <p><b>Country :</b> {selectedPlayer.country}</p>
                            <p><b>Height :</b> {selectedPlayer.height} cm</p>
                            <p><b>Team :</b> {selectedPlayer.team}</p>
                            <p><b>Foot :</b> {selectedPlayer.foot}</p>
                            <p><b>Birth :</b> {selectedPlayer.birth}</p>
                            <p><b>Position :</b> {selectedPlayer.position}</p>
                            {/* 다른 선수 정보 표시 */}
                        </div>
                    )}
                </div>
            </Stack>
        </>
    )
}
