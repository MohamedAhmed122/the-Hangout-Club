
import React from 'react'
import { useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import {format} from 'date-fns'

import { deleteEvent } from '../../../../redux/event/eventAction'

import './StyleEventListItem.css'

export default function EventListItem({event }) {
    const history = useHistory()
    const dispatch = useDispatch()
    return (
        <div className='wrapper'>
            <div className='background'
            style={{backgroundImage: `url(/assets/categoryImages/${event.category}.jpg)`}}> </div>
            <div style={{display: 'flex'}}>
                <div className='user-image'>
                    <img className='img-profile' src={event.hostPhotoURL} alt='' />
                </div>
                <div className='user_detail'>
                    <h6><span>hosted by </span>{event.hostedBy}</h6>
                    <p style={{marginTop:10}}><Icon name="clock" /> {format(event.date, 'MMMM d, yyyy h:mm a')}</p>
                    <p className='title'>{event.title}</p>
                </div>
            </div>
            <div className='attendees'>
                   <img alt={event.hostPhotoURL} src={event.hostPhotoURL} />
            </div>
            <div className='description'>
                <div className='description-text'>
                    <p>{event.description}</p>
                </div>
                <div className='btn-group'>
                    <Button 
                        color="teal" 
                        floated="right"
                        content="view" 
                        onClick={() => history.push(`/event/${event.id}`)}
                     />
                    <Button color="red" floated="right" content="Delete" onClick={()=> dispatch(deleteEvent(event.id))} />
                </div>
            </div>
        </div>
    )
}
