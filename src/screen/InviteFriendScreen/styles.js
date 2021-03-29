import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/styles';

export default StyleSheet.create({
  wrapperSlider: {

  },

  title: {
    paddingTop: 17,
    paddingBottom: 8,

    paddingHorizontal: 24,
    borderBottomColor: COLORS.NEUTRAL_GRAY_15,
    borderBottomWidth: 0.2,
  },

  detailProduct: {
    flex: 40,
    paddingTop: 17,
    paddingHorizontal: 24,
  },

  flexSize: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
  },

});
