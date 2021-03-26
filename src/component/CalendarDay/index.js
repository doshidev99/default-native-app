import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import AppText from '../AppText';

import styles from './styles';

const CalendarDay = (props) => {
  const {
    children,
    date,
    marking,
    state,
    onPress,
    onLongPress,
  } = props;

  // Methods
  const onDayPress = () => {
    onPress(date);
  };

  const onDayLongPress = () => {
    onLongPress(date);
  };

  // Render components
  const renderDots = () => {
    const baseDotStyle = [styles.dot, styles.visibleDot];

    if (marking.dots && Array.isArray(marking.dots) && marking.dots.length > 0) {
      // Filter out dots so that we we process only those items which have key and color property
      const validDots = marking.dots.filter((d) => (d && d.color));

      return validDots.map((dot, index) => (
        <View
          key={dot.key ? dot.key : index}
          style={[
            baseDotStyle,
            {
              backgroundColor: marking.selected && dot.selectedDotColor
                ? dot.selectedDotColor : dot.color,
            }]}
        />
      ));
    }

    return null;
  };

  // Render
  const containerStyle = [styles.base];
  const textStyle = [styles.text];

  const dot = renderDots();

  if (marking.selected) {
    containerStyle.push(styles.selected);
    textStyle.push(styles.selectedText);

    if (marking.selectedColor) {
      containerStyle.push({ backgroundColor: marking.selectedColor });
    }
  } else if (typeof marking.disabled !== 'undefined' ? marking.disabled : state === 'disabled') {
    textStyle.push(styles.disabledText);
  } else if (state === 'today') {
    textStyle.push(styles.todayText);
  }

  return (
    <TouchableOpacity
      onPress={onDayPress}
      onLongPress={onDayLongPress}
    >
      <View style={containerStyle}>
        <AppText allowFontScaling={false} style={textStyle}>{`${children}`}</AppText>

        <View style={styles.row}>{dot}</View>
      </View>
    </TouchableOpacity>
  );
};

CalendarDay.propTypes = {
  children: PropTypes.number,
  state: PropTypes.oneOf(['disabled', 'today', '']),
  date: PropTypes.instanceOf(Object),
  marking: PropTypes.instanceOf(Object),
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
};

CalendarDay.defaultProps = {
  state: '',
  date: {},
  marking: {},
  children: '',
  onPress: () => { },
  onLongPress: () => { },
};

export default memo(CalendarDay);
