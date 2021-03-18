import React, { memo } from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';

import AppTabBottom from '../../../component/AppTabBottom';
import AppText from '../../../component/AppText';

const Home = () => (
  <View style={{
    flex: 1,
    backgroundColor: '#FFF',
  }}
  >
    <View style={{ paddingHorizontal: 16, paddingTop: 32, paddingBottom: 16 }}>
      <AppText content="Hello, Sarah." color="red" size={16} />
      <AppText content="How are you today?" size={28} bold />
    </View>
  </View>

);
Home.propTypes = {
};

Home.defaultProps = {
};
export default memo(Home);
