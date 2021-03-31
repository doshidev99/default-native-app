import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import CalendarDay from '../CalendarDay';

import calendarTheme from './styles';

LocaleConfig.locales.fr = {
  monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: 'Aujourd\'hui',
};

LocaleConfig.defaultLocale = 'fr';

const AppCalendar = (props) => {
  const {
    onMonthChange, currentDate, loading,
  } = props;

  const onPressArrow = (changeMonth) => {
    if (loading) return null;

    return changeMonth();
  };

  return (
    <Calendar
      current={currentDate}
      dayComponent={CalendarDay}
      firstDay={1}
      onPressArrowLeft={onPressArrow}
      onPressArrowRight={onPressArrow}
      onMonthChange={onMonthChange}
      theme={calendarTheme}
      markedDates={currentDate}
      displayLoadingIndicator
      hideExtraDays
      {...props}
    />
  );
};

AppCalendar.propTypes = {
  currentDate: PropTypes.string,
  markedDates: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  onMonthChange: PropTypes.func,
};

AppCalendar.defaultProps = {
  currentDate: Date(),
  markedDates: {},
  loading: false,
  onMonthChange: () => { },
};

export default memo(AppCalendar);
