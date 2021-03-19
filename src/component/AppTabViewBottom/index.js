import React, { useState, memo } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';

import HomeScreen from '../../screen/authentication/Home';
import SettingScreen from '../../screen/authentication/Home/Setting';

import AppImage from '../AppImage';
import AppText from '../AppText';

import { images } from '../../assets/images';
import { COLORS } from '../../assets/styles';

const AppTabViewBottom = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const routes = [
    {
      id: 0, key: 'home', title: 'Home', icon: images.icHome, icActive: images.icHomeActive,
    },
    {
      id: 1, key: 'lister', title: 'Lister', icon: images.icLister, icActive: images.icListerActive,
    },
    {
      id: 2, key: 'giver', title: 'Giver', icon: images.icGiver, icActive: images.icGiverActive,
    },
    {
      id: 3, key: 'setting', title: 'Setting', icon: images.icSetting, icActive: images.icSettingActive,
    },
  ];

  const renderScene = SceneMap({
    home: HomeScreen,
    lister: SettingScreen,
    giver: SettingScreen,
    setting: SettingScreen,
  });

  const renderIcon = ({ route }) => (
    <View>
      <AppImage
        uri={index === route.id ? route.icActive : route.icon}
        styleImage={{ width: 32, height: 32 }}
      />
      <AppText
        containerStyles={{ paddingTop: 5 }}
        color={index === route.id ? 'blue' : 'gray55'}
        content={route.title}
        capitalize
        size={10}
        textAlign="center"
      />
    </View>
  );

  return (
    <TabView
      tabBarPosition="bottom"
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'transparent' }}
          style={{ backgroundColor: COLORS.NEUTRAL_WHITE }}
          renderIcon={renderIcon}
        />
      )}
    />
  );
};

AppTabViewBottom.propTypes = {
};

AppTabViewBottom.defaultProps = {
};

export default memo(AppTabViewBottom);
