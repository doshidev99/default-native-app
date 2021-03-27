import React, { useState } from 'react';
import {
  Dimensions, View,
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import PropTypes from 'prop-types';

import { images } from '../../assets/images';

import AppImage from '../AppImage';
import styles from './styles';

const widthScreen = Dimensions.get('window').width;

const CarouselCardItem = () => (
  <View style={{
    backgroundColor: '#EDEDED',
    height: 257,
  }}
  >
    <AppImage
      uri={images.defaultAvatar}
      containerStyles={{ paddingTop: 17 }}
    />
  </View>
);

const AppCarousel = ({ data }) => {
  const [currentActive, setCurrentActive] = useState(0);

  return (
    <>
      <Carousel
        loop
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={widthScreen}
        itemWidth={widthScreen}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setCurrentActive(() => index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={currentActive}
        containerStyle={styles.pContainerStyle}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={
          // Define styles for inactive dots here
          styles.inactiveDotStyle
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
};

AppCarousel.propTypes = {
  data: PropTypes.instanceOf(Array),
};

AppCarousel.defaultProps = {
  data: [],
};

export default AppCarousel;
