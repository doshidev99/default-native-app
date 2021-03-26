import React, { memo } from 'react';
import {
  ScrollView, View,
} from 'react-native';

import AppCatalog from '../../component/AppCatalog';
import AppHeader from '../../component/AppHeader';
import AppLayout from '../../component/AppLayout';
import AppInputSearch from '../../component/AppInputSearch';

import styles from './styles';
import AppImage from '../../component/AppImage';

const GiverSuggest = () => (
  <View style={styles.container}>
    <AppHeader divider isGoback />
    <AppLayout containerStyles={{ paddingHorizontal: 16 }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingTop: 20,
      }}
      >
        <AppInputSearch width="70%" />
        <View width="20%">
          <AppImage />
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <AppCatalog catalog="new in" />
      </ScrollView>
    </AppLayout>
  </View>

);

GiverSuggest.propTypes = {
};

GiverSuggest.defaultProps = {
};
export default memo(GiverSuggest);
