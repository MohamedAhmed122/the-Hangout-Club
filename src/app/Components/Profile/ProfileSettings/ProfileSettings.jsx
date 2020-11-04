import React, { Fragment } from 'react'
import UploadPhoto from './PhotoSetting/UploadPhoto'
import SettingsInfo from './SettingsForm'

export default function ProfileSettings({isCurrent}) {
    return (
        <div>
            {
                isCurrent && 
                <Fragment>
                    <SettingsInfo /> 
                    <UploadPhoto />
                </Fragment>
            }
           
        </div>
    )
}
