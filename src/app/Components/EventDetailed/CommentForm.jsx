import { Formik,Form, Field } from 'formik'
import { addNewComment } from '../../firebase/firebaseService'
import React from 'react'
import { Button } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import './Style.css'

export default function CommentForm({eventId}) {
    function validateUsername(value) {
        let error;
        if (value === 'shit' ||value === "fuck") {
          error = "Please, don't write bad words !";
        }
        return error;
      }
     
    return (
        <Formik
            initialValues={{comment: ''}}
            onSubmit={async(values, {setSubmitting, resetForm})=>{ 
                try {
                    await addNewComment(eventId,values.comment)
                    resetForm()
                    setSubmitting(false)
                } catch (error) {
                   console.log(error.message)
                    setSubmitting(false)
                    toast.error('Oops, Something Went Wrong')
                }
            }}
        >
            {({isSubmitting,errors, touched})=>(
                <Form className='ui form'>
                    <Field  name='comment' placeholder='enter your comment' row={3} validate={validateUsername} />
                    {errors.comment && touched.comment && <div className='errorHandle'>{errors.comment}</div>}
                    <Button
                    style={{marginTop: 20}}
                    content="Add Reply"
                    labelPosition="left"
                    icon="edit"
                    type='submit'
                    loading={isSubmitting}
                    primary
                    />
                </Form>
            )}
        </Formik>
    )
}
