import React, { useState } from 'react'
import EventList from '../../Components/Events/EventList/EventList/EventList'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import EventData from '../../API/API'
import './StyleEventDashboard.css'
import Calendar from '../../Components/Calender/Calender'

export default function EventDashboard() {
    const [events , setEvent] = useState(EventData)
    return (
        <div className='event-dashboard'>
            <div className='sidebar-left'>
              <Sidebar />
            </div>
            <div className='main'>
                <EventList events={events}/>
            </div>
            <div className='sidebar-right'>
                <Calendar />
            </div>
        </div>
    )
}
