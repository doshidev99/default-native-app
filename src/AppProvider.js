import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/rootSaga';

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppProvider;
