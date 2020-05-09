// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reactotron from '../ReactotronConfig';


import rootReducer from './RootReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    rootReducer,
    compose(
        reactotron.createEnhancer(),
    ),
);

const persistor = persistStore(store);

export {
    store,
    persistor,
};