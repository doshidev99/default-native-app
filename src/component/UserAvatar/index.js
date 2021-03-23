import React from 'react';
import {
  View, Image,
} from 'react-native';

import PropTypes from 'prop-types';

import { images } from '../../assets/images';

import styles from './styles';
import AppImage from '../AppImage';
import AppText from '../AppText';

const UserAvatar = (props) => {
  const {
    containerStyles,
    avatar, name, birthday, age,
  } = props;

  return (
    <View style={[
      styles.container, containerStyles,
    ]}
    >
      <View>
        <AppImage
          size="big"
          shape="circle"
          resizeMode="contain"
          uri={avatar}
          containerStyles={{ backgroundColor: '#1C0404' }}
        />

        {/* <View style={{
          position: 'absolute',
          right: -5,
          top: 10,
          backgroundColor: '#E8E8E8',
          borderWidth: 2,
          borderColor: '#FFF',
        }}
        >
          <AppImage
            uri={images.icCamera}
            shape="contain"
            resizeMode="center"
            containerStyles={{ width: 20, height: 20 }}
          />
        </View> */}

      </View>

      <AppText content={name} textAlign="center" size={20} color="dark" />
      <AppText content={birthday} textAlign="center" color="gray" />

      <View style={styles.boxAge}>
        <AppImage uri={images.icCake} size="icon" />
        <AppText
          content={`${age} years`}
          color="red"
          capitalize
          textAlign="center"
          containerStyles={{ paddingLeft: 10 }}
        />
      </View>

    </View>
  );
};

export default UserAvatar;

UserAvatar.propTypes = {
  containerStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  avatar: Image.propTypes.source.isRequired,
  name: PropTypes.string,
  birthday: PropTypes.string,
  age: PropTypes.number,
};

UserAvatar.defaultProps = {
  containerStyles: {},
  name: 'Katie Yates',
  birthday: '2nd August',
  age: 22,
};
