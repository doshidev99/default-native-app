import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './RootNavigation';

// import AppTabView from '../component/AppTabView'

const AppContainer = (() => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
));

export default AppContainer;
