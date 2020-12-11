import React from 'react'
import Navbar from '../../layouts/Header/Header'
import { Form, Formik } from 'formik'
import {  Button, Header, Segment } from 'semantic-ui-react'
import FormArea from '../../Components/Form/FormArea'
import FormInput from '../../Components/Form/FormInput'

import * as Yup from  'yup'
import { toast } from 'react-toastify'


export default function ReportPage() {
    return (
        <> 
        <Navbar />
        <div style={{
            display: 'flex',
            alignItems:'center',
            justifyContent:'center',
            height: '100vh',
            backgroundColor: '#eaeaea'
        }} >
            <Segment clearing style={{width: '80%'}}>
                <Header 
                    style={{marginTop: 20}}
                    content='Tell us what happened?' 
                    color='teal' 
                    size='large' 
                    />
                    <Formik
                        initialValues={{
                            title:   '',
                            description: '', 
                            displayName: '',
                        }}
                        validationSchema={Yup.object({
                            displayName: Yup.string().required(),
                            title: Yup.string().required(),
                            description: Yup.string().required()
                        })}
                        onSubmit={(values ,{resetForm})=>{
                            console.log(values);
                            toast.success('Success, We will get back to you very soon')
                            resetForm()
                        }}
                    >
                        {({isSubmitting, dirty, isValid})=>(
                            <Form className='ui form'>
                                <FormInput placeholder='Name' name='displayName'/>
                                <FormInput placeholder='Title'  name='title'/>
                                <FormArea placeholder='Tell us what happened?'  name='description' rows={3}/>
                                <Button 
                                    content='Send Report'
                                    size='large'
                                    // loading={isSubmitting}
                                    disabled={!isValid || isSubmitting || !dirty}
                                    positive
                                    floated='right'
                                />
                            </Form> 
                        )}

                    </Formik>
            </Segment>
        </div>
        </>
    )
}
