import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import AppButton from '../../component/AppButton';
import AppHeader from '../../component/AppHeader';
import AppLayout from '../../component/AppLayout';
import AppModal from '../../component/AppModal';
import AppProductDetail from '../../component/AppProductDetail';
import AppText from '../../component/AppText';

const ProductDetailAddScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggle = () => setModalOpen((preState) => !preState);

  return (
    <AppLayout>
      <AppHeader isGoback rightIcon />
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
        <AppProductDetail />

        <View style={{ flex: 10, paddingHorizontal: 20, marginTop: 20 }}>
          <AppButton
            onPress={toggle}
          >
            <AppText
              content="add product"
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

ProductDetailAddScreen.propTypes = {
};

ProductDetailAddScreen.defaultProps = {
};

export default ProductDetailAddScreen;
