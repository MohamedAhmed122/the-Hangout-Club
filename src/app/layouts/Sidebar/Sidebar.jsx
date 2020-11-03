import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SidebarRow from './SidebarRow/SidebarRow'
import './StyleSidebar.css'

import { signOutUser } from '../../firebase/firebaseService'
import { useHistory } from 'react-router-dom'
import { openModal } from '../../redux/Modal/ModalAction'
import { toast } from 'react-toastify'
 
export default function Sidebar() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { isAuthenticated, currentUser } = useSelector(state => state.auth)
    // const { currentUserProfile } = useSelector(state => state.profile)

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
                history.push(`/settings/${currentUser.uid}`)
            }
            if(router === 'profile'){
                history.push(`/profile/${currentUser.uid}`)
            }
           
        }else return;
    }
    return (
        <div className='sidebar_main'>
            {isAuthenticated &&
                <div className='sidebar_header'>
                    <img src={'/assets/user.png'}alt=' ' />
                    <h3>{currentUser.displayName ||currentUser.email }</h3>
                </div>
            }
             <SidebarRow icon='plus circle' title='Create Event' link='/createEvent' />
             <SidebarRow icon='filter' title='Filter Events'/>
             <SidebarRow icon='user' title='My Profile' onClick={()=> handleRouting('profile')}/>
             <SidebarRow icon='rocketchat' title='Join Community' link='/community'/>
             <SidebarRow icon='users' title='My Friends'/>
             <SidebarRow icon='cogs' title='settings' onClick={()=> handleRouting('setting')}/>
             <SidebarRow 
             onClick={()=>handleSignOut()} 
             icon='sign out alternate' 
             title={isAuthenticated?'Sign out': 'Sign In'}
             />
            
        </div>
    )
}
