import React from 'react'
import { useSelector } from 'react-redux'
import './StyleMenu.css'

export default function MenuSignedIn() {
    const { currentUser } = useSelector(state => state.auth)
    return (
        <div className='sign_in'>     
            <img src={currentUser.photoURl||'/assets/user.png'}alt=' ' />
            <p>{currentUser.email}</p>
        </div>
    )
}
