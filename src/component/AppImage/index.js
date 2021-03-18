import React, { memo } from 'react';
import { Image, View } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const AppImage = (props) => {
  const {
    uri,
    containerStyles,
    size,
    resizeMode,
    styleImage,
    shape,
    otherStyle,
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
    <View style={[styles.container, containerStyles]}>
      <Image
        style={
          [
            sizeImage,
            styleImage,
            otherStyle,
            styleRadius,
            { resizeMode },
          ]
        }
        source={uri}
      />

    </View>
  );
};

AppImage.propTypes = {
  uri: Image.propTypes.source,
  containerStyles: PropTypes.instanceOf(Object),
  size: PropTypes.oneOf(['small', 'medium', 'big', 'icon', 'special-icon', '']),
  resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'repeat', 'center']),
  styleImage: PropTypes.instanceOf(Object),
  shape: PropTypes.string,
  otherStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AppImage.defaultProps = {
  uri: {},
  containerStyles: {},
  size: '',
  resizeMode: 'contain',
  styleImage: null,
  shape: null,
  otherStyle: {},

};

export default memo(AppImage);
