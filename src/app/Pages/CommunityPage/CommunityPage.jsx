import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CommunitySidebar from '../../Components/CommunitySidebar/CommunitySidebar'

import './styleCommunityPage.css'

export default function CommunityPage({history}) {
    const { currentUser } = useSelector(state => state.auth)

    useEffect(()=>{
        if(!currentUser){
            history.push('/')
        }
    },[history, currentUser])
    return (
        <div className='community'>
            <CommunitySidebar />
        </div>
    )
}
