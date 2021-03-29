import React, { memo, useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';

import { images } from '../../assets/images';

import AppLayout from '../../component/AppLayout';
import UserAvatar from '../../component/UserAvatar';
import AppText from '../../component/AppText';
import AppHeader from '../../component/AppHeader';

import MyListsInTab from '../../component/MyListsInTab';
import ProfileInTab from '../../component/ProfileInTab';
import TabProductWithFriend from '../../component/TabProductWithFriend';
import AppTabBottom from '../../component/AppTabBottom';

import styles from './styles';

const renderLabel = ({ route, focused }) => (
  <AppText
    content={route.title}
    uppercase
    color={focused ? 'red' : 'gray55'}
    size={13}
  />

);

const SettingScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const routes = [
    { id: 0, key: 'list', title: 'my lists' },
    { id: 1, key: 'profile', title: 'profile' },
    { id: 2, key: 'history', title: 'history' },
    { id: 3, key: 'myFriends', title: 'my friends' },
  ];

  const renderScene = SceneMap({
    list: MyListsInTab,
    profile: ProfileInTab,
    history: TabProductWithFriend,
    myFriends: TabProductWithFriend,
  });

  return (
    <AppLayout>
      <AppHeader divider isGoback />
      <UserAvatar
        avatar={images.defaultAvatar}
        containerStyles={styles.containerAvatar}
      />
      <TabView
        lazy
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={styles.tabBar}
            labelStyle={styles.labelStyle}
            indicatorStyle={[styles.indicatorStyle]}
            renderLabel={renderLabel}
          />
        )}
      />

      <AppTabBottom />

    </AppLayout>
  );
};

SettingScreen.propTypes = {
};

SettingScreen.defaultProps = {
};

export default memo(SettingScreen);
