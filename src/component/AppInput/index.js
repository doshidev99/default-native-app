import React from 'react';
import {
  View, TextInput, ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types';

import AppText from '../AppText';

import styles from './styles';

const AppInput = (props) => {
  const {
    width, height, label, multiline,
    placeholder, defaultValue,
    onChangeText,
    onPress,
    containerStyles,
  } = props;

  return (
    <View style={containerStyles}>
      <AppText capitalize content={label} color="gray" otherStyle={{ paddingBottom: 8 }} />
      <View style={[{
        width,
        height,
      }]}
      >
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          defaultValue={defaultValue}
          multiline={multiline}
          onChangeText={onChangeText}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

AppInput.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multiline: PropTypes.bool,
  onChangeText: PropTypes.func,
  onPress: PropTypes.func,
  containerStyles: ViewPropTypes.style,
};

AppInput.defaultProps = {
  width: '100%',
  height: 48,
  label: 'Name',
  placeholder: '',
  defaultValue: '',
  multiline: false,
  onChangeText: () => { },
  onPress: () => { },
  containerStyles: {},
};
export default AppInput;
