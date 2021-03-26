import React, { memo } from 'react';
import { Image, View, ViewPropTypes } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const AppImage = (props) => {
  const {
    uri,
    containerStyles,
    size,
    resizeMode,
    shape,
    fade,
  } = props;

  let sizeImage;

  switch (size) {
    case 'small':
      sizeImage = {
        width: 30,
        height: 30,
      };
      break;
    case 'medium':
      sizeImage = {
        width: 50,
        height: 50,
      };
      break;
    case 'big':
      sizeImage = {
        width: 80,
        height: 80,
      };
      break;
    case 'icon':
      sizeImage = {
        width: 16,
        height: 16,
      };
      break;
    case 'special-icon':
      sizeImage = {
        width: 20,
        height: 20,
      };
      break;
    default:
      break;
  }

  let styleRadius = { borderRadius: 0 };

  switch (shape) {
    case 'circle':
      styleRadius = {
        borderRadius: 1000,
      };
      break;
    default:
      break;
  }

  return (
    <View style={[
      styles.container,
      sizeImage,
      containerStyles,
      styleRadius,
    ]}
    >
      <Image
        style={[{
          resizeMode,
          width: '100%',
          height: '100%',
        }, styleRadius]}
        source={uri}
        fadeDuration={fade && 0}
      />

    </View>
  );
};

AppImage.propTypes = {
  uri: Image.propTypes.source,
  containerStyles: ViewPropTypes.style,
  size: PropTypes.oneOf(['small', 'medium', 'big', 'icon', 'special-icon', '']),
  resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'repeat', 'center']),
  shape: PropTypes.string,
  fade: PropTypes.bool,
};

AppImage.defaultProps = {
  uri: {},
  containerStyles: {},
  size: '',
  resizeMode: 'contain',
  shape: null,
  fade: false,
};

export default memo(AppImage);
