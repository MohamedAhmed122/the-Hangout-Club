import { Form, Formik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import {  Button, Header, Segment } from 'semantic-ui-react'
import FormArea from '../../Form/FormArea'
import FormInput from '../../Form/FormInput'
import FormPlaces from '../../Form/FormPlaces'
import * as Yup from  'yup'
import { toast } from 'react-toastify'
import { updateProfile } from '../../../firebase/FirestoreServices'
import FormSelect  from '../../Form/FormSelect'
import { categoryData } from '../../../API/categoryOption'

export default function SettingsInfo() {
    const { currentUserProfile } = useSelector(state => state.profile)
    return (
        <div>
            <Segment clearing style={{marginTop: '4rem', marginBottom: '4rem'}}>
                <Header 
                    style={{marginTop: 20}}
                    content='Tell us more about you' 
                    color='green' 
                    size='large' 
                    />
                    <Formik
                        initialValues={{
                            bio: currentUserProfile.bio || '',
                            originallyFrom: currentUserProfile.from || '', 
                            liveAt:  currentUserProfile.liveAt || '',
                            bornAt: currentUserProfile.bornAt || '',
                            displayName: currentUserProfile.displayName || '',
                            interests:currentUserProfile.interests || null,
                        }}
                        validationSchema={Yup.object({
                            displayName: Yup.string().required()
                        })}
                        onSubmit={async(values, setSubmitting)=>{
                            try {
                                await updateProfile(values)
                                toast.success('success, You have updated your profile')
                                setSubmitting(false)
                            } catch (error) {
                                setSubmitting(false)
                                toast.error(`Error, ${error.message}`)
                            }
                        }}
                    >
                        {({isSubmitting, dirty, isValid})=>(
                            <Form className='ui form'>
                                <FormInput placeholder='displayName' name='displayName'/>
                                <FormInput placeholder='Your Age' type='number' name='bornAt'/>
                                <FormPlaces placeholder='Where do you Live?' name='liveAt' />
                                <FormArea placeholder='Your Bio'  name='bio' rows={3}/>
                                <FormSelect multiple  name="interests"   options={categoryData} placeholder="Your Interests"/>
                                <Button 
                                    content='Update Profile'
                                    size='large'
                                    loading={isSubmitting}
                                    disabled={!isValid || isSubmitting || !dirty}
                                    positive
                                    floated='right'
                                />
                            </Form> 
                        )}

                    </Formik>
            </Segment>
        </div>
    )
}
