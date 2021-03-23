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

const TabPublicList = () => {
  const navigation = useNavigation();

  const handleMoving = () => {
    navigation.navigate(APP_SCREEN.FRIENDGIFT);
  };
  return (
    <AppLayout containerStyles={styles.container}>
      <AppInputSearch placeholder="Search gift" />
      <ScrollView style={{
        marginTop: 12,
        marginBottom: 40,
      }}
      >
        <View style={styles.flexBox}>
          {
            [1, 2, 3, 4].map((e) => (
              <AppGiftCard
                key={e}
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
