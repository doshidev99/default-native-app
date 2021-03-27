import PropTypes from 'prop-types';
import React from 'react';
import { View, ViewPropTypes } from 'react-native';

import { COLORS } from '../../assets/styles';

const AppLayout = ({ children, containerStyles }) => (
  <View style={[{ flex: 1, backgroundColor: COLORS.NEUTRAL_WHITE }, containerStyles]}>
    {children}
  </View>
);

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  containerStyles: ViewPropTypes.style,

};

AppLayout.defaultProps = {
  containerStyles: {},
};

export default AppLayout;
