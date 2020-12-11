import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'

import ChatHeader from './ChatHeader/ChatHeader'
import Message from './Message/Message'
import MessageSender from './MessageSender/MessageSender'
import firebase, { db } from '../../firebase/firebase.config'
import './StyleChat.css'
import { useSelector } from 'react-redux'
import cuid from 'cuid'


export default function CommunityChat() {

  const { id } = useParams();
  const [input, setInput ] = useState('')
  const [ message, setMessage ] = useState([])
  const { currentUser } = useSelector(state => state.auth)
  const [channelName, setChannelName] = useState('')


  //  how to add data to firebase
    const handleSubmitForm = (e) =>{
      e.preventDefault()
      db.collection('channels').doc(id).collection('messages').add({
        photoURL : currentUser.photoURL,
        userUid: currentUser.uid,
        displayName : currentUser.displayName,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        messageId: cuid()

      })
      setInput('')
    }

      // this how to get data from  firebase
    useEffect(()=>{
         const unsubscribe = db.collection('channels').doc(id).collection('messages')
          .orderBy('timestamp', 'asc')
          .onSnapshot(snapshot =>{
            setMessage(
              snapshot.docs.map(doc => doc.data())
            )
          })
        return ()=>{
          unsubscribe()
        }
    },[id])
    // console.log(message);



    useEffect(()=>{
        const unsubscribe = db.collection('channels').doc(id)
        .onSnapshot(
            snapshot => 
                (setChannelName(snapshot.data())))
      return () =>{
          unsubscribe()
      }
    },[id])

    return (
        <div className='CommunityChat'>
          <ChatHeader channelName={channelName}  message={message}/>
          <div className='message_main'>
            {
              message.map(msg =>(
                <Message key={msg.messageId || msg.message} message={msg} />
              ))
            }
          </div>
          <MessageSender 
          channelName={channelName} 
          input={input} 
          setInput={setInput}  
          handleSubmitForm={handleSubmitForm}/>
        </div>
    )
}
