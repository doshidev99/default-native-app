import React from 'react';
import {
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import AppButton from '../../component/AppButton';
import AppHeader from '../../component/AppHeader';
import AppLayout from '../../component/AppLayout';
import AppProductDetail from '../../component/AppProductDetail';
import AppText from '../../component/AppText';
import { APP_SCREEN } from '../../navigation/screenTypes';

const ProductDetailScreen = () => {
  const navigation = useNavigation();

  const onPressShowMap = () => {
    navigation.navigate(APP_SCREEN.MAP);
  };
  return (
    <AppLayout>
      <AppHeader isGoback rightIcon />

      <View style={{
        flex: 1,
      }}
      >
        <AppProductDetail />
        <View style={{ flex: 20, paddingHorizontal: 20 }}>
          <AppButton
            onPress={() => navigation.navigate(APP_SCREEN.WEB_VIEW_SCREEN)}
          >
            <AppText
              content="shop now"
              uppercase
              align="center"
              bold
              color="white"
            />
          </AppButton>

          <AppButton
            onPress={onPressShowMap}
            theme="blue"
            containerStyles={{
              marginTop: 14,
            }}
          >
            <AppText
              content="show on map"
              uppercase
              align="center"
              bold
              color="white"
            />
          </AppButton>
        </View>
      </View>

    </AppLayout>
  );
};

ProductDetailScreen.propTypes = {
};

ProductDetailScreen.defaultProps = {
};

export default ProductDetailScreen;
