import React from 'react';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { APP_SCREEN } from '../../navigation/screenTypes';
import AppInputSearch from '../AppInputSearch';
import AppLayout from '../AppLayout';
import AppListProductInTab from '../AppListProductInTab';

import styles from './styles';

const MyListsInTab = () => {
  const navigation = useNavigation();

  const handleMoving = () => {
    navigation.navigate(APP_SCREEN.FRIENDGIFT);
  };
  return (
    <AppLayout containerStyles={styles.container}>
      <AppInputSearch />
      <ScrollView style={{
        marginTop: 24,
        marginBottom: 50,
      }}
      >
        <AppListProductInTab
          data={[1, 2, 3]}
          title="List with Janiel"
          handleMoving={handleMoving}
        />
        <AppListProductInTab data={[1, 2]} containerStyles={{ paddingVertical: 14 }} title="List for Patrick" handleMoving={handleMoving} />
      </ScrollView>
    </AppLayout>
  );
};

MyListsInTab.propTypes = {
};

MyListsInTab.defaultProps = {
};

export default MyListsInTab;
