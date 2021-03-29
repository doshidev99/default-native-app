import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    paddingTop: 17,
    paddingBottom: 8,

    paddingHorizontal: 24,
    borderBottomWidth: 0.2,
  },

  inputDatePicker: {
    width: '100%',
    paddingTop: 8,
  },

  dateInput: {
    backgroundColor: COLORS.NEUTRAL_WHITE,
    borderColor: COLORS.NEUTRAL_25_DIFFERENT,
    borderRadius: 2,
  },

  dateText: {
    textAlign: 'left',
    width: '100%',
    paddingLeft: 16,
    fontSize: 16,
  },

  wrapperContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,

    flex: 6,
  },
});
