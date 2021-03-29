import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, TouchableWithoutFeedback } from 'react-native';

import { images } from '../../assets/images';
import AppImage from '../AppImage';
import AppText from '../AppText';
import styles from './styles';

const ShareWithInvite = (props) => {
  const {
    uri, mainName, status, addon, hiddenStatus, onPress,
  } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.avatar]}>
          <AppImage
            uri={uri}
            resizeMode="center"
            shape="circle"
            containerStyles={{ width: 40, height: 40 }}
          />
        </View>

        <View style={[styles.content]}>
          <AppText
            font="semi"
            content={mainName}
            color="dark"
            size={16}
          />
          {
            !hiddenStatus && (
              <AppText content={status} font="thin" color="gray" />
            )
          }
        </View>

        {
          addon && (
            <View style={styles.icon}>
              <AppImage resizeMode="cover" size="icon" uri={images.icArrowRight} />
            </View>
          )
        }

      </View>
    </TouchableWithoutFeedback>

  );
};

ShareWithInvite.propTypes = {
  uri: Image.propTypes.source.isRequired,
  mainName: PropTypes.string,
  status: PropTypes.string,
  addon: PropTypes.bool,
  hiddenStatus: PropTypes.bool,
  onPress: PropTypes.func,
};

ShareWithInvite.defaultProps = {
  mainName: 'Anthony Sims',
  status: null,
  addon: false,
  hiddenStatus: false,
  onPress: () => { },
};

export default ShareWithInvite;
