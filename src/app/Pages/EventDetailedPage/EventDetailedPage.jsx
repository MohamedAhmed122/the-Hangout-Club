import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EventChat from '../../Components/EventDetailed/EventChat'
import EventHeader from '../../Components/EventDetailed/EventHeader'
import EventInfo from '../../Components/EventDetailed/EventInfo'
import EventSidebar from '../../Components/EventDetailed/EventSidebar'
import Loading from '../../Common/Loading/Loading'
import { listenToEventFromFirestore } from '../../firebase/FirestoreServices'
import UseFirestoreDoc from '../../Hooks/useFirestoreDoc'
import { listenToEvents } from '../../redux/event/eventAction'
import './StyleEventDetailedPage.css'
import Error from '../../Common/404/Error'
import Navbar from '../../layouts/Header/Header'

export default function EventDetailedPage({match}) {

    const { loading ,error } = useSelector(state => state.async)
    const { currentUser, isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
   
    const events = useSelector(state => state.event.events.find(event =>
        event.id === match.params.id
    ))
 
    UseFirestoreDoc({
        query: ()=>listenToEventFromFirestore(match.params.id),
        data: event => dispatch(listenToEvents([event])),
        deps:[match.params.id, dispatch]
    })
    
    const isHost = events?.hostUid === currentUser?.uid;
    const isGoing = events?.attendees.some(user => user.id === currentUser?.uid)

    if (loading || (!events && !error)) return <Loading >Loading Event .....</Loading>
    if (error) return <Error />
    return (
        <>
            <Navbar />
            <div className='event_detail_page'>
                <div className='main'>
                    <EventHeader 
                    isAuthenticated={isAuthenticated}
                    currentUser={currentUser} 
                    events={events} 
                    isHost={isHost} 
                    isGoing={isGoing}
                    />
                    <EventInfo events={events} />
                    <EventChat eventId={events.id}/>
                </div>
                <div  style={{flex: '0.1'}}></div>
                <div className='sidebar'>
                    <EventSidebar event={events} />
                </div>
            </div>
        </>
    )
}
