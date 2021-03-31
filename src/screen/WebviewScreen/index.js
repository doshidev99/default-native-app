import React from 'react';

import WebView from 'react-native-webview';
import AppLayout from '../../component/AppLayout';

import AppLoading from '../../component/AppLoading';

const WebViewScreen = () => (
  <AppLayout>

    <WebView
      startInLoadingState
      renderLoading={() => <AppLoading />}
      source={{ uri: 'https://wiicamp.com/' }}
    />
  </AppLayout>
);

WebViewScreen.propTypes = {
};

WebViewScreen.defaultProps = {
};

export default WebViewScreen;
