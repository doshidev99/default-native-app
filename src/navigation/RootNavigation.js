import React, { useEffect, memo } from 'react';

import SplashScreen from 'react-native-splash-screen';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screen/unAuthentication/Login';

import { APP_SCREEN, StackAuthentication } from './screenTypes';

const Stack = createStackNavigator();

const RootNavigator = () => {
  useEffect(() => {
    SplashScreen?.hide();
  }, []);

  const token = true;

  return (
    <>
      <Stack.Navigator headerMode="none">
        {
          !token ? (
            <Stack.Screen name={APP_SCREEN.LOGIN} component={Login} />
          ) : (
            <>
              {
                StackAuthentication.map((s) => (
                  <Stack.Screen key={s.name} name={s.name} component={s.component} />
                ))
              }
            </>
          )
        }
      </Stack.Navigator>
    </>
  );
};

export default memo(RootNavigator);
