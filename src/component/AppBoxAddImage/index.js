import React from 'react';
import {
  View, Dimensions, TouchableWithoutFeedback, ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types';

import AppImage from '../AppImage';

import styles from './styles';

import icPlus from '../../assets/images/ic-plus-normal.png';

const windowWidth = Dimensions.get('window').width;

const AppBoxAddImage = ({ containerStyles, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[
      styles.container,
      containerStyles,
      {
        width: (windowWidth - 32 - 20) / 3,
        height: 139,
      },
    ]}
    >
      <View style={styles.flexCenter}>
        <AppImage
          containerStyles={{
            width: 36,
            height: 36,
          }}
          uri={icPlus}
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
  </TouchableWithoutFeedback>
);

AppBoxAddImage.propTypes = {
  onPress: PropTypes.func,
  containerStyles: ViewPropTypes.style,
};

AppBoxAddImage.defaultProps = {
  onPress: () => { },
  containerStyles: {},
};
export default AppBoxAddImage;
