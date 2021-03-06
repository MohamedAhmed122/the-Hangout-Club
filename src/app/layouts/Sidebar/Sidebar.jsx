import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SidebarRow from './SidebarRow/SidebarRow'
import './StyleSidebar.css'

import { signOutUser } from '../../firebase/firebaseService'
import { useHistory } from 'react-router-dom'
import { openModal } from '../../redux/Modal/ModalAction'
import { toast } from 'react-toastify'
import { useState } from 'react'
import EventFilters from './EventFilters'
 
export default function Sidebar({predicate, setPredicate, loading}) {
    const history = useHistory()
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector(state => state.auth)
    const { currentUserProfile } = useSelector(state => state.profile)
    const [displayFilter, setDisplayFilter] = useState(false)

    const handleSignOut = async() =>{
        if (isAuthenticated){
            try {
                await signOutUser();
                history.push('/')
            } catch (error) {
                toast.error(`Oops, ${error.message} `)
            }
            
        } else {
            dispatch(openModal({modalType: 'LoginForm'}))
        }
    }
    const handleRouting = (router) =>{
        if(isAuthenticated){
            if(router === 'setting'){
                history.push(`/settings/${currentUserProfile?.id}`)
            }
            if(router === 'profile'){
                history.push(`/profile/${currentUserProfile?.id}`)
            }
            if(router === 'friend'){
                history.push(`/friend/${currentUserProfile?.id}`)
            }
           
        }else return;
    }
    return (
        <div className='sidebar_main'>
            {isAuthenticated &&
                <div className='sidebar_header'>
                    <img src={currentUserProfile?.photoURL ||'/assets/user.png'}alt=' ' />
                    <h3>{currentUserProfile?.displayName ||currentUserProfile?.email }</h3>
                </div>
            }
             <SidebarRow icon='plus circle' title='Create Event' link='/createEvent' />
             <a target="_blank" rel="noopener noreferrer" href='https://covid1-9.web.app'>
                <SidebarRow icon='info circle' title='Covid-19 Information'  />
             </a>
             <SidebarRow icon='filter' title='Filter Events' onClick={()=>setDisplayFilter(!displayFilter)}/>
             {displayFilter && <EventFilters predicate={predicate} setPredicate={setPredicate} loading={loading} />}
             <SidebarRow icon='user' title='My Profile' onClick={()=> handleRouting('profile')}/>
             <SidebarRow icon='rocketchat' title='Join Community' link='/community'/>
             <SidebarRow icon='users' title='My Friends' onClick={()=> handleRouting('friend')}/>
             <SidebarRow icon='cogs' title='settings' onClick={()=> handleRouting('setting')}/>
             <SidebarRow icon='edit outline' title='Report' link='/report'/>
             <SidebarRow 
             onClick={()=>handleSignOut()} 
             icon='sign out alternate' 
             title={isAuthenticated?'Sign out': 'Sign In'}
             />
            
        </div>
    )
}

