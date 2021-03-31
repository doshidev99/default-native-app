import React, { memo } from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AppInputSearch from '../AppInputSearch';
import AppFriendCard from '../AppFriendCard';
import ButtonPlus from '../ButtonPlus';

import styles from './styles';
import { APP_SCREEN } from '../../navigation/screenTypes';

const MyFriendInTab = () => {
  const navigation = useNavigation();

  const renderItem = () => (
    <AppFriendCard
      onPress={() => navigation.navigate(APP_SCREEN.GIFTDETAIL)}
      uri={{
        uri: 'https://wiicamp.com/_next/static/images/leader-e6908ab818445a8219004800fa814715.png',
      }}
      mainName="Anthony sims"
      subName="17 July"
    />
  );

  return (
    <View style={{
      flex: 1,
    }}
    >
      <View
        style={[styles.container, {
          flex: 5,
        }]}
      >
        <AppInputSearch />
      </View>
      <View style={[styles.wrapperList, {
        flex: 40,
      }]}
      >
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={renderItem}
          keyExtractor={(item) => `${item}-333`}
        />
      </View>

      <ButtonPlus
        style={{
          position: 'absolute',
          bottom: 19 + 83,
          right: 29,
        }}
      />
    </View>
  );
};

MyFriendInTab.propTypes = {
};

MyFriendInTab.defaultProps = {
};

export default memo(MyFriendInTab);
