import React from 'react'
import {  Segment } from 'semantic-ui-react'

import SettingEmail from '../../Components/Settings/SettingEmail'
import SettingGoogle from '../../Components/Settings/SettingGoogle'
import SettingFacebook from '../../Components/Settings/SettingFacebook'
export default function SettingsPage() {
    
    return (
        <div style={{marginTop: '5rem'}}>
            <Segment>
               <SettingEmail />
               <SettingGoogle/>
               <SettingFacebook />
            </Segment>
        </div>
        
    )
}
