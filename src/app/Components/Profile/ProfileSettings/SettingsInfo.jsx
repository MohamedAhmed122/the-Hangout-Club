import { Form, Formik } from 'formik'
import React from 'react'
import {  Button, Header, Segment } from 'semantic-ui-react'
import FormArea from '../../Form/FormArea'
import FormInput from '../../Form/FormInput'
import FormPlaces from '../../Form/FormPlaces'

export default function SettingsInfo() {
    return (
        <div>
            <Segment style={{marginTop: '4rem', marginBottom: '4rem'}}>
                <Header 
                    style={{marginTop: 20}}
                    content='Tell us more about you' 
                    color='green' 
                    size='large' 
                    />
                    <Formik
                        initialValues={{bio: '',originallyFrom: '', live:'',bornAt: '',}}
                        onSubmit={(values)=>{
                            console.log(values)
                        }}
                    >
                        {({isSubmitting, dirty, isValid})=>(
                            <Form className='ui form'>
                                <FormPlaces placeholder='you are From....' name='originallyFrom' />
                                <FormInput placeholder='you were born at....' type='date' name='bornAt'/>
                                <FormPlaces placeholder='Where do you Live?' name='live' />
                                <FormArea placeholder='Your Bio'  name='bio' rows={3}/>
                                <Button 
                                    content='Update Profile'
                                    size='large'
                                    loading={isSubmitting}
                                    disabled={!isValid || isSubmitting || !dirty}
                                    positive
                                    basic
                                />
                            </Form>
                        )}

                    </Formik>
            </Segment>
        </div>
    )
}
