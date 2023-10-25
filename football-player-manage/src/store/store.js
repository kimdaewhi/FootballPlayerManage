import { configureStore } from '@reduxjs/toolkit';

import FootballPlayerReducer from './reducers/FootballPlayerSlice';

export default configureStore({
        // @reduxjs/toolkit에서 제공하는 configureStore를 가지고 Redux store를 생성한다.
        reducer: { 
            footballPlayer: FootballPlayerReducer
        },
});