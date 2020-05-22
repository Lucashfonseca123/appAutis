import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import authReducer from "./authReducer";

const persistConfig = {
    key: 'auth_accredit',
    storage: AsyncStorage,
    whitelist: ['name', 'status', 'totalStage', 'missingStage'],
    stateReconciler: autoMergeLevel2,
};

export default combineReducers({
    accreditReducer: persistReducer(persistConfig, authReducer),
});