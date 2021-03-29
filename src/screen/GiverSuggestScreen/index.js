import React, { memo } from 'react';
import {
  ScrollView, TouchableWithoutFeedback, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import icFilter from '../../assets/images/ic-filter.png';
import { COLORS } from '../../assets/styles';
import AppHeader from '../../component/AppHeader';
import AppImage from '../../component/AppImage';
import AppInputSearch from '../../component/AppInputSearch';
import AppLayout from '../../component/AppLayout';
import AppListGiftCard from '../../component/AppListGiftCard';
import ButtonPlus from '../../component/ButtonPlus';
import styles from './styles';

import { APP_SCREEN } from '../../navigation/screenTypes';

const GiverSuggestScreen = () => {
  const navigation = useNavigation();

  const handleMoving = () => {
    navigation.navigate(APP_SCREEN.PRODUCT_DETAILS_ADD);
  };
  return (
    <View style={[styles.container, {
      backgroundColor: COLORS.NEUTRAL_55_DIFFERENT,
    }]}
    >
      <AppHeader divider isGoback />
      <AppLayout containerStyles={{ paddingHorizontal: 16 }}>
        <View style={[styles.wrapperInputFilter]}>
          <AppInputSearch width={295} />
          <TouchableWithoutFeedback>
            <View style={styles.wrapperFilter}>
              <AppImage
                uri={icFilter}
                containerStyles={
                  {
                    width: 13,
                    height: 13,
                  }
                }
              />
            </View>
          </TouchableWithoutFeedback>

        </View>
        <ScrollView style={{ paddingTop: 20 }}>
          <AppListGiftCard isWrap onPress={handleMoving} />
        </ScrollView>
        <ButtonPlus
          style={{
            position: 'absolute',
            bottom: 41,
            right: 29,
          }}
          onPress={() => navigation.navigate(APP_SCREEN.MULTIPLE_FILTER)}
        />
      </AppLayout>
    </View>

  );
};

GiverSuggestScreen.propTypes = {
};

GiverSuggestScreen.defaultProps = {
};
export default memo(GiverSuggestScreen);
