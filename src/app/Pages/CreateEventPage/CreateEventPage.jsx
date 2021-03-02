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
       
        <EventForm />
        </>
    )
}
