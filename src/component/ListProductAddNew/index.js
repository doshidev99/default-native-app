import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { useNavigation } from '@react-navigation/native';

import { images } from '../../assets/images';
import { APP_SCREEN } from '../../navigation/screenTypes';
import AppBoxAddImage from '../AppBoxAddImage';
import AppGiftCard from '../AppGiftCard';
import AppText from '../AppText';
import styles from './styles';

const ListProductAddNew = ({
  data, title, containerStyles,
}) => {
  const [newProduct, setNewProduct] = useState([]);

  const navigation = useNavigation();

  const addNewProduct = () => {
    navigation.navigate(APP_SCREEN.BRAND_CATALOG);
  };

  const totalArray = data.length + newProduct.length;

  return (
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

      <View style={[styles.flexBox]}>
        {
          data.map((e, index) => (
            <AppGiftCard
              onPress={() => navigation.navigate(APP_SCREEN.PRODUCT_DETAILS_ADD)}
              key={e}
              index={index}
              giftImage={images.bike}
              giftName="CRB 2000"
            />
          ))
        }
        {
          newProduct.length < 3
          && newProduct.map((e, index) => (
            <AppGiftCard
              key={e}
              index={index}
              giftImage={images.bike}
              giftName="CRB 2000"
            />

          ))
        }
        {
          totalArray < 3 && (
            <AppBoxAddImage onPress={addNewProduct} />
          )
        }

      </View>
    </View>
  );
};

ListProductAddNew.propTypes = {
  data: PropTypes.instanceOf(Array),
  title: PropTypes.string,
  containerStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

ListProductAddNew.defaultProps = {
  data: [],
  title: '',
  containerStyles: {},
};

export default ListProductAddNew;
