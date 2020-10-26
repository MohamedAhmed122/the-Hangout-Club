/* global google */
import React from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button,Header, Segment } from 'semantic-ui-react'
import './StyleEventForm.css'
import {  listenToEvents } from '../../../redux/event/eventAction'
import { categoryData } from '../../../API/categoryOption'
import * as Yup from 'yup'
import { Formik ,Form } from 'formik';
import FormInput from '../../Form/FormInput'
import FormArea from '../../Form/FormArea';
import FormDate from '../../Form/FormDate';
import FormSelect from '../../Form/FormSelect';
import FormPlace from '../../Form/FormPlaces';
import Error from '../../../Common/404/Error';
import Loading from '../../../Common/Loading/Loading'
import {addEventToFirestore, cancelEvent, listenToEventFromFirestore, updateEventToFirestore} from '../../../firebase/FirestoreServices'
import UseFirestoreDoc from '../../../Hooks/useFirestoreDoc'
import { toast } from 'react-toastify';

const EventForm =({match}) => {
     const { loading ,error } = useSelector(state => state.async)
     const dispatch = useDispatch() 
     const history = useHistory()
   
    const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: {
      address: "",
      latLng: null,
    },
    venue: {
      address: "",
      latLng: null,
    },
    date: "",
  };
   
    const handleCancel =()=>{
      if (selectedEvent){
        cancelEvent(selectedEvent)
        history.push('/event')
      } else return;
     
    }

    const validationSchema = Yup.object({
      title: Yup.string().required("You must provide a title"),
      category: Yup.string().required("You must provide a category"),
      description: Yup.string().required(),
      city: Yup.object().shape({
        address: Yup.string().required("City is required"),
      }),
      venue: Yup.object().shape({
        address: Yup.string().required("Venue is required"),
      }),
      date: Yup.string().required(),
      });


      UseFirestoreDoc({
        shouldExecute: !!match.params.id,
        query: ()=>listenToEventFromFirestore(match.params.id),
        data: event => dispatch(listenToEvents([event])),
        deps:[match.params.id, dispatch],
        
    })
    if (loading) return <Loading >Loading Event .....</Loading>
    if (error) return <Error/>
    return (
        <div className='event-form'>
            <div className='form-main'>
              <Segment clearing>
                <Formik
                  onSubmit={async(values , {setSubmitting}) => {
                    try {
                      selectedEvent? 
                      await updateEventToFirestore(values):
                      await addEventToFirestore(values)
                      setSubmitting(false)
                      toast.success('Success, You have Create new Event')
                    } catch (error) {
                      toast.error(error.message)
                      setSubmitting(false)
                    }
                    
                  // console.log(values)
                    history.push("/event");
                  }}
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                >
                  {({ isSubmitting, dirty, isValid, values }) => (
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
                      <FormPlace name="city" placeholder="City" />
                      <FormPlace 
                        autoComplete="of"
                        name="venue"
                        disabled={!values.city.latLng}
                        placeholder="Venue"
                        options={{
                          location: new google.maps.LatLng(values.city.latLng),
                          radius: 1000,
                          types: ["establishment"],
                        }}
                      />
                      <FormDate
                        name="date"
                        placeholderText="Event Date"
                        timeFormat="HH:mm"
                        showTimeSelect
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:m a"
                      />
                      <Button
                        type="button"
                     
                        floated="left"
                        color={selectedEvent?.isCanceled ? 'green': 'red'}
                        onClick={() => handleCancel() }
                        content={selectedEvent?.isCanceled ? 'Reactivate Event': 'Cancel Event'}
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