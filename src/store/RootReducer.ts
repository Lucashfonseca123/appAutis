import { combineReducers } from 'redux';

import authReducer from "../redux/reducer";

const rootReducer = combineReducers({
    authReducer: authReducer,
});

export default rootReducer;