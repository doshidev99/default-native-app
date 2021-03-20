import React from 'react';
import {
  View, Image,
} from 'react-native';

import PropTypes from 'prop-types';

import { images } from '../../assets/images';

import AppImage from '../AppImage';
import AppText from '../AppText';
import styles from './styles';

const AppFriendCard = (props) => {
  const {
    uri, mainName, subName, addon,
  } = props;

  return (
    <View style={[styles.container]}>

      <AppImage
        containerStyles={[styles.avatar]}
        uri={uri}
        resize="cover"
        size="small"
        shape="circle"
        styleImage={{
          backgroundColor: '#1C0404',
        }}
      />

      <View style={[styles.content]}>
        <AppText
          content={mainName}
          color="dark"
          size={16}
        />
        <AppText content={subName} color="gray" />
      </View>

      {
        addon && (
          <View style={styles.icon}>
            <AppImage resizeMode="cover" size="icon" uri={images.icArrowRight} />
          </View>
        )
      }

    </View>
  );
};

AppFriendCard.propTypes = {
  uri: Image.propTypes.source.isRequired,
  mainName: PropTypes.string,
  subName: PropTypes.string,
  addon: PropTypes.bool,
};

AppFriendCard.defaultProps = {
  mainName: 'Anthony Sims',
  subName: '2nd August',
  addon: false,
};

export default AppFriendCard;
