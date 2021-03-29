import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapperInputFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },

  wrapperFilter: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: '#ECEBED',
    borderWidth: 1,
    borderRadius: 4,
  },
});
