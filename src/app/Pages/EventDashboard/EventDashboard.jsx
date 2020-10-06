import React, { useState } from 'react'
import EventList from '../../Components/Events/EventList/EventList/EventList'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import EventData from '../../API/API'
import './StyleEventDashboard.css'

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
                <h1>hello I am sidebar Left</h1>
            </div>
        </div>
    )
}
