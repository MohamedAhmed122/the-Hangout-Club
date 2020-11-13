import { Formik,Form } from 'formik'
import { addNewComment } from '../../firebase/firebaseService'
import FormArea from '../Form/FormArea'
import React from 'react'
import { Button } from 'semantic-ui-react'
import { toast } from 'react-toastify'

export default function CommentForm({eventId}) {
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
            {({isSubmitting})=>(
                <Form className='ui form'>
                    <FormArea name='comment' placeholder='enter your comment' rows={2} />
                    <Button
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
