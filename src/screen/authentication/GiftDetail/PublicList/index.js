import React, { memo } from 'react';
import {
  View, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { APP_SCREEN } from '../../../../navigation/screenTypes';

import AppLayout from '../../../../component/AppLayout';
import AppInputSearch from '../../../../component/AppInputSearch';
import AppGiftCard from '../../../../component/AppGiftCard';

import styles from './styles';
import { images } from '../../../../assets/images';

const PublicList = () => {
  const navigation = useNavigation();

  const handleMoving = () => {
    navigation.navigate(APP_SCREEN.FRIENDGIFT);
  };
  return (
    <AppLayout containerStyles={{ paddingHorizontal: 16, paddingTop: 20 }}>
      <AppInputSearch />
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

PublicList.propTypes = {
};

PublicList.defaultProps = {
};

export default memo(PublicList);
