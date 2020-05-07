// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import reactotron from '../ReactotronConfig';

// Imports: Redux
import rootReducer from './RootReducer';
// Middleware: Redux Persist Config
const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: [],
    // Blacklist (Don't Save Specific Reducers)
    // blacklist: [
    //     'authReducer',
    // ],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
    rootReducer,
    compose(
        // createLogger(),
        reactotron.createEnhancer(),
    ),
);
// Middleware: Redux Persist Persister
const persistor = persistStore(store);
// Exports
export {
    store,
    persistor,
};