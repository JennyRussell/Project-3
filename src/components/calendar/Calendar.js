import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


function MyCalendar(props) {
    // set event state --> if we want to update events, we'll use setEvents({...events, newState});

    console.log('props: ', props);
    return (
    <Calendar
      localizer={props.localizer}
      events={props.events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
    )
};

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

export default MyCalendar;
