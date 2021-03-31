import React, { memo } from 'react';

import {
  View, Dimensions, TouchableWithoutFeedback, ScrollView,
} from 'react-native';

import AppLayout from '../../component/AppLayout';
import AppBoxAddImage from '../../component/AppBoxAddImage';
import AppImage from '../../component/AppImage';

import AppHeader from '../../component/AppHeader';
import AppInput from '../../component/AppInput';
import AppButton from '../../component/AppButton';
import AppText from '../../component/AppText';

import styles from './styles';

import defaultProduct from '../../assets/images/default-product.png';
import icCancel from '../../assets/images/icon-cancel.png';

const windowWidth = Dimensions.get('window').width;

const AddProductScreen = () => (
  <AppLayout>
    <AppHeader divider isGoback />
    <View style={[styles.container, {
      flex: 1,
    }]}
    >
      <View style={styles.containerListImg}>
        <ScrollView>
          <View style={[styles.flexBox]}>
            {
              [1, 2, 3, 4, 5].map((v) => (
                <TouchableWithoutFeedback key={v}>
                  <View style={[
                    styles.containerImage,
                    {
                      marginRight: 10,
                      width: (windowWidth - 32 - 20) / 3,
                    },
                  ]}
                  >
                    <AppImage
                      containerStyles={{
                        width: '100%',
                        height: '100%',

                        transform: [{ scale: 1.6 }],

                      }}
                      resizeMode="contain"
                      uri={defaultProduct}
                    />

                    <AppImage
                      containerStyles={{
                        position: 'absolute',
                        right: 6,
                        top: 6,
                      }}
                      size="icon"
                      resizeMode="contain"
                      uri={icCancel}
                    />

                  </View>

                </TouchableWithoutFeedback>

              ))
            }

            <AppBoxAddImage />
          </View>
        </ScrollView>

      </View>

      <View style={{ flex: 5 }}>
        <AppInput placeholder="123" defaultValue="0123" />
        <View style={[styles.flexBox,
          {
            justifyContent: 'space-between',
            paddingBottom: 16,
            paddingTop: 10,
          }]}
        >
          <AppInput label="price" width={156} defaultValue="€47" />
          <AppInput label="size" width={156} defaultValue="8.5" />
        </View>
        <AppInput
          label="description"
          multiline
          height={98}
          defaultValue="Fashionable Trendy Sleeveless TShirt has pocket inside to hold your mobile phone and wire loops for Headset."
        />

      </View>

      <View style={{ flex: 1 }}>
        <AppButton>
          <AppText
            content="add product"
            uppercase
            align="center"
            bold
            color="white"

          />
        </AppButton>
      </View>
    </View>

  </AppLayout>
);

AddProductScreen.propTypes = {
};

AddProductScreen.defaultProps = {
};

export default memo(AddProductScreen);
