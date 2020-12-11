import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Icon,  Menu } from 'semantic-ui-react'
import { signOutUser } from '../../../firebase/firebaseService'
import { openModal } from '../../../redux/Modal/ModalAction'
import { toast } from 'react-toastify'

import './ResponsiveHeader.css'

const ResponsiveHeader = () =>{ 

    const {isAuthenticated} = useSelector(state => state.auth)
    const { currentUserProfile } = useSelector(state => state.profile)
    const history = useHistory()
    const dispatch = useDispatch()

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
            if(router === 'community'){
                history.push(`/community`)
            }
            if(router === 'createEvent'){
                history.push(`/createEvent`)
            }
           
        }else return;
    }
    return(
        <div className='responsive_navbar'>
           
            <Menu.Item as={Link} to='/' >
                <Icon  size='big' name='th' />
               <p>Home </p> 
            </Menu.Item>
            <Menu.Item  as={Link} to='/event'>
                <Icon  size='big' name='list alternate outline' />
                <p>Events</p>
            </Menu.Item>
            <Menu.Item onClick={() =>handleRouting('community')}>
                <Icon size='big'  name='rocketchat'  />
                <p>Community</p>
            </Menu.Item>
            <Menu.Item onClick={() =>handleRouting('createEvent')} >
                <Icon  size='big' name='plus circle' />
                <p>Create Event</p>
            </Menu.Item>
            <Menu.Item onClick={() =>handleRouting('profile')}>
                <Icon size='big'  name='user' />
                <p>My Profile</p>
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon  size='big' name='users' />
                <p>My Friends</p>
            </Menu.Item>

            <Menu.Item onClick={() =>handleRouting('setting')}>
                <Icon  size='big' name='cogs' />
                <p>Settings</p>
            </Menu.Item>

            <Menu.Item as={Link} to='/report' >
                <Icon  size='big' name='edit outline'  />
                <p>Report</p>
            </Menu.Item>

            <Menu.Item  onClick={()=>handleSignOut()} >
                <Icon size='big' name='sign out alternate' />
                <p>
                {isAuthenticated?'Sign out': 'Sign In'} 
                </p>
            </Menu.Item>
            <Menu.Item  onClick={()=>handleSignOut()} >
               
                
            </Menu.Item>
        </div>
  )
}
  export default ResponsiveHeader