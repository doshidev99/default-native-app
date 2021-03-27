import React, { memo } from 'react';
import {
  TouchableHighlight, View, TouchableNativeFeedback, ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types';

import { isIos } from '../../utils';

import { COLORS } from '../../assets/styles';

import styles from './styles';

const AppButton = (props) => {
  const {
    width, height,
    beforePrefix,
    onPress,
    theme,
    containerStyles,
    children,
  } = props;

  let bgColor = COLORS.PRIMARY_RED;

  switch (theme) {
    case 'blue':
      bgColor = COLORS.ACCENT_BLUE;
      break;
    case 'grey':
      bgColor = COLORS.NEUTRAL_GRAY_15;
      break;
    case 'transparent':
      bgColor = 'transparent';
      break;
    case 'dark':
      bgColor = '#333333';
      break;
    default:
      break;
  }

  return (
    <>
      {
        isIos ? (
          <TouchableHighlight
            underlayColor={bgColor}
            style={[styles.container, containerStyles, {
              width,
              height,
              backgroundColor: bgColor,
            }]}
            onPress={onPress}
          >
            <View style={[styles.wrapperContent]}>
              {
                beforePrefix && (
                  <>
                    {beforePrefix}
                  </>
                )
              }
              {children}
            </View>

          </TouchableHighlight>
        )
          : (
            <TouchableNativeFeedback onPress={onPress}>
              <View
                style={[
                  styles.container,
                  containerStyles,
                  { backgroundColor: bgColor, width, height },
                ]}
              >
                {
                  beforePrefix && (
                    <>
                      {beforePrefix}
                    </>
                  )
                }
                {children}
              </View>

            </TouchableNativeFeedback>
          )
      }

    </>
  );
};

AppButton.propTypes = {
  theme: PropTypes.oneOf(['primary', 'blue', 'grey', 'transparent', 'dark']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  beforePrefix: PropTypes.element,
  onPress: PropTypes.func,
  containerStyles: ViewPropTypes.style,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

AppButton.defaultProps = {
  theme: 'primary',
  width: '100%',
  height: 48,
  beforePrefix: null,
  onPress: () => { },
  containerStyles: {},
};

export default memo(AppButton);
