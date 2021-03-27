import React from 'react';
import {
  View, Image, Dimensions, TouchableWithoutFeedback, ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types';

import { images } from '../../assets/images';

import AppImage from '../AppImage';
import AppText from '../AppText';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;

const AppGiftCard = (props) => {
  const {
    giftName, giftImage, isOwner, containerStyles, onPress,
    index,
  } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>

      <View style={[
        styles.container,
        containerStyles,
        {
          marginRight: ((index + 1) % 3) ? 10 : 0,
          width: (windowWidth - 32 - 20) / 3,
          // ( 100 % - sum_spacing ) / countItem
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
            resizeMode="contain"
            uri={giftImage}
          />

          <AppText
            content={giftName}
            size={12}
            font="regular"
            color="gray"
            align="center"
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
  containerStyles: ViewPropTypes.style,
  onPress: PropTypes.func,
  index: PropTypes.number.isRequired,
};

AppGiftCard.defaultProps = {
  giftName: 'Safari T-Shirt',
  isOwner: false,
  containerStyles: {},
  onPress: () => { },
};
