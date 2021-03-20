import React, { memo, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';

import { images } from '../../../assets/images';
import { COLORS } from '../../../assets/styles';

import AppAvatar from '../../../component/AppAvatar';
import AppImage from '../../../component/AppImage';
import AppText from '../../../component/AppText';
import AppHeader from '../../../component/AppHeader';

import styles from './styles';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const GiftDetail = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const routes = [
    { id: 0, key: 'list', title: 'PUBLIC LIST' },
    { id: 1, key: 'friends', title: 'LIST WITH FRIENDS' },
  ];

  const renderScene = SceneMap({
    list: FirstRoute,
    friends: SecondRoute,
  });

  const handleRenderIndicator = (props) => {
    // eslint-disable-next-line no-console
    console.log(props, '<----');
  };

  return (
    <View style={[styles.container]}>
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
            indicatorStyle={styles.indicatorStyle}
            style={styles.tabBar}
            renderLabel={({ route, focused }) => (
              <AppText content={route.title} color={focused ? 'red' : 'gray55'} size={13} />
            )}
            renderIndicator={handleRenderIndicator}
          />
        )}
      />
    </View>
  );
};

GiftDetail.propTypes = {
};

GiftDetail.defaultProps = {
};

export default memo(GiftDetail);
