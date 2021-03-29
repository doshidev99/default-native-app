import React, { memo } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Slider from 'react-native-slider';

import AppButton from '../../component/AppButton';
import AppHeader from '../../component/AppHeader';
import AppLayout from '../../component/AppLayout';
import AppText from '../../component/AppText';
import { APP_SCREEN } from '../../navigation/screenTypes';
import styles from './styles';
import { COLORS } from '../../assets/styles';

const MultipleFilterScreen = () => {
  const navigation = useNavigation();

  const handleMoving = () => {
    navigation.navigate(APP_SCREEN.GIVER);
  };

  return (
    <View style={[styles.container, {
    }]}
    >
      <AppHeader divider isGoback isCancel rightText="Clear" centerText="Filter" />
      <AppLayout containerStyles={{ paddingHorizontal: 16 }}>
        <View style={{ flex: 90 }}>
          <AppText content="Budget" size={20} containerStyles={{ paddingTop: 30 }} />

          <Slider
            value={40}
            thumbTintColor={COLORS.PRIMARY_RED}
            minimumTrackTintColor="#FE5555"
            minimumValue={10}
            maximumValue={2000}
            step={5}
            trackStyle={styles.slideTrack}
            thumbStyle={styles.slideThumb}
          />
          <View style={styles.flexSlide}>
            <AppText content="€10" size={13} />

            <AppText
              content="€40"
              containerStyles={styles.slideValue}
              size={13}
            />

            <AppText content="€2000" size={13} />
          </View>
        </View>
        <View style={{ flex: 10 }}>
          <AppButton onPress={handleMoving}>
            <AppText content="filter" uppercase align="center" color="white" bold font="semi" />
          </AppButton>
        </View>

      </AppLayout>
    </View>

  );
};

MultipleFilterScreen.propTypes = {
};

MultipleFilterScreen.defaultProps = {
};
export default memo(MultipleFilterScreen);
