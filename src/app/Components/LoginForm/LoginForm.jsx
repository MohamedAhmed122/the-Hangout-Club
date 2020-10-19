import { Form, Formik } from 'formik'
import React from 'react'
import { Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import ModalWrapper from '../../Common/Modal/ModalWrapper'
import FromInput from '../../Components/Form/FormInput'

export default function LoginForm() {
    return (
        <ModalWrapper size='mini' header='Login To The Hangout Club'>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object({
                    email: Yup.string().required().email(),
                    password: Yup.string().required()
                })}
                onSubmit={(values)=>console.log(values)}
            >
                {({isSubmitting , dirty, isValid})=>(
                    <Form className='ui form'>
                        <FromInput name='email' placeholder='Email' />
                        <FromInput name='password' type='password' placeholder='Password' />
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
