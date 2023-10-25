import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchInput() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // 데이터 엔드포인트로 GET 요청
        fetch('/players').then((response) => response.json()).then((data) => {
            setPlayers(data);
            console.log(players);
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
