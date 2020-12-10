import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CommunityChat from '../../Components/CommunityChat/CommunityChat'
import CommunitySidebar from '../../Components/CommunitySidebar/CommunitySidebar'


export default function ChannelPage({history}) {
    const { currentUser } = useSelector(state => state.auth)

    useEffect(()=>{
        if(!currentUser){
            history.push('/')
        }
    },[history, currentUser])
    return (
        <div className='community'>
            <CommunitySidebar />
            <CommunityChat />
        </div>
    )
}
