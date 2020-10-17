import cuid from 'cuid'
import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { Button, FormSelect, Header, Segment } from 'semantic-ui-react'
import './StyleEventForm.css'

import { createEvent , updateEvent } from '../../../redux/event/eventAction'
import { categoryData } from '../../../API/categoryOption'
import * as Yup from 'yup'
import { Formik ,Form } from 'formik';
import FormInput from '../../Form/FormInput'
import FormArea from '../../Form/FormArea';
import FormDate from '../../Form/FormDate';

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
 

    const validationSchema = Yup.object({
        title: Yup.string().required("You must provide title"),
        category: Yup.string().required("You must provide category"),
        city: Yup.string().required("You must provide city"),
        description: Yup.string().min(15,"You must provide description, At Least 15 Characters "),
        venue: Yup.string().required("You must provide venue"),
        date: Yup.string().required("Date is Required"),
      });

    return (
        <div className='event-form'>
            <div className='form-main'>
                <Segment clearing>
                    <Formik
                          onSubmit={(values) => {
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
                        }
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    >
                    {({ isSubmitting, dirty, isValid }) => (     
                        <Form className='ui form'>
                            <Header content="Event Details information" color="teal" sub />
                            <FormInput name="title" placeholder="Event Title" />
                            <FormSelect options={categoryData} name="category" placeholder="Category" />
                            <FormArea name="description" placeholder="Tell us About the Event" rows={4} />
                            <Header content="Event Location information" color="teal" sub />
                            <FormInput name="city" placeholder="Event City" />
                            <FormInput name="venue" placeholder="Event Venue" />
                            <FormDate
                            name="date"
                            placeholderText="Event Date"
                            timeFormat="HH:mm"
                            showTimeSelect
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:m a"
                            />
                            <Button
                            type="submit"
                            floated="right"
                            loading={isSubmitting}
                            disabled={!isValid || isSubmitting || !dirty}
                            positive
                            content="Submit"
                            />
                            <Button
                            as={Link}
                            disabled={isSubmitting}
                            to="/event"
                            type="submit"
                            floated="right"
                            content="Cancel"
                            />
                        </Form>
                    )}
                   
                    </Formik>
                </Segment>
            </div>
        </div>
    )
}
