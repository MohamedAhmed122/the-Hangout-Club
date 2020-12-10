import React from 'react'
import ChatHeader from './ChatHeader/ChatHeader'
import MessageSender from './MessageSender/MessageSender'
import './StyleChat.css'


export default function CommunityChat() {
    return (
        <div className='CommunityChat'>
          <ChatHeader />
          <MessageSender />
        </div>
    )
}
