import React, { memo } from 'react';
import {
  View,
} from 'react-native';

import PropTypes from 'prop-types';

const AppFlex = ({
  flex, flexWrap,
  direction, justify, alignItems, alignContent, self, bg, width, height,
  children,
  otherStyles,
}) => (
  <View style={[{
    flex,
    flexWrap,
    flexDirection: direction,
    justifyContent: justify,
    alignItems,
    alignContent,
    backgroundColor: bg,
    alignSelf: self,
    width,
    height,
  }, otherStyles]}
  >
    {children}
  </View>
);

AppFlex.propTypes = {
  flex: PropTypes.number,
  flexWrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around']),
  self: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  bg: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  otherStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

AppFlex.defaultProps = {
  flex: 1,
  flexWrap: 'nowrap',
  direction: 'column',
  justify: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'flex-start',
  self: 'stretch',
  bg: 'transparent',
  width: '100%',
  height: '100%',
  otherStyles: {},
};

export default memo(AppFlex);
