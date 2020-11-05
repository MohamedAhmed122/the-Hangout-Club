import React from 'react'
import { useSelector } from 'react-redux'
import './StyleMenu.css'

export default function MenuSignedIn() {
const { currentUserProfile } = useSelector(state => state.profile)
    return (
        <div className='sign_in'>     
            <img src={currentUserProfile.photoURL || '/assets/user.png'}alt=' ' />
            <p>{currentUserProfile.displayName || currentUserProfile.email}</p>
        </div>
    )
}
