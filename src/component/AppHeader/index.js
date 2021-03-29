import React from 'react';
import {
  View, TouchableWithoutFeedback,
} from 'react-native';

import PropTypes from 'prop-types';

import { useNavigation } from '@react-navigation/native';

import { isIos } from '../../utils';

import AppImage from '../AppImage';
import AppText from '../AppText';
import AppDivider from '../AppDivider';

import { images } from '../../assets/images';
import icShare from '../../assets/images/ic-share.png';
import icX from '../../assets/images/ic-x.png';
import { COLORS } from '../../assets/styles';

import styles from './styles';
import { APP_SCREEN } from '../../navigation/screenTypes';

const AppHeader = ({
  theme, isGoback, isCancel, divider, rightIcon, rightText, namePath, centerText,
}) => {
  const navigation = useNavigation();

  let backgroundColor = {};

  switch (theme) {
    case 'grey': backgroundColor = COLORS.NEUTRAL_GRAY_5;
      break;

    case 'white': backgroundColor = COLORS.NEUTRAL_WHITE;
      break;

    default: break;
  }

  return (
    <View style={{ backgroundColor }}>
      <View style={[
        styles.container,
        isIos ? { paddingTop: 44 } : { paddingTop: 9 },
      ]}
      >
        <>
          {
            isGoback && (
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <View style={[{
                  position: 'absolute',
                  left: 18,
                }, isIos ? { bottom: '50%' } : { top: '50%' }]}
                >
                  <View style={{
                    flexDirection: 'row',
                  }}
                  >

                    {
                      isCancel ? (
                        <AppImage
                          containerStyles={{ width: 14, height: 14 }}
                          uri={icX}
                        />
                      ) : (
                        <AppImage
                          containerStyles={{ width: 9.5, height: 17.5 }}
                          uri={images.icArrowLeft}
                        />
                      )
                    }

                    <AppText containerStyles={{ paddingLeft: 12.5 }} content={namePath} color="red" size={17} font="semi" />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )
          }
        </>

        {
          centerText ? (
            <AppText
              content={centerText}
              color="dark"
              size={17}
              bold
              containerStyles={{ paddingTop: 4 }}
            />
          ) : (
            <View>
              <AppImage
                containerStyles={{ height: 31 }}
                uri={images.icHomeActive}
              />

              <AppText
                content="GreatGiftGiver"
                color="dark"
                size={10}
                bold
                containerStyles={{ paddingTop: 4 }}
              />
            </View>

          )
        }

        <>
          {
            rightIcon && (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate(APP_SCREEN.INVITE_FRIEND)}
              >
                <View style={{
                  position: 'absolute',
                  right: 18,
                  bottom: '50%',
                }}
                >
                  <AppImage
                    containerStyles={{ width: 14, height: 14 }}
                    uri={icShare}
                  />
                </View>
              </TouchableWithoutFeedback>
            )
          }
        </>

        <>
          {
            rightText && (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate(APP_SCREEN.INVITE_FRIEND)}
              >
                <View style={{
                  position: 'absolute',
                  right: 18,
                  bottom: '50%',
                }}
                >
                  <AppText
                    containerStyles={{ paddingLeft: 12.5 }}
                    content={rightText}
                    color="red"
                    size={17}
                    font="semi"
                  />

                </View>
              </TouchableWithoutFeedback>
            )
          }
        </>

      </View>
      {
        divider && (
          <AppDivider />
        )
      }
    </View>

  );
};

AppHeader.propTypes = {
  theme: PropTypes.string,
  isGoback: PropTypes.bool,
  isCancel: PropTypes.bool,
  divider: PropTypes.bool,
  rightIcon: PropTypes.bool,
  rightText: PropTypes.string,
  centerText: PropTypes.string,
  namePath: PropTypes.string,
};

AppHeader.defaultProps = {
  theme: 'white',
  isGoback: false,
  isCancel: false,
  divider: false,
  rightIcon: false,
  rightText: null,
  centerText: null,
  namePath: '',
};
export default AppHeader;
