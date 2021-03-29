import React from 'react';
import { Modal, View } from 'react-native';

import PropTypes from 'prop-types';

import AppButton from '../AppButton';
import AppText from '../AppText';
import styles from './styles';

import { isIos } from '../../utils';

const AppModal = ({
  visible, onCancel,
  title, description, textApply, textCancel,
}) => (
  <Modal
    animationType="none"
    transparent
    visible={visible}
  >
    <View style={styles.container}>
      <View style={styles.box}>
        <AppText content={title} color="dark" bold uppercase size={20} />
        <AppText
          content={description}
          size={16}
          color="gray"
          textAlign="center"
          containerStyles={{ paddingTop: 21, paddingBottom: isIos ? 32 : 22 }}
        />
        <AppButton
          width={272}
          height={40}
        >
          <AppText
            otherStyle={styles.text}
            content={textApply}
            uppercase
            bold
            align="center"
            color="white"
          />
        </AppButton>
        <AppButton
          containerStyles={{ marginTop: 20 }}
          width={272}
          height={40}
          theme="transparent"
          onPress={onCancel}
        >
          <AppText
            content={textCancel}
            uppercase
            align="center"
            bold
            color="dark"
          />
        </AppButton>
      </View>
    </View>
  </Modal>
);

AppModal.propTypes = {
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onCancel: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  textApply: PropTypes.string,
  textCancel: PropTypes.string,
};

AppModal.defaultProps = {
  visible: false,
  onCancel: () => { },
  title: '',
  description: '',
  textApply: 'YES, PLEASE',
  textCancel: 'NOT NOW',
};

export default AppModal;
