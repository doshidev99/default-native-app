import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';
import { images } from '../../assets/images';

import AppGiftCard from '../AppGiftCard';
import AppText from '../AppText';

import styles from './styles';

const AppListProductInTab = ({ data, friend, handleMoving }) => (
  <>
    <View style={[styles.flexBox, {
      paddingTop: 24,
      paddingBottom: 10,
    }]}
    >
      <AppText content={`List with ${friend}`} size={17} bold letterSpacing={0.61} color="dark" />
      <>
        {
            data.length >= 3 && (
              <AppText content="See more" size={12} color="red" />
            )
          }
      </>
    </View>

    <View style={[styles.flexBox, { flexWrap: 'nowrap' }]}>
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
  </>

);

AppListProductInTab.propTypes = {
  data: PropTypes.instanceOf(Array),
  friend: PropTypes.string,
  handleMoving: PropTypes.func,
};

AppListProductInTab.defaultProps = {
  data: [],
  friend: '',
  handleMoving: () => { },
};

export default AppListProductInTab;
