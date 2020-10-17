import cuid from 'cuid'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import './StyleEventForm.css'
export default function EventForm({handleCreateEvent, selectedEvent ,handleUpdateEvent,setFormOpen}) {

    const initialValues = selectedEvent??  {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
      };
    const history = useHistory()
    const [values, setValues] = useState(initialValues)

    const handleSubmit =()=>{
        selectedEvent
      ? handleUpdateEvent({ ...selectedEvent, ...values })
            :handleCreateEvent({
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
        })
        setFormOpen(false);
        history.push('/')
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
