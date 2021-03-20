import React from 'react';
import {
  View, Platform, TouchableWithoutFeedback,
} from 'react-native';

import PropTypes from 'prop-types';

import { useNavigation } from '@react-navigation/native';

import AppImage from '../AppImage';
import AppText from '../AppText';

import { images } from '../../assets/images';
import styles from './styles';
import { COLORS } from '../../assets/styles';

// const flag = Platform.OS === 'ios';

const AppHeader = ({ theme, isGoback, divider }) => {
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
    <View>
      <View style={[
        styles.container,
        Platform.OS === 'ios' ? { paddingTop: 35 } : { paddingTop: 16 },
        { paddingBottom: 9, backgroundColor },
      ]}
      >
        <>
          {
            isGoback && (
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <View style={{
                  position: 'absolute',
                  left: 18,
                  top: 60,
                }}
                >
                  <AppImage
                    styleImage={{ width: 9.5, height: 17.5 }}
                    uri={images.icArrowLeft}
                  />
                </View>
              </TouchableWithoutFeedback>
            )
          }
        </>

        <AppImage
          styleImage={{ width: 50, height: 50 }}
          uri={images.icHomeActive}
        />

        <AppText
          content="GreatGiftGiver"
          color="dark"
          size={10}
          containerStyles={{ paddingTop: 4 }}
        />
      </View>
      <>
        {
          divider && (
            <View style={{ width: '100%', height: 0.2, backgroundColor: '#1C0404' }} />
          )
        }
      </>
    </View>

  );
};

AppHeader.propTypes = {
  theme: PropTypes.string,
  isGoback: PropTypes.bool,
  divider: PropTypes.bool,
};

AppHeader.defaultProps = {
  theme: 'white',
  isGoback: false,
  divider: false,
};
export default AppHeader;
