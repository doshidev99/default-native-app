import React from 'react';
import { Provider } from 'react-redux';

import { RootSiblingParent } from 'react-native-root-siblings';

import App from './App';
import store from './redux/rootSaga';

const AppProvider = () => (
  <Provider store={store}>
    <RootSiblingParent>
      <App />
    </RootSiblingParent>
  </Provider>
);

export default AppProvider;
