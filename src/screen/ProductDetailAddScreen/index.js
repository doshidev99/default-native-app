import React, { useState } from 'react';
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

const ProductDetailAddScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(APP_SCREEN.ADD_PRODUCT);
  };
  return (
    <AppLayout>
      <AppHeader isGoback rightIcon />

      <View style={{
        flex: 1,
      }}
      >
        <AppProductDetail />

        <View style={{ flex: 10, paddingHorizontal: 20, marginTop: 20 }}>
          <AppButton
            onPress={handlePress}
          >
            <AppText
              content="add product"
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

ProductDetailAddScreen.propTypes = {
};

ProductDetailAddScreen.defaultProps = {
};

export default ProductDetailAddScreen;
