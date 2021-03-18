import { StyleSheet } from 'react-native';

import { COLORS } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  boxAge: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: 122,
    marginTop: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.NEUTRAL_WHITE,
    borderRadius: 17,

    shadowColor: COLORS.BLACK_DEFAULT,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

});
