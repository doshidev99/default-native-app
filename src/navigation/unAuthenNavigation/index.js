import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screen/unAuthentication/Login';
import { StackRoute } from '../../constants/Routes';

const Stack = createStackNavigator();

export const UnAuthentication = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
    <Stack.Screen name={StackRoute.LoginScreen} component={Login} />
  </Stack.Navigator>
);
