import React from 'react'
import { Icon } from 'semantic-ui-react'
import './styleMessageSender.css'

export default function MessageSender() {
    return (
        <div className='messageSender'>
            <Icon className='icon' size='big'  name='photo' />
            <div className='form'>
                <input className='messageSender_input' placeholder='Type your message here' />
                <button type='submit'  />
            </div>
            <Icon className='icon' size='big' name='smile' />
            <Icon className='icon' size='big' name='time' />
        </div>
    )
}
