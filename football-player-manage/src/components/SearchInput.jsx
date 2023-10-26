import React, { useState, useEffect } from 'react'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

import { useSelector, useDispatch } from 'react-redux';
import { updatePlayer } from '../store/reducers/playersReducer';
import { updateSelectedPlayer } from '../store/reducers/selectedPlayerReducer';

export default function SearchInput() {
    const dispatch = useDispatch();

    const players = useSelector((state) => state.players);                  // 선수 리스트
    const selectedPlayer = useSelector((state) => state.selectedPlayer);    // 선택된 선수 정보

    useEffect(() => {
        if(players.length === 0) {
            // 데이터 엔드포인트로 GET 요청
            fetch('/players').then((response) => response.json()).then((data) => {
                data.forEach((player) => {
                    dispatch(updatePlayer(player));
                });
            })
            .catch((error) => {
                console.error("Error fetching data : ", error);
            });
        }
    }, [players, dispatch]);

    // 선택된 선수를 토대로 store 상태 update
    const handlePlayerSelected = (event, value) => {
        dispatch(updateSelectedPlayer({
                id: value.id,
                name: value.name,
                country: value.country,
                height: value.height,
                birth: value.birth,

                age: value.age,
                position: value.position,
                team: value.team,
                shritsnum: value.shritsnum,
                foot: value.foot,
            })
        )
    };

    return (
        <>
            <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete freeSolo id="free-solo-2-demo"
                    disableClearable
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
                            <p><b>Age :</b> {selectedPlayer.age}</p>
                            <p><b>Country :</b> {selectedPlayer.country}</p>
                            <p><b>Height :</b> {selectedPlayer.height} cm</p>
                            <p><b>Team :</b> {selectedPlayer.team}</p>
                            <p><b>Foot :</b> {selectedPlayer.foot}</p>
                            <p><b>Birth :</b> {selectedPlayer.birth}</p>
                            <p><b>Position :</b> {selectedPlayer.position}</p>
                            <p><b>Shirts Number :</b> {selectedPlayer.shirtsnum}</p>
                            {/* 다른 선수 정보 표시 */}
                        </div>
                    )}
                </div>
            </Stack>
        </>
    )
}
