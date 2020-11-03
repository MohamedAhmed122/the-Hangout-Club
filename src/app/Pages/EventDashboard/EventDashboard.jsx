import React from 'react'

import Calendar from '../../Components/Calender/Calender'

import './StyleEventDashboard.css'

import EventList from '../../Components/Events/EventList/EventList/EventList'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import PlaceholderLoading from '../../Common/Placeholder/Placeholder'
import { useDispatch, useSelector } from 'react-redux'
import {  listenToEventsFromFirestore } from '../../firebase/FirestoreServices'
import { listenToEvents } from '../../redux/event/eventAction'
import UseFirestoreCollection from '../../Hooks/UseFirestoreCollection'


export default function EventDashboard() {
  
  const dispatch = useDispatch()
  const { events } = useSelector(state => state.event) 
  const { isOpen } = useSelector(state => state.calender)
  const { loading } = useSelector(state => state.async)
  const { currentUserProfile } = useSelector(state => state.profile)
  

    UseFirestoreCollection({
        query: listenToEventsFromFirestore,
        data: event => dispatch(listenToEvents(event)),
        deps: [dispatch]
    })
    console.log(currentUserProfile);
    if (loading )
     return <PlaceholderLoading />
 
    return (
        <div className={isOpen ?'event-dashboard' : 'event-dashboard2'}>
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
