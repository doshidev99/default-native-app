import React, { memo } from 'react';
import {
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import AppLayout from '../AppLayout';
import AppInputSearch from '../AppInputSearch';
import AppListGiftCard from '../AppListGiftCard';

import styles from './styles';
import { APP_SCREEN } from '../../navigation/screenTypes';

const TabPublicList = () => {
  const navigation = useNavigation();

  const handleMoving = () => {
    navigation.navigate(APP_SCREEN.FRIENDGIFT);
  };

  return (
    <AppLayout containerStyles={styles.container}>
      <AppInputSearch placeholder="Search gift" />
      <ScrollView
        style={{
          marginTop: 12,
          marginBottom: 40,
        }}
      >
        <AppListGiftCard isWrap onPress={handleMoving} />
      </ScrollView>

    </AppLayout>
  );
};

TabPublicList.propTypes = {
};

TabPublicList.defaultProps = {
};

export default memo(TabPublicList);
