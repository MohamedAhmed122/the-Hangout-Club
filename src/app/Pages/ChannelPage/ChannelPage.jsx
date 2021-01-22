import React from 'react'
import CommunityChat from '../../Components/CommunityChat/CommunityChat'
import CommunitySidebar from '../../Components/CommunitySidebar/CommunitySidebar'


export default function ChannelPage() {
  
    return (
        <div className='community'>
            <CommunitySidebar />
            <CommunityChat />
        </div>
    )
}
 