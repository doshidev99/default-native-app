import React, { memo } from 'react';
import {
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import AppHeader from '../../component/AppHeader';
import AppInputSearch from '../../component/AppInputSearch';
import AppLayout from '../../component/AppLayout';
import AppTabBottom from '../../component/AppTabBottom';
import ListProductAddNew from '../../component/ListProductAddNew';
import { APP_SCREEN } from '../../navigation/screenTypes';
import styles from './styles';

const ListerScreen = () => {
  const navigation = useNavigation();

  const handleMoving = () => {
    navigation.navigate(APP_SCREEN.GIFTDETAIL);
  };

  return (
    <>
      <AppHeader divider />
      <AppLayout containerStyles={styles.container}>
        <AppInputSearch />
        <ScrollView style={{ marginTop: 24 }}>
          <ListProductAddNew data={[1, 2]} title="My public list" />
          <ListProductAddNew containerStyles={{ paddingTop: 25 }} data={[1, 2, 3]} title="List for Janiel" onPress={handleMoving} />
          <ListProductAddNew containerStyles={{ paddingTop: 25, paddingBottom: 83 }} data={[1]} title="List for Patrick" onPress={handleMoving} />
        </ScrollView>
      </AppLayout>
      <AppTabBottom />
    </>

  );
};

ListerScreen.propTypes = {
};

ListerScreen.defaultProps = {
};
export default memo(ListerScreen);
