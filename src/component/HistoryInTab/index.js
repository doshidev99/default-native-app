import React, { memo } from 'react';
import {
  View, ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { APP_SCREEN } from '../../navigation/screenTypes';

import AppListGiftCard from '../AppListGiftCard';

import styles from './styles';

const HistoryInTab = () => {
  const navigation = useNavigation();

  const handleMoving = () => {
    navigation.navigate(APP_SCREEN.PRODUCT_DETAILS, { isShare: false });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.listContent}>
        <AppListGiftCard isWrap isOwner data={[1, 2, 3, 4]} onPress={handleMoving} />
      </View>
    </ScrollView>
  );
};

export default memo(HistoryInTab);
