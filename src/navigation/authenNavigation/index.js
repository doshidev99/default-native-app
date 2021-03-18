import React from 'react';
import { View, Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import AppHeader from '../../component/AppHeader';
import AppTabBottom from '../../component/AppTabBottom';
// import AppTabView from '../../component/AppTabView';

import HomeScreen from '../../screen/authentication/Home';
import SettingScreen from '../../screen/authentication/Home/Setting';

import { COLORS } from '../../assets/styles';

const Tab = createStackNavigator();

export const MainDrawerScreen = () => (
  <View style={[{
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.NEUTRAL_WHITE,
  }, Platform.OS === 'ios' && { paddingTop: 35 }]}
  >
    <AppHeader />
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="Setting"
        options={{ headerShown: false }}
        component={SettingScreen}
      />
    </Tab.Navigator>
    <AppTabBottom />
    {/* <AppTabView /> */}
  </View>
);
