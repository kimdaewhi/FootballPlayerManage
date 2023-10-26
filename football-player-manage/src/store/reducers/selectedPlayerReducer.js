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
        updateSelectedPlayer: (state, action) => {
            return {
                id: action.payload.id,
                name: action.payload.name,
                country: action.payload.country,
                height: action.payload.height,
                birth: action.payload.birth,

                age: action.payload.age,
                position: action.payload.position,
                team: action.payload.team,
                shritsnum: action.payload.shritsnum,
                foot: action.payload.foot,
            };
        }
    }
});


export const { updateSelectedPlayer } = selectedPlayerReducer.actions;
export default selectedPlayerReducer.reducer;