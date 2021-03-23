import React, { memo } from 'react';
import {
  TouchableHighlight, View, TouchableNativeFeedback,
} from 'react-native';

import PropTypes from 'prop-types';

import { isIos } from '../../utils';

import AppText from '../AppText';

import { COLORS } from '../../assets/styles';

import styles from './styles';

const AppButton = (props) => {
  const {
    width, height,
    content,
    color,
    textAlign,
    bold,
    size,
    beforePrefix,
    uppercase,
    onPress,
    theme,
    containerStyles,
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

              <AppText
                otherStyle={styles.text}
                content={content}
                size={size}
                textAlign={textAlign}
                bold={bold}
                color={color}
                uppercase={uppercase}
              />
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
                <AppText
                  otherStyle={styles.text}
                  content={content}
                  size={size}
                  textAlign={textAlign}
                  bold={bold}
                  color={color}
                  uppercase={uppercase}
                />
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

  content: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  size: PropTypes.number,
  uppercase: PropTypes.bool,
  bold: PropTypes.bool,
  onPress: PropTypes.func,
  containerStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AppButton.defaultProps = {
  theme: 'primary',
  width: '100%',
  height: 48,
  beforePrefix: null,
  content: 'shop now',
  color: COLORS.NEUTRAL_WHITE,
  textAlign: 'center',
  uppercase: false,
  bold: false,
  size: 14,
  onPress: () => { },
  containerStyles: {},
};

export default memo(AppButton);
