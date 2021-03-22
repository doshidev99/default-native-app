import React, { useState } from 'react';
import {
  View, Dimensions, Modal,
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import PropTypes, { object } from 'prop-types';

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
  const [modalVisible, setModalVisible] = useState(true);

  const data = [1, 2, 3, 4];

  return (
    <AppLayout>
      <AppHeader />

      <Modal
        animationType="none"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
        >
          <View style={{
            backgroundColor: '#FFFFFF',
            height: 271,

            borderRadius: 8,
            alignItems: 'center',
            paddingVertical: 36,
            paddingHorizontal: 24,
            marginHorizontal: 27,
          }}
          >
            <AppText content="Congratulation!" color="dark" bold uppercase size={20} />
            <AppText
              content="You product is added, would you like to buy something else"
              size={16}
              color="gray"
              textAlign="center"
              containerStyles={{ paddingTop: 21, paddingBottom: 32 }}
            />
            <AppButton content="YES, PLEASE" width={272} uppercase bold color="white" />
            <AppButton containerStyles={{ marginVertical: 20 }} content="NOT NOW" width={272} theme="transparent" uppercase bold color="dark" />

          </View>
        </View>
      </Modal>

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
            containerStyle={{
              position: 'absolute',
              bottom: '-10%',
              alignSelf: 'center',
            }}
            dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 5,
              backgroundColor: '#FF1515',
            }}
            inactiveDotStyle={{
              // Define styles for inactive dots here
              width: 6,
              height: 6,
              borderRadius: 5,
              backgroundColor: '#FF8787',
            }}
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
              content="Unique: Fashionable Trendy Sleeveless TShirt has pocket inside to hold your mobile phone and wire loops for Headset wire. Best for Jogging, Sports and Gym (Mobile won’t fall off since your mobile is inside the jacket)"
              color="gray"
            />

          </View>
        </View>

        <View style={{ flex: 20, paddingHorizontal: 20 }}>
          <AppButton content="MODIFIER" uppercase bold color="white" />
          <AppButton content="SUPPRIMER" containerStyles={{ marginTop: 14 }} theme="blue" uppercase bold color="white" />
        </View>
      </View>

    </AppLayout>
  );
};

FriendGift.propTypes = {
};

FriendGift.defaultProps = {
};

CarouselCardItem.propTypes = {
  item: PropTypes.instanceOf(object),
};

CarouselCardItem.defaultProps = {
  item: {},
};

export default FriendGift;
