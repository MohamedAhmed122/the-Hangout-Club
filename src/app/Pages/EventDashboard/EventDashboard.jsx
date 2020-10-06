import React from 'react'
import Sidebar from '../../layouts/Sidebar/Sidebar'

import './StyleEventDashboard.css'

export default function EventDashboard() {
    return (
        <div className='event-dashboard'>
            <div className='sidebar-left'>
              <Sidebar />
            </div>
            <div className='main'>
            <h1>hello I am  the main page</h1>
            </div>
            <div className='sidebar-right'>
                <h1>hello I am sidebar Left</h1>
            </div>
        </div>
    )
}
