import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import EventChat from '../../Components/EventDetailed/EventChat'
import EventHeader from '../../Components/EventDetailed/EventHeader'
import EventInfo from '../../Components/EventDetailed/EventInfo'
import EventSidebar from '../../Components/EventDetailed/EventSidebar'
import './StyleEventDetailedPage.css'

export default function EventDetailedPage({match}) {
    const {eventId} = useParams()
    console.log(eventId);
    const events = useSelector(state => state.event.events.find(event =>
            event.id === match.params.id
        ))
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
