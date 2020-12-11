import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { db } from '../../firebase/firebase.config'
import CommunityRow from './CommunityRow/CommunityRow'
import './CommunitySidebar.css'

export default function CommunitySidebar() {

    const [channel,setChannel] = useState([])
    const { currentUser } = useSelector(state => state.auth)
    
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


     const refreshPage =()=> window.location.reload();


     const handleAddNewChannel =() =>{
        const newChannel = prompt('Enter a Channel Name');
        if(newChannel){
         db.collection('channels').add({
            name: newChannel
         })
        }
        
    }
   
    return (
        <div className='CommunitySidebar'> 
            <div className='CommunitySidebar_info'>
                <img src={currentUser.photoURL} alt='' />
                <h2>{currentUser.displayName}</h2>
                <Button content='View Profile'></Button>
            </div>

            <CommunityRow title="Add New Channel" icon='plus' onClick={handleAddNewChannel} />
            { channel.map(channel=>(
                <CommunityRow 
                onClick={refreshPage} 
                key={channel.id} 
                id={channel.id}  
                title={channel.data.name}  />

            ))}
        </div> 
    )
}
