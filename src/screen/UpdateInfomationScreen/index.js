import React, { useState } from 'react';
import { View } from 'react-native';

import DatePicker from 'react-native-datepicker';

import AppButton from '../../component/AppButton';
import AppHeader from '../../component/AppHeader';
import AppLayout from '../../component/AppLayout';
import AppText from '../../component/AppText';

import IcCalendar from '../../assets/images/ic-calendar.png';

import styles from './styles';
import AppImage from '../../component/AppImage';

const currentDate = new Date();
const dayString = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

const UpdateInfomationScreen = () => {
  const [birthday, setBirthday] = useState(dayString);

  const handleChangeDate = (value) => {
    setBirthday(() => value);
  };
  return (
    <>
      <AppHeader theme="grey" isGoback namePath="Back" />
      <AppLayout theme="grey">
        <AppText
          content="Update information"
          bold
          color="dark"
          size={28}
          containerStyles={styles.title}
        />
        <View style={styles.wrapperContent}>
          <View style={{ flex: 5 }}>
            <AppText content="Mon anniversaire" color="gray" />
            <DatePicker
              style={[styles.inputDatePicker]}
              date={birthday}
              mode="date"
              format="YYYY-MM-DD"
              minDate="1900-01-01"
              confirmBtnText="Valider"
              cancelBtnText="Annuler"
              onDateChange={handleChangeDate}
              iconComponent={(
                <AppImage
                  uri={IcCalendar}
                  size="icon"
                  containerStyles={{
                    position: 'absolute',
                    right: 10,
                  }}
                />
              )}
              customStyles={{
                dateInput: styles.dateInput,
                dateText: styles.dateText,
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <AppButton>
              <AppText content="Valider" align="center" color="white" uppercase bold />
            </AppButton>
          </View>

        </View>

      </AppLayout>
    </>
  );
};

UpdateInfomationScreen.propTypes = {
};

UpdateInfomationScreen.defaultProps = {
};

export default UpdateInfomationScreen;
