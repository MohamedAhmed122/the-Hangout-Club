import React from 'react'
import { Icon } from 'semantic-ui-react'

import './stylechatHeader.css'
import UseGetChannelNames from '../../../Hooks/UseGetChannelName'


export default function ChatHeader({message , channelName}) {

    UseGetChannelNames()
    
    return (
        <div className='chatH'>
            <div className='chatHeader'>
                <div>
                    <p className='channel_name'>{channelName.name}</p>
                    <p className='timeStamp'>
                        Last Message at  {new Date (message[message.length -1]?.timestamp?.toDate()).toUTCString()}
                        </p>
                </div>
                <Icon className='icon' name='ellipsis horizontal' size='big' />
            </div>

        </div>
    )
}
