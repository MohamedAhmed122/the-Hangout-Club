import React, { useEffect, useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { db } from '../../../firebase/firebase.config'
import './stylechatHeader.css'

export default function ChatHeader({message , channelName}) {

    const [channel, setChannel] = useState('')

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
                    <p className='timeStamp'>
                        Last Message at  {new Date (message[message.length -1]?.timestamp?.toDate()).toUTCString()}
                        </p>
                </div>
                <Icon className='icon' name='ellipsis horizontal' size='big' />
            </div>

        </div>
    )
}
