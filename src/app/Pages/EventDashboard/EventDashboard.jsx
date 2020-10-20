import React from 'react'

import Calendar from '../../Components/Calender/Calender'

import './StyleEventDashboard.css'

import EventList from '../../Components/Events/EventList/EventList/EventList'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import PlaceholderLoading from '../../Common/Placeholder/Placeholder'
import { useSelector } from 'react-redux'


export default function EventDashboard() {
  
  const { events } = useSelector(state => state.event) 
  const { isOpen } = useSelector(state => state.calender)
  const { loading } = useSelector(state => state.async)

  if (loading) return <PlaceholderLoading />
    return (
        <div className='event-dashboard'>
            <div className='sidebar-left'><Sidebar/></div>
            <div className='main'>
                <EventList  events={events}/>
            </div>
            <div className='sidebar-right'>
                {
                    isOpen && <Calendar />
                }
            </div>
        </div>
    )
}
