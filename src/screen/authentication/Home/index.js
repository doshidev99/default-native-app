import React, { memo } from 'react';
import {
  Platform, ScrollView, TouchableNativeFeedback, View,
} from 'react-native';

import { COLORS } from '../../../assets/styles';

import AppHeader from '../../../component/AppHeader';
import AppFriendCard from '../../../component/AppFriendCard';
import AppText from '../../../component/AppText';
// import AppTabViewBottom from '../../../component/AppTabViewBottom';

const Home = () => (
  <View style={[{
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.NEUTRAL_WHITE,
  }, Platform.OS === 'ios' && { paddingTop: 35 }]}
  >
    <AppHeader />

    <View style={{
      paddingHorizontal: 16,
      paddingTop: 32,
      paddingBottom: 16,
      flex: 50,
      backgroundColor: '#FFF',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    }}
    >
      <AppText content="Hello, Sarah." color="red" size={16} />
      <AppText content="How are you today?" size={28} bold />
    </View>

    <View style={{ flex: 30, justifyContent: 'flex-end' }}>
      <ScrollView>

        <TouchableNativeFeedback>
          <AppFriendCard uri={require('../../../assets/images/default-avt.png')} />
        </TouchableNativeFeedback>
        <AppFriendCard uri={require('../../../assets/images/default-avt.png')} />
        <AppFriendCard uri={require('../../../assets/images/default-avt.png')} />
        <AppFriendCard uri={require('../../../assets/images/default-avt.png')} />
        <AppFriendCard uri={require('../../../assets/images/default-avt.png')} />
      </ScrollView>
    </View>

  </View>

);

Home.propTypes = {
};

Home.defaultProps = {
};
export default memo(Home);
