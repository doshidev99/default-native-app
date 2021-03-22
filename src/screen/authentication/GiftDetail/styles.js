import { StyleSheet } from 'react-native';

import { COLORS } from '../../../assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  tabBar: {
    backgroundColor: COLORS.NEUTRAL_WHITE,
  },

  containerAvatar: {
    paddingTop: 39,
    paddingBottom: 7,
  },

  indicatorStyle: {
    height: 3,
    bottom: 0,
    backgroundColor: COLORS.PRIMARY_RED,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },

});
