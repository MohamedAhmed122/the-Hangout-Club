import cuid from 'cuid'
import React from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { Button,Header, Segment } from 'semantic-ui-react'
import './StyleEventForm.css'

import { createEvent , updateEvent } from '../../../redux/event/eventAction'
import { categoryData } from '../../../API/categoryOption'
import * as Yup from 'yup'
import { Formik ,Form } from 'formik';
import FormInput from '../../Form/FormInput'
import FormArea from '../../Form/FormArea';
import FormDate from '../../Form/FormDate';
import FormSelect from '../../Form/FormSelect';

const EventForm =({match}) => {
    

    const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
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
        description: Yup.string().required("You must provide description, At Least 15 Characters "),
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
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "Bob",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              );
        // console.log(values)
          history.push("/event");
        }}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form" autoComplete="off">
            <Header content="Event Details" color="teal" sub />
            <FormInput name="title" placeholder="Event Title" />
            <FormSelect
              name="category"
              placeholder="Category"
              options={categoryData}
            />
            <FormArea
              name="description"
              placeholder="Event Description"
              rows={3}
            />
            <Header content="Event Location" color="teal" sub />
            <FormInput name="city" placeholder="City" />
            <FormInput name="venue" placeholder="Venue" />
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
export default withRouter(EventForm)