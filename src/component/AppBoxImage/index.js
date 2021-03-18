import React from 'react';
import {
  View,
} from 'react-native';

import PropTypes from 'prop-types';
import { images } from '../../assets/images';

import AppImage from '../AppImage';
import AppText from '../AppText';

import styles from './styles';

const AppBoxImage = () => (
  <View style={[
    styles.container,
    {
      width: 108,
      height: 139,
    },
  ]}
  >
    <View style={[styles.wrapperImage]}>

      <AppImage
        containerStyles={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        styleImage={{
          width: 36,
          height: 36,
        }}
        uri={require('../../assets/images/ic-plus-normal.png')}
      />

      {/* <AppText
        content=""
        size={12}
        color="gray"
        textAlign="center"
        letterSpacing={0.3}
      /> */}
    </View>

  </View>
);

AppBoxImage.propTypes = {
};

AppBoxImage.defaultProps = {
};
export default AppBoxImage;
