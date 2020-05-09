import { combineReducers } from 'redux';

import accreditReducer from "../features/accreditation/redux/reducer";

const rootReducer = combineReducers({
    AccreditFeature: accreditReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;