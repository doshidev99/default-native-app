import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';
import { images } from '../../assets/images';

import AppGiftCard from '../AppGiftCard';
import AppText from '../AppText';

import styles from './styles';

const AppListProductInTab = ({
  data, title, handleMoving, containerStyles,
}) => (
  <View style={containerStyles}>
    <View style={[styles.flexBox, styles.flexTitle]}>
      <AppText content={title} size={17} bold letterSpacing={0.61} color="dark" />
      <>
        {
          data.length >= 3 && (
            <AppText content="See more" size={12} color="red" />
          )
        }
      </>
    </View>

    <View style={[styles.flexBox]}>
      {
        data.map((e) => (
          <AppGiftCard
            key={e}
            onPress={handleMoving}
            giftImage={images.bike}
            giftName="CRB 2000"
          />

        ))
      }
    </View>
  </View>

);

AppListProductInTab.propTypes = {
  data: PropTypes.instanceOf(Array),
  title: PropTypes.string,
  handleMoving: PropTypes.func,
  containerStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

AppListProductInTab.defaultProps = {
  data: [],
  title: '',
  handleMoving: () => { },
  containerStyles: {},
};

export default AppListProductInTab;
