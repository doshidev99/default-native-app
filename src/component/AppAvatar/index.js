import React from 'react';
import {
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PropTypes from 'prop-types';

import { images } from '../../assets/images';

import styles from './styles';
import AppImage from '../AppImage';
import AppText from '../AppText';

const AppAvatar = (props) => {
  const {
    containerStyles,
    avatar, name, birthday, age,
  } = props;

  const navigation = useNavigation();

  return (
    <View style={[
      styles.container, containerStyles,
    ]}
    >
      <View>
        <AppImage
          size="big"
          shape="circle"
          uri={avatar}
          styleImage={{
            backgroundColor: '#1C0404',
          }}
        />

        <AppImage
          styleImage={{ width: 20, height: 20, resizeMode: 'center' }}
          uri={images.icCamera}
          shape="circle"
          resizeMode="center"
          containerStyles={{
            position: 'absolute',
            right: -5,
            top: 10,
          }}
          otherStyle={{
            backgroundColor: '#E8E8E8',
            borderWidth: 2,
            borderColor: '#FFFFFF',
          }}
        />

      </View>

      <AppText content={name} textAlign="center" size={20} />
      <AppText content={birthday} textAlign="center" />

      <View style={styles.boxAge}>
        <AppImage uri={images.icCake} size="icon" />
        <AppText content={`${age} years`} color="red" capitalize textAlign="center" />
      </View>

    </View>
  );
};

export default AppAvatar;

AppAvatar.propTypes = {
  containerStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  // eslint-disable-next-line react/forbid-prop-types
  avatar: PropTypes.any.isRequired,
  name: PropTypes.string,
  birthday: PropTypes.string,
  age: PropTypes.number,
};

AppAvatar.defaultProps = {
  containerStyles: {},
  name: 'Katie Yates',
  birthday: '2nd August',
  age: 22,
};
