import React from 'react';
import {
  View, Image, Dimensions, TouchableWithoutFeedback,
} from 'react-native';

import PropTypes from 'prop-types';

import { images } from '../../assets/images';

import AppImage from '../AppImage';
import AppText from '../AppText';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;

// eslint-disable-next-line no-console
console.log(windowWidth, '<----');
const AppGiftCard = (props) => {
  const {
    giftName, giftImage, isOwner, containerStyles, onPress,
  } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>

      <View style={[
        styles.container,
        containerStyles,
        {
          width: `${windowWidth <= 375 ? '30%' : '28%'}`,
          height: 139,
        },
      ]}
      >
        <View style={[styles.wrapperImage, { paddingTop: 18 }]}>
          <AppImage
            containerStyles={{
              width: '100%',
              height: '80%',
            }}
            uri={giftImage}
          />

          <AppText
            content={giftName}
            size={12}
            color="gray"
            textAlign="center"
            letterSpacing={0.3}
          />
        </View>

        {
          isOwner && (
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
          )
        }

      </View>
    </TouchableWithoutFeedback>

  );
};

export default AppGiftCard;

AppGiftCard.propTypes = {
  giftName: PropTypes.string,
  giftImage: Image.propTypes.source.isRequired,
  isOwner: PropTypes.bool,
  containerStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,
};

AppGiftCard.defaultProps = {
  giftName: 'Safari T-Shirt',
  isOwner: false,
  containerStyles: {},
  onPress: () => { },
};
