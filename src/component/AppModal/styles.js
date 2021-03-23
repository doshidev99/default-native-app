import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  box: {
    backgroundColor: COLORS.NEUTRAL_WHITE,
    height: 271,

    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 36,
    paddingHorizontal: 24,
    marginHorizontal: 27,
  },
});
