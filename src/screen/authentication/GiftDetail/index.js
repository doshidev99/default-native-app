import React, { memo, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';

import { images } from '../../../assets/images';

import AppLayout from '../../../component/AppLayout';
import AppAvatar from '../../../component/UserAvatar';
import AppText from '../../../component/AppText';
import AppHeader from '../../../component/AppHeader';

import TabPublicList from '../../../component/TabPublicList';
import TabProductWithFriend from '../../../component/TabProductWithFriend';

import styles from './styles';

const renderLabel = ({ route, focused }) => (
  <AppText
    content={route.title}
    uppercase
    color={focused ? 'red' : 'gray55'}
    size={13}
  />

);

const GiftDetail = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const routes = [
    { id: 0, key: 'list', title: 'public list' },
    { id: 1, key: 'friends', title: 'list with friends' },
  ];

  const renderScene = SceneMap({
    list: TabPublicList,
    friends: TabProductWithFriend,
  });

  return (
    <AppLayout>
      <AppHeader divider isGoback />
      <AppAvatar
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
    </AppLayout>
  );
};

GiftDetail.propTypes = {
};

GiftDetail.defaultProps = {
};

export default memo(GiftDetail);
