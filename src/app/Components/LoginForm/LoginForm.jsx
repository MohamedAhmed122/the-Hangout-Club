import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Button, Label } from 'semantic-ui-react';
import * as Yup from 'yup';
import ModalWrapper from '../../Common/Modal/ModalWrapper'
import FromInput from '../../Components/Form/FormInput'
import { signInWithEmail } from '../../firebase/firebaseService';
import { closeModal } from '../../redux/Modal/ModalAction';

export default function LoginForm() {
    const dispatch = useDispatch()
    return (
        <ModalWrapper size='mini' header='Login To The Hangout Club'>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object({
                    email: Yup.string().required().email(),
                    password: Yup.string().required()
                })}
                // to turn the loading off you  need to add setSubmitting 
                onSubmit={async(values, {setSubmitting, setErrors})=>{ 
                    try {
                        await signInWithEmail(values);
                        setSubmitting(false)
                        dispatch(closeModal())
                    } catch (error) {
                        setErrors({auth: error.message})
                        setSubmitting(false)
                        toast.error('Oops, something Went Wrong')
                    }
                    
                }}
            >
                {({isSubmitting , dirty, isValid,errors })=>(
                    <Form className='ui form'>
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
                          content="Login"
                        />
                    </Form>
                )}

            </Formik>
        </ModalWrapper>
    )
}
