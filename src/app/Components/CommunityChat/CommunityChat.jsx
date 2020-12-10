import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ChatHeader from './ChatHeader/ChatHeader'
import MessageSender from './MessageSender/MessageSender'
import { db } from '../../firebase/firebase.config'
import './StyleChat.css'


export default function CommunityChat() {
  const {id} = useParams()
  const {currentUser } = useSelector(state => state.auth)
  const [channel, setChannel] = useState([])
  const [massages,setMassages] = useState([])
  const [inputText, setInputText]=useState('')


   // get the all channel names
   useEffect(()=>{
    if (id){
        db.collection('channels').onSnapshot(snapshot => 
            setChannel(
                   snapshot.docs.map(doc =>({
                   id: doc.id,
                   data: doc.data()
               })
           )
       ))
    }
  

     // 
 },[id ])
  console.log(channel);
  
    return (
        <div className='CommunityChat'>
          <ChatHeader />
          <MessageSender />
        </div>
    )
}
