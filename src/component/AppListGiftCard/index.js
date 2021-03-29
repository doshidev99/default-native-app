import React from 'react';
import {
  View, Dimensions, TouchableWithoutFeedback, ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types';

import { images } from '../../assets/images';

import AppImage from '../AppImage';
import AppText from '../AppText';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;

const AppListGiftCard = (props) => {
  const {
    data, isWrap,
    isOwner, containerStyles,
    onPress,
  } = props;

  return (
    <View style={[styles.flexBox, isWrap && { flexWrap: 'wrap' }]}>
      {
        data.map((e, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TouchableWithoutFeedback key={`key=${index}`} onPress={onPress}>
            <View style={[
              styles.container,
              containerStyles,
              isOwner
                ? {
                  marginRight: ((index + 1) % 3) ? 15 : 0,
                  width: (windowWidth - 32 - 30) / 3,
                  // ( 100 % - sum_spacing ) / countItem
                  height: 139,
                } : {
                  marginRight: ((index + 1) % 3) ? 10 : 0,
                  width: (windowWidth - 32 - 20) / 3,
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
                  uri={images.defaultAvatar}
                />

                <AppText
                  content={e.giftName}
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
                    containerStyles={{
                      position: 'absolute',
                      right: -15,
                      top: -15,

                      width: 35,
                      height: 35,
                      backgroundColor: '#1C0404',
                    }}
                  />
                )
              }

            </View>
          </TouchableWithoutFeedback>

        ))
      }
    </View>

  );
};

export default AppListGiftCard;

AppListGiftCard.propTypes = {
  data: PropTypes.instanceOf(Array),
  isWrap: PropTypes.bool,
  isOwner: PropTypes.bool,
  containerStyles: ViewPropTypes.style,
  onPress: PropTypes.func,
};

AppListGiftCard.defaultProps = {
  data: [1, 2, 3, 4, 5],
  isWrap: false,
  isOwner: false,
  containerStyles: {},
  onPress: () => { },
};
