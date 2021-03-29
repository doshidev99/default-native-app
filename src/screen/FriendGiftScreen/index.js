import React, { useState } from 'react';
import {
  View,
} from 'react-native';

import AppButton from '../../component/AppButton';
import AppCarousel from '../../component/AppCarousel';
import AppDivider from '../../component/AppDivider';
import AppHeader from '../../component/AppHeader';
import AppLayout from '../../component/AppLayout';
import AppModal from '../../component/AppModal';
import AppText from '../../component/AppText';
import styles from './styles';

const FriendGiftScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggle = () => setModalOpen((preState) => !preState);

  return (
    <AppLayout>
      <AppHeader />
      <AppModal
        visible={modalOpen}
        onCancel={toggle}
        title="Congratulation!"
        description="You product is added, would you like to buy something else"
      />

      <View style={{
        flex: 1,
      }}
      >
        <View style={{ flex: 30 }}>
          <AppCarousel data={[1, 2, 3, 4, 5]} />
        </View>

        <View style={styles.detailGift}>
          <AppText content="Safari T-Shirt" bold color="dark" size={28} />
          <View style={styles.flexSize}>
            <AppText content="size top" medium capitalize size={14} />
            <AppText content="30" size={14} />
          </View>
          <AppDivider containerStyles={{ marginTop: 13 }} />

          <View style={{ paddingTop: 24 }}>
            <AppText content="Information" size={16} color="dark" letterSpacing={0.5} />
            <AppText
              containerStyles={{ paddingTop: 8 }}
              content="Unique: Fashionable Trendy
               Sleeveless TShirt has pocket inside
               to hold your mobile phone and wire loops
               for Headset wire. Best for Jogging, Sports and Gym
              (Mobile won’t fall off since your mobile is inside the jacket)"
              color="gray"
            />

          </View>
        </View>

        <View style={{ flex: 20, paddingHorizontal: 20 }}>
          <AppButton
            onPress={toggle}
          >
            <AppText
              content="MODIFIER"
              uppercase
              align="center"
              bold
              color="white"
            />
          </AppButton>
          <AppButton
            containerStyles={{ marginTop: 14 }}
            theme="blue"

          >
            <AppText
              content="SUPPRIMER"
              uppercase
              align="center"
              bold
              color="white"
            />
          </AppButton>
        </View>
      </View>

    </AppLayout>
  );
};

FriendGiftScreen.propTypes = {
};

FriendGiftScreen.defaultProps = {
};

export default FriendGiftScreen;
