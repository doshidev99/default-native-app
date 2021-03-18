import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import { useNavigation, useNavigationState } from '@react-navigation/native';

import PropTypes from 'prop-types';

import AppImage from '../AppImage';
import AppText from '../AppText';

import styles from './styles';

const AppTabBottom = () => {
  const navigation = useNavigation();
  const state = useNavigationState((currentState) => currentState);

  // eslint-disable-next-line no-console
  console.log(state, '<----');
  return (
    <View style={[styles.container]}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Setting')}>
        <View>
          <AppImage styleImage={{ width: 32, height: 32 }} uri={require('../../assets/images/ic-home-active.png')} />
          <AppText
            containerStyles={{ paddingTop: 5 }}
            color="blue"
            content="Home"
            capitalize
            size={10}
            textAlign="center"
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View>
          <AppImage styleImage={{ width: 32, height: 32 }} uri={require('../../assets/images/ic-lister.png')} />

          <AppText
            containerStyles={{ paddingTop: 5 }}
            color="gray55"
            content="lister"
            capitalize
            size={10}
            textAlign="center"
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View>
          <AppImage styleImage={{ width: 32, height: 32 }} uri={require('../../assets/images/ic-giver.png')} />

          <AppText
            containerStyles={{ paddingTop: 5 }}
            color="gray55"
            content="giver"
            capitalize
            size={10}
            textAlign="center"
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View>
          <AppImage styleImage={{ width: 32, height: 32 }} uri={require('../../assets/images/ic-setting.png')} />
          <AppText
            containerStyles={{ paddingTop: 5 }}
            color="gray55"
            content="setting"
            capitalize
            size={10}
            textAlign="center"
          />
        </View>

      </TouchableWithoutFeedback>
    </View>
  );
};

AppTabBottom.propTypes = {
};

AppTabBottom.defaultProps = {
};

export default AppTabBottom;
