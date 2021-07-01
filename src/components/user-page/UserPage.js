import React, {useState, useEffect} from "react";
import People from '../people/People'
import addUser from "../addUser.png"
import Calendar from "../calendar/Calendar";
import moment from "moment";
import { momentLocalizer } from "react-big-calendar";

function UserPage() {
    useEffect(() => {
        // call to the api to get the user's events
        // const userEvents = API.getUserEvents
            // .then().catch()
            // set the event state to their events
            // setEvents(userEvents)
            // datetime format back from mysql -- see how that works to get moment formatted dates
    }, [])
    const localizer = momentLocalizer(moment);

    // would initialize as empty state useState([]);
    const [events, setEvents] = useState([
        {
            start: moment("20210630,", "YYYYMMDD").toDate(),
            end: moment().toDate(),
            title: "Wednesday's Class",
        },
        {
            start: moment("20210704", "YYYYMMDD").fromNow(),
            end: moment().add(1, "days").toDate(),
            title: "Independence Day",
        },
    ]);

    return (
        <div>
            <nav className='w-100 h-24 border-2'>
                <h1 className='m-4 text-6xl'>Welcome</h1>
            </nav>
            <div className='text-left'>
                <h1 className='m-5'>Hello, F-name L-name!</h1>
                <h1 className='ml-5'>My People:</h1>
            </div>
            <div className="flex">
                <People />
                <div className='ml-5'>
                    <img className="icon w-30 h-30 m-2 border-1 m-5" src={addUser} alt="DVBSB"></img>
                </div>
                <div className='coloum'>
                    <Calendar events={events} localizer={localizer}/>
                </div>
            </div>
        </div>
        
    )
}

export default UserPage