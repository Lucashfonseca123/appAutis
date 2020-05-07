// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
// import authReducer from '../redux/reducer/authReducer';
// import counterReducer from '../redux/reducer/counterReducer';

import authReducer from "../redux/reducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
    authReducer: authReducer,
});
// Exports
export default rootReducer;