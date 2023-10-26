import { createSlice } from '@reduxjs/toolkit';

const selectedPlayerReducer = createSlice({
    name: "selectedPlayer",
    initialState: {
        id: "000000",
        name: "",
        age: 0,
        country: "",
        height: 0,
        team: "",
        foot: "",
        birth: "",
        position: "",
        shritsnum: 0
    },
    reducers: {

    }
});


export default selectedPlayerReducer.reducer;