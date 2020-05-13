import { combineReducers } from 'redux';

import accreditReducer from "../features/accreditation/redux/reducer";
import playerReducer from "../features/player/redux/reducer";

const rootReducer = combineReducers({
    AccreditFeature: accreditReducer,
    PlayerFeature: playerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;