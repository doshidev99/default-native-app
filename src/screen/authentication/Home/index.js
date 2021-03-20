import React, { memo, useState } from 'react';
import {
  ScrollView,
  TouchableWithoutFeedback, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import { images } from '../../../assets/images';
import { COLORS } from '../../../assets/styles';

import styles from './styles';

import AppHeader from '../../../component/AppHeader';
import AppFlex from '../../../component/AppFlex';
import AppText from '../../../component/AppText';
import AppTabBottom from '../../../component/AppTabBottom';
import AppFriendCard from '../../../component/AppFriendCard';

import { APP_SCREEN } from '../../../navigation/screenTypes';

const listFriends = [
  {
    id: 1, name: 'Anthony Sims', birthDay: '2nd August', avatar: images.defaultAvatar,
  },
  {
    id: 2, name: 'Allie Bridges', birthDay: '17 July', avatar: images.defaultAvatar,
  },
  {
    id: 3, name: 'Allie Bridges', birthDay: '17 July', avatar: images.defaultAvatar,
  },
  {
    id: 4, name: 'Billy Steele', birthDay: '22 October', avatar: { uri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png' },
  },
];

const Home = () => {
  const navigation = useNavigation();

  const [currentDay, setCurrentDay] = useState('2021-03-20');

  // eslint-disable-next-line no-console
  console.log(currentDay, '<----');
  const handleMoving = (currentFriend) => {
    navigation.navigate(APP_SCREEN.GIFTDETAIL, currentFriend);
  };

  const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
  const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
  const workout = { key: 'workout', color: 'green' };

  return (
    <AppFlex flex={1} justify="space-between" bg={COLORS.NEUTRAL_GRAY_5}>
      <AppHeader />
      <View style={styles.wrapperCalendar}>
        <AppText content="Hello, Sarah." color="red" size={16} />
        <AppText content="How are you today?" size={28} bold />
        <View>

          <Calendar
            style={styles.calendar}
            current={Date()}
            minDate="2021-03-01"
            onDayPress={(day) => { setCurrentDay((currentDate) => day.dateString); }}
            onDayLongPress={(day) => { console.log('selected day', day); }}
            monthFormat="yyyy MM"
            onMonthChange={(month) => { console.log('month changed', month); }}
            // renderArrow={(direction) => {
            //   // eslint-disable-next-line no-console
            //   return (
            //     <View>
            //       <AppText content={`${direction === 'left' ? '<' : '>'}`} />
            //     </View>
            //   );
            // }}
            // Do not show days of other months in month page. Default = false
            hideExtraDays
            disableMonthChange
            // It receive a callback can go back month
            onPressArrowLeft={(subtractMonth) => subtractMonth()}
            // Handler which gets executed when press arrow icon right.
            //  It receive a callback can go next month
            onPressArrowRight={(addMonth) => addMonth()}
            // Disable left arrow. Default = false
            // disableArrowLeft
            // Disable right arrow. Default = false
            // disableArrowRight
            // Disable all touch events for disabled days. can be override
            //  with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays
            // Replace default month and year title with custom one.
            //  the function receive a date as parameter.
            renderHeader={(date) => { <AppText content="December 2019" />; }}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths
            markedDates={{
              [currentDay]: {
                dots:
                  [vacation, massage, workout],
                selected: true,
                selectedColor: COLORS.PRIMARY_RED,
              },
              '2021-03-21': { dots: [massage, workout], disabled: true },
            }}
            markingType="multi-dot"

          />
        </View>
      </View>

      <View style={{
        flex: 30, justifyContent: 'flex-end', paddingBottom: 83,
      }}
      >
        <ScrollView>
          {
            listFriends.map((f) => (
              <TouchableWithoutFeedback
                key={f.id}
                onPress={() => handleMoving(f)}
              >
                <View>
                  <AppFriendCard uri={f.avatar} mainName={f.name} subName={f.birthDay} />
                </View>
              </TouchableWithoutFeedback>
            ))
          }

        </ScrollView>
      </View>

      <AppTabBottom />
    </AppFlex>

  );
};

Home.propTypes = {
};

Home.defaultProps = {
};
export default memo(Home);
