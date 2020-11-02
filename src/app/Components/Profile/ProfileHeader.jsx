import React, { useState } from 'react'
import { Tab } from 'semantic-ui-react';
import ProfileSettings from './ProfileSettings/ProfileSettings';
import './StyleProfile.css'

export default function ProfileHeader() {
    const [, setActiveTab] = useState(0)
    const panes = [
      { menuItem: "Profile ", render: () =><h1>Profile</h1> },
      { menuItem: "Profile Settings", render: () =><ProfileSettings />},
      
    ];
  
    return (
        <div className='tab_main'>
            <div className='tab'>
                <Tab
                className='tabs'
                menu={{ fluid: false, vertical: false }}
                menuPosition="right"
                panes={panes}
                onTabChange={(e,data)=>setActiveTab(data.activeIndex)}
                />
            </div>
        </div>
       
    )
}
