import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';

import { APP_SCREEN } from '../../navigation/screenTypes';
import AppInputSearch from '../AppInputSearch';
import AppLayout from '../AppLayout';
import AppListProductInTab from '../AppListProductInTab';

import styles from './styles';

const TabProductWithFriend = () => {
  const navigation = useNavigation();

  const handleMoving = () => {
    navigation.navigate(APP_SCREEN.FRIENDGIFT);
  };
  return (
    <AppLayout containerStyles={styles.container}>
      <AppInputSearch />
      <ScrollView style={{
        marginTop: 24,
        marginBottom: 40,
      }}
      >
        <AppListProductInTab data={[1, 2, 3]} title="List with Janiel" handleMoving={handleMoving} />
        <AppListProductInTab data={[1, 2]} containerStyles={{ paddingTop: 14 }} title="List with Patrick" handleMoving={handleMoving} />
      </ScrollView>
    </AppLayout>
  );
};

TabProductWithFriend.propTypes = {
};

TabProductWithFriend.defaultProps = {
};

export default TabProductWithFriend;
