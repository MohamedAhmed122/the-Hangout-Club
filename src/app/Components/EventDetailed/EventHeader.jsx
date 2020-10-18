import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button, Segment } from 'semantic-ui-react'

export default function EventHeader() {
    return (
        <Fragment>
            <div className='event_header'
            style={{ backgroundImage: ` linear-gradient( rgba(0, 01, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(/assets/categoryImages/culture.jpg)`,}}
            >
                <div className='container'>
                    <p className='title const'>Title</p>
                    <p className='date const'>date</p>
                    <p className='host const'>Hosted by <span> Mohamed Youssef</span></p>
                </div>
            </div>
            <Segment attached="bottom" style={{marginTop: 10}}>
                <Button>Cancel My Place</Button>
                <Button color="teal">JOIN THIS EVENT</Button>

                <Button color="orange" floated="right" as={Link} >
                Manage Event
                </Button>
            </Segment>

        </Fragment>
    )
}
