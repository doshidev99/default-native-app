import React, { memo } from 'react';
import {
  TouchableWithoutFeedback, View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { images } from '../../assets/images';

import { APP_SCREEN } from '../../navigation/screenTypes';

import AppImage from '../AppImage';
import AppText from '../AppText';
import styles from './styles';

const AppTabBottom = () => {
  const navigation = useNavigation();
  const { name } = useRoute();

  const tabs = [
    {
      id: 1,
      nameScreen: APP_SCREEN.HOME,
      icon: images.icHome,
      iconActive: images.icHomeActive,
    },
    {
      id: 2,
      nameScreen: APP_SCREEN.LISTER,
      icon: images.icLister,
      iconActive: images.icListerActive,
    },
    {
      id: 3,
      nameScreen: APP_SCREEN.GIVER,
      icon: images.icGiver,
      iconActive: images.icGiverActive,
    },
    {
      id: 4,
      nameScreen: APP_SCREEN.SETTING,
      icon: images.icSetting,
      iconActive: images.icSettingActive,
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
                  styleImage={{ width: 32, height: 32 }}
                  uri={name === nameScreen ? iconActive : icon}
                />
                <AppText
                  containerStyles={{ paddingTop: 5 }}
                  color={name === nameScreen ? 'blue' : 'gray55'}
                  content={nameScreen}
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
