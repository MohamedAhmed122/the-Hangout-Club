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
import { useState } from 'react'
import Navbar from '../../layouts/Header/Header'


export default function EventDashboard() {
  
  const dispatch = useDispatch()
  const { events } = useSelector(state => state.event) 
  const { isOpen } = useSelector(state => state.calender)
  const { loading } = useSelector(state => state.async)
  const { currentUserProfile } = useSelector(state => state.profile)
  const [predicate, setPredicate] = useState(new Map([
      ["startDate", new Date()],
      ["filter", "all"],
    ])
  );
  
    const handelSetPredicate =( key, value)=>{
        setPredicate(new Map(predicate.set(key, value)));
    }


    UseFirestoreCollection({
        query: () => listenToEventsFromFirestore(predicate),
        data: event => dispatch(listenToEvents(event)),
        deps: [dispatch, predicate]
    })
    console.log(currentUserProfile);
    if (loading )
     return <PlaceholderLoading />
 
    return (
        <>
             <Navbar />
                <div className={isOpen ?'event-dashboard' : 'event-dashboard2'}>
                    
                    <div className='sidebar-left'>
                        <Sidebar loading={loading} predicate={predicate} setPredicate={handelSetPredicate}/>
                    </div>
                    <div className='main'>
                        <EventList  events={events}/>
                    </div>
                    <div className='sidebar-right'>
                        {
                            isOpen && <Calendar loading={loading} predicate={predicate} setPredicate={handelSetPredicate}/>
                        }
                    </div>
                </div>
        </>
    )
}
