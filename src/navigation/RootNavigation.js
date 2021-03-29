import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screen/LoginScreen';

import HomeScreen from '../screen/HomeScreen';
import GiftDetailScreen from '../screen/GiftDetailScreen';
import FriendGiftScreen from '../screen/FriendGiftScreen';

import ListerScreen from '../screen/ListerScreen';
import BrandCatalogScreen from '../screen/BrandCatalogScreen';
import ProductDetailScreen from '../screen/ProductDetailScreen';
import ProductDetailAddScreen from '../screen/ProductDetailAddScreen';
import InviteFriendScreen from '../screen/InviteFriendScreen';

import GiverScreen from '../screen/GiverScreen';
import GiverSuggestScreen from '../screen/GiverSuggestScreen';
import MultipleFilterScreen from '../screen/MultipleFilterScreen';

import WebViewScreen from '../screen/WebviewScreen';

import MapScreen from '../screen/MapScreen';

import SettingScreen from '../screen/SettingScreen';

import { APP_SCREEN } from './screenTypes';
import UpdateInfomationScreen from '../screen/UpdateInfomationScreen';

const Stack = createStackNavigator();

const StackAuthentication = [
  { name: APP_SCREEN.HOME, component: HomeScreen },
  { name: APP_SCREEN.GIFTDETAIL, component: GiftDetailScreen },
  { name: APP_SCREEN.FRIENDGIFT, component: FriendGiftScreen },

  { name: APP_SCREEN.LISTER, component: ListerScreen },
  { name: APP_SCREEN.BRAND_CATALOG, component: BrandCatalogScreen },
  { name: APP_SCREEN.GIVER_SUGGEST, component: GiverSuggestScreen },
  { name: APP_SCREEN.PRODUCT_DETAILS_ADD, component: ProductDetailAddScreen },
  { name: APP_SCREEN.PRODUCT_DETAILS, component: ProductDetailScreen },
  { name: APP_SCREEN.WEB_VIEW_SCREEN, component: WebViewScreen },
  { name: APP_SCREEN.INVITE_FRIEND, component: InviteFriendScreen },

  { name: APP_SCREEN.MAP, component: MapScreen },

  { name: APP_SCREEN.GIVER, component: GiverScreen },
  { name: APP_SCREEN.MULTIPLE_FILTER, component: MultipleFilterScreen },

  { name: APP_SCREEN.SETTING, component: SettingScreen },
  { name: APP_SCREEN.UPDATE_INFOMATION, component: UpdateInfomationScreen },
];

const RootNavigator = () => {
  const token = true;

  return (
    <>
      <Stack.Navigator headerMode="none" initialRouteName={APP_SCREEN.WEB_VIEW_SCREEN}>
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
