import React  from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'

import { db } from '../../firebase/firebase.config'
import UseGetChannelNames from '../../Hooks/UseGetChannelName'
import CommunityRow from './CommunityRow/CommunityRow'
import './CommunitySidebar.css'

export default function CommunitySidebar() {

    const { currentUser } = useSelector(state => state.auth)

    let channel = UseGetChannelNames()     
   
    //  const refreshPage =()=> window.location.reload();


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
                <Button color='teal' content='View Profile'></Button>
            </div>

            <CommunityRow title="Add New Channel" icon='plus' onClick={handleAddNewChannel} />
            { channel.map(channel=>(
                <CommunityRow 
                // onClick={refreshPage} 
                key={channel.id} 
                id={channel.id}  
                title={channel.data.name}  />

            ))}
        </div> 
    )
}
