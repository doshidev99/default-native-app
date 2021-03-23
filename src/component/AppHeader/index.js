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
import { COLORS } from '../../assets/styles';

import styles from './styles';

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
    <View style={{ backgroundColor }}>
      <View style={[
        styles.container,
        isIos ? { paddingTop: 39 } : { paddingTop: 9 },
      ]}
      >
        <>
          {
            isGoback && (
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <View style={{
                  position: 'absolute',
                  left: 18,
                  bottom: '50%',
                }}
                >
                  <AppImage
                    containerStyles={{ width: 9.5, height: 17.5 }}
                    uri={images.icArrowLeft}
                  />
                </View>
              </TouchableWithoutFeedback>
            )
          }
        </>

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
  divider: PropTypes.bool,
};

AppHeader.defaultProps = {
  theme: 'white',
  isGoback: false,
  divider: false,
};
export default AppHeader;
