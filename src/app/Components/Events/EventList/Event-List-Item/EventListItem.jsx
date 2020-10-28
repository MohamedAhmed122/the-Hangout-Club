
import React from 'react'

import { useHistory } from 'react-router-dom'
import { Button, Icon, Label } from 'semantic-ui-react'
import {format} from 'date-fns'



import './StyleEventListItem.css'
import { deleteEventFromFirestore } from '../../../../firebase/FirestoreServices'
import { handleColor } from '../../../../Common/utils/utils'

export default function EventListItem({event }) {
    const history = useHistory()
    return (
        <div className='wrapper'>
            <div className='background'
            style=
            {{backgroundImage: `linear-gradient( rgba(0, 01, 0, 0.6), rgba(0, 0, 0, 0.6) )
            ,url(/assets/categoryImages/${event.category}.jpg)`}}> 
           {event.isCanceled ? <Label
            ribbon='right'
            style={{top: '50px', paddingRight:40 ,}}
            color='red'
            content='This Event has been Canceled '
            />:
            <Label
            ribbon='right'
            style={{top: '50px', paddingRight:40}}
            color={handleColor(event.category)}
            content={`${event.category.toUpperCase()} EVENT `} />
            }
            </div>
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
                    <Button color="red" floated="right" content="Delete" onClick={()=> deleteEventFromFirestore(event)} />
                </div>
            </div>
        </div>
    )
}
