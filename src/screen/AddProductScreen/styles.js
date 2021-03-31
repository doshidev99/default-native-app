import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  containerListImg: {
    flex: 5,
    paddingBottom: 10,
  },

  containerImage: {
    marginBottom: 10,
    height: 139,
    overflow: 'hidden',

    backgroundColor: COLORS.ACCENT_BLUE,
    borderRadius: 4,

    shadowColor: COLORS.NEUTRAL_GRAY_5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

});
