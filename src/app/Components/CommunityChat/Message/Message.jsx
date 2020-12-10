import React from 'react'
import './styleMessage.css'

export default function Message() {
    const image ='https://i.pinimg.com/originals/4d/e7/34/4de734a4f0baef3fd6a74c338c287601.jpg'
    return (
            <div className='chat'>
                <div className={`message_body`}>
                    <img src={image} alt=' ' />
                    <div className={`message_container`}>
                        <p className={`messages`}>
                            hello everyone
                        </p>
                        {/* <p className='time_stamp '>date</p> */}
                    </div>
                </div>
            </div>
        )
}


//className={`message_body ${ currentUser.displayName === message.displayName && 'message_body_receiver'} `}

// ${ currentUser.displayName === message.displayName && 'message_receiver'}