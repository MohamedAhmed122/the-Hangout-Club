import React from 'react'

import Calendar from '../../Components/Calender/Calender'

import './StyleEventDashboard.css'

import EventList from '../../Components/Events/EventList/EventList/EventList'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import { useSelector } from 'react-redux'


export default function EventDashboard() {
  
  const { events } = useSelector(state => state.event) 

    return (
        <div className='event-dashboard'>
            <div className='sidebar-left'><Sidebar/></div>
            <div className='main'>
                <EventList  events={events}/>
            </div>
            <div className='sidebar-right'><Calendar /></div>
        </div>
    )
}
