import React, { useEffect } from 'react'
import {  Header, Segment } from 'semantic-ui-react'

import SettingEmail from '../../Components/Settings/SettingEmail'
import SettingGoogle from '../../Components/Settings/SettingGoogle'
import SettingFacebook from '../../Components/Settings/SettingFacebook'
import { useSelector } from 'react-redux'
import Loading from '../../Common/Loading/Loading'
import './StyleSettings.css'
import Navbar from '../../layouts/Header/Header'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'




export default function SettingsPage() {
    const {loading} = useSelector(state => state.async)
    const {currentUser} = useSelector(state => state.auth);
    const history = useHistory()

    useEffect(()=>{
        if(!currentUser){
            history.push('/')
        }
    },[history, currentUser])
    
    if (!currentUser || loading){
        return <Loading />
    }else{
        console.log(currentUser.providerId)
    }

    return (
        <>
            <Navbar />
            <div className='settings_style'>
                <Segment style={{width: '90vw', marginTop: '10rem'}}>
                    <Header 
                    style={{marginTop: 20}}
                    content='Account Settings' 
                    color='teal' 
                    size='large' 
                    />
                    {currentUser.providerId === 'password' &&    <SettingEmail />}
                    {currentUser.providerId === 'google.com' &&    <SettingGoogle />}
                    {currentUser.providerId === 'facebook.com' &&    <SettingFacebook />}
                </Segment>
            </div>
            
        </>
        
    )
}
