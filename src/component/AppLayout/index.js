import PropTypes from 'prop-types';
import React from 'react';
import { View, ViewPropTypes } from 'react-native';

import { COLORS } from '../../assets/styles';

const AppLayout = ({ children, containerStyles, theme }) => {
  let backgroundColor = '';

  switch (theme) {
    case 'grey':
      backgroundColor = COLORS.NEUTRAL_GRAY_5;
      break;

    case 'white':
      backgroundColor = COLORS.NEUTRAL_WHITE;
      break;

    default: break;
  }

  return (
    <View style={[{ flex: 1, backgroundColor }, containerStyles]}>
      {children}
    </View>
  );
};

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  containerStyles: ViewPropTypes.style,

  theme: PropTypes.oneOf(['grey', 'white']),

};

AppLayout.defaultProps = {
  containerStyles: {},
  theme: 'white',
};

export default AppLayout;
