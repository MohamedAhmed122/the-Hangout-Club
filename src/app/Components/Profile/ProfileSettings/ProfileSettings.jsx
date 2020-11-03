import React from 'react'
import SettingsInfo from './SettingsInfo'

export default function ProfileSettings({isCurrent}) {
    return (
        <div>
            {
                isCurrent ?  <SettingsInfo /> : null
            }
           
        </div>
    )
}
