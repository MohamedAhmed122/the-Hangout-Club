import React from 'react'

import { Link } from 'react-router-dom'
import { Button, Segment } from 'semantic-ui-react'
import Navbar from '../../layouts/Header/Header'

export default function ErrorComponent() {

    return (
        <>
            <Navbar />
            <Segment placeholder style={{marginTop:50}}>
                <img src='/assets/error.svg' alt='error' />
                <Button 
                style={{marginTop: 20}}
                size='big' 
                fluid
                color='teal'
                as={Link} 
                to='/event' 
                content='Go Back' />
            </Segment>
        </>
    )
}
