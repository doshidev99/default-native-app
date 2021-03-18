import React, { Suspense } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import store from './redux/rootSaga';

import AppContainer from './navigation/AppContainer';
import AppTabView from './component/AppTabView';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Suspense fallback={<ActivityIndicator size="big" />}>
          <View style={styles.root}>
            <AppContainer />
          </View>
        </Suspense>
      </Provider>
    </SafeAreaProvider>
  );
}
