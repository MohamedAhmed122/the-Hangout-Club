import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { db } from '../../firebase/firebase.config'
import CommunityRow from './CommunityRow/CommunityRow'
import './CommunitySidebar.css'

export default function CommunitySidebar() {

    const [channel,setChannel] = useState([])
    const { currentUser } = useSelector(state => state.auth)
    const history = useHistory()


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
        <div className='CommunitySidebar'> 
            <div className='CommunitySidebar_info'>
                <img src={currentUser.photoURL} alt='' />
                <h2>{currentUser.displayName}</h2>
                <Button content='View Profile'></Button>
            </div>
          
            <CommunityRow 
            title="Dashboard" 
            icon='th large' 
            onClick={() =>history.push('/event')} />
            <CommunityRow title="Add New Channel" icon='plus' />
            { channel.map(channel=>(
                <CommunityRow key={channel.id} id={channel.id} title={channel.data.name}  />

            ))}
         
           
        </div>
    )
}
