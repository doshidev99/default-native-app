import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    marginBottom: 10,

    backgroundColor: COLORS.NEUTRAL_GRAY_5,
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

  wrapperImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },

  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  owner: {
    position: 'absolute',
    right: -15,
    top: -15,

    width: 35,
    height: 35,
    backgroundColor: '#1C0404',
  },

});
