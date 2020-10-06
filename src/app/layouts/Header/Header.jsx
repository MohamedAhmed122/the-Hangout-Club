import React from 'react'
import {  Search } from 'semantic-ui-react'
import './StyleHeader.css'

export default function Navbar() {
    return (
     <div className='header nav'>
         <div className='header-right'>
             <img src='https://de-production.imgix.net/colors/browser/de5754.jpg?fit=fill&bg=ffffff&fm=jpeg&auto=format&lossless=1' alt='' />
             <Search placeholder='Search Events'/>
         </div>
         <div className='header-middle'>
             <button className='link current' >
                 Home
            </button>
            <button className='link current' >
                 Events
            </button>
            <button className='link current' >
                 Community
            </button>
         </div>
         <div className='header-left'>
            <img src='https://c.files.bbci.co.uk/6FF7/production/_103536682_gettyimages-973397370.jpg' alt='' />
            <div>Mohamed Youssef</div>
         </div>
     </div>
    )
}
