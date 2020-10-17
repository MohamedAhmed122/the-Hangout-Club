import React from 'react'
import EventListItem from '../Event-List-Item/EventListItem'

export default function EventList({events, handleDelete,handleSelected}) {
    return (
        <div>
            {
                events.map(event =>(
                    <EventListItem 
                    handleDelete={handleDelete}
                     key={event.id} 
                     event={event}
                     handleSelected={handleSelected}
                     />
                ))
            }
        </div>
    )
}
