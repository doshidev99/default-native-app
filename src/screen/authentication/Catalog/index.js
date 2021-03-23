import React, { memo, useState } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Calendar } from 'react-native-calendars';

import { images } from '../../../assets/images';
import { COLORS } from '../../../assets/styles';

import styles from './styles';

import AppHeader from '../../../component/AppHeader';
import AppFlex from '../../../component/AppFlex';
import AppText from '../../../component/AppText';
import AppLayout from '../../../component/AppLayout';
import AppInputSearch from '../../../component/AppInputSearch';
import AppTabBottom from '../../../component/AppTabBottom';
import AppListProductInTab from '../../../component/AppListProductInTab';
import AppFriendCard from '../../../component/AppFriendCard';

import { APP_SCREEN } from '../../../navigation/screenTypes';

const Catalog = () => {
  const navigation = useNavigation();

  const [currentDay, setCurrentDay] = useState('2021-03-21');

  const handleMoving = () => {
    navigation.navigate(APP_SCREEN.GIFTDETAIL);
  };

  const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
  const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
  const workout = { key: 'workout', color: 'green' };

  return (
    <AppFlex flex={1} justify="space-between" bg={COLORS.NEUTRAL_GRAY_5}>
      <AppHeader divider />
      <AppLayout containerStyles={styles.container}>
        <AppInputSearch />
        <ScrollView style={{ marginTop: 24 }}>
          <AppListProductInTab data={[1, 2]} title="My public list" handleMoving={handleMoving} />
          <AppListProductInTab containerStyles={{ paddingTop: 25 }} data={[1, 2, 3]} title="List for Janiel" handleMoving={handleMoving} />
          <AppListProductInTab containerStyles={{ paddingTop: 25, paddingBottom: 83 }} data={[1]} title="List for Patrick" handleMoving={handleMoving} />
        </ScrollView>
      </AppLayout>
      <AppTabBottom />
    </AppFlex>

  );
};

Catalog.propTypes = {
};

Catalog.defaultProps = {
};
export default memo(Catalog);
