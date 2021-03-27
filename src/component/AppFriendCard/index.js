import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, TouchableWithoutFeedback } from 'react-native';

import { images } from '../../assets/images';
import AppImage from '../AppImage';
import AppText from '../AppText';
import styles from './styles';

const AppFriendCard = (props) => {
  const {
    uri, mainName, subName, addon, onPress,
  } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.avatar]}>
          <AppImage
            uri={uri}
            resizeMode="contain"
            size="small"
            shape="circle"
            containerStyles={{ backgroundColor: '#1C0404' }}
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

AppFriendCard.propTypes = {
  uri: Image.propTypes.source.isRequired,
  mainName: PropTypes.string,
  subName: PropTypes.string,
  addon: PropTypes.bool,
  onPress: PropTypes.func,
};

AppFriendCard.defaultProps = {
  mainName: 'Anthony Sims',
  subName: '2nd August',
  addon: false,
  onPress: () => { },
};

export default AppFriendCard;
