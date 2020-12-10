import React from 'react'

import ChatHeader from './ChatHeader/ChatHeader'
import Message from './Message/Message'
import MessageSender from './MessageSender/MessageSender'
import './StyleChat.css'


export default function CommunityChat() {

    return (
        <div className='CommunityChat'>
          <ChatHeader />
          <div className='message_main'>
              <Message />
              <Message />
          </div>
          <MessageSender />
        </div>
    )
}
