import { format } from 'date-fns'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button, Segment } from 'semantic-ui-react'
import './Style.css'

export default function EventHeader({events, isGoing, isHost}) {
    return (
        <Fragment>
            <div className='event_header'
            style={{ backgroundImage: ` linear-gradient( rgba(0, 01, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(/assets/categoryImages/${events.category}.jpg)`,}}
            >
                <div className='container'>
                    <p className='title const'>{events.title}</p>
                    <p className='date const'>{format(events.date, 'MMMM d, yyyy h:mm a')}</p>
                    <p className='host const'>Hosted by <span> {events.hostedBy}</span></p>
                </div>
            </div>
            <Segment clearing attached="bottom" style={{marginTop: 10}}>

                {!isHost && <Fragment>
                    { isGoing? <Button>Cancel My Place</Button>:
                    <Button color="teal">JOIN THIS EVENT</Button>}
                </Fragment>}

               {isHost && <Button color="orange" floated="right" as={Link} to={`/manage/${events.id}`}>
                Manage Event
                </Button>}
            </Segment>

        </Fragment>
    )
}
