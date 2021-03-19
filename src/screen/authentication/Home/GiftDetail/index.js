import React, { memo, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';

import { images } from '../../../../assets/images';

import AppText from '../../../../component/AppText';
import AppAvatar from '../../../../component/AppAvatar';

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
    { id: 0, key: 'friends', title: 'LIST WITH FRIENDS' },
  ];

  const renderScene = SceneMap({
    // home: HomeScreen,
    list: FirstRoute,
    friends: SecondRoute,
  });

  return (
    <View style={{ flex: 1 }}>
      <AppAvatar avatar={images.defaultAvatar} containerStyles={{ paddingTop: 39 }} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

GiftDetail.propTypes = {
};

GiftDetail.defaultProps = {
};

export default memo(GiftDetail);
