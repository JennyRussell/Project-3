// import React, { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


// function MyCalendar(props) {
//     // set event state --> if we want to update events, we'll use setEvents({...events, newState});

//     console.log('props: ', props);
//     return (
//     <Calendar
//       localizer={props.localizer}
//       events={props.events}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500 }}
//     />
//     )
// };

// function getBirthdaysList() {
//   const birthdaysList = [];

//   for (var i = 0; i < birthdays.length; i++) {
//     let color = "#ff0000";

//     birthdaysList.push({ ...color: color});
//   }
// }

// function getAnniversariesList() {
//   const anniversariesList = [];

//   for (var i = 0; i < anniversaries.length; i++) {
//     let color = "#ff0000";

//     anniversariesList.push({ color: color });
//   }
// }

// export default MyCalendar;




import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import events from './events'
import * as dates from '../../utils/dates'

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

let Basic = ({ localizer }) => (
  <Calendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
    defaultDate={new Date(2015, 3, 1)}
    components={{
      timeSlotWrapper: ColoredDateCellWrapper,
    }}
    localizer={localizer}
  />
)

export default Basic
