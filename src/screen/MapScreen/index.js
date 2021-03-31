import React from 'react';
import WebView from 'react-native-webview';

import AppHeader from '../../component/AppHeader';
import AppLayout from '../../component/AppLayout';
import AppLoading from '../../component/AppLoading';

const MapScreen = () => (
  <AppLayout>
    <AppHeader isGoback rightIcon namePath="Back" />

    <WebView
      startInLoadingState
      renderLoading={() => <AppLoading />}
      source={{ uri: 'https://www.google.com/maps' }}
    />

  </AppLayout>
);

MapScreen.propTypes = {
};

MapScreen.defaultProps = {
};

export default MapScreen;
