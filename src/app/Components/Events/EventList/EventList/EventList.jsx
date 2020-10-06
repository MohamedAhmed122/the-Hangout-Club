import React from 'react'
import EventListItem from '../Event-List-Item/EventListItem'

export default function EventList({events}) {
    return (
        <div>
            {
                events.map(event =>(
                    <EventListItem key={event.id} event={event}/>
                ))
            }
        </div>
    )
}
