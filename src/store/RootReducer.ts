import { combineReducers } from 'redux';

import userReducer from "../features/accreditation/redux/reducer";

const rootReducer = combineReducers({
    userReducer: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;