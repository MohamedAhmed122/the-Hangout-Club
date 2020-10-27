import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import SocialLogins from '../SocialLogins/SocialLogins'
import { Button, Divider, Label } from 'semantic-ui-react';
import * as Yup from 'yup';
import ModalWrapper from '../../Common/Modal/ModalWrapper'
import FromInput from '../../Components/Form/FormInput'
import { RegisterInFirebase } from '../../firebase/firebaseService';
import { closeModal } from '../../redux/Modal/ModalAction';

export default function RegisterForm() {
    const dispatch = useDispatch()
    return (
        <ModalWrapper size='mini' header='Register To The Hangout Club'>
            <Formik
                initialValues={{email: '', password: '', displayName:'', }}
                validationSchema={Yup.object({
                    email: Yup.string().required().email(),
                    password: Yup.string().required(),
                    displayName: Yup.string().required(),
                    
                })}
                // to turn the loading off you  need to add setSubmitting 
                onSubmit={async(values, {setSubmitting, setErrors})=>{
                    try {
                        await RegisterInFirebase(values);
                        setSubmitting(false)
                        dispatch(closeModal())
                    } catch (error) {
                        setErrors({auth: error.message})
                        setSubmitting(false)
                    }
                    
                }}
            >
                {({isSubmitting , dirty, isValid, errors})=>(
                    <Form className='ui form'>
                        <FromInput name='displayName' placeholder='Name' />
                        <FromInput name='email' placeholder='Email' />
                        <FromInput name='password' type='password' placeholder='Password' />
                        {errors.auth&& <Label style={{marginTop: '10px'}} content={errors.auth} color='red' basic />}
                        <Button
                          type="submit"
                          fluid
                          size='large'
                          color='teal'
                          loading={isSubmitting}
                          disabled={!isValid || isSubmitting || !dirty}
                          content="Register"
                        />
                    </Form>
                )}

            </Formik>
            <Divider horizontal>Or</Divider>
            <SocialLogins />
        </ModalWrapper>
    )
}
