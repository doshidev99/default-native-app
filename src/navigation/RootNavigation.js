import React, { useEffect, memo } from 'react';

import SplashScreen from 'react-native-splash-screen';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screen/LoginScreen';

import { APP_SCREEN } from './screenTypes';

import HomeScreen from '../screen/HomeScreen';
import ListerScreen from '../screen/ListerScreen';
import Setting from '../screen/Setting';
import GiftDetail from '../screen/GiftDetail';
import FriendGift from '../screen/FriendGift';
import BrandCatalog from '../screen/BrandCatalog';
import GiverSuggest from '../screen/GiverSuggest';

const Stack = createStackNavigator();

const StackAuthentication = [
  { name: APP_SCREEN.HOME, component: HomeScreen },
  { name: APP_SCREEN.LISTER, component: ListerScreen },
  { name: APP_SCREEN.GIVER, component: HomeScreen },
  { name: APP_SCREEN.SETTING, component: Setting },
  { name: APP_SCREEN.GIFTDETAIL, component: GiftDetail },
  { name: APP_SCREEN.FRIENDGIFT, component: FriendGift },
  { name: APP_SCREEN.BRAND_CATALOG, component: BrandCatalog },
  { name: APP_SCREEN.GIVER_SUGGEST, component: GiverSuggest },
];

const RootNavigator = () => {
  useEffect(() => {
    SplashScreen?.hide();
  }, []);

  const token = true;

  return (
    <>
      <Stack.Navigator headerMode="none" initialRouteName={APP_SCREEN.HOME}>
        {
          !token ? (
            <Stack.Screen name={APP_SCREEN.LOGIN} component={LoginScreen} />
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
