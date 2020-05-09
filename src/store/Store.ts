// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import reactotron from '../ReactotronConfig';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import RNFetchBlob from 'rn-fetch-blob';

import rootReducer from './RootReducer';
import FilesystemStorage from 'redux-persist-filesystem-storage';

// FilesystemStorage.config({
//     storagePath: `${RNFetchBlob.fs.dirs.DocumentDir}/persistStore`,
// });

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
    // blacklist: [
    //     'authReducer',
    // ],
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