import React, { memo } from 'react';
import {
  View,
} from 'react-native';

import { isIos } from '../../utils';

import AppImage from '../../component/AppImage';
import AppText from '../../component/AppText';
import AppButton from '../../component/AppButton';

import styles from './styles';
import logo from '../../assets/images/ic-home-active.png';
import icFb from '../../assets/images/ic-fb.png';
import icApple from '../../assets/images/ic-apple.png';
import ballon from '../../assets/images/ballon.png';

const LoginScreen = () => (
  <View style={styles.container}>
    <View style={[{ flex: 30 }, isIos && { paddingHorizontal: 28, paddingTop: 42 }]}>
      <AppImage size="big" uri={logo} />
      <AppText
        otherStyle={{ paddingTop: 26, paddingBottom: 15 }}
        content="Welcome to GreatGiftGiver"
        color="dark"
        bold
        size={24}
        align="center"
      />
      <AppText
        content="Here we can give gift to your friend easier and also get present from them"
        color="gray40"
        size={16}
        align="center"
      />
    </View>

    <AppImage
      resizeMode="center"
      containerStyles={{ flex: 50, paddingTop: 46, paddingBottom: 27 }}
      uri={ballon}
    />

    <View style={{ flex: 20, paddingHorizontal: 20, paddingBottom: 49 }}>
      <AppButton
        beforePrefix={(
          <AppImage
            containerStyles={{ paddingRight: 12 }}
            size="special-icon"
            uri={icFb}
          />
        )}

      >
        <AppText
          content="login with facebook"
          uppercase
          theme="blue"
          textColor="white"
        />
      </AppButton>

      <AppButton
        beforePrefix={(
          <AppImage
            containerStyles={{ paddingRight: 12 }}
            size="special-icon"
            uri={icApple}
          />
        )}
        otherStyle={{ marginTop: 16 }}
      >
        <AppText
          content="sign in with apple"
          uppercase
          theme="dark"
          textColor="white"
        />
      </AppButton>
    </View>
  </View>
);

export default memo(LoginScreen);
