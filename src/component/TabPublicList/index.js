import React, { memo } from 'react';
import {
  View, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { APP_SCREEN } from '../../navigation/screenTypes';

import AppLayout from '../AppLayout';
import AppInputSearch from '../AppInputSearch';
import AppGiftCard from '../AppGiftCard';

import styles from './styles';
import { images } from '../../assets/images';

const data = [1, 2, 3, 4, 5];

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
        <View style={[styles.flexBox]}>
          {
            data.map((e, index) => (
              <AppGiftCard
                key={e}
                index={index}
                onPress={handleMoving}
                giftImage={images.defaultAvatar}
                giftName="Safari T-Shirt"
              />

            ))
          }
        </View>
      </ScrollView>

    </AppLayout>
  );
};

TabPublicList.propTypes = {
};

TabPublicList.defaultProps = {
};

export default memo(TabPublicList);
