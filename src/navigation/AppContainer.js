import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './RootNavigation';

const AppContainer = (() => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
));

export default AppContainer;
