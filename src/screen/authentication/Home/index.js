import React, { memo } from 'react';
import {
  ScrollView,
  TouchableWithoutFeedback, View,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { images } from '../../../assets/images';
import { COLORS } from '../../../assets/styles';
import { APP_SCREEN } from '../../../navigation/screenTypes';

import AppFriendCard from '../../../component/AppFriendCard';
import AppHeader from '../../../component/AppHeader';
import AppTabBottom from '../../../component/AppTabBottom';
import AppText from '../../../component/AppText';

const listFriends = [
  {
    id: 1, name: 'Anthony Sims', birthDay: '2nd August', avatar: images.defaultAvatar,
  },
  {
    id: 2, name: 'Allie Bridges', birthDay: '17 July', avatar: images.defaultAvatar,
  },
  {
    id: 3, name: 'Allie Bridges', birthDay: '17 July', avatar: images.defaultAvatar,
  },
  {
    id: 4, name: 'Billy Steele', birthDay: '22 October', avatar: { uri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png' },
  },
];

const Home = () => {
  const navigation = useNavigation();

  const handleMoving = (currentFriend) => {
    navigation.navigate(APP_SCREEN.GIFTDETAIL, currentFriend);
  };

  return (
    <View style={[{
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: COLORS.NEUTRAL_GRAY_5,
    }]}
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

      <View style={{
        flex: 30, justifyContent: 'flex-end', paddingBottom: 83,
      }}
      >

        <Image
          source={listFriends[1].avatar}
          style={{
            width: 30, height: 30, borderRadius: 1000, backgroundColor: 'red',
          }}
        />
        <ScrollView>
          {
            listFriends.map((f) => (
              <TouchableWithoutFeedback
                key={f.id}
                onPress={() => handleMoving(f)}
              >
                <View>
                  <AppFriendCard uri={f.avatar} mainName={f.name} subName={f.birthDay} />
                </View>
              </TouchableWithoutFeedback>
            ))
          }

        </ScrollView>
      </View>

      <AppTabBottom />
    </View>

  );
};

Home.propTypes = {
};

Home.defaultProps = {
};
export default memo(Home);
