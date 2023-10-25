import React, { useEffect } from 'react'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

import { useSelector, useDispatch } from 'react-redux';
import { updatePlayer } from '../store/reducers/playersReducer';

export default function SearchInput() {
    const players = useSelector((state) => state.players);
    const dispatch = useDispatch();

    useEffect(() => {
        // 데이터 엔드포인트로 GET 요청
        fetch('/players').then((response) => response.json()).then((data) => {
            data.forEach((player) => {
                dispatch(updatePlayer(player));
            });
        }).catch((error) => {
            console.error("Error fetching data : ", error);
        });
    }, []);

    return (
        <>
            <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete freeSolo id="free-solo-2-demo" disableClearable
                    options={players.map((option) => option.name)}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        }}
                    />
                    )}
                />
            </Stack>
        </>
    )
}
