import React from 'react'

import SidebarRow from './SidebarRow/SidebarRow'
import './StyleSidebar.css'

export default function Sidebar() {
    return (
        <div>
            <div className='sidebar_header'>
                <img src='https://i.pinimg.com/originals/80/1e/70/801e70a79f7a71b1602969bc31cf99cd.jpg' alt=''/>
                <h3>Mohamed Youssef</h3>
            </div>
             <SidebarRow icon='plus circle' title='Create Event' link='/createEvent' />
             <SidebarRow icon='filter' title='Filter Events'/>
             <SidebarRow icon='user' title='My Profile'/>
             <SidebarRow icon='rocketchat' title='Join Community' />
             <SidebarRow icon='users' title='My Friends'/>
             <SidebarRow icon='cogs' title='settings'/>
             <SidebarRow icon='sign out alternate' title='Sign out'/>
            
        </div>
    )
}
