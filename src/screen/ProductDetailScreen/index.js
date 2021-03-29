import React, { useState } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import AppButton from '../../component/AppButton';
import AppCarousel from '../../component/AppCarousel';
import AppHeader from '../../component/AppHeader';
import AppLayout from '../../component/AppLayout';
import AppModal from '../../component/AppModal';
import AppText from '../../component/AppText';
import AppProductDetail from '../../component/AppProductDetail';

import styles from './styles';
import { APP_SCREEN } from '../../navigation/screenTypes';

const ProductDetailScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const navigation = useNavigation();
  const toggle = () => setModalOpen((preState) => !preState);

  return (
    <AppLayout>
      <AppHeader isGoback rightIcon />
      <AppModal
        visible={modalOpen}
        title="Congratulation!"
        description="You product is added, would you like to buy something else"
      />

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
            onPress={toggle}
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
