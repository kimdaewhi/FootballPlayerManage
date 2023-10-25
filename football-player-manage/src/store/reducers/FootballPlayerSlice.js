import { createSlice } from '@reduxjs/toolkit';

export const FootballPlayerSlice = createSlice({
    name: "footballPlayer",
    initialState: {
        id: 0,
        name: "",
        country: "",
        height: 0,
        birth: "",

        age: 0,
        position: "",
        club: "",
        shirtsnum: 0,
        foot: ""
    },
    reducers: {
        updatePlayer: (state, action) => {
            // 액션 페이로드에서 필요한 정보를 추출하여 상태를 업데이트합니다.
            state.name = action.payload.name;
            state.country = action.payload.country;
            state.height = action.payload.height;
            state.birth = action.payload.birth;
            state.age = action.payload.age;
            state.position = action.payload.position;
            state.club = action.payload.club;
            state.shirtsnum = action.payload.shirtsnum;
            state.foot = action.payload.foot;
        }
    }
});

export default FootballPlayerSlice.reducer;