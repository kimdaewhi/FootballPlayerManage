import React, { useState, useEffect } from 'react'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

import { useSelector, useDispatch } from 'react-redux';
import { updatePlayer } from '../store/reducers/playersReducer';
import { updateSelectedPlayer, clearSelectedPlayer } from '../store/reducers/selectedPlayerReducer';

export default function SearchInput() {
    const dispatch = useDispatch();

    const players = useSelector((state) => state.players);                  // 선수 리스트

    // 드롭다운 열림 여부(마우스 클릭 : false, TextField 빈 값 : false, 키보드 입력 : true) 나중에 해보자...
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

    const handleClearClick = () => {
        dispatch(clearSelectedPlayer());
    }

    return (
        <>
            <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete freeSolo id="free-solo-2-demo"
                    disableClearable
                    options={players}
                    getOptionLabel={(player) => player.name}        // 표시할 텍스트
                    onChange={handlePlayerSelected}
                    // open={isDropdownOpen}
                    // onInputChange={(event, value) => {
                    //     setIsDropdownOpen(value !== '');
                    // }}
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
            </Stack>

            <br/>

            <button onClick={handleClearClick}>clear</button>
        </>
    )
}
