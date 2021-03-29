import React from 'react';
import {
  View, FlatList,
} from 'react-native';

import AppHeader from '../../component/AppHeader';
import AppLayout from '../../component/AppLayout';
import ShareWithInvite from '../../component/ShareWithInvite';
import AppText from '../../component/AppText';

import SocialPhone from '../../assets/images/social-phone.png';
import SocialFb from '../../assets/images/social-fb.png';
import SocialInsta from '../../assets/images/social-insta.png';
import SocialTwitter from '../../assets/images/social-twitter.png';
import SocialMess from '../../assets/images/social-mess.png';
import SocialGmail from '../../assets/images/social-gmail.png';

import styles from './styles';

const listSocial = [
  { icon: SocialPhone, inviteTo: 'Address book', isNone: true },
  { icon: SocialFb, inviteTo: 'Facebook', status: true },
  { icon: SocialInsta, inviteTo: 'Instagram', status: false },
  { icon: SocialTwitter, inviteTo: 'Twitter', status: true },
  { icon: SocialMess, inviteTo: 'Messenger', status: true },
  { icon: SocialGmail, inviteTo: 'Gmail', status: false },
];

const InviteFriendScreen = () => {
  const renderItem = ({ item }) => (
    <ShareWithInvite
      key={item.inviteTo}
      uri={item.icon}
      mainName={`Invite from ${item.inviteTo}`}
      status={item.status ? 'Connect' : 'Not connect'}
      addon
      hiddenStatus={item.isNone}
    />
  );
  return (
    <>
      <AppHeader isGoback namePath="Profile" />
      <AppLayout>
        <AppText
          content="Invite friend"
          bold
          color="dark"
          size={28}
          containerStyles={styles.title}
        />

        <View style={{
          paddingTop: 8,
        }}
        >
          <FlatList
            data={listSocial}
            renderItem={renderItem}
            keyExtractor={(item) => item.inviteTo}
          />
        </View>

      </AppLayout>

    </>
  );
};

InviteFriendScreen.propTypes = {
};

InviteFriendScreen.defaultProps = {
};

export default InviteFriendScreen;
