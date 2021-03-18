import React from 'react';
import { Image, View } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

import AppText from '../AppText';

import AppImage from '../AppImage';

const AppCatalog = (props) => {
  const {
    imageCatalog, catalog, bgColor, bgImage,
  } = props;

  return (
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
          position: 'relative',
        }}
        />
        <AppImage
          uri={imageCatalog}
          styleImage={{
            width: 72,
          }}
          containerStyles={{
            position: 'absolute',
            right: 10,
            top: 5,
            bottom: 0,
            overflow: 'hidden',
          }}
        />

      </View>

    </View>
  );
};

AppCatalog.propTypes = {
  imageCatalog: Image.propTypes.source,
  catalog: PropTypes.string,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
};

AppCatalog.defaultProps = {
  imageCatalog: null,
  catalog: 'new in',
  bgColor: '#D0D0FF',
  bgImage: '#9595F1',
};

export default AppCatalog;
