import React, { memo } from 'react';
import {
  Text, View,
} from 'react-native';

import PropTypes from 'prop-types';
import AppTabBottom from '../../../component/AppTabBottom';

const Home = () => (
  <View>
    <Text> Setting </Text>
    <AppTabBottom />
  </View>
);

Home.propTypes = {
};

Home.defaultProps = {
};
export default memo(Home);
