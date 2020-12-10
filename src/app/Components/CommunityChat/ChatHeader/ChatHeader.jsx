import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { db } from '../../../firebase/firebase.config'
import './stylechatHeader.css'

export default function ChatHeader() {

    const [channelName, setChannelName] = useState('')
    const [channel, setChannel] = useState('')
    const {id } = useParams()
    
    useEffect(()=>{
     
        const unsubscribe = db.collection('channels').doc(id)
        .onSnapshot(
            snapshot => 
                (setChannelName(snapshot.data())))
  
    return () =>{
        unsubscribe()
    }
    },[id])

    useEffect(()=>{
        const unsubscribe = db.collection('channels').onSnapshot(snapshot => 
          setChannel(
                snapshot.docs.map(doc =>({
                id: doc.id,
                data: doc.data()
            })
         )
     ))
     return () =>{
        unsubscribe()
     }
     },[channel])


    return (
        <div className='chatH'>
            <div className='chatHeader'>
                <div>
                    <p className='channel_name'>{channelName.name}</p>
                    <p className='timeStamp'>Last Seen at 2020.12.17</p>
                </div>
                <Icon className='icon' name='ellipsis horizontal' size='big' />
            </div>

        </div>
    )
}
