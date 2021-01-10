import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Segment } from 'semantic-ui-react'
import EventForm from '../../Components/Events/EventForm/EventForm'
import './styleCreate.css'

export const CreateEventPage = () => {
    const { currentUser } = useSelector(state => state.auth)
    const history = useHistory()
    return (
        <>
        {
            currentUser.providerId === 'password'?
            <EventForm />
            :
            <div className='create_event_page'>
                <Segment 
                    style={{
                        width: '80%',
                        padding: 20,
                        marginTop: 100,
                        display:"flex",
                        flexDirection:"column",
                        alignItems: 'center',
                    }}
                >
                    <h3>To start Creating events You Must Talk To us First, To Confirm Some Data About you </h3>
                    <h3>Then we Will change Your Account from user to provider, and you will be able to host events</h3>
                    <h3>So if you Would like to Create Event, Contact the Admin In the Followning methods</h3>
                    <br />
                    <p>email : mohamed98@gmail.com</p>
                    <p>tel: +79131136637</p>
                    <br /> <br />
                    <Button onClick={()=> history.goBack()} content='Go Back' size='large' floated color='blue' ></Button>
                </Segment>
            </div>
        }
        </>
    )
}
