import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  wrapperMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLORS.NEUTRAL_GRAY_15,

    paddingVertical: 18,
    paddingLeft: 24,
    borderBottomWidth: 1,
  },

  icon: {
    paddingRight: 20.85,
  },
});
