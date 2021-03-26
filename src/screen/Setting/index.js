import React, { memo } from 'react';
import {
  Text, View,
} from 'react-native';

import PropTypes from 'prop-types';
import AppTabBottom from '../../component/AppTabBottom';

const HomeScreen = () => (
  <View>
    <Text> Setting </Text>
    <AppTabBottom />
  </View>
);

HomeScreen.propTypes = {
};

HomeScreen.defaultProps = {
};
export default memo(HomeScreen);
