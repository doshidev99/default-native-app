import React from 'react';
import { Image, View, TouchableWithoutFeedback } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

import AppText from '../AppText';

import AppImage from '../AppImage';
import { images } from '../../assets/images';

const AppCatalog = (props) => {
  const {
    imageCatalog, catalog, bgColor, bgImage,
    onPress,
  } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[
        styles.container,
        {
          backgroundColor: bgColor,
        },
      ]}
      >

        <View style={styles.flexBox}>
          <AppText
            font="semi"
            uppercase
            content={catalog}
            size={20}
            color="gray"
          />

          <View style={[styles.bgCircle, {
            backgroundColor: bgImage,
          }]}
          >

            <AppImage
              uri={imageCatalog}
              resizeMode="contain"
              containerStyles={styles.imgRepresent}
            />
          </View>

        </View>

      </View>
    </TouchableWithoutFeedback>

  );
};

AppCatalog.propTypes = {
  imageCatalog: Image.propTypes.source,
  catalog: PropTypes.string,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  onPress: PropTypes.func,
};

AppCatalog.defaultProps = {
  imageCatalog: images.defaultAvatar,
  catalog: 'new in',
  bgColor: '#D0D0FF',
  bgImage: '#9595F1',
  onPress: () => { },
};

export default AppCatalog;
