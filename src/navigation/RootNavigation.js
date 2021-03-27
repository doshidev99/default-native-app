import { createStackNavigator } from '@react-navigation/stack';
import React, { memo } from 'react';
import BrandCatalog from '../screen/BrandCatalog';
import FriendGift from '../screen/FriendGift';
import GiftDetail from '../screen/GiftDetail';
import GiverSuggest from '../screen/GiverSuggest';
import HomeScreen from '../screen/HomeScreen';
import ListerScreen from '../screen/ListerScreen';
import LoginScreen from '../screen/LoginScreen';
import Setting from '../screen/Setting';
import { APP_SCREEN } from './screenTypes';

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
