import React, { useEffect, memo } from 'react';

import SplashScreen from 'react-native-splash-screen';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screen/unAuthentication/Login';

import { APP_SCREEN } from './screenTypes';

import Home from '../screen/authentication/Home';
import Setting from '../screen/authentication/Setting';
import GiftDetail from '../screen/authentication/GiftDetail';
import FriendGift from '../screen/authentication/FriendGift';

const Stack = createStackNavigator();

const StackAuthentication = [
  { name: APP_SCREEN.HOME, component: Home },
  { name: APP_SCREEN.LISTER, component: Home },
  { name: APP_SCREEN.GIVER, component: Home },
  { name: APP_SCREEN.SETTING, component: Setting },
  { name: APP_SCREEN.GIFTDETAIL, component: GiftDetail },
  { name: APP_SCREEN.FRIENDGIFT, component: FriendGift },
];

const RootNavigator = () => {
  useEffect(() => {
    SplashScreen?.hide();
  }, []);

  const token = true;

  return (
    <>
      <Stack.Navigator headerMode="none" initialRouteName={APP_SCREEN.FRIENDGIFT}>
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
