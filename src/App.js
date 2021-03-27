import React from 'react';
import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  StyleSheet,
} from 'react-native';

import AppContainer from './navigation/AppContainer';
import { COLORS } from './assets/styles';

export default function App() {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: COLORS.NEUTRAL_GRAY_5,
    },
  });
  return (
    <SafeAreaProvider style={styles.root}>
      <AppContainer />
    </SafeAreaProvider>
  );
}
