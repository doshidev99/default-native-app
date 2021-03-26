import React, { memo } from 'react';
import {
  TouchableWithoutFeedback, View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { APP_SCREEN } from '../../navigation/screenTypes';

import AppImage from '../AppImage';
import AppText from '../AppText';
import styles from './styles';

import HomeScreen from '../../assets/images/ic-home.png';
import HomeActive from '../../assets/images/ic-home-active.png';

import Lister from '../../assets/images/ic-lister.png';
import ListerActive from '../../assets/images/ic-lister-active.png';

import Giver from '../../assets/images/ic-giver.png';
import GiverActive from '../../assets/images/ic-giver-active.png';

import Setting from '../../assets/images/ic-setting.png';
import SettingActive from '../../assets/images/ic-setting-active.png';

const AppTabBottom = () => {
  const navigation = useNavigation();
  const { name } = useRoute();

  const tabs = [
    {
      id: 1,
      nameScreen: APP_SCREEN.HOME,
      icon: HomeScreen,
      iconActive: HomeActive,
    },
    {
      id: 2,
      nameScreen: APP_SCREEN.LISTER,
      icon: Lister,
      iconActive: ListerActive,
    },
    {
      id: 3,
      nameScreen: APP_SCREEN.GIVER,
      icon: Giver,
      iconActive: GiverActive,
    },
    {
      id: 4,
      nameScreen: APP_SCREEN.SETTING,
      icon: Setting,
      iconActive: SettingActive,
    },
  ];

  return (
    <View style={[styles.container]}>
      {
        tabs.map((t) => {
          const {
            id, nameScreen, icon, iconActive,
          } = t;
          return (
            <TouchableWithoutFeedback key={id} onPress={() => navigation.navigate(nameScreen)}>
              <View>
                <AppImage
                  containerStyles={{ width: 32, height: 32 }}
                  uri={name === nameScreen ? iconActive : icon}
                  fade
                />
                <AppText
                  containerStyles={{ paddingTop: 5 }}
                  color={name === nameScreen ? 'blue' : 'gray55'}
                  content={nameScreen}
                  font="regular"
                  capitalize
                  size={10}
                  textAlign="center"
                />
              </View>
            </TouchableWithoutFeedback>
          );
        })
      }

    </View>
  );
};

export default memo(AppTabBottom);
