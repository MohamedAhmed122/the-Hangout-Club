import React, {useEffect} from 'react'

import Calendar from '../../Components/Calender/Calender'

import './StyleEventDashboard.css'

import EventList from '../../Components/Events/EventList/EventList/EventList'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import PlaceholderLoading from '../../Common/Placeholder/Placeholder'
import { useDispatch, useSelector } from 'react-redux'
import { dataFromSnapshot, getEventsFromFirestore } from '../../firebase/FirestoreServices'
import { listenToEvents } from '../../redux/event/eventAction'


export default function EventDashboard() {
  
  const dispatch = useDispatch()
  const { events } = useSelector(state => state.event) 
  const { isOpen } = useSelector(state => state.calender)
  const { loading } = useSelector(state => state.async)

  useEffect(()=>{
      // this happening while the app is loading
      const unsubscribe = getEventsFromFirestore({
          next: snapshot => dispatch(listenToEvents(snapshot.docs
            .map(docSnapshot => dataFromSnapshot(docSnapshot)))),
          error: error => console.log(error)
      })
      // this happening after the app is loading
      return unsubscribe;
  },[dispatch])  

  if (loading) return <PlaceholderLoading />
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
