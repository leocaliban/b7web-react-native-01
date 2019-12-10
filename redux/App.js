import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { PersistGate } from 'redux-persist/es/integration/react';

import { store, persistor } from './src/Store';
import MainNavigator from './src/navigators/MainNavigator';

const AppContainer = createAppContainer(MainNavigator);

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer></AppContainer>
    </PersistGate>
  </Provider>
)