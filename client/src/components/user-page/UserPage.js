import React, { useState, useEffect } from "react";
import People from '../people/People';
import addUser from "../addUser.png";
import { useHistory } from 'react-router-dom';
import imagePh from '../image-ph.png';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment) // or globalizeLocalizer


function UserPage() {

  const history = useHistory();
//     useEffect(() => {
        // call to the api to get the user's events
        // const userEvents = API.getUserEvents
            // .then().catch()
            // set the event state to their events
            // setEvents(userEvents)
            // datetime format back from mysql -- see how that works to get moment formatted dates
    // }, [])
    const localizer = momentLocalizer(moment);

    // would initialize as empty state useState([]);
    const [events, setEvents] = useState([
        // {
        //     start: moment().toDate(),
        //     end: moment("20210709,", "YYYYMMDD").toDate(),
        //     title: "Wednesday's Class",
        //     allDay: true
        // },
        // {
        //     start: moment("20210720", "YYYYMMDD").toDate(),
        //     end: moment("20210720").add(3, "days").toDate(),
        //     allDay: true,
        //     title: "Independence Day",
        // },
        // {
        //   start: moment("20210720", "YYYYMMDD").fromNow(),
        //     end: moment("20210720", "YYYYMMDD").toDate(),
        //     allDay: true,
        //     title: "Independence Day",
        // }
    ]);

    return (
<div>
      <nav className="welcome w-100 h-24 border-2">
        <h1 className="m-4 text-6xl">Welcome</h1>
      </nav>
      <div className="text-left">
        <h1 className="m-5">Hello, F-name L-name!</h1>
        <h1 className="ml-5">My People:</h1>
      </div>
      <div className="flex">
        <People />
        <div className="ml-5">
          <button
            className="btn button"
            onClick={() => history.push("/add-person")}
          >
            {" "}
            <img
              className="icon w-30 h-30 m-2 border-1 m-5"
              src={addUser}
              alt="DVBSB"
            ></img>
          </button>
          <Calendar localizer={localizer} events={events}/>
        </div>
        
      </div>
    </div>




  );

  const [curr, setCurr] = useState({})
  
  function handleSubmit(){
    history.push('/add-person')
    
  }

    return (
        <div>
            <nav className='welcome w-100 h-24 border-2'>
                <h1 className='m-4 text-6xl'>Welcome</h1>
            </nav>
            <div className='text-left'>
                <h1 className='m-5'>Hello, F-name L-name!</h1>
                <h1 className='ml-5'>My People:</h1>
            </div>
            <div className="flex">
                <People />
                <div className='ml-5'>
                <button className="btn button" onClick={() => history.push('/add-person')}> <img className="icon w-30 h-30 m-2 border-1 m-5" src={addUser} alt="DVBSB"></img></button>
                </div>
                <Calendar />
            </div>
        </div>
        
    )

}

export default UserPage