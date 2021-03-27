import { StyleSheet, Platform } from 'react-native';

import { COLORS } from '../../assets/styles';

const isIos = Platform.OS === 'ios';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  base: {
    width: 32,
    height: 32,
    alignItems: 'center',
  },
  text: {
    marginTop: isIos ? 8 : 7,
    fontFamily: 'Aileron-SemiBold',
    fontSize: 14,
    color: '#1c0404',
  },
  selected: {
    backgroundColor: COLORS.PRIMARY_RED,
    borderRadius: 13,

    elevation: 4,
    shadowColor: COLORS.PRIMARY_RED,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
  todayText: {
    color: COLORS.PRIMARY_RED,
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
  },
  disabledText: {
    color: '#d9e1e8',
  },
  dot: {
    width: 4,
    height: 4,
    marginTop: isIos ? 9.5 : 11,
    marginLeft: 1,
    marginRight: 1,
    borderRadius: 2,
    opacity: 0,
  },
  visibleDot: {
    opacity: 1,
    backgroundColor: '#75CFB4',
  },
  selectedDot: {
    backgroundColor: '#fff',
  },
});
