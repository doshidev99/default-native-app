import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, TouchableWithoutFeedback } from 'react-native';

import AppImage from '../AppImage';
import AppText from '../AppText';
import styles from './styles';

const AppFriendCard = (props) => {
  const {
    uri, mainName, subName, onPress,
    bgColor,
  } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.avatar]}>
          <AppImage
            uri={uri}
            resizeMode="contain"
            shape="circle"
            containerStyles={[styles.sizeAvatar, { backgroundColor: bgColor }]}
          />
        </View>

        <View style={[styles.content]}>
          <AppText
            font="semi"
            content={mainName}
            color="dark"
            size={16}
          />
          <AppText content={subName} font="thin" color="gray" />
        </View>

      </View>
    </TouchableWithoutFeedback>

  );
};

AppFriendCard.propTypes = {
  uri: Image.propTypes.source.isRequired,
  mainName: PropTypes.string,
  subName: PropTypes.string,
  onPress: PropTypes.func,
  bgColor: PropTypes.string,
};

AppFriendCard.defaultProps = {
  mainName: 'Anthony Sims',
  subName: '',
  onPress: () => { },
  bgColor: '#1C0404',
};

export default AppFriendCard;
