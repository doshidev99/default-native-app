import React from 'react';
import {
  Text, View, ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types';

import { COLORS, FONTS } from '../../assets/styles';

const AppText = (props) => {
  const {
    uppercase,
    lowercase,
    capitalize,
    normal,
    medium,
    bold,
    content,
    size,
    color,
    align,
    font,
    letterSpacing,
    containerStyles,
    otherStyle,
  } = props;

  let styleFromProps = {};

  if (uppercase) {
    styleFromProps = { ...styleFromProps, textTransform: 'uppercase' };
  } else if (lowercase) {
    styleFromProps = { ...styleFromProps, textTransform: 'lowercase' };
  } else if (capitalize) {
    styleFromProps = { ...styleFromProps, textTransform: 'capitalize' };
  }

  if (normal) {
    styleFromProps = { ...styleFromProps, fontWeight: 'normal' };
  }
  if (medium) {
    styleFromProps = { ...styleFromProps, fontWeight: '500' };
  }
  if (bold) {
    styleFromProps = { ...styleFromProps, fontWeight: 'bold' };
  }

  let textColor;
  switch (color) {
    case 'dark':
      textColor = COLORS.NEUTRAL_DARK;
      break;
    case 'gray':
      textColor = COLORS.NEUTRAL_GRAY;
      break;
    case 'grayDisable':
      textColor = COLORS.GRAY_DISABLE;
      break;
    case 'gray15':
      textColor = COLORS.NEUTRAL_GRAY_15;
      break;
    case 'gray40':
      textColor = COLORS.NEUTRAL_GRAY_40;
      break;
    case 'gray55':
      textColor = COLORS.NEUTRAL_55_DIFFERENT;
      break;
    case 'red':
      textColor = COLORS.PRIMARY_RED;
      break;
    case 'white':
      textColor = COLORS.NEUTRAL_WHITE;
      break;
    case 'blue':
      textColor = COLORS.ACCENT_BLUE;
      break;

    default: break;
  }

  let fontFamily;

  switch (font) {
    case 'semi':
      fontFamily = FONTS.semiBold;
      break;
    case 'bold':
      fontFamily = FONTS.bold;
      break;
    case 'ultraLight':
      fontFamily = FONTS.ultraLight;
      break;
    case 'thin':
      fontFamily = FONTS.thin;
      break;
    default: break;
  }

  return (

    <View style={[containerStyles]}>
      <Text
        {...props}
        style={[
          styleFromProps,
          otherStyle,
          {
            fontSize: size,
            color: textColor,
            textAlign: align,
            fontFamily,
            letterSpacing,
          },
        ]}
      >
        {content}
      </Text>
    </View>
  );
};

AppText.propTypes = {
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  normal: PropTypes.bool,
  medium: PropTypes.bool,
  bold: PropTypes.bool,
  content: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  font: PropTypes.string,
  letterSpacing: PropTypes.number,
  containerStyles: ViewPropTypes.style,
  otherStyle: Text.propTypes.style,
};

AppText.defaultProps = {
  uppercase: false,
  lowercase: false,
  capitalize: false,
  normal: false,
  medium: false,
  bold: false,
  content: 'text',
  size: 13,
  color: 'dark',
  align: 'left',
  font: 'regular',
  letterSpacing: 0.5,
  containerStyles: {},
  otherStyle: {},

};

export default AppText;
