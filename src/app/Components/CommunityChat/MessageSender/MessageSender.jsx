import React from 'react'
import { Icon } from 'semantic-ui-react'
import './styleMessageSender.css'

export default function MessageSender({input, setInput, handleSubmitForm}) {
    return (
        <div className='messageSender'>
            <Icon className='icon' size='big'  name='photo' />
            <form onSubmit={(e) =>handleSubmitForm(e)} className='form'>
                <input 
                className='messageSender_input' 
                placeholder='Type your message here'
                value={input}
                onChange={(e) => setInput(e.target.value)} />
                <button type='submit'  />
            </form>
            <Icon className='icon' size='big' name='smile' />
            <Icon className='icon' size='big' name='time' />
        </div>
    )
}
