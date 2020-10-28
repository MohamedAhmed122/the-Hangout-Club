import React from 'react'
import { Button, Label, } from 'semantic-ui-react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormInput from '../Form/FormInput'
import {updatePassword } from '../../firebase/firebaseService'
import { toast } from 'react-toastify'
export default function SettingEmail() {
    return (
        <div>
      
        
        <div>
            <p>Please, Use this Form To Change Your Password</p>
            <Formik
                initialValues={{password: '', coPassword: ''}}
                validationSchema={Yup.object({
                    password: Yup.string().required('Password is required'),
                    coPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                })}        
                onSubmit={async(values,{setSubmitting, setErrors,resetForm})=>{
                    try {
                        await updatePassword(values.password)
                        setSubmitting(false)
                        toast.success('Success, You just Updated Your Password')
                        resetForm()
                    } catch (error) {
                        setErrors({auth: error.message})
                        setSubmitting(false)
                        toast.error('Oops, something Went Wrong')
                    }
                }}
            >
                {({isSubmitting , dirty, isValid, errors })=>(
                    <Form className='ui form'>
                        <FormInput 
                        name='password'
                        placeholder='New Password' 
                        type='password'
                        />
                        <FormInput 
                        name='coPassword'
                        type='password'
                        placeholder='Confirm Password' />
                        {errors.auth&& <Label style={{marginTop: '10px'}} content={errors.auth} color='red' basic />}
                        <Button 
                        disabled={!isValid || !dirty || isSubmitting} 
                        type='submit' 
                        loading={isSubmitting}
                        positive
                        content='Update Password' 
                        size='large'
                        style={{marginBottom:15, display: 'block'}}
                        />
                    </Form>
                )}
            </Formik>
        </div>
        </div>
    )
}
