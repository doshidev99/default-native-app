import React, { memo, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';

import { images } from '../../../assets/images';
import { COLORS } from '../../../assets/styles';

import AppLayout from '../../../component/AppLayout';
import AppAvatar from '../../../component/AppAvatar';
import AppImage from '../../../component/AppImage';
import AppText from '../../../component/AppText';
import AppHeader from '../../../component/AppHeader';

import PublicList from './PublicList';

import styles from './styles';

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

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
    list: PublicList,
    friends: SecondRoute,
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
