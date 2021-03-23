import React, { useState } from 'react';
import {
  View, Dimensions,
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import PropTypes from 'prop-types';

import AppModal from '../../../component/AppModal';
import AppLayout from '../../../component/AppLayout';
import AppHeader from '../../../component/AppHeader';
import AppImage from '../../../component/AppImage';
import AppButton from '../../../component/AppButton';
import AppDivider from '../../../component/AppDivider';
import AppText from '../../../component/AppText';

import { images } from '../../../assets/images';
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

const FriendGift = () => {
  const [currentActive, setCurrentActive] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);

  const toggle = () => setModalOpen((preState) => !preState);

  const data = [1, 2, 3, 4];

  return (
    <AppLayout>
      <AppHeader />
      <AppModal
        visible={modalOpen}
        onCancel={toggle}
        title="Congratulation!"
        description="You product is added, would you like to buy something else"
      />

      <View style={{
        flex: 1,
      }}
      >
        <View style={{ flex: 30 }}>
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
        </View>

        <View style={styles.detailGift}>
          <AppText content="Safari T-Shirt" bold color="dark" size={28} />
          <View style={styles.flexSize}>
            <AppText content="size top" capitalize size={14} />
            <AppText content="30" size={14} />
          </View>
          <AppDivider containerStyles={{ marginTop: 13 }} />

          <View style={{ paddingTop: 24 }}>
            <AppText content="Information" size={16} color="dark" letterSpacing={0.5} />
            <AppText
              containerStyles={{ paddingTop: 8 }}
              content="Unique: Fashionable Trendy
               Sleeveless TShirt has pocket inside
               to hold your mobile phone and wire loops
               for Headset wire. Best for Jogging, Sports and Gym
              (Mobile won’t fall off since your mobile is inside the jacket)"
              color="gray"
            />

          </View>
        </View>

        <View style={{ flex: 20, paddingHorizontal: 20 }}>
          <AppButton
            content="MODIFIER"
            uppercase
            bold
            color="white"
            onPress={toggle}
          />
          <AppButton
            content="SUPPRIMER"
            containerStyles={{ marginTop: 14 }}
            theme="blue"
            uppercase
            bold
            color="white"
          />
        </View>
      </View>

    </AppLayout>
  );
};

FriendGift.propTypes = {
};

FriendGift.defaultProps = {
};

export default FriendGift;
