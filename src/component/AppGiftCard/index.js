import React from 'react';
import { View, Image } from 'react-native';

import PropTypes from 'prop-types';

import { images } from '../../assets/images';

import AppImage from '../AppImage';
import AppText from '../AppText';
import styles from './styles';

const AppGiftCard = (props) => {
  const { giftName, avatar } = props;

  return (
    <View style={[
      styles.container,
      {
        width: 108,
        height: 139,
      },
    ]}
    >
      <View style={[styles.wrapperImage, { paddingTop: 18 }]}>
        <AppImage
          styleImage={{
            width: '100%',
            height: '80%',
          }}
          uri={avatar}
        />

        <AppText
          content={giftName}
          size={12}
          color="gray"
          textAlign="center"
          letterSpacing={0.3}
        />
      </View>

      <AppImage
        uri={images.defaultAvatar}
        shape="circle"
        styleImage={{
          width: 35,
          height: 35,
          backgroundColor: '#1C0404',
        }}
        containerStyles={{
          position: 'absolute',
          right: -15,
          top: -15,
        }}
      />
    </View>
  );
};

export default AppGiftCard;

AppGiftCard.propTypes = {
  giftName: PropTypes.string,
  avatar: Image.propTypes.source,
};

AppGiftCard.defaultProps = {
  giftName: 'Safari T-Shirt',
  avatar: '',
};
