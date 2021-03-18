import React from 'react';
import { Text, View } from 'react-native';

import PropTypes from 'prop-types';

import { COLORS } from '../../assets/styles';

const AppText = (props) => {
  const {
    uppercase,
    lowercase,
    capitalize,
    normal,
    bold,
    content,
    size,
    color,
    textAlign,
    fontFamily,
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

  return (

    <View style={[containerStyles]}>
      <Text
        style={[
          styleFromProps,
          otherStyle,
          {
            fontSize: size,
            color: textColor,
            textAlign,
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
  bold: PropTypes.bool,
  content: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  fontFamily: PropTypes.string,
  letterSpacing: PropTypes.number,
  containerStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  otherStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AppText.defaultProps = {
  uppercase: false,
  lowercase: false,
  capitalize: false,
  normal: false,
  bold: false,
  content: 'text',
  size: 13,
  color: '',
  textAlign: 'left',
  fontFamily: null,
  letterSpacing: 0.5,
  containerStyles: {},
  otherStyle: {},

};

export default AppText;
