import React from 'react';
import {
  View, Platform,
} from 'react-native';

import PropTypes from 'prop-types';

import AppImage from '../AppImage';
import AppText from '../AppText';

import styles from './styles';

// const flag = Platform.OS === 'ios';

const AppHeader = () => (
  <View style={[
    styles.container,
  ]}
  >
    <AppImage
      styleImage={{ width: 50, height: 50 }}
      uri={require('../../assets/images/ic-home-active.png')}
    />
    <AppText
      content="GreatGiftGiver"
      color="dark"
      size={10}
      containerStyles={{ paddingTop: 4 }}
    />
  </View>
);

AppHeader.propTypes = {
};

AppHeader.defaultProps = {
};
export default AppHeader;
