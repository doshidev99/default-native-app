import React from 'react';
import {
  View,
  Platform,
} from 'react-native';

import PropTypes from 'prop-types';

import AppImage from '../../../component/AppImage';
import AppText from '../../../component/AppText';
import AppButton from '../../../component/AppButton';

import styles from './styles';

const Login = (props) => {
  const { } = props;

  return (
    <View style={styles.container}>
      <View style={[{ flex: 30 }, Platform.OS === 'ios' && { paddingHorizontal: 28, paddingTop: 42 }]}>
        <AppImage size="big" uri={require('../../../assets/images/ic-home-active.png')} />
        <AppText
          otherStyle={{ paddingTop: 26, paddingBottom: 15 }}
          content="Welcome to GreatGiftGiver"
          color="dark"
          bold
          size={24}
          textAlign="center"
        />
        <AppText
          content="Here we can give gift to your friend easier and also get present from them"
          color="gray40"
          size={16}
          textAlign="center"
        />
      </View>

      <AppImage
        resizeMode="center"
        containerStyles={{ flex: 50, paddingTop: 46, paddingBottom: 27 }}
        uri={require('../../../assets/images/ballon.png')}
      />

      <View style={{ flex: 20, paddingHorizontal: 20, paddingBottom: 49 }}>
        <AppButton
          beforePrefix={(
            <AppImage
              containerStyles={{ paddingRight: 12 }}
              size="special-icon"
              uri={require('../../../assets/images/ic-fb.png')}
            />
          )}
          content="login with facebook"
          uppercase
          theme="blue"
          textColor="white"
        />
        <AppButton
          beforePrefix={(
            <AppImage
              containerStyles={{ paddingRight: 12 }}
              size="special-icon"
              uri={require('../../../assets/images/ic-apple.png')}
            />
          )}
          content="sign in with apple"
          uppercase
          theme="dark"
          textColor="white"
          otherStyle={{ marginTop: 16 }}
        />
      </View>
    </View>
  );
};

Login.propTypes = {
};

Login.defaultProps = {
};

export default Login;
