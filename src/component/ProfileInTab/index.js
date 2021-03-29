import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { images } from '../../assets/images';

import AppImage from '../AppImage';
import AppText from '../AppText';
import AppButton from '../AppButton';

import styles from './styles';
import { APP_SCREEN } from '../../navigation/screenTypes';

const ProfileInTab = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <View style={{
        paddingTop: 8,
        flex: 4,
      }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.navigate(APP_SCREEN.UPDATE_INFOMATION)}>
          <View style={styles.wrapperMenu}>
            <AppText content="Update Information" size={16} />
            <View style={styles.icon}>
              <AppImage resizeMode="cover" size="icon" uri={images.icArrowRight} />
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View style={styles.wrapperMenu}>
            <AppText content="Notifications" size={16} />
          </View>
        </TouchableWithoutFeedback>

      </View>
      <View style={{ flex: 2, paddingHorizontal: 28 }}>
        <AppButton>
          <AppText content="Logout" align="center" uppercase color="white" font="semi" bold />
        </AppButton>
      </View>
    </View>
  );
};

ProfileInTab.propTypes = {
};

ProfileInTab.defaultProps = {
};

export default ProfileInTab;
