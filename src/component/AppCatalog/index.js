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
          paddingLeft: 20,
          paddingRight: 29,
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

          <View style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: bgImage,
            marginVertical: 10,
          }}
          >

            <AppImage
              uri={imageCatalog}
              resizeMode="contain"
              containerStyles={{
                position: 'absolute',
                right: 0,
                top: 5,
                bottom: '-15%',

                width: '100%',
                overflow: 'hidden',
              }}
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
