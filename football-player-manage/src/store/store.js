import { configureStore } from '@reduxjs/toolkit';

import players from './reducers/playersReducer';
import selectedPlayer from './reducers/selectedPlayerReducer'

export default configureStore({
        // @reduxjs/toolkit에서 제공하는 configureStore를 가지고 Redux store를 생성한다.
        reducer: { 
            players: players,
            selectedPlayer: selectedPlayer,
        },
});