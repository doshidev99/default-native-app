import React from 'react';
import { View, ViewPropTypes } from 'react-native';

import PropTypes from 'prop-types';
import { images } from '../../assets/images';

import AppListGiftCard from '../AppListGiftCard';
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
            <AppText content="See more" size={12} font="semi" color="red" />
          )
        }
      </>
    </View>

    <AppListGiftCard data={data} onPress={handleMoving} />
  </View>

);

AppListProductInTab.propTypes = {
  data: PropTypes.instanceOf(Array),
  title: PropTypes.string,
  handleMoving: PropTypes.func,
  containerStyles: ViewPropTypes.style,
};

AppListProductInTab.defaultProps = {
  data: [],
  title: '',
  handleMoving: () => { },
  containerStyles: {},
};

export default AppListProductInTab;
