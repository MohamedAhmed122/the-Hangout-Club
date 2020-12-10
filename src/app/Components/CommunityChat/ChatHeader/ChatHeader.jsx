import React from 'react'
import { Icon } from 'semantic-ui-react'
import './stylechatHeader.css'

export default function ChatHeader() {
    return (
        <div className='chatH'>
            <div className='chatHeader'>
                <div>
                    <p className='channel_name'>Channel Name</p>
                    <p className='timeStamp'>Last Seen at 2020.12.17</p>
                </div>
                <Icon className='icon' name='ellipsis horizontal' size='big' />
            </div>

        </div>
    )
}
