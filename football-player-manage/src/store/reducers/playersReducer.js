import { createSlice } from '@reduxjs/toolkit';

export const playersReducer = createSlice({
    name: "players",
    initialState: [],
    reducers: {
        updatePlayer: (state, action) => {
            // 액션 페이로드에서 필요한 정보를 추출하여 상태를 업데이트합니다.
            state.push(action.payload);
        }
    }
});

export const { updatePlayer } = playersReducer.actions;         // ⭐ 액션을 따로 추출해서 export해야 에러 안남...🥲
export default playersReducer.reducer;