import React, { memo, useState } from 'react';
import {
  View, FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Calendar } from 'react-native-calendars';

import { images } from '../../assets/images';
import { COLORS } from '../../assets/styles';

import styles from './styles';

import AppHeader from '../../component/AppHeader';
import AppText from '../../component/AppText';
import AppTabBottom from '../../component/AppTabBottom';
import AppFriendCard from '../../component/AppFriendCard';

import { APP_SCREEN } from '../../navigation/screenTypes';

const currentDate = new Date();
const dayString = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

const HomeScreen = () => {
  const navigation = useNavigation();

  const [currentDay, setCurrentDay] = useState(dayString);

  const handleMoving = () => {
    navigation.navigate(APP_SCREEN.GIFTDETAIL);
  };

  const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
  const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
  const workout = { key: 'workout', color: 'green' };

  const renderItem = () => (
    <AppFriendCard
      onPress={handleMoving}
      uri={images.defaultAvatar}
      mainName="Anthony sims"
      subName="17 July"
    />
  );

  return (
    <>
      <AppHeader />
      <View style={styles.wrapperCalendar}>
        <View style={{
          paddingHorizontal: 16,
        }}
        >
          <AppText content="Hello, Sarah." font="semi" color="red" size={16} />
          <AppText content="How are you today?" size={28} bold />
        </View>
        <View>
          <Calendar
            style={styles.calendar}
            current={Date()}
            minDate="2021-03-01"
            onDayPress={(day) => { setCurrentDay(() => day.dateString); }}
            monthFormat="yyyy MM"
            disableArrowLeft
            hideExtraDays
            disableMonthChange
            disableAllTouchEventsForDisabledDays
            renderHeader={(date) => <AppText content="March 2021" size={18} color="dark" letterSpacing={1} />}
            enableSwipeMonths
            markedDates={{
              [currentDay]: {
                dots:
                  [vacation, massage, workout],
                selected: true,
                selectedColor: COLORS.PRIMARY_RED,
              },
              // '2021-03-21': { dots: [massage, workout], disabled: true },
            }}
            markingType="multi-dot"
            theme={{
              calendarBackground: 'transparent',
              textSectionTitleColor: COLORS.NEUTRAL_GRAY_40,
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: COLORS.NEUTRAL_DARK,
              dayTextColor: COLORS.NEUTRAL_DARK,
              arrowColor: COLORS.PRIMARY_RED,
              disabledArrowColor: COLORS.PRIMARY_RED_50,
              textDayFontWeight: '500',
              textDayHeaderFontWeight: '500',
              textDayFontSize: 14,
              textDayHeaderFontSize: 14,
            }}

          />
        </View>
      </View>

      <View style={{
        flex: 30, paddingBottom: 83,
      }}
      >

        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={renderItem}
          keyExtractor={(item) => `${item}-333`}
        />
      </View>

      <AppTabBottom />
    </>

  );
};

HomeScreen.propTypes = {
};

HomeScreen.defaultProps = {
};
export default memo(HomeScreen);
