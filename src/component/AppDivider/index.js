import React from 'react';
import { View, ViewPropTypes } from 'react-native';

import { isIos } from '../../utils';

const AppDivider = ({ containerStyles }) => (
  <View style={[{ width: '100%', backgroundColor: '#1C0404' },
    { height: isIos ? 0.2 : 0.4 },
    containerStyles]}
  />
);

AppDivider.propTypes = {
  containerStyles: ViewPropTypes.style,
};

AppDivider.defaultProps = {
  containerStyles: {},
};

export default AppDivider;
