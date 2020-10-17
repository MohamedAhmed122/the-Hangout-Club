import React from 'react'

import Calendar from '../../Components/Calender/Calender'

import './StyleEventDashboard.css'

import EventList from '../../Components/Events/EventList/EventList/EventList'
import Sidebar from '../../layouts/Sidebar/Sidebar'


export default function EventDashboard({events,setEvent,handleSelected }) {
  
    const handleDelete =(eventId)=>{
        setEvent(events.filter(event =>event.id !== eventId))
    }

    return (
        <div className='event-dashboard'>
            <div className='sidebar-left'>
              <Sidebar/>
            </div>
            <div className='main'>
                <EventList 
                handleDelete={handleDelete} 
                events={events}
                handleSelected={handleSelected}
                />
            </div>
            <div className='sidebar-right'>
                <Calendar />
            </div>
        </div>
    )
}
