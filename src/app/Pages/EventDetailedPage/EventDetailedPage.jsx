import React from 'react'
import EventChat from '../../Components/EventDetailed/EventChat'
import EventHeader from '../../Components/EventDetailed/EventHeader'
import EventInfo from '../../Components/EventDetailed/EventInfo'
import EventSidebar from '../../Components/EventDetailed/EventSidebar'
import './StyleEventDetailedPage.css'

export default function EventDetailedPage() {
    return (
        <div className='event_detail_page'>
            <div style={{flex: '0.1'}}/>
            <div className='main'>
                <EventHeader />
                <EventInfo />
        
            </div>
            <div className='sidebar'>
                <EventSidebar />
            </div>
        </div>
    )
}
