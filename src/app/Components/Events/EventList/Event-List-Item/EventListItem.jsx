
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import './StyleEventListItem.css'

export default function EventListItem({event , handleDelete, handleSelected}) {
    const history = useHistory()
    return (
        <div className='wrapper'>
            <div className='background'
            style={{backgroundImage: 'url(https://www.ltteps.org/wp-content/uploads/2019/06/travel-editor-favorite-products.jpg)'}}> </div>
            <div style={{display: 'flex'}}>
                <div className='user-image'>
                    <img className='img-profile' src={event.hostPhotoURL} alt='' />
                </div>
                <div className='user_detail'>
                    <h6><span>hosted by </span>{event.hostedBy}</h6>
                    <p style={{marginTop:10}}>{event.date}</p>
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
                    <Button color="red" floated="right" content="Delete" onClick={()=>handleDelete(event.id)} />
                </div>
            </div>
        </div>
    )
}
