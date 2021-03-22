import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';
import { isIos } from '../../utils';

const AppDivider = ({ containerStyles }) => (
  <View style={[{ width: '100%', backgroundColor: '#1C0404' },
    { height: isIos ? 0.2 : 0.4 },
    containerStyles]}
  />
);

AppDivider.propTypes = {
  containerStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

AppDivider.defaultProps = {
  containerStyles: {},
};

export default AppDivider;
