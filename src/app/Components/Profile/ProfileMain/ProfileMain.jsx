import React, { useState } from 'react'
import { Tab } from 'semantic-ui-react';
import ProfileContent from '../ProfileContent/ProfileContent'
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import './StyleProfile.css'

export default function ProfileHeader({isCurrentUser}) {
    const [, setActiveTab] = useState(0)
    const panes = [
      { menuItem: "Profile ", render: () =><ProfileContent isCurrentUser={isCurrentUser} />},
      { menuItem:  "Profile Settings" , render: () =>isCurrentUser ? <ProfileSettings isCurrent={isCurrentUser} />: null},
      
    ];
    const panes2 = [
        { menuItem: "Profile ", render: () =><ProfileContent isCurrentUser={isCurrentUser} />},
      
      ];
  
    return (
        <div className='tab_main'>
            <div className='tab'>
                <Tab
                className='tabs'
                menu={{ fluid: false, vertical: false }}
                menuPosition="right"
                panes={isCurrentUser ?panes : panes2}
                onTabChange={(e,data)=>setActiveTab(data.activeIndex)}
                // activeIndex={1}
                />
            </div>
        </div>
       
    )
}
