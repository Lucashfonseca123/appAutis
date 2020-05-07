if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView } from "react-native";
import { Provider } from 'react-redux';
import { store, persistor } from './store/Store';
import { PersistGate } from 'redux-persist/integration/react';

import RootNavigator from "./navigation/RootNavigator";

console.disableYellowBox = true;

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden />
            <RootNavigator />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;


