import React, { useState } from 'react';
import {
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import AppButton from '../../component/AppButton';
import AppCarousel from '../../component/AppCarousel';
import AppHeader from '../../component/AppHeader';
import AppLayout from '../../component/AppLayout';
import AppModal from '../../component/AppModal';
import AppText from '../../component/AppText';
import styles from './styles';

const MapScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggle = () => setModalOpen((preState) => !preState);

  return (
    <AppLayout>
      <AppHeader isGoback rightIcon namePath="Back" />

      <View style={{
        flex: 1,
      }}
      />

    </AppLayout>
  );
};

MapScreen.propTypes = {
};

MapScreen.defaultProps = {
};

export default MapScreen;
