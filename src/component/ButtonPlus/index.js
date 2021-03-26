import React from 'react';
import PropTypes from 'prop-types';

import AppButton from '../AppButton';
import AppImage from '../AppImage';

import styles from './styles';

import IconPlus from '../../assets/images/ic-plus.png';

const ButtonPlus = (props) => {
  const {
    loading, onPress, style, // eslint-disable-line
  } = props;

  return (
    <AppButton
      onPress={onPress}
      width={56}
      height={56}
      containerStyles={{
        borderRadius: 20,
      }}
    >
      <AppImage uri={IconPlus} containerStyles={{ width: 22, height: 22 }} />
    </AppButton>
  );
};

ButtonPlus.propTypes = {
  loading: PropTypes.bool,
  onPress: PropTypes.func,
};

ButtonPlus.defaultProps = {
  loading: false,
  onPress: () => { },
};

export default ButtonPlus;
