import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import playerReducer from "./playerReducer";

const persistConfig = {
    key: 'player_feature',
    storage: AsyncStorage,
    whitelist: ['counter'],
    stateReconciler: autoMergeLevel2,
};

export default combineReducers({
    playerReducer: persistReducer(persistConfig, playerReducer),
});