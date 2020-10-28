import React from 'react'
import {  Header, Segment } from 'semantic-ui-react'

import SettingEmail from '../../Components/Settings/SettingEmail'
import SettingGoogle from '../../Components/Settings/SettingGoogle'
import SettingFacebook from '../../Components/Settings/SettingFacebook'
import { useSelector } from 'react-redux'
import Loading from '../../Common/Loading/Loading'
import './StyleSettings.css'


export default function SettingsPage() {
    const {currentUser} = useSelector(state => state.auth);
    const {loading} = useSelector(state => state.async)
    if (!currentUser || loading){
        return <Loading />
    }else{
        console.log(currentUser.providerId)
    }

    return (
        <div className='settings_style'>
            <Segment style={{width: '90vw', marginTop: '10rem'}}>
                <Header 
                content='Account Settings' 
                color='teal' 
                size='large' 
                />
                {currentUser.providerId === 'password' &&    <SettingEmail />}
                {currentUser.providerId === 'google.com' &&    <SettingGoogle />}
                {currentUser.providerId === 'facebook.com' &&    <SettingFacebook />}
            </Segment>
        </div>
        
    )
}
