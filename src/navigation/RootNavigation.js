import React, { useEffect, memo } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import { MainDrawerScreen } from './authenNavigation';
import { UnAuthentication } from './unAuthenNavigation';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  useEffect(() => {
    SplashScreen?.hide();
  }, []);

  const token = true;

  return (
    <RootStack.Navigator headerMode="none" screenOptions={{}}>
      {
        !token ? (
          <RootStack.Screen
            options={{ gestureEnabled: false }}
            name="UN_AUTHORIZE"
            component={UnAuthentication}
          />
        ) : (
          <RootStack.Screen
            options={{ gestureEnabled: false }}
            name="HOME"
            component={MainDrawerScreen}
          />
        )
      }

    </RootStack.Navigator>
  );
};

export default memo(RootNavigator);
