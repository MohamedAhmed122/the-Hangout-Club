import React from 'react'
import { Button, Header } from 'semantic-ui-react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormInput from '../Form/FormPlaces'
export default function SettingEmail() {
    return (
        <div>
        <Header 
        content='Account Settings' 
        color='teal' 
        size='large' 
        />
        
        <div>
            <p>Please, Use this Form To Change Your Password</p>
            <Formik
                initialValues={{newPassword1: '', newPassword2: ''}}
                validationSchema={Yup.object({
                    newPassword1: Yup.string().required('Password is required'),
                    newPassword2: Yup.string().oneOf(
                    [Yup.ref('newPassword1'), null],
                    'Passwords do not match'
                    ),
                })}        
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                {({isSubmitting, dirty,isValid })=>(
                    <Form className='ui form'>
                        <FormInput name='newPassword1' placeholder='New Password' />
                        <FormInput name='newPassword1' placeholder='Confirm Password' />
                        <Button 
                        content='Update Password'
                        positive
                        size='large'
                        disabled={!isValid || !dirty || isSubmitting} 
                        type='submit' 
                        loading={isSubmitting}
                        style={{marginBottom:15, display: 'block'}}
                        />
                    </Form>
                )}
            </Formik>
        </div>
        </div>
    )
}
