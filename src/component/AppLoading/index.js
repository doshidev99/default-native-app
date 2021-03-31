import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { COLORS } from '../../assets/styles';
import AppText from '../AppText';

const AppLoading = () => (
  <View style={{
    flex: 1,
  }}
  >
    <ActivityIndicator color={COLORS.PRIMARY_RED} />
    <AppText content="wating..." semiBold color="red" align="center" />
  </View>
);

AppLoading.propTypes = {
};

AppLoading.defaultProps = {
};

export default AppLoading;
