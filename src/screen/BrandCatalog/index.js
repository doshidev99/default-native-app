import React, { memo } from 'react';
import {
  ScrollView, TouchableWithoutFeedback,
} from 'react-native';

import PropTypes from 'prop-types';

import { navigation } from '../../utils';

import AppCatalog from '../../component/AppCatalog';
import AppHeader from '../../component/AppHeader';
import AppLayout from '../../component/AppLayout';
import { APP_SCREEN } from '../../navigation/screenTypes';

const BrandCatalog = () => {
  const handlePress = () => {
    // navigation.navigate(APP_SCREEN.)
    console.log('handlePress ...!');
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <AppHeader divider isGoback />
      <AppLayout>
        <ScrollView style={{ paddingHorizontal: 16 }}>
          <AppCatalog catalog="new in" />
          <AppCatalog catalog="CLOTHING" bgColor="#FAE1C8" bgImage="#F5A75A" />
          <AppCatalog catalog="SHOES" bgColor="#FFE2E2" bgImage="#CC2420" />
          <AppCatalog catalog="Accessories" bgColor="#C2DDB7" bgImage="#91CC79" />
          <AppCatalog catalog="WATCHES" bgColor="#F4D89F" bgImage="#F09F61" />
        </ScrollView>
      </AppLayout>
    </TouchableWithoutFeedback>

  );
};

BrandCatalog.propTypes = {
};

BrandCatalog.defaultProps = {
};
export default memo(BrandCatalog);
