import { StyleSheet } from 'react-native';

import { COLORS } from '../../../assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.NEUTRAL_WHITE,
  },

  tabBar: {
    backgroundColor: COLORS.NEUTRAL_WHITE,
    color: COLORS.PRIMARY_RED,
  },

  containerAvatar: {
    paddingTop: 39,
    paddingBottom: 7,
  },

  indicatorStyle: {
    height: 3,

    marginTop: 9,
    backgroundColor: COLORS.PRIMARY_RED,

    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },

});
