import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import playerReducer from "./playerReducer";
import menuReducer from "./menuReducer";
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

const persistConfig = {
    key: 'player_feature',
    storage: AsyncStorage,
    whitelist: ['currentStage'],
    stateReconciler: autoMergeLevel2,
};

export default combineReducers({
    playerReducer: playerReducer,
    menuReducer: persistReducer(persistConfig, menuReducer)
});