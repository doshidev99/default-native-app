import React, { memo } from 'react';
import {
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import AppCatalog from '../../component/AppCatalog';
import AppHeader from '../../component/AppHeader';
import AppLayout from '../../component/AppLayout';
import { APP_SCREEN } from '../../navigation/screenTypes';

const BrandCatalogScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(APP_SCREEN.GIVER_SUGGEST);
  };

  return (
    <>
      <AppHeader divider isGoback />
      <AppLayout>
        <ScrollView style={{ paddingHorizontal: 16 }}>
          <AppCatalog
            imageCatalog={{
              uri: 'https://wiicamp.com/_next/static/images/leader-e6908ab818445a8219004800fa814715.png',
            }}
            onPress={handlePress}
            catalog="new in"
          />
          <AppCatalog catalog="CLOTHING" bgColor="#FAE1C8" bgImage="#F5A75A" />
          <AppCatalog catalog="SHOES" bgColor="#FFE2E2" bgImage="#CC2420" />
          <AppCatalog catalog="Accessories" bgColor="#C2DDB7" bgImage="#91CC79" />
          <AppCatalog catalog="WATCHES" bgColor="#F4D89F" bgImage="#F09F61" />
        </ScrollView>
      </AppLayout>
    </>

  );
};

BrandCatalogScreen.propTypes = {
};

BrandCatalogScreen.defaultProps = {
};
export default memo(BrandCatalogScreen);
