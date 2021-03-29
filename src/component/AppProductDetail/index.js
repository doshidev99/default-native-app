import React, { memo } from 'react';
import {
  Text, View, ScrollView, ActivityIndicator, TouchableWithoutFeedback,
} from 'react-native';

import PropTypes from 'prop-types';

import AppText from '../AppText';
import AppCarousel from '../AppCarousel';

import styles from './styles';

const AppProductDetail = (props) => {
  // eslint-disable-next-line no-console
  console.log('<----');
  return (
    <>
      <View style={{ flex: 30 }}>
        <AppCarousel data={[1, 2, 3, 4, 5]} />
      </View>

      <View style={styles.detailProduct}>
        <AppText content="Summer Jacket" bold color="dark" size={28} />

        <ScrollView style={{ marginVertical: 24 }}>
          <View>
            <AppText content="Information" size={16} color="dark" letterSpacing={0.5} />
            <AppText
              containerStyles={{ paddingTop: 8 }}
              content="Unique: Fashionable Trendy Sleeveless TShirt has pocket inside to hold your mobile phone and wire loops for Headset wire. Best for Jogging, Sports and Gym (Mobile won’t fall off since your mobile is inside the jacket)"
              color="gray"
            />

            <AppText
              containerStyles={{ paddingTop: 8 }}
              content="Fabric: 100% Pure Cotton ; Premium Export Quality Branded T-shirt ; Unique Collection to your wardrobe casuals a hit of effortless cool with this best looking t shirt. Sleeve Type: Sleeveless ; Neck type: V Neck; Style: Zipper Hooded Jacket"
              color="gray"
            />

            <AppText
              containerStyles={{ paddingTop: 8 }}
              content="Comfort: Best Fashionably Comfortable Trendy Premium Tshirt with zip Hood and Sleeveless T Shirts that you have worn till now. Occasion: Fashion Trendy wear, Jogging, Casual Outerwear TShirt, Gifts, Long Drive in Bike"
              color="gray"
            />
          </View>
        </ScrollView>

      </View>

    </>
  );
};

AppProductDetail.propTypes = {
};

AppProductDetail.defaultProps = {
};

export default memo(AppProductDetail);
