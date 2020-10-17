import React from 'react'
import { Header, Image, } from 'semantic-ui-react'
import './StyleMenu.css'

export default function MenuSignedIn() {
    return (
        <div className='sign_in'>     
            <img src='/assets/user.png' alt=' ' />
            <p>Mohamed Youssef</p>
        </div>
    )
}
