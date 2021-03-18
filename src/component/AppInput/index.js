import React from 'react';
import {
  View, TextInput,
} from 'react-native';

import PropTypes from 'prop-types';

import AppText from '../AppText';

import styles from './styles';

const AppInput = (props) => {
  const {
    width, height, label, multiline, onChangeText,
    onPress,
  } = props;

  return (
    <View style={{ width, height }}>
      <AppText content={label} otherStyle={{ paddingBottom: 8 }} />
      <TextInput
        style={styles.input}
        multiline={multiline}
        onChangeText={onChangeText}
        onPress={onPress}
      />
    </View>
  );
};

AppInput.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  multiline: PropTypes.bool,
  onChangeText: PropTypes.func,
  onPress: PropTypes.func,
};

AppInput.defaultProps = {
  width: '100%',
  height: 48,
  label: 'Name',
  multiline: true,
  onChangeText: () => { },
  onPress: () => { },
};
export default AppInput;
