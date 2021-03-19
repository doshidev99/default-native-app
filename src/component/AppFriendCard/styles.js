import { StyleSheet } from 'react-native';

import { COLORS } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLORS.NEUTRAL_GRAY_15,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },

  avatar: {
    flex: 10,
  },

  content: {
    flex: 60,
    paddingLeft: 10,
  },

  icon: {
    flex: 10,
  },
});
