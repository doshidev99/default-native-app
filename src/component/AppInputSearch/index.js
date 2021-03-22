import React from 'react';
import { View, TextInput } from 'react-native';

import PropTypes from 'prop-types';

import AppImage from '../AppImage';

import styles from './styles';

const AppInputSearch = (props) => {
  const {
    width, height, placeholder, onChangeText,
    onPress,
  } = props;
  return (
    <View style={[{
      width,
      height,
    }, styles.container]}
    >
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onPress={onPress}
      />
      <AppImage
        uri={require('../../assets/images/ic-search.png')}
        size="icon"
        containerStyles={{
          position: 'absolute',
          top: '25%',
          left: 15,
        }}
      />
    </View>
  );
};

AppInputSearch.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  onPress: PropTypes.func,
};

AppInputSearch.defaultProps = {
  width: '100%',
  height: 40,
  placeholder: 'Search friends',
  onChangeText: () => { },
  onPress: () => { },
};

export default AppInputSearch;
