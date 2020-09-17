import React from 'react';
import { StatefulCalendar } from 'baseui/datepicker';

const Calendar = ({ setSelectedDate }) => {
  return (
    <StatefulCalendar
      onChange={({ date }) => setSelectedDate(date)}
      overrides={{
        CalendarHeader: {
          style: {
            backgroundColor: '#F56565',
          },
        },
        MonthHeader: {
          style: {
            backgroundColor: '#F56565',
          },
        },
        MonthYearSelectButton: {
          style: {
            ':focus': {
              backgroundColor: '#F56565',
              outline: 'none',
            },
          },
        },
        Day: {
          style: ({ $theme, $selected, $isHovered, $isHighlighted }) => ({
            color:
              $selected || $isHovered
                ? $theme.colors.white
                : $theme.colors.calendarForeground,
            ':after': {
              backgroundColor:
                $selected || $isHovered || $isHighlighted
                  ? '#F56565'
                  : 'transparent',
            },
          }),
        },
      }}
    />
  );
};

export default Calendar;
