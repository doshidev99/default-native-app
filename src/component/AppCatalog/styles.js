import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    borderRadius: 4,

    maxHeight: 124,
    marginTop: 16,
    paddingLeft: 20,
    paddingRight: 29,
  },

  bgCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },

  imgRepresent: {
    position: 'absolute',
    right: 0,
    top: 5,
    bottom: '-15%',

    width: '100%',
    overflow: 'hidden',
  },

  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
});
