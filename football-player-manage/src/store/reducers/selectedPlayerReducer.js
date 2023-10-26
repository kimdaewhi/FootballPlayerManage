import { createSlice } from '@reduxjs/toolkit';

const selectedPlayerReducer = createSlice({
    name: "selectedPlayer",
    initialState: {
        id: "",
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
        },
        clearSelectedPlayer: (state, action) => {
            return {
                id: "",
                name: "",
                country: "",
                height: 0,
                birth: "",

                age: 0,
                position: "",
                team: "",
                shritsnum: 0,
                foot: "",
            };
        }
    }
});


export const { updateSelectedPlayer, clearSelectedPlayer } = selectedPlayerReducer.actions;
export default selectedPlayerReducer.reducer;