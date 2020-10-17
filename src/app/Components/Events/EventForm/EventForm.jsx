import cuid from 'cuid'
import React, { useState, } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createEvent , updateEvent } from '../../../redux/event/eventAction'

import { Button, Form, Header, Segment } from 'semantic-ui-react'
import './StyleEventForm.css'


export default function EventForm() {
    
    const {eventId} = useParams()
    const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === eventId)
  );

    const initialValues = selectedEvent??  {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
      };
    const dispatch = useDispatch()
    const history = useHistory()
    const [values, setValues] = useState(initialValues)

    const handleSubmit =()=>{
        selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            :dispatch(createEvent({
            ...values,
            id : cuid(),
            hostedBy: 'Mohamed',
            hostPhotoURL: 'https://randomuser.me/api/portraits/men/67.jpg',
            attendees: [ 
              {
                  id: 'k',
                  name: 'Mohamed',
                  photoURL: 'https://randomuser.me/api/portraits/men/67.jpg'
              },
            ]
        }))
        history.push('/event')
    }

    const  handleInputChange =(e)=> {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      }
    return (
        <div className='event-form'>
            <div className='form-main'>
                <Segment clearing>
                    <Header content={'Create new event'} />
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                        <input
                            type='text'
                            placeholder='Event title'
                            name='title'
                            value={values.title}
                            onChange={(e) => handleInputChange(e)}
                        />
                        </Form.Field>
                        <Form.Field>
                        <input
                            type='text'
                            placeholder='Category'
                            name='category'
                            value={values.category}
                            onChange={(e) => handleInputChange(e)}
                        />
                        </Form.Field>
                        <Form.Field>
                        <input
                            type='text'
                            placeholder='Description'
                            name='description'
                            value={values.description}
                            onChange={(e) => handleInputChange(e)}
                        />
                        </Form.Field>
                        <Form.Field>
                        <input
                            type='text'
                            placeholder='City'
                            name='city'
                            value={values.city}
                            onChange={(e) => handleInputChange(e)}
                        />
                        </Form.Field>
                        <Form.Field>
                        <input
                            type='text'
                            placeholder='Venue'
                            name='venue'
                            value={values.venue}
                            onChange={(e) => handleInputChange(e)}
                        />
                        </Form.Field>
                        <Form.Field>
                        <input
                            type='date'
                            placeholder='Date'
                            name='date'
                            value={values.date}
                            onChange={(e) => handleInputChange(e)}
                        />
                        </Form.Field>
                        <Button type='submit' floated='right' positive content='Submit' />
                        {/* <Button
                        
                        type='submit'
                        floated='right'
                        content='Cancel'
                        /> */}
                    </Form>
                    </Segment>
            </div>
        </div>
    )
}
