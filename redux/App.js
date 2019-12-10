import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import Store from './src/Store';
import MainNavigator from './src/navigators/MainNavigator';

const AppContainer = createAppContainer(MainNavigator)

export default () => (
  <Provider store={Store}>
    <AppContainer></AppContainer>
  </Provider>
)