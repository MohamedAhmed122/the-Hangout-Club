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

export default function EventDetailedPage({match}) {

    const { loading ,error } = useSelector(state => state.async)
    const dispatch = useDispatch()
   
    const events = useSelector(state => state.event.events.find(event =>
        event.id === match.params.id
    ))
 
    UseFirestoreDoc({
        query: ()=>listenToEventFromFirestore(match.params.id),
        data: event => dispatch(listenToEvents([event])),
        deps:[match.params.id, dispatch]
    })
    
    if (loading || (!events && !error)) return <Loading >Loading Event .....</Loading>
    if (error) return <Error />
    return (
        <div className='event_detail_page'>
            <div style={{flex: '0.15'}}/>
            <div className='main'>
                <EventHeader events={events}/>
                <EventInfo events={events} />
                <EventChat />
            </div>
            <div  style={{flex: '0.05'}}></div>
            <div className='sidebar'>
                <EventSidebar />
            </div>
        </div>
    )
}
