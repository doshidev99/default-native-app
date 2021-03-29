import React from 'react';
import { View } from 'react-native';
import AppText from '../../component/AppText';
// import { WebView } from 'react-native-webview';
import styles from './styles';

const WebViewScreen = () => (
  <View style={[styles.container]}>
    <AppText content="web - view" />
    {/* <WebView source={{ uri: 'https://wiicamp.com/' }} /> */}
  </View>
);

WebViewScreen.propTypes = {
};

WebViewScreen.defaultProps = {
};

export default WebViewScreen;
